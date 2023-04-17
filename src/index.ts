import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

import * as express from 'express';
import * as nunjucks from 'nunjucks';
import * as path from 'path';
import showdown from 'showdown';
import { MongoClient } from 'mongodb';

import { AP } from '@activity-kit/types';
import { activityKitPlugin } from '@activity-kit/server-express';
import { MongoDbAdapter } from '@activity-kit/db-mongo';
import { TokenAuthAdapter } from '@activity-kit/auth-token';
import { NodeCryptoAdapter } from '@activity-kit/crypto-node';
import { FtpStorageAdapter } from '@activity-kit/storage-ftp';
import { streamToString, getId } from '@activity-kit/utilities';
import {
  assertIsArray,
  assertIsApActivity,
  assertIsApCollection,
  assertIsApExtendedObject,
  assertIsApType,
  isTypeOf,
  isType,
} from '@activity-kit/types';

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

  const ftpStorageAdapter = new FtpStorageAdapter({
    ...JSON.parse(decodeURIComponent(process.env.AP_FTP_CONFIG)),
    path: '/uploads',
  });
  const mongoClient = new MongoClient(
    process.env.AP_MONGO_CLIENT_URL ?? 'mongodb://127.0.0.1:27017',
  );
  await mongoClient.connect();
  const mongoDb = mongoClient.db(
    process.env.AP_MONGO_DB_NAME ?? 'activitypub2',
  );
  const mongoDbAdapter = new MongoDbAdapter(mongoDb);
  const nodeCryptoAdapter = new NodeCryptoAdapter();
  const tokenAuthAdapter = new TokenAuthAdapter({
    db: mongoDbAdapter,
    crypto: nodeCryptoAdapter,
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

    const result = await tokenAuthAdapter.authenticatePassword(email, password);

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

  // Use the ActivityKit Express plugin.

  app.use(
    activityKitPlugin({
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
        auth: tokenAuthAdapter,
        crypto: nodeCryptoAdapter,
        db: mongoDbAdapter,
        storage: ftpStorageAdapter,
      },

      routes: {},

      plugins: [
        {
          /**
           * Prevent more than a single user from joining.
           */
          async handleCreateUserActor() {
            const existingPerson = await this.core.findOne('entity', {
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
            if (isType<AP.Create>(this.activity, AP.ActivityTypes.CREATE)) {
              assertIsApType<AP.Create>(this.activity, AP.ActivityTypes.CREATE);
              assertIsApExtendedObject(this.activity.object);

              if (
                isType<AP.Note>(
                  this.activity.object,
                  AP.ExtendedObjectTypes.NOTE,
                )
              ) {
                await this.core.insertOrderedItem(
                  getId(await this.core.getStreamByName(this.actor, 'Posts')),
                  getId(this.activity.object),
                );
              } else if (
                isType<AP.Article>(
                  this.activity.object,
                  AP.ExtendedObjectTypes.ARTICLE,
                )
              ) {
                await this.core.insertOrderedItem(
                  getId(await this.core.getStreamByName(this.actor, 'Blog')),
                  getId(this.activity.object),
                );
              }
            }
          },

          /**
           * Add data to display content in home section.
           */
          async getHomePageProps(actor: AP.Actor) {
            const outbox = await this.core.expandCollection(actor.outbox);

            assertIsApCollection(outbox);

            if (
              !('orderedItems' in outbox) ||
              !Array.isArray(outbox.orderedItems)
            ) {
              return {};
            }

            const props = {
              attributedTo: await this.core.findEntityById(
                getId(outbox.attributedTo),
              ),

              followers: await this.core.expandCollection(
                getId(actor.followers),
              ),

              following: await this.core.expandCollection(
                getId(actor.following),
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
                      return await this.core.findEntityById(objectId);
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
                      return await this.core.findEntityById(objectId);
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
            if (
              entity.type === AP.ExtendedObjectTypes.NOTE ||
              entity.type === AP.ExtendedObjectTypes.ARTICLE
            ) {
              try {
                assertIsApExtendedObject(entity);

                const likesId = getId(entity.likes);
                const indexedLikes = await this.core.findEntityById(likesId);
                assertIsApCollection(indexedLikes);
                const likes = await this.core.expandCollection(indexedLikes);

                const repliesId = getId(entity.replies);
                const indexedReplies = await this.core.findEntityById(
                  repliesId,
                );
                assertIsApCollection(indexedReplies);
                const replies = await this.core.expandCollection(
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
                        const reply = await this.core.queryById(item);
                        assertIsApExtendedObject(reply);
                        const replyActorId = getId(reply.attributedTo);
                        const replyActor = await this.core.queryById(
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
                const indexedShares = await this.core.findEntityById(sharesId);
                assertIsApCollection(indexedShares);
                const shares = await this.core.expandCollection(indexedShares);

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
              entity.name === 'Hashtags' &&
              entity.type === AP.CollectionTypes.COLLECTION
            ) {
              assertIsApCollection(entity);

              const expandedCollection = await this.core.expandCollection(
                entity,
              );

              return {
                hashtags: expandedCollection.items,
              };
            } else if (
              entity.name === 'Posts' &&
              entity.type === AP.CollectionTypes.ORDERED_COLLECTION
            ) {
              assertIsApCollection(entity);

              const posts = await this.core.expandCollection(entity);

              return {
                posts,
                attributedTo: await this.core.findEntityById(
                  getId(entity.attributedTo),
                ),
              };
            } else if (
              entity.name === 'Blog' &&
              entity.type === AP.CollectionTypes.ORDERED_COLLECTION
            ) {
              assertIsApCollection(entity);

              const blog = await this.core.expandCollection(entity);

              return {
                blog,
                attributedTo: await this.core.findEntityById(
                  getId(entity.attributedTo),
                ),
              };
            } else if (
              entity.name === 'Outbox' &&
              entity.type === AP.CollectionTypes.ORDERED_COLLECTION
            ) {
              assertIsApCollection(entity);

              const outbox = await this.core.expandCollection(entity);

              if (
                !('orderedItems' in outbox) ||
                !Array.isArray(outbox.orderedItems)
              ) {
                return {};
              }

              const props = {
                attributedTo: await this.core.findEntityById(
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
                        return await this.core.findEntityById(objectId);
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
                        return await this.core.findEntityById(objectId);
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

              const inbox = await this.core.expandCollection(entity);

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
                        actor: await this.core.queryById(getId(item.actor)),
                      };
                    } catch (error) {
                      return item;
                    }
                  }),
                ),
              };
            } else if (
              isType<AP.Hashtag>(entity, AP.ExtendedObjectTypes.HASHTAG)
            ) {
              assertIsApCollection(entity);

              const tagged = await this.core.expandCollection(entity);

              if (
                !('orderedItems' in tagged) ||
                !Array.isArray(tagged.orderedItems)
              ) {
                return {};
              }

              return {
                posts: tagged.orderedItems.filter((item) => {
                  if (item instanceof URL) {
                    return false;
                  }

                  return isTypeOf<AP.ExtendedObject>(
                    item,
                    AP.ExtendedObjectTypes,
                  );
                }),
                people: tagged.orderedItems.filter((item) => {
                  if (item instanceof URL) {
                    return false;
                  }

                  return isType<AP.Person>(item, AP.ActorTypes.PERSON);
                }),
                groups: tagged.orderedItems.filter((item) => {
                  if (item instanceof URL) {
                    return false;
                  }

                  return isType<AP.Group>(item, AP.ActorTypes.GROUP);
                }),
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
