import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

import * as express from 'express';
import * as nunjucks from 'nunjucks';
import * as path from 'path';
import showdown from 'showdown';
import { MongoClient } from 'mongodb';

import { AP } from 'activitypub-core-types';
import { activityPub } from 'activitypub-core-server-express';
import { MongoDbAdapter } from 'activitypub-core-db-mongo';
import { CryptoAuthAdapter } from 'activitypub-core-auth-crypto';
import { NodeCryptoAdapter } from 'activitypub-core-crypto-node';
import { FtpStorageAdapter } from 'activitypub-core-storage-ftp';
import { DeliveryAdapter } from 'activitypub-core-delivery';
import { streamToString } from 'activitypub-core-utilities';
import { getId } from 'activitypub-core-utilities';
import {
  assertIsApCollection,
  assertIsApExtendedObject,
  assertIsApType,
} from 'activitypub-core-types';

// Monkey-patch showdown.
import { JSDOM } from 'jsdom';
(globalThis as any).window = new JSDOM('', {}).window;

// Create an immediately-evoked async function in order to wait for MonogDB to spin up.
(async () => {
  // Use Express for all routes.
  const app = express.default();

  // Static files.
  app.use(express.static(path.resolve(__dirname, '../static')));

  // Sets up Nunjucks views.
  const nunjucksConfig = nunjucks.configure('views', {
    autoescape: true,
  });

  function formatDate(date: Date): string {
    const dateFormatter = new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });

    const [{ value: month }, , { value: day }, , { value: year }] =
      dateFormatter.formatToParts(date);

    return `${year}-${month}-${day}`;
  }

  function formatDateTime(date: Date, forDisplay?: boolean): string {
    const dateFormatter = new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
      timeZone: forDisplay ? 'America/New_York' : 'UTC',
    });

    const [
      { value: month },
      ,
      { value: day },
      ,
      { value: year },
      ,
      { value: hour },
      ,
      { value: minute },
      ,
      { value: second },
    ] = dateFormatter.formatToParts(date);

    if (forDisplay) {
      return `${year}-${month}-${day} ${hour}:${minute}:${second} ET`;
    } else {
      return `${year}-${month}-${day}T${hour}:${minute}:${second}Z`;
    }
  }

  // Sets up Nunjucks filters.
  nunjucksConfig.addFilter('formatDate', (string: string) =>
    formatDate(new Date(string)),
  );

  nunjucksConfig.addFilter('formatDateTime', (string: string) =>
    formatDateTime(new Date(string)),
  );

  nunjucksConfig.addFilter('formatDateTimeForDisplay', (string: string) =>
    formatDateTime(new Date(string), true),
  );

  nunjucksConfig.addFilter('toMarkdown', (string: string) => {
    const converter = new showdown.Converter();
    return converter.makeMarkdown(string);
  });

  // activitypub-core Plugins.

  // FTP Storage adapter plugin.

  const ftpStorageAdapter = new FtpStorageAdapter(
    JSON.parse(decodeURIComponent(process.env.AP_FTP_CONFIG)),
    '/uploads',
  );

  const mongoClient = new MongoClient(
    process.env.AP_MONGO_CLIENT_URL ?? 'mongodb://127.0.0.1:27017',
  );
  await mongoClient.connect();
  const mongoDb = mongoClient.db(process.env.AP_MONGO_DB_NAME ?? 'activitypub');

  const nodeCryptoAdapter = new NodeCryptoAdapter();
  const mongoDbAdapter = new MongoDbAdapter(mongoDb, {
    crypto: nodeCryptoAdapter,
  });
  const cryptoAuthAdapter = new CryptoAuthAdapter({
    db: mongoDbAdapter,
    crypto: nodeCryptoAdapter,
  });
  const defaultDeliveryAdapter = new DeliveryAdapter({
    adapters: {
      db: mongoDbAdapter,
      crypto: nodeCryptoAdapter,
    },
  });

  app.post('/login', async (req, res, next) => {
    const body = JSON.parse(await streamToString(req));
    const email = body.email;
    const password = body.password;

    if (!email) {
      res.send({
        success: false,
        error: 'Email must be provided.',
      });
    }

    if (!password) {
      res.send({
        success: false,
        error: 'Password must be provided.',
      });
    }

    const result = await cryptoAuthAdapter.authenticatePassword(
      email,
      password,
    );

    res.send(
      result
        ? {
            success: true,
            token: result.token,
          }
        : {
            success: false,
            error: 'Invalid email and password combo.',
          },
    );
    res.end();
    next();
  });

  // Use the activitypub-core Express plugin.

  app.use(
    activityPub({
      routes: {
        person: '/profile',
        inbox: '/feed',
        outbox: '/',
        followers: '/followers',
        following: '/following',
        liked: '/liked',
        stream: '/:slug',
        endpoint: '/:slug',
        note: '/note/:year/:month/:day/:guid',
        article: '/article/:slug',
      },
      pages: {
        login: async (): Promise<string> => {
          return nunjucks.render('login.html');
        },
        home: async (homePageProps: {
          actor: AP.Actor;
          shared: AP.Announce[];
          requests: AP.Follow[];
          members: AP.Actor[];
          blocks: AP.Block[];
        }): Promise<string> => {
          return nunjucks.render('home.html', homePageProps);
        },
        entity: async (entityPageProps: {
          entity: AP.Entity;
          actor?: AP.Actor;
          shared: AP.Announce[];
          followersCount: number;
        }): Promise<string> => {
          return nunjucks.render('entity.html', entityPageProps);
        },
      },

      adapters: {
        crypto: nodeCryptoAdapter,
        auth: cryptoAuthAdapter,
        db: mongoDbAdapter,
        delivery: defaultDeliveryAdapter,
        storage: ftpStorageAdapter,
      },

      plugins: [
        {
          async getHomePageProps(actor: AP.Actor) {
            const outbox = await this.adapters.db.expandCollection(
              actor.outbox,
            );

            assertIsApCollection(outbox);

            if (
              !('orderedItems' in outbox) ||
              !Array.isArray(outbox.orderedItems)
            ) {
              return {};
            }

            const props = {
              attributedTo: await this.adapters.db.findEntityById(
                getId(outbox.attributedTo),
              ),
              notes: (
                await Promise.all(
                  outbox.orderedItems.map(async (item) => {
                    try {
                      assertIsApType<AP.Create>(item, AP.ActivityTypes.CREATE);
                      assertIsApType<AP.Note>(
                        item.object,
                        AP.ExtendedObjectTypes.NOTE,
                      );
                      const objectId = getId(item.object);
                      return await this.adapters.db.findEntityById(objectId);
                    } catch (error) {
                      return null;
                    }
                  }),
                )
              ).filter(
                (note: AP.Note | null) => !!note && note.type === 'Note',
              ),

              articles: (
                await Promise.all(
                  outbox.orderedItems.map(async (item) => {
                    try {
                      assertIsApType<AP.Create>(item, AP.ActivityTypes.CREATE);
                      assertIsApType<AP.Article>(
                        item.object,
                        AP.ExtendedObjectTypes.ARTICLE,
                      );
                      const objectId = getId(item.object);
                      return await this.adapters.db.findEntityById(objectId);
                    } catch (error) {
                      return null;
                    }
                  }),
                )
              ).filter(
                (article: AP.Article | null) =>
                  !!article && article.type === 'Article',
              ),
            };

            return {
              feed: [...props.notes, ...props.articles].sort((a, b) => {
                assertIsApExtendedObject(a);
                assertIsApExtendedObject(b);

                return b.published?.valueOf() - a.published?.valueOf();
              }),
              ...props,
            };
          },
          async getEntityPageProps(entity) {
            if (
              entity.name === 'Outbox' &&
              entity.type === AP.CollectionTypes.ORDERED_COLLECTION
            ) {
              assertIsApCollection(entity);

              const outbox = await this.adapters.db.expandCollection(entity);

              if (
                !('orderedItems' in outbox) ||
                !Array.isArray(outbox.orderedItems)
              ) {
                return {};
              }

              const props = {
                attributedTo: await this.adapters.db.findEntityById(
                  getId(outbox.attributedTo),
                ),
                notes: (
                  await Promise.all(
                    outbox.orderedItems.map(async (item) => {
                      try {
                        assertIsApType<AP.Create>(
                          item,
                          AP.ActivityTypes.CREATE,
                        );
                        assertIsApType<AP.Note>(
                          item.object,
                          AP.ExtendedObjectTypes.NOTE,
                        );
                        const objectId = getId(item.object);
                        return await this.adapters.db.findEntityById(objectId);
                      } catch (error) {
                        return null;
                      }
                    }),
                  )
                ).filter(
                  (note: AP.Note | null) => !!note && note.type === 'Note',
                ),

                articles: (
                  await Promise.all(
                    outbox.orderedItems.map(async (item) => {
                      try {
                        assertIsApType<AP.Create>(
                          item,
                          AP.ActivityTypes.CREATE,
                        );
                        assertIsApType<AP.Article>(
                          item.object,
                          AP.ExtendedObjectTypes.ARTICLE,
                        );
                        const objectId = getId(item.object);
                        return await this.adapters.db.findEntityById(objectId);
                      } catch (error) {
                        return null;
                      }
                    }),
                  )
                ).filter(
                  (article: AP.Article | null) =>
                    !!article && article.type === 'Article',
                ),
              };

              return {
                feed: [...props.notes, ...props.articles].sort((a, b) => {
                  assertIsApExtendedObject(a);
                  assertIsApExtendedObject(b);

                  return b.published?.valueOf() - a.published?.valueOf();
                }),
                ...props,
              };
            }
          },
        },
      ],
    }),
  );

  app.listen(process.env.AP_PORT ?? 3000, () => {
    console.log('Running...');
  });
})();
