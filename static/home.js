"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const showdown_1 = __importDefault(require("showdown"));
const string_strip_html_1 = require("string-strip-html");
const hashtagRegexp = /(#(?:[^\x00-\x7F]|\w)+)/g;
const mentionRegexp = /(@(?:[^\x00-\x7F]|\w)+@(?:[^\x00-\x7F]|\w)+\.(?:[^\x00-\x7F]|\w)+)/g;
const extractMentions = (value) => {
    return [...(value.match(mentionRegexp) ?? [])];
};
const extractHashtags = (value) => {
    return [...(value.match(hashtagRegexp) ?? [])];
};
const getMentionActorUrls = async (mentions) => {
    return Object.fromEntries(await Promise.all(mentions.map(async (mention) => {
        const [_, username, domain] = mention.split('@');
        const jrdProfile = await fetch(`/proxy/?resource=https://${domain}/.well-known/webfinger?resource=acct:${username}@${domain}`, {
            headers: {
                Accept: 'application/json',
            },
        }).then((response) => {
            if (response.body) {
                return response.json();
            }
            else {
                return {
                    links: [],
                };
            }
        });
        if (!Array.isArray(jrdProfile?.links)) {
            return [];
        }
        for (const link of jrdProfile.links) {
            if (link.rel === 'self' &&
                link.type === 'application/activity+json' &&
                link.href) {
                return [mention, link.href];
            }
        }
        return [];
    })));
};
const replaceMicrosyntaxWithMarkup = async (value, mentionedActorUrls) => {
    const withHashtagsReplaced = value.replace(hashtagRegexp, (hashtag) => {
        const url = new URL(`/tags/${hashtag.toLowerCase().replace('#', '')}`, window.location.href).toString();
        return `<a href="${url}">${hashtag}</a>`;
    });
    return withHashtagsReplaced.replace(mentionRegexp, (mention) => {
        const url = mentionedActorUrls[mention];
        if (url) {
            return `<a href="${url}">${mention}</a>`;
        }
        else {
            return mention;
        }
    });
};
const editProfileFormElement = window.document.querySelector('form[data-action="edit-profile"]');
editProfileFormElement?.addEventListener('submit', async (event) => {
    event.preventDefault();
    const outboxUrl = editProfileFormElement.getAttribute('action') ?? '';
    const followersUrl = editProfileFormElement.getAttribute('data-followers-url') ?? '';
    const actorId = editProfileFormElement.getAttribute('data-actor-id') ?? '';
    const name = editProfileFormElement?.querySelector('[name="name"]')
        ?.value ?? '';
    const summary = editProfileFormElement?.querySelector('[name="summary"]')?.value ?? '';
    const converter = new showdown_1.default.Converter();
    const htmlSummary = converter.makeHtml(summary);
    const strippedSummary = (0, string_strip_html_1.stripHtml)(htmlSummary).result;
    const mentions = extractMentions(strippedSummary);
    const hashtags = extractHashtags(strippedSummary);
    const mentionedActorUrls = await getMentionActorUrls(mentions);
    const mentionObjects = mentions
        .map((mention) => {
        const url = mentionedActorUrls[mention];
        if (!url) {
            return null;
        }
        return {
            type: 'Mention',
            href: url,
            name: mention,
        };
    })
        .filter((_) => !!_);
    const hashtagObjects = hashtags.map((hashtag) => ({
        type: 'Hashtag',
        name: hashtag,
    }));
    const tags = [...mentionObjects, ...hashtagObjects];
    fetch(outboxUrl, {
        method: 'POST',
        headers: {
            Accept: 'application/activity+json',
        },
        body: JSON.stringify({
            '@context': ['https://www.w3.org/ns/activitystreams'],
            type: 'Update',
            actor: actorId,
            to: ['https://www.w3.org/ns/activitystreams#Public', followersUrl],
            object: {
                id: actorId,
                name,
                summary: await replaceMicrosyntaxWithMarkup(htmlSummary, mentionedActorUrls),
                ...(tags.length
                    ? {
                        tag: tags,
                    }
                    : null),
            },
        }),
    })
        .then((response) => {
        if (response.headers.get('Location')) {
            window.location.reload();
        }
    })
        .catch((error) => {
        console.log(error);
    });
});
const uploadIconFormElement = window.document.querySelector('form[data-action="upload-icon"]');
uploadIconFormElement?.addEventListener('submit', (event) => {
    event.preventDefault();
    const outboxUrl = uploadIconFormElement.getAttribute('action') ?? '';
    const uploadMediaEndpointUrl = uploadIconFormElement.getAttribute('data-upload-media-endpoint-url') ?? '';
    const followersUrl = uploadIconFormElement.getAttribute('data-followers-url') ?? '';
    const actorId = uploadIconFormElement.getAttribute('data-actor-id') ?? '';
    const formData = new FormData(uploadIconFormElement);
    formData.set('object', JSON.stringify({ type: 'Image' }));
    fetch(uploadMediaEndpointUrl, {
        method: 'POST',
        headers: {
            Accept: 'application/activity+json',
        },
        body: formData,
    })
        .then((response) => {
        const createActivityUrl = response.headers.get('Location');
        if (createActivityUrl) {
            fetch(`/proxy?resource=${createActivityUrl}`)
                .then((response) => {
                return response.json();
            })
                .then(({ object: icon }) => {
                fetch(outboxUrl, {
                    method: 'POST',
                    headers: {
                        Accept: 'application/activity+json',
                    },
                    body: JSON.stringify({
                        '@context': ['https://www.w3.org/ns/activitystreams'],
                        type: 'Update',
                        actor: actorId,
                        to: [
                            'https://www.w3.org/ns/activitystreams#Public',
                            followersUrl,
                        ],
                        object: {
                            id: actorId,
                            icon,
                        },
                    }),
                })
                    .then((response) => {
                    if (response.headers.get('Location')) {
                        window.location.reload();
                    }
                })
                    .catch((error) => {
                    console.log(error);
                });
            })
                .catch((error) => {
                console.log(error);
            });
        }
    })
        .catch((error) => {
        console.log(error);
    });
});
const uploadImageFormElement = window.document.querySelector('form[data-action="upload-image"]');
uploadImageFormElement?.addEventListener('submit', (event) => {
    event.preventDefault();
    const outboxUrl = uploadImageFormElement.getAttribute('action') ?? '';
    const uploadMediaEndpointUrl = uploadImageFormElement.getAttribute('data-upload-media-endpoint-url') ?? '';
    const followersUrl = uploadImageFormElement.getAttribute('data-followers-url') ?? '';
    const actorId = uploadImageFormElement.getAttribute('data-actor-id') ?? '';
    const formData = new FormData(uploadImageFormElement);
    formData.set('object', JSON.stringify({ type: 'Image' }));
    fetch(uploadMediaEndpointUrl, {
        method: 'POST',
        headers: {
            Accept: 'application/activity+json',
        },
        body: formData,
    })
        .then((response) => {
        const createActivityUrl = response.headers.get('Location');
        if (createActivityUrl) {
            fetch(`/proxy/?resource=${createActivityUrl}`)
                .then((response) => {
                return response.json();
            })
                .then(({ object: image }) => {
                fetch(outboxUrl, {
                    method: 'POST',
                    headers: {
                        Accept: 'application/activity+json',
                    },
                    body: JSON.stringify({
                        '@context': ['https://www.w3.org/ns/activitystreams'],
                        type: 'Update',
                        actor: actorId,
                        to: [
                            'https://www.w3.org/ns/activitystreams#Public',
                            followersUrl,
                        ],
                        object: {
                            id: actorId,
                            image,
                        },
                    }),
                })
                    .then((response) => {
                    if (response.headers.get('Location')) {
                        window.location.reload();
                    }
                })
                    .catch((error) => {
                    console.log(error);
                });
            })
                .catch((error) => {
                console.log(error);
            });
        }
    })
        .catch((error) => {
        console.log(error);
    });
});
const followFormElement = window.document.querySelector('form[data-action="follow"]');
followFormElement?.addEventListener('submit', async (event) => {
    event.preventDefault();
    const outboxUrl = followFormElement.getAttribute('action') ?? '';
    const followersUrl = followFormElement.getAttribute('data-followers-url') ?? '';
    const actorId = followFormElement.getAttribute('data-actor-id') ?? '';
    const object = followFormElement.querySelector('[name="object"]')
        ?.value ?? '';
    fetch(outboxUrl, {
        method: 'POST',
        headers: {
            Accept: 'application/activity+json',
        },
        body: JSON.stringify({
            '@context': ['https://www.w3.org/ns/activitystreams'],
            type: 'Follow',
            actor: actorId,
            to: [
                'https://www.w3.org/ns/activitystreams#Public',
                followersUrl,
                object,
            ],
            object,
        }),
    })
        .then((response) => {
        if (response.headers.get('Location')) {
            window.location.reload();
        }
    })
        .catch((error) => {
        console.log(error);
    });
});
const newMicroblogStatusFormElement = window.document.querySelector('[data-action="new-microblog-status"]');
newMicroblogStatusFormElement?.addEventListener('submit', async (event) => {
    event.preventDefault();
    const outboxUrl = newMicroblogStatusFormElement.getAttribute('action') ?? '';
    const followersUrl = newMicroblogStatusFormElement.getAttribute('data-followers-url') ?? '';
    const actorId = newMicroblogStatusFormElement.getAttribute('data-actor-id') ?? '';
    const content = newMicroblogStatusFormElement.querySelector('[name="content"]')?.value ?? '';
    const mentions = extractMentions(content);
    const hashtags = extractHashtags(content);
    const mentionedActorUrls = await getMentionActorUrls(mentions);
    const converter = new showdown_1.default.Converter();
    const htmlContent = converter.makeHtml(await replaceMicrosyntaxWithMarkup(content, mentionedActorUrls));
    const mentionObjects = mentions
        .map((mention) => {
        const url = mentionedActorUrls[mention];
        if (!url) {
            return null;
        }
        return {
            type: 'Mention',
            href: url,
            name: mention,
        };
    })
        .filter((_) => !!_);
    const hashtagObjects = hashtags.map((hashtag) => ({
        type: 'Hashtag',
        name: hashtag,
    }));
    const tags = [...mentionObjects, ...hashtagObjects];
    fetch(outboxUrl, {
        method: 'POST',
        headers: {
            Accept: 'application/activity+json',
        },
        body: JSON.stringify({
            '@context': ['https://www.w3.org/ns/activitystreams'],
            type: 'Create',
            actor: actorId,
            to: [
                'https://www.w3.org/ns/activitystreams#Public',
                followersUrl,
                ...Object.values(mentionedActorUrls),
            ],
            object: {
                type: 'Note',
                content: htmlContent,
                ...(tags.length
                    ? {
                        tag: tags,
                    }
                    : null),
            },
        }),
    })
        .then((response) => {
        if (response.headers.get('Location')) {
            window.location.reload();
        }
    })
        .catch((error) => {
        console.log(error);
    });
});
const updateMicroblogStatusFormElements = Array.from(window.document.querySelectorAll('[data-action="update-microblog-status"]'));
for (const updateMicroblogStatusFormElement of updateMicroblogStatusFormElements) {
    updateMicroblogStatusFormElement?.addEventListener('submit', async (event) => {
        event.preventDefault();
        const outboxUrl = updateMicroblogStatusFormElement.getAttribute('action') ?? '';
        const followersUrl = updateMicroblogStatusFormElement.getAttribute('data-followers-url') ??
            '';
        const actorId = updateMicroblogStatusFormElement.getAttribute('data-actor-id') ?? '';
        const objectId = updateMicroblogStatusFormElement.getAttribute('data-object-id') ?? '';
        const content = updateMicroblogStatusFormElement.querySelector('[name="content"]')?.value ?? '';
        const converter = new showdown_1.default.Converter();
        const htmlContent = converter.makeHtml(content);
        const strippedContent = (0, string_strip_html_1.stripHtml)(htmlContent).result;
        const mentions = extractMentions(strippedContent);
        const hashtags = extractHashtags(strippedContent);
        const mentionedActorUrls = await getMentionActorUrls(mentions);
        const mentionObjects = mentions
            .map((mention) => {
            const url = mentionedActorUrls[mention];
            if (!url) {
                return null;
            }
            return {
                type: 'Mention',
                href: url,
                name: mention,
            };
        })
            .filter((_) => !!_);
        const hashtagObjects = hashtags.map((hashtag) => ({
            type: 'Hashtag',
            name: hashtag,
        }));
        const tags = [...mentionObjects, ...hashtagObjects];
        fetch(outboxUrl, {
            method: 'POST',
            headers: {
                Accept: 'application/activity+json',
            },
            body: JSON.stringify({
                '@context': ['https://www.w3.org/ns/activitystreams'],
                type: 'Update',
                actor: actorId,
                to: [
                    'https://www.w3.org/ns/activitystreams#Public',
                    followersUrl,
                    ...Object.values(mentionedActorUrls),
                ],
                object: {
                    id: objectId,
                    content: await replaceMicrosyntaxWithMarkup(htmlContent, mentionedActorUrls),
                    ...(tags.length
                        ? {
                            tag: tags,
                        }
                        : null),
                },
            }),
        })
            .then((response) => {
            if (response.headers.get('Location')) {
                window.location.reload();
            }
        })
            .catch((error) => {
            console.log(error);
        });
    });
}
const deleteMicroblogStatusFormElements = Array.from(window.document.querySelectorAll('[data-action="delete-microblog-status"]'));
for (const deleteMicroblogStatusFormElement of deleteMicroblogStatusFormElements) {
    deleteMicroblogStatusFormElement.addEventListener('submit', (event) => {
        event.preventDefault();
        const outboxUrl = deleteMicroblogStatusFormElement.getAttribute('action') ?? '';
        const followersUrl = deleteMicroblogStatusFormElement.getAttribute('data-followers-url') ?? '';
        const actorId = deleteMicroblogStatusFormElement.getAttribute('data-actor-id') ?? '';
        const objectId = deleteMicroblogStatusFormElement.getAttribute('data-object-id') ?? '';
        fetch(outboxUrl, {
            method: 'POST',
            headers: {
                Accept: 'application/activity+json',
            },
            body: JSON.stringify({
                '@context': ['https://www.w3.org/ns/activitystreams'],
                type: 'Delete',
                actor: actorId,
                to: ['https://www.w3.org/ns/activitystreams#Public', followersUrl],
                object: objectId,
            }),
        })
            .then((response) => {
            if (response.headers.get('Location')) {
                window.location.reload();
            }
        })
            .catch((error) => {
            console.log(error);
        });
    });
}
const newBlogPostFormElement = window.document.querySelector('[data-action="new-blog-post"]');
newBlogPostFormElement?.addEventListener('submit', (event) => {
    event.preventDefault();
    const outboxUrl = newBlogPostFormElement.getAttribute('action') ?? '';
    const followersUrl = newBlogPostFormElement.getAttribute('data-followers-url') ?? '';
    const actorId = newBlogPostFormElement.getAttribute('data-actor-id') ?? '';
    const summary = newBlogPostFormElement.querySelector('[name="summary"]')
        ?.value ?? '';
    const content = newBlogPostFormElement.querySelector('[name="content"]')?.value ?? '';
    const converter = new showdown_1.default.Converter();
    const htmlContent = converter.makeHtml(content);
    fetch(outboxUrl, {
        method: 'POST',
        headers: {
            Accept: 'application/activity+json',
        },
        body: JSON.stringify({
            '@context': ['https://www.w3.org/ns/activitystreams'],
            type: 'Create',
            actor: actorId,
            to: ['https://www.w3.org/ns/activitystreams#Public', followersUrl],
            object: {
                type: 'Article',
                summary,
                content: htmlContent,
                source: {
                    content,
                    mediaType: 'text/markdown',
                },
            },
        }),
    })
        .then((response) => {
        if (response.headers.get('Location')) {
            window.location.reload();
        }
    })
        .catch((error) => {
        console.log(error);
    });
});
const updateBlogPostFormElements = Array.from(window.document.querySelectorAll('[data-action="update-blog-post"]'));
for (const updateBlogPostFormElement of updateBlogPostFormElements) {
    updateBlogPostFormElement.addEventListener('submit', (event) => {
        event.preventDefault();
        const outboxUrl = updateBlogPostFormElement.getAttribute('action') ?? '';
        const followersUrl = updateBlogPostFormElement.getAttribute('data-followers-url') ?? '';
        const actorId = updateBlogPostFormElement.getAttribute('data-actor-id') ?? '';
        const objectId = updateBlogPostFormElement.getAttribute('data-object-id') ?? '';
        const summary = updateBlogPostFormElement.querySelector('[name="summary"]')?.value ?? '';
        const content = updateBlogPostFormElement.querySelector('[name="content"]')?.value ?? '';
        const converter = new showdown_1.default.Converter();
        const htmlContent = converter.makeHtml(content);
        fetch(outboxUrl, {
            method: 'POST',
            headers: {
                Accept: 'application/activity+json',
            },
            body: JSON.stringify({
                '@context': ['https://www.w3.org/ns/activitystreams'],
                type: 'Update',
                actor: actorId,
                to: ['https://www.w3.org/ns/activitystreams#Public', followersUrl],
                object: {
                    id: objectId,
                    summary,
                    content: htmlContent,
                },
            }),
        })
            .then((response) => {
            if (response.headers.get('Location')) {
                window.location.reload();
            }
        })
            .catch((error) => {
            console.log(error);
        });
    });
}
const deleteBlogPostFormElements = Array.from(window.document.querySelectorAll('[data-action="delete-blog-post"]'));
for (const deleteBlogPostFormElement of deleteBlogPostFormElements) {
    deleteBlogPostFormElement.addEventListener('submit', (event) => {
        event.preventDefault();
        const outboxUrl = deleteBlogPostFormElement.getAttribute('action') ?? '';
        const followersUrl = deleteBlogPostFormElement.getAttribute('data-followers-url') ?? '';
        const actorId = deleteBlogPostFormElement.getAttribute('data-actor-id') ?? '';
        const objectId = deleteBlogPostFormElement.getAttribute('data-object-id') ?? '';
        fetch(outboxUrl, {
            method: 'POST',
            headers: {
                Accept: 'application/activity+json',
            },
            body: JSON.stringify({
                '@context': ['https://www.w3.org/ns/activitystreams'],
                type: 'Delete',
                actor: actorId,
                to: ['https://www.w3.org/ns/activitystreams#Public', followersUrl],
                object: objectId,
            }),
        })
            .then((response) => {
            if (response.headers.get('Location')) {
                window.location.reload();
            }
        })
            .catch((error) => {
            console.log(error);
        });
    });
}
const likeFormElements = Array.from(window.document.querySelectorAll('[data-action="like"]'));
for (const likeFormElement of likeFormElements) {
    likeFormElement.addEventListener('submit', (event) => {
        event.preventDefault();
        const outboxUrl = likeFormElement.getAttribute('action') ?? '';
        const followersUrl = likeFormElement.getAttribute('data-followers-url') ?? '';
        const objectActorId = likeFormElement.getAttribute('data-object-actor-id') ?? '';
        const actorId = likeFormElement.getAttribute('data-actor-id') ?? '';
        const objectId = likeFormElement.getAttribute('data-object-id') ?? '';
        fetch(outboxUrl, {
            method: 'POST',
            headers: {
                Accept: 'application/activity+json',
            },
            body: JSON.stringify({
                '@context': ['https://www.w3.org/ns/activitystreams'],
                type: 'Like',
                actor: actorId,
                to: [
                    'https://www.w3.org/ns/activitystreams#Public',
                    followersUrl,
                    objectActorId,
                ],
                object: objectId,
            }),
        })
            .then((response) => {
            if (response.headers.get('Location')) {
                window.location.reload();
            }
        })
            .catch((error) => {
            console.log(error);
        });
    });
}
//# sourceMappingURL=home.js.map