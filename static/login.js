(()=>{const e=window.document.querySelector("form[data-action='signup']");e?.addEventListener("submit",(o=>{o.preventDefault();const n=e.querySelector('[name="username"]')?.value??"",t=e.querySelector('[name="email"]')?.value??"",a=e.querySelector('[name="password"]')?.value??"";fetch("/user",{method:"POST",headers:{Accept:"application/activity+json"},body:JSON.stringify({type:"Person",email:t,password:a,preferredUsername:n})}).then((e=>e.json())).then((e=>{e&&e.token&&(window.document.cookie=`__session=${e.token}`,window.location.href="/home")}))}));const o=window.document.querySelector("form[data-action='login']");o?.addEventListener("submit",(e=>{e.preventDefault();const n=o.querySelector('[name="email"]')?.value??"",t=o.querySelector('[name="password"]')?.value??"";fetch("/login",{method:"POST",body:JSON.stringify({email:n,password:t})}).then((e=>e.json())).then((e=>{e&&e.token&&(window.document.cookie=`__session=${e.token}`,window.location.href="/home")}))}))})();
//# sourceMappingURL=login.js.map
