"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const express = __importStar(require("express"));
const nunjucks = __importStar(require("nunjucks"));
const path = __importStar(require("path"));
const showdown_1 = __importDefault(require("showdown"));
const mongodb_1 = require("mongodb");
const activitypub_core_types_1 = require("activitypub-core-types");
const activitypub_core_server_express_1 = require("activitypub-core-server-express");
const activitypub_core_db_mongo_1 = require("activitypub-core-db-mongo");
const activitypub_core_auth_crypto_1 = require("activitypub-core-auth-crypto");
const activitypub_core_crypto_node_1 = require("activitypub-core-crypto-node");
const activitypub_core_storage_ftp_1 = require("activitypub-core-storage-ftp");
const activitypub_core_delivery_1 = require("activitypub-core-delivery");
const activitypub_core_utilities_1 = require("activitypub-core-utilities");
const activitypub_core_utilities_2 = require("activitypub-core-utilities");
const activitypub_core_types_2 = require("activitypub-core-types");
const jsdom_1 = require("jsdom");
globalThis.window = new jsdom_1.JSDOM('', {}).window;
(async () => {
    const app = express.default();
    app.use(express.static(path.resolve(__dirname, '../static')));
    const nunjucksConfig = nunjucks.configure('views', {
        autoescape: true,
    });
    function formatDate(date) {
        const dateFormatter = new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        });
        const [{ value: month }, , { value: day }, , { value: year }] = dateFormatter.formatToParts(date);
        return `${year}-${month}-${day}`;
    }
    function formatDateTime(date, forDisplay) {
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
        const [{ value: month }, , { value: day }, , { value: year }, , { value: hour }, , { value: minute }, , { value: second },] = dateFormatter.formatToParts(date);
        if (forDisplay) {
            return `${year}-${month}-${day} ${hour}:${minute}:${second} ET`;
        }
        else {
            return `${year}-${month}-${day}T${hour}:${minute}:${second}Z`;
        }
    }
    nunjucksConfig.addFilter('formatDate', (string) => formatDate(new Date(string)));
    nunjucksConfig.addFilter('formatDateTime', (string) => formatDateTime(new Date(string)));
    nunjucksConfig.addFilter('formatDateTimeForDisplay', (string) => formatDateTime(new Date(string), true));
    nunjucksConfig.addFilter('toMarkdown', (string) => {
        if (!string) {
            return '';
        }
        const converter = new showdown_1.default.Converter();
        return converter.makeMarkdown(string);
    });
    nunjucksConfig.addFilter('getDomain', (string) => {
        if (!string) {
            return '';
        }
        return new URL(string).hostname;
    });
    const ftpStorageAdapter = new activitypub_core_storage_ftp_1.FtpStorageAdapter({
        ...JSON.parse(decodeURIComponent(process.env.AP_FTP_CONFIG)),
        path: '/uploads',
    });
    const mongoClient = new mongodb_1.MongoClient(process.env.AP_MONGO_CLIENT_URL ?? 'mongodb://127.0.0.1:27017');
    await mongoClient.connect();
    const mongoDb = mongoClient.db(process.env.AP_MONGO_DB_NAME ?? 'activitypub');
    const nodeCryptoAdapter = new activitypub_core_crypto_node_1.NodeCryptoAdapter();
    const mongoDbAdapter = new activitypub_core_db_mongo_1.MongoDbAdapter(mongoDb, {
        crypto: nodeCryptoAdapter,
    });
    const cryptoAuthAdapter = new activitypub_core_auth_crypto_1.CryptoAuthAdapter({
        db: mongoDbAdapter,
        crypto: nodeCryptoAdapter,
    });
    const defaultDeliveryAdapter = new activitypub_core_delivery_1.DeliveryAdapter({
        adapters: {
            db: mongoDbAdapter,
            crypto: nodeCryptoAdapter,
        },
    });
    app.post('/login', async (req, res, next) => {
        const body = JSON.parse(await (0, activitypub_core_utilities_1.streamToString)(req));
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
        const result = await cryptoAuthAdapter.authenticatePassword(email, password);
        res.send(result
            ? {
                success: true,
                token: result.token,
            }
            : {
                success: false,
                error: 'Invalid email and password combo.',
            });
        res.end();
        next();
    });
    app.use((0, activitypub_core_server_express_1.activityPub)({
        pages: {
            login: async () => {
                return nunjucks.render('login.html');
            },
            home: async (homePageProps) => {
                return nunjucks.render('home.html', homePageProps);
            },
            entity: async (entityPageProps) => {
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
                async handleCreateUserActor() {
                    const existingPerson = await this.adapters.db.findOne('entity', {
                        type: activitypub_core_types_1.AP.ActorTypes.PERSON,
                    });
                    if (existingPerson) {
                        throw new Error('This site is configured for a single user only! Delete the database to start over.');
                    }
                    return this.activity;
                },
                declareUserActorStreams() {
                    return ['Posts', 'Blog'];
                },
                async handleOutboxSideEffect() {
                    const sendNotification = async (object) => {
                        const formBody = new FormData();
                        const bodyJson = {
                            notification: JSON.stringify({
                                alert: {
                                    text: object.content,
                                    targetUrl: object.url,
                                },
                            }),
                            targetSegmentIds: '@ALL',
                            accessToken: process.env.AP_NOTIFICATION_TOKEN ?? '',
                        };
                        for (const [key, value] of Object.entries(bodyJson)) {
                            formBody.append(key, value);
                        }
                        console.log('Send notification.');
                        await fetch('https://management-api.wonderpush.com/v1/deliveries', {
                            method: 'POST',
                            headers: {
                                Accept: 'text/plain',
                                'Content-Type': 'application/x-www-form-urlencoded',
                            },
                            body: formBody,
                        });
                    };
                    if ((0, activitypub_core_utilities_2.isType)(this.activity, activitypub_core_types_1.AP.ActivityTypes.CREATE)) {
                        (0, activitypub_core_types_2.assertIsApType)(this.activity, activitypub_core_types_1.AP.ActivityTypes.CREATE);
                        (0, activitypub_core_types_2.assertIsApExtendedObject)(this.activity.object);
                        if ((0, activitypub_core_utilities_2.isType)(this.activity.object, activitypub_core_types_1.AP.ExtendedObjectTypes.NOTE)) {
                            await this.adapters.db.insertOrderedItem((0, activitypub_core_utilities_2.getId)(await this.adapters.db.getStreamByName(this.actor, 'Posts')), (0, activitypub_core_utilities_2.getId)(this.activity.object));
                            await sendNotification(this.activity.object);
                        }
                        else if ((0, activitypub_core_utilities_2.isType)(this.activity.object, activitypub_core_types_1.AP.ExtendedObjectTypes.ARTICLE)) {
                            await this.adapters.db.insertOrderedItem((0, activitypub_core_utilities_2.getId)(await this.adapters.db.getStreamByName(this.actor, 'Blog')), (0, activitypub_core_utilities_2.getId)(this.activity.object));
                        }
                    }
                },
                async getHomePageProps(actor) {
                    const outbox = await this.adapters.db.expandCollection(actor.outbox);
                    (0, activitypub_core_types_2.assertIsApCollection)(outbox);
                    if (!('orderedItems' in outbox) ||
                        !Array.isArray(outbox.orderedItems)) {
                        return {};
                    }
                    const props = {
                        attributedTo: await this.adapters.db.findEntityById((0, activitypub_core_utilities_2.getId)(outbox.attributedTo)),
                        followers: await this.adapters.db.expandCollection((0, activitypub_core_utilities_2.getId)(actor.followers)),
                        following: await this.adapters.db.expandCollection((0, activitypub_core_utilities_2.getId)(actor.following)),
                        notes: (await Promise.all(outbox.orderedItems.map(async (item) => {
                            try {
                                (0, activitypub_core_types_2.assertIsApType)(item, activitypub_core_types_1.AP.ActivityTypes.CREATE);
                                (0, activitypub_core_types_2.assertIsApType)(item.object, activitypub_core_types_1.AP.ExtendedObjectTypes.NOTE);
                                const objectId = (0, activitypub_core_utilities_2.getId)(item.object);
                                return await this.adapters.db.findEntityById(objectId);
                            }
                            catch (error) {
                                return null;
                            }
                        }))).filter((note) => !!note && note.type === 'Note'),
                        articles: (await Promise.all(outbox.orderedItems.map(async (item) => {
                            try {
                                (0, activitypub_core_types_2.assertIsApType)(item, activitypub_core_types_1.AP.ActivityTypes.CREATE);
                                (0, activitypub_core_types_2.assertIsApType)(item.object, activitypub_core_types_1.AP.ExtendedObjectTypes.ARTICLE);
                                const objectId = (0, activitypub_core_utilities_2.getId)(item.object);
                                return await this.adapters.db.findEntityById(objectId);
                            }
                            catch (error) {
                                return null;
                            }
                        }))).filter((article) => !!article && article.type === 'Article'),
                    };
                    return {
                        feed: [...props.notes, ...props.articles].sort((a, b) => {
                            (0, activitypub_core_types_2.assertIsApExtendedObject)(a);
                            (0, activitypub_core_types_2.assertIsApExtendedObject)(b);
                            return b.published?.valueOf() - a.published?.valueOf();
                        }),
                        ...props,
                    };
                },
                async getEntityPageProps(entity) {
                    if ((0, activitypub_core_utilities_2.isType)(entity, activitypub_core_types_1.AP.ExtendedObjectTypes.HASHTAG)) {
                        (0, activitypub_core_types_2.assertIsApCollection)(entity);
                        const tagged = await this.adapters.db.expandCollection(entity);
                        if (!('orderedItems' in tagged) ||
                            !Array.isArray(tagged.orderedItems)) {
                            return {};
                        }
                        return {
                            posts: tagged.orderedItems.filter((item) => {
                                if (item instanceof URL) {
                                    return false;
                                }
                                return (0, activitypub_core_utilities_1.isTypeOf)(item, activitypub_core_types_1.AP.ExtendedObjectTypes);
                            }),
                            people: tagged.orderedItems.filter((item) => {
                                if (item instanceof URL) {
                                    return false;
                                }
                                return (0, activitypub_core_utilities_2.isType)(item, activitypub_core_types_1.AP.ActorTypes.PERSON);
                            }),
                            groups: tagged.orderedItems.filter((item) => {
                                if (item instanceof URL) {
                                    return false;
                                }
                                return (0, activitypub_core_utilities_2.isType)(item, activitypub_core_types_1.AP.ActorTypes.GROUP);
                            }),
                        };
                    }
                    else if (entity.type === activitypub_core_types_1.AP.ExtendedObjectTypes.NOTE ||
                        entity.type === activitypub_core_types_1.AP.ExtendedObjectTypes.ARTICLE) {
                        try {
                            (0, activitypub_core_types_2.assertIsApExtendedObject)(entity);
                            const likesId = (0, activitypub_core_utilities_2.getId)(entity.likes);
                            const indexedLikes = await this.adapters.db.findEntityById(likesId);
                            (0, activitypub_core_types_2.assertIsApCollection)(indexedLikes);
                            const likes = await this.adapters.db.expandCollection(indexedLikes);
                            const repliesId = (0, activitypub_core_utilities_2.getId)(entity.replies);
                            const indexedReplies = await this.adapters.db.findEntityById(repliesId);
                            (0, activitypub_core_types_2.assertIsApCollection)(indexedReplies);
                            const replies = await this.adapters.db.expandCollection(indexedReplies);
                            (0, activitypub_core_types_2.assertIsApType)(replies, activitypub_core_types_1.AP.CollectionTypes.ORDERED_COLLECTION);
                            (0, activitypub_core_types_2.assertIsArray)(replies.orderedItems);
                            const expandedReplies = await Promise.all(replies.orderedItems.map(async (item) => {
                                if (item instanceof URL) {
                                    try {
                                        const reply = await this.adapters.db.queryById(item);
                                        (0, activitypub_core_types_2.assertIsApExtendedObject)(reply);
                                        const replyActorId = (0, activitypub_core_utilities_2.getId)(reply.attributedTo);
                                        const replyActor = await this.adapters.db.queryById(replyActorId);
                                        reply.attributedTo = replyActor;
                                        return reply;
                                    }
                                    catch (error) {
                                        return item;
                                    }
                                }
                                return item;
                            }));
                            const sharesId = (0, activitypub_core_utilities_2.getId)(entity.shares);
                            const indexedShares = await this.adapters.db.findEntityById(sharesId);
                            (0, activitypub_core_types_2.assertIsApCollection)(indexedShares);
                            const shares = await this.adapters.db.expandCollection(indexedShares);
                            (0, activitypub_core_types_2.assertIsApType)(likes, activitypub_core_types_1.AP.CollectionTypes.ORDERED_COLLECTION);
                            (0, activitypub_core_types_2.assertIsApType)(shares, activitypub_core_types_1.AP.CollectionTypes.ORDERED_COLLECTION);
                            (0, activitypub_core_types_2.assertIsArray)(likes.orderedItems);
                            (0, activitypub_core_types_2.assertIsArray)(shares.orderedItems);
                            const feed = [
                                ...likes.orderedItems,
                                ...replies.orderedItems,
                                ...shares.orderedItems,
                            ].sort((a, b) => {
                                if (typeof a === 'object' &&
                                    typeof b === 'object' &&
                                    'published' in b &&
                                    'published' in a) {
                                    return b.published?.valueOf() - a.published?.valueOf();
                                }
                                else {
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
                        }
                        catch (error) {
                            console.log(error);
                            return {};
                        }
                    }
                    else if (entity.name === 'Hashtags' &&
                        entity.type === activitypub_core_types_1.AP.CollectionTypes.COLLECTION) {
                        (0, activitypub_core_types_2.assertIsApCollection)(entity);
                        const expandedCollection = await this.adapters.db.expandCollection(entity);
                        return {
                            hashtags: expandedCollection.items,
                        };
                    }
                    else if (entity.name === 'Posts' &&
                        entity.type === activitypub_core_types_1.AP.CollectionTypes.ORDERED_COLLECTION) {
                        (0, activitypub_core_types_2.assertIsApCollection)(entity);
                        const posts = await this.adapters.db.expandCollection(entity);
                        return {
                            posts,
                            attributedTo: await this.adapters.db.findEntityById((0, activitypub_core_utilities_2.getId)(entity.attributedTo)),
                        };
                    }
                    else if (entity.name === 'Blog' &&
                        entity.type === activitypub_core_types_1.AP.CollectionTypes.ORDERED_COLLECTION) {
                        (0, activitypub_core_types_2.assertIsApCollection)(entity);
                        const blog = await this.adapters.db.expandCollection(entity);
                        return {
                            blog,
                            attributedTo: await this.adapters.db.findEntityById((0, activitypub_core_utilities_2.getId)(entity.attributedTo)),
                        };
                    }
                    else if (entity.name === 'Outbox' &&
                        entity.type === activitypub_core_types_1.AP.CollectionTypes.ORDERED_COLLECTION) {
                        (0, activitypub_core_types_2.assertIsApCollection)(entity);
                        const outbox = await this.adapters.db.expandCollection(entity);
                        if (!('orderedItems' in outbox) ||
                            !Array.isArray(outbox.orderedItems)) {
                            return {};
                        }
                        const props = {
                            attributedTo: await this.adapters.db.findEntityById((0, activitypub_core_utilities_2.getId)(outbox.attributedTo)),
                            notes: (await Promise.all(outbox.orderedItems.map(async (item) => {
                                try {
                                    (0, activitypub_core_types_2.assertIsApType)(item, activitypub_core_types_1.AP.ActivityTypes.CREATE);
                                    (0, activitypub_core_types_2.assertIsApType)(item.object, activitypub_core_types_1.AP.ExtendedObjectTypes.NOTE);
                                    const objectId = (0, activitypub_core_utilities_2.getId)(item.object);
                                    return await this.adapters.db.findEntityById(objectId);
                                }
                                catch (error) {
                                    return null;
                                }
                            }))).filter((note) => !!note && note.type === 'Note'),
                            articles: (await Promise.all(outbox.orderedItems.map(async (item) => {
                                try {
                                    (0, activitypub_core_types_2.assertIsApType)(item, activitypub_core_types_1.AP.ActivityTypes.CREATE);
                                    (0, activitypub_core_types_2.assertIsApType)(item.object, activitypub_core_types_1.AP.ExtendedObjectTypes.ARTICLE);
                                    const objectId = (0, activitypub_core_utilities_2.getId)(item.object);
                                    return await this.adapters.db.findEntityById(objectId);
                                }
                                catch (error) {
                                    return null;
                                }
                            }))).filter((article) => !!article && article.type === 'Article'),
                        };
                        return {
                            feed: [...props.notes, ...props.articles].sort((a, b) => {
                                (0, activitypub_core_types_2.assertIsApExtendedObject)(a);
                                (0, activitypub_core_types_2.assertIsApExtendedObject)(b);
                                return b.published?.valueOf() - a.published?.valueOf();
                            }),
                            ...props,
                        };
                    }
                    else if (entity.name === 'Inbox' &&
                        entity.type === activitypub_core_types_1.AP.CollectionTypes.ORDERED_COLLECTION) {
                        (0, activitypub_core_types_2.assertIsApCollection)(entity);
                        const inbox = await this.adapters.db.expandCollection(entity);
                        if (!('orderedItems' in inbox) ||
                            !Array.isArray(inbox.orderedItems)) {
                            return {};
                        }
                        return {
                            feed: await Promise.all(inbox.orderedItems.map(async (item) => {
                                try {
                                    (0, activitypub_core_types_2.assertIsApActivity)(item);
                                    return {
                                        ...item,
                                        actor: await this.adapters.db.queryById((0, activitypub_core_utilities_2.getId)(item.actor)),
                                    };
                                }
                                catch (error) {
                                    return item;
                                }
                            })),
                        };
                    }
                },
            },
        ],
    }));
    app.listen(process.env.PORT ?? process.env.AP_PORT ?? 3000, () => {
        console.log('Running...');
    });
})();
//# sourceMappingURL=index.js.map