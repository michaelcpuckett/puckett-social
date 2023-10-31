(() => {
  const commentFormElement = window.document.querySelector('#comment-form');

  if (!commentFormElement) {
    return;
  }

  commentFormElement.addEventListener('submit', (event: Event) => {
    event.preventDefault();
    const contentInputElement =
      commentFormElement.querySelector<HTMLInputElement>(
        'input[name="content"]',
      );
    const actorInputElement =
      commentFormElement.querySelector<HTMLInputElement>('input[name="actor"]');
    const content = contentInputElement?.value;
    const actor = actorInputElement?.value;

    window
      .fetch('/api/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content,
          actor,
        }),
      })
      .then(() => {
        const outputElement = commentFormElement.querySelector('output');

        if (!outputElement) {
          return;
        }

        outputElement.textContent = 'Success!';
      });
  });
})();
