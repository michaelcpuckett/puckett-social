const t=window.document.querySelector('form[data-action="edit-profile"]');t?.addEventListener("submit",(async e=>{e.preventDefault();const o=t.getAttribute("action")??"",a=t.getAttribute("data-followers-url")??"",c=t.getAttribute("data-actor-id")??"",i=t?.querySelector('[name="name"]')?.value??"",r=t?.querySelector('[name="summary"]')?.value??"";fetch(o,{method:"POST",headers:{Accept:"application/activity+json"},body:JSON.stringify({"@context":["https://www.w3.org/ns/activitystreams"],type:"Update",actor:c,to:["https://www.w3.org/ns/activitystreams#Public",a],object:{id:c,name:i,summary:r}})}).then((t=>{t.headers.get("Location")&&window.location.reload()})).catch((t=>{console.log(t)}))}));const e=window.document.querySelector('form[data-action="upload-icon"]');e?.addEventListener("submit",(t=>{t.preventDefault();const o=e.getAttribute("action")??"",a=e.getAttribute("data-upload-media-endpoint-url")??"",c=e.getAttribute("data-followers-url")??"",i=e.getAttribute("data-actor-id")??"",r=new FormData(e);r.set("object",JSON.stringify({type:"Image"})),fetch(a,{method:"POST",headers:{Accept:"application/activity+json"},body:r}).then((t=>{const e=t.headers.get("Location");e&&fetch(`/proxy?resource=${e}`).then((t=>t.json())).then((({object:t})=>{fetch(o,{method:"POST",headers:{Accept:"application/activity+json"},body:JSON.stringify({"@context":["https://www.w3.org/ns/activitystreams"],type:"Update",actor:i,to:["https://www.w3.org/ns/activitystreams#Public",c],object:{id:i,icon:t}})}).then((t=>{t.headers.get("Location")&&window.location.reload()})).catch((t=>{console.log(t)}))})).catch((t=>{console.log(t)}))})).catch((t=>{console.log(t)}))}));const o=window.document.querySelector('form[data-action="upload-image"]');o?.addEventListener("submit",(t=>{t.preventDefault();const e=o.getAttribute("action")??"",a=o.getAttribute("data-upload-media-endpoint-url")??"",c=o.getAttribute("data-followers-url")??"",i=o.getAttribute("data-actor-id")??"",r=new FormData(o);r.set("object",JSON.stringify({type:"Image"})),fetch(a,{method:"POST",headers:{Accept:"application/activity+json"},body:r}).then((t=>{const o=t.headers.get("Location");o&&fetch(`/proxy/?resource=${o}`).then((t=>t.json())).then((({object:t})=>{fetch(e,{method:"POST",headers:{Accept:"application/activity+json"},body:JSON.stringify({"@context":["https://www.w3.org/ns/activitystreams"],type:"Update",actor:i,to:["https://www.w3.org/ns/activitystreams#Public",c],object:{id:i,image:t}})}).then((t=>{t.headers.get("Location")&&window.location.reload()})).catch((t=>{console.log(t)}))})).catch((t=>{console.log(t)}))})).catch((t=>{console.log(t)}))}));const a=window.document.querySelector('form[data-action="follow"]');a?.addEventListener("submit",(async t=>{t.preventDefault();const e=a.getAttribute("action")??"",o=a.getAttribute("data-followers-url")??"",c=a.getAttribute("data-actor-id")??"",i=a.querySelector('[name="object"]')?.value??"";fetch(e,{method:"POST",headers:{Accept:"application/activity+json"},body:JSON.stringify({"@context":["https://www.w3.org/ns/activitystreams"],type:"Follow",actor:c,to:["https://www.w3.org/ns/activitystreams#Public",o,i],object:i})}).then((t=>{t.headers.get("Location")&&window.location.reload()})).catch((t=>{console.log(t)}))}));const c=window.document.querySelector('[data-action="new-microblog-status"]');c?.addEventListener("submit",(async t=>{t.preventDefault();const e=c.getAttribute("action")??"",o=c.getAttribute("data-followers-url")??"",a=c.getAttribute("data-actor-id")??"",i=c.querySelector('[name="content"]')?.value??"";fetch(e,{method:"POST",headers:{Accept:"application/activity+json"},body:JSON.stringify({"@context":["https://www.w3.org/ns/activitystreams"],type:"Create",actor:a,to:["https://www.w3.org/ns/activitystreams#Public",o],object:{type:"Note",content:i}})}).then((t=>{t.headers.get("Location")&&window.location.reload()})).catch((t=>{console.log(t)}))}));const i=Array.from(window.document.querySelectorAll('[data-action="update-microblog-status"]'));for(const t of i)t?.addEventListener("submit",(async e=>{e.preventDefault();const o=t.getAttribute("action")??"",a=t.getAttribute("data-followers-url")??"",c=t.getAttribute("data-actor-id")??"",i=t.getAttribute("data-object-id")??"",r=t.querySelector('[name="content"]')?.value??"";fetch(o,{method:"POST",headers:{Accept:"application/activity+json"},body:JSON.stringify({"@context":["https://www.w3.org/ns/activitystreams"],type:"Update",actor:c,to:["https://www.w3.org/ns/activitystreams#Public",a],object:{id:i,content:r}})}).then((t=>{t.headers.get("Location")&&window.location.reload()})).catch((t=>{console.log(t)}))}));const r=Array.from(window.document.querySelectorAll('[data-action="delete-microblog-status"]'));for(const t of r)t.addEventListener("submit",(e=>{e.preventDefault();const o=t.getAttribute("action")??"",a=t.getAttribute("data-followers-url")??"",c=t.getAttribute("data-actor-id")??"",i=t.getAttribute("data-object-id")??"";fetch(o,{method:"POST",headers:{Accept:"application/activity+json"},body:JSON.stringify({"@context":["https://www.w3.org/ns/activitystreams"],type:"Delete",actor:c,to:["https://www.w3.org/ns/activitystreams#Public",a],object:i})}).then((t=>{t.headers.get("Location")&&window.location.reload()})).catch((t=>{console.log(t)}))}));const n=window.document.querySelector('[data-action="new-blog-post"]');n?.addEventListener("submit",(t=>{t.preventDefault();const e=n.getAttribute("action")??"",o=n.getAttribute("data-followers-url")??"",a=n.getAttribute("data-actor-id")??"",c=n.querySelector('[name="summary"]')?.value??"",i=n.querySelector('[name="content"]')?.value??"";fetch(e,{method:"POST",headers:{Accept:"application/activity+json"},body:JSON.stringify({"@context":["https://www.w3.org/ns/activitystreams"],type:"Create",actor:a,to:["https://www.w3.org/ns/activitystreams#Public",o],object:{type:"Article",summary:c,content:i}})}).then((t=>{t.headers.get("Location")&&window.location.reload()})).catch((t=>{console.log(t)}))}));const s=Array.from(window.document.querySelectorAll('[data-action="update-blog-post"]'));for(const t of s)t.addEventListener("submit",(e=>{e.preventDefault();const o=t.getAttribute("action")??"",a=t.getAttribute("data-followers-url")??"",c=t.getAttribute("data-actor-id")??"",i=t.getAttribute("data-object-id")??"",r=t.querySelector('[name="summary"]')?.value??"",n=t.querySelector('[name="content"]')?.value??"";fetch(o,{method:"POST",headers:{Accept:"application/activity+json"},body:JSON.stringify({"@context":["https://www.w3.org/ns/activitystreams"],type:"Update",actor:c,to:["https://www.w3.org/ns/activitystreams#Public",a],object:{id:i,summary:r,content:n}})}).then((t=>{t.headers.get("Location")&&window.location.reload()})).catch((t=>{console.log(t)}))}));const d=Array.from(window.document.querySelectorAll('[data-action="delete-blog-post"]'));for(const t of d)t.addEventListener("submit",(e=>{e.preventDefault();const o=t.getAttribute("action")??"",a=t.getAttribute("data-followers-url")??"",c=t.getAttribute("data-actor-id")??"",i=t.getAttribute("data-object-id")??"";fetch(o,{method:"POST",headers:{Accept:"application/activity+json"},body:JSON.stringify({"@context":["https://www.w3.org/ns/activitystreams"],type:"Delete",actor:c,to:["https://www.w3.org/ns/activitystreams#Public",a],object:i})}).then((t=>{t.headers.get("Location")&&window.location.reload()})).catch((t=>{console.log(t)}))}));const l=Array.from(window.document.querySelectorAll('[data-action="like"]'));for(const t of l)t.addEventListener("submit",(e=>{e.preventDefault();const o=t.getAttribute("action")??"",a=t.getAttribute("data-followers-url")??"",c=t.getAttribute("data-object-actor-id")??"",i=t.getAttribute("data-actor-id")??"",r=t.getAttribute("data-object-id")??"";fetch(o,{method:"POST",headers:{Accept:"application/activity+json"},body:JSON.stringify({"@context":["https://www.w3.org/ns/activitystreams"],type:"Like",actor:i,to:["https://www.w3.org/ns/activitystreams#Public",a,c],object:r})}).then((t=>{t.headers.get("Location")&&window.location.reload()})).catch((t=>{console.log(t)}))}));
//# sourceMappingURL=home.js.map
