const signupFormElement = window.document.querySelector("form[data-action='signup']");
signupFormElement?.addEventListener("submit", (event) => {
    event.preventDefault();
    const username = signupFormElement.querySelector('[name="username"]')
        ?.value ?? "";
    const email = signupFormElement.querySelector('[name="email"]')
        ?.value ?? "";
    const password = signupFormElement.querySelector('[name="password"]')
        ?.value ?? "";
    fetch("/user", {
        method: "POST",
        headers: {
            Accept: "application/activity+json",
        },
        body: JSON.stringify({
            type: "Person",
            email,
            password,
            preferredUsername: username,
        }),
    })
        .then((response) => response.json())
        .then((result) => {
        if (result && result.token) {
            window.document.cookie = `__session=${result.token}`;
            window.location.href = "/home";
        }
    });
});
const loginFormElement = window.document.querySelector("form[data-action='login']");
loginFormElement?.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = loginFormElement.querySelector('[name="email"]')?.value ??
        "";
    const password = loginFormElement.querySelector('[name="password"]')
        ?.value ?? "";
    fetch("/login", {
        method: "POST",
        body: JSON.stringify({
            email,
            password,
        }),
    })
        .then((response) => response.json())
        .then((result) => {
        if (result && result.token) {
            window.document.cookie = `__session=${result.token}`;
            window.location.href = "/home";
        }
    });
});
//# sourceMappingURL=login.js.map