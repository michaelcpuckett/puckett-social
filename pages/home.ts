import showdown from 'showdown';

const editProfileFormElement = window.document.querySelector(
  'form[data-action="edit-profile"]',
);

editProfileFormElement?.addEventListener('submit', (event) => {
  event.preventDefault();

  const outboxUrl = editProfileFormElement.getAttribute('action') ?? '';
  const followersUrl =
    editProfileFormElement.getAttribute('data-followers-url') ?? '';
  const actorId = editProfileFormElement.getAttribute('data-actor-id') ?? '';

  const name =
    editProfileFormElement?.querySelector<HTMLInputElement>('[name="name"]')
      ?.value ?? '';
  const summary =
    editProfileFormElement?.querySelector<HTMLTextAreaElement>(
      '[name="summary"]',
    )?.value ?? '';

  const converter = new showdown.Converter();
  const htmlSummary = converter.makeHtml(summary);

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
        summary: htmlSummary,
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

const uploadMediaFormElement = window.document.querySelector<HTMLFormElement>(
  'form[data-action="upload-media"]',
);

uploadMediaFormElement?.addEventListener('submit', (event) => {
  event.preventDefault();

  const outboxUrl = uploadMediaFormElement.getAttribute('action') ?? '';
  const endpointUrl =
    uploadMediaFormElement.getAttribute('data-endpoint-url') ?? '';
  const followersUrl =
    uploadMediaFormElement.getAttribute('data-followers-url') ?? '';
  const actorId = uploadMediaFormElement.getAttribute('data-actor-id') ?? '';
  const formData = new FormData(uploadMediaFormElement);
  formData.set('object', JSON.stringify({ type: 'Image' }));
  fetch(endpointUrl, {
    method: 'POST',
    headers: {
      Accept: 'application/activity+json',
    },
    body: formData,
  })
    .then((response) => {
      if (response.headers.get('Location')) {
        const iconId = response.headers.get('Location');

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
              icon: iconId,
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
      }
    })
    .catch((error) => {
      console.log(error);
    });
});

const newMicroblogStatusFormElement = window.document.querySelector(
  '[data-action="new-microblog-status"]',
);

newMicroblogStatusFormElement?.addEventListener('submit', (event) => {
  event.preventDefault();

  const outboxUrl = newMicroblogStatusFormElement.getAttribute('action') ?? '';
  const followersUrl =
    newMicroblogStatusFormElement.getAttribute('data-followers-url') ?? '';
  const actorId =
    newMicroblogStatusFormElement.getAttribute('data-actor-id') ?? '';
  const content =
    newMicroblogStatusFormElement.querySelector<HTMLTextAreaElement>(
      '[name="content"]',
    )?.value ?? '';

  const converter = new showdown.Converter();
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
        type: 'Note',
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

const updateMicroblogStatusFormElement = window.document.querySelector(
  '[data-action="update-microblog-status"]',
);

updateMicroblogStatusFormElement?.addEventListener('submit', (event) => {
  event.preventDefault();

  const outboxUrl =
    updateMicroblogStatusFormElement.getAttribute('action') ?? '';
  const followersUrl =
    updateMicroblogStatusFormElement.getAttribute('data-followers-url') ?? '';
  const actorId =
    updateMicroblogStatusFormElement.getAttribute('data-actor-id') ?? '';
  const objectId =
    updateMicroblogStatusFormElement.getAttribute('data-object-id') ?? '';
  const content =
    updateMicroblogStatusFormElement.querySelector<HTMLTextAreaElement>(
      '[name="content"]',
    )?.value ?? '';

  const converter = new showdown.Converter();
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

const deleteMicroblogStatusFormElement = window.document.querySelector(
  '[data-action="delete-microblog-status"]',
);

deleteMicroblogStatusFormElement?.addEventListener('submit', (event) => {
  event.preventDefault();

  const outboxUrl =
    deleteMicroblogStatusFormElement.getAttribute('action') ?? '';
  const followersUrl =
    deleteMicroblogStatusFormElement.getAttribute('data-followers-url') ?? '';
  const actorId =
    deleteMicroblogStatusFormElement.getAttribute('data-actor-id') ?? '';
  const objectId =
    deleteMicroblogStatusFormElement.getAttribute('data-object-id') ?? '';

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

const newBlogPostFormElement = window.document.querySelector(
  '[data-action="new-blog-post"]',
);

newBlogPostFormElement?.addEventListener('submit', (event) => {
  event.preventDefault();

  const outboxUrl = newBlogPostFormElement.getAttribute('action') ?? '';
  const followersUrl =
    newBlogPostFormElement.getAttribute('data-followers-url') ?? '';
  const actorId = newBlogPostFormElement.getAttribute('data-actor-id') ?? '';
  const summary =
    newBlogPostFormElement.querySelector<HTMLInputElement>('[name="summary"]')
      ?.value ?? '';
  const content =
    newBlogPostFormElement.querySelector<HTMLTextAreaElement>(
      '[name="content"]',
    )?.value ?? '';

  const converter = new showdown.Converter();
  const htmlContent = converter.makeHtml(content);
  const htmlSummary = converter.makeHtml(summary);

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
        summary: htmlSummary,
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

const updateBlogPostFormElement = window.document.querySelector(
  '[data-action="update-blog-post"]',
);

updateBlogPostFormElement?.addEventListener('submit', (event) => {
  event.preventDefault();

  const outboxUrl = updateBlogPostFormElement.getAttribute('action') ?? '';
  const followersUrl =
    updateBlogPostFormElement.getAttribute('data-followers-url') ?? '';
  const actorId = updateBlogPostFormElement.getAttribute('data-actor-id') ?? '';
  const objectId =
    updateBlogPostFormElement.getAttribute('data-object-id') ?? '';
  const summary =
    updateBlogPostFormElement.querySelector<HTMLTextAreaElement>(
      '[name="summary"]',
    )?.value ?? '';
  const content =
    updateBlogPostFormElement.querySelector<HTMLTextAreaElement>(
      '[name="content"]',
    )?.value ?? '';

  const converter = new showdown.Converter();
  const htmlContent = converter.makeHtml(content);
  const htmlSummary = converter.makeHtml(summary);

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
        summary: htmlSummary,
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

const deleteBlogPostFormElement = window.document.querySelector(
  '[data-action="delete-blog-post"]',
);

deleteBlogPostFormElement?.addEventListener('submit', (event) => {
  event.preventDefault();

  const outboxUrl = deleteBlogPostFormElement.getAttribute('action') ?? '';
  const followersUrl =
    deleteBlogPostFormElement.getAttribute('data-followers-url') ?? '';
  const actorId = deleteBlogPostFormElement.getAttribute('data-actor-id') ?? '';
  const objectId =
    deleteBlogPostFormElement.getAttribute('data-object-id') ?? '';

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
