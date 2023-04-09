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
import { getId, isType } from 'activitypub-core-utilities';
import {
  assertIsArray,
  assertIsApActivity,
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

  // files.
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
    if (!string) {
      return '';
    }

    const converter = new showdown.Converter();
    return converter.makeMarkdown(string);
  });

  nunjucksConfig.addFilter('getDomain', (string: string) => {
    if (!string) {
      return '';
    }

    return new URL(string).hostname;
  });

  // activitypub-core Plugins.

  // FTP Storage adapter plugin.

  const ftpStorageAdapter = new FtpStorageAdapter({
    ...JSON.parse(decodeURIComponent(process.env.AP_FTP_CONFIG)),
    path: '/uploads',
  });

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

      routes: {
        person: '/about',
        inbox: '/feed',
        outbox: '/',
        followers: '/followers',
        following: '/following',
        liked: '/liked',
        stream: '/:slug',
        endpoint: '/:slug',
        note: '/posts/:year/:month/:day/:guid',
        article: '/blog/:slug',
        hashtag: '/tags/:slug',
        serverHashtags: '/tags',
      },

      plugins: [
        {
          /**
           * Prevent more than a single user from joining.
           */
          async handleCreateUserActor() {
            const existingPerson = await this.adapters.db.findOne('entity', {
              type: AP.ActorTypes.PERSON,
            });

            if (existingPerson) {
              throw new Error(
                'This site is configured for a single user only! Delete the database to start over.',
              );
            }

            return this.activity;
          },

          /**
           * Set up Posts and Blogs as streams.
           */
          declareUserActorStreams() {
            return ['Posts', 'Blog'];
          },

          /**
           * Add content to streams manually.
           */
          async handleOutboxSideEffect() {
            if (isType(this.activity, AP.ActivityTypes.CREATE)) {
              assertIsApType<AP.Create>(this.activity, AP.ActivityTypes.CREATE);
              assertIsApExtendedObject(this.activity.object);

              if (isType(this.activity.object, AP.ExtendedObjectTypes.NOTE)) {
                await this.adapters.db.insertOrderedItem(
                  getId(
                    await this.adapters.db.getStreamByName(this.actor, 'Posts'),
                  ),
                  getId(this.activity.object),
                );
              } else if (
                isType(this.activity.object, AP.ExtendedObjectTypes.ARTICLE)
              ) {
                await this.adapters.db.insertOrderedItem(
                  getId(
                    await this.adapters.db.getStreamByName(this.actor, 'Blog'),
                  ),
                  getId(this.activity.object),
                );
              }
            }
          },

          /**
           * Add data to display content in home section.
           */
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

          /**
           * Add data to templates manually.
           */
          async getEntityPageProps(entity) {
            if (isType(entity, AP.ExtendedObjectTypes.HASHTAG)) {
              assertIsApCollection(entity);

              const posts = await this.adapters.db.expandCollection(entity);

              if (
                !('orderedItems' in posts) ||
                !Array.isArray(posts.orderedItems)
              ) {
                return {};
              }

              return {
                posts: posts.orderedItems,
              };
            } else if (
              entity.type === AP.ExtendedObjectTypes.NOTE ||
              entity.type === AP.ExtendedObjectTypes.ARTICLE
            ) {
              try {
                assertIsApExtendedObject(entity);

                const likesId = getId(entity.likes);
                const indexedLikes = await this.adapters.db.findEntityById(
                  likesId,
                );
                assertIsApCollection(indexedLikes);
                const likes = await this.adapters.db.expandCollection(
                  indexedLikes,
                );

                const repliesId = getId(entity.replies);
                const indexedReplies = await this.adapters.db.findEntityById(
                  repliesId,
                );
                assertIsApCollection(indexedReplies);
                const replies = await this.adapters.db.expandCollection(
                  indexedReplies,
                );
                assertIsApType<AP.OrderedCollection>(
                  replies,
                  AP.CollectionTypes.ORDERED_COLLECTION,
                );

                assertIsArray(replies.orderedItems);

                const expandedReplies = await Promise.all(
                  replies.orderedItems.map(async (item) => {
                    if (item instanceof URL) {
                      try {
                        const reply = await this.adapters.db.queryById(item);
                        assertIsApExtendedObject(reply);
                        const replyActorId = getId(reply.attributedTo);
                        const replyActor = await this.adapters.db.queryById(
                          replyActorId,
                        );
                        reply.attributedTo = replyActor;
                        return reply;
                      } catch (error) {
                        return item;
                      }
                    }

                    return item;
                  }),
                );

                const sharesId = getId(entity.shares);
                const indexedShares = await this.adapters.db.findEntityById(
                  sharesId,
                );
                assertIsApCollection(indexedShares);
                const shares = await this.adapters.db.expandCollection(
                  indexedShares,
                );

                assertIsApType<AP.OrderedCollection>(
                  likes,
                  AP.CollectionTypes.ORDERED_COLLECTION,
                );
                assertIsApType<AP.OrderedCollection>(
                  shares,
                  AP.CollectionTypes.ORDERED_COLLECTION,
                );

                assertIsArray(likes.orderedItems);
                assertIsArray(shares.orderedItems);

                const feed = [
                  ...likes.orderedItems,
                  ...replies.orderedItems,
                  ...shares.orderedItems,
                ].sort((a, b) => {
                  if (
                    typeof a === 'object' &&
                    typeof b === 'object' &&
                    'published' in b &&
                    'published' in a
                  ) {
                    return b.published?.valueOf() - a.published?.valueOf();
                  } else {
                    return 0;
                  }
                });

                return {
                  feed,
                  likes,
                  replies: {
                    ...replies,
                    orderedItems: expandedReplies,
                  },
                  shares,
                };
              } catch (error) {
                console.log(error);
                return {};
              }
            } else if (
              entity.name === 'Posts' &&
              entity.type === AP.CollectionTypes.ORDERED_COLLECTION
            ) {
              assertIsApCollection(entity);

              const posts = await this.adapters.db.expandCollection(entity);

              return {
                posts,
                attributedTo: await this.adapters.db.findEntityById(
                  getId(entity.attributedTo),
                ),
              };
            } else if (
              entity.name === 'Blog' &&
              entity.type === AP.CollectionTypes.ORDERED_COLLECTION
            ) {
              assertIsApCollection(entity);

              const blog = await this.adapters.db.expandCollection(entity);

              return {
                blog,
                attributedTo: await this.adapters.db.findEntityById(
                  getId(entity.attributedTo),
                ),
              };
            } else if (
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
            } else if (
              entity.name === 'Inbox' &&
              entity.type === AP.CollectionTypes.ORDERED_COLLECTION
            ) {
              assertIsApCollection(entity);

              const inbox = await this.adapters.db.expandCollection(entity);

              if (
                !('orderedItems' in inbox) ||
                !Array.isArray(inbox.orderedItems)
              ) {
                return {};
              }

              return {
                feed: await Promise.all(
                  inbox.orderedItems.map(async (item) => {
                    try {
                      assertIsApActivity(item);

                      return {
                        ...item,
                        actor: await this.adapters.db.queryById(
                          getId(item.actor),
                        ),
                      };
                    } catch (error) {
                      return item;
                    }
                  }),
                ),
              };
            }
          },
        },
      ],
    }),
  );

  app.listen(process.env.PORT ?? process.env.AP_PORT ?? 3000, () => {
    console.log('Running...');
  });
})();
