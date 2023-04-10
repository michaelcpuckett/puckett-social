// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"ic4oY":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "84dfaaa3a159ab16";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"5VnDu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _showdown = require("showdown");
var _showdownDefault = parcelHelpers.interopDefault(_showdown);
var _stringStripHtml = require("string-strip-html");
// Matches the "#" character followed by one or more occurrences of either
// non-ASCII characters or word characters (letters, digits, and underscores).
const hashtagRegexp = /(#(?:[^\x00-\x7F]|\w)+)/g;
const mentionRegexp = /(@(?:[^\x00-\x7F]|\w)+@(?:[^\x00-\x7F]|\w)+\.(?:[^\x00-\x7F]|\w)+)/g;
const extractMentions = (value)=>{
    return [
        ...value.match(mentionRegexp) ?? []
    ];
};
const extractHashtags = (value)=>{
    return [
        ...value.match(hashtagRegexp) ?? []
    ];
};
const getMentionActorUrls = async (mentions)=>{
    return Object.fromEntries(await Promise.all(mentions.map(async (mention)=>{
        const [_, username, domain] = mention.split("@");
        const jrdProfile = await fetch(`/proxy/?resource=https://${domain}/.well-known/webfinger?resource=acct:${username}@${domain}`, {
            headers: {
                Accept: "application/json"
            }
        }).then((response)=>{
            if (response.body) return response.json();
            else return {
                links: []
            };
        });
        if (!Array.isArray(jrdProfile?.links)) return [];
        for (const link of jrdProfile.links){
            if (link.rel === "self" && link.type === "application/activity+json" && link.href) return [
                mention,
                link.href
            ];
        }
        return [];
    })));
};
const replaceMicrosyntaxWithMarkup = async (value, mentionedActorUrls)=>{
    const withHashtagsReplaced = value.replace(hashtagRegexp, (hashtag)=>{
        const url = new URL(`/tags/${hashtag.toLowerCase().replace("#", "")}`, window.location.href).toString();
        return `<a href="${url}">${hashtag}</a>`;
    });
    return withHashtagsReplaced.replace(mentionRegexp, (mention)=>{
        const url = mentionedActorUrls[mention];
        if (url) return `<a href="${url}">${mention}</a>`;
        else return mention;
    });
};
const editProfileFormElement = window.document.querySelector('form[data-action="edit-profile"]');
editProfileFormElement?.addEventListener("submit", async (event)=>{
    event.preventDefault();
    const outboxUrl = editProfileFormElement.getAttribute("action") ?? "";
    const followersUrl = editProfileFormElement.getAttribute("data-followers-url") ?? "";
    const actorId = editProfileFormElement.getAttribute("data-actor-id") ?? "";
    const name = editProfileFormElement?.querySelector('[name="name"]')?.value ?? "";
    const summary = editProfileFormElement?.querySelector('[name="summary"]')?.value ?? "";
    const converter = new (0, _showdownDefault.default).Converter();
    const htmlSummary = converter.makeHtml(summary);
    const strippedSummary = (0, _stringStripHtml.stripHtml)(htmlSummary).result;
    const mentions = extractMentions(strippedSummary);
    const hashtags = extractHashtags(strippedSummary);
    const mentionedActorUrls = await getMentionActorUrls(mentions);
    const mentionObjects = mentions.map((mention)=>{
        const url = mentionedActorUrls[mention];
        if (!url) return null;
        return {
            type: "Mention",
            href: url,
            name: mention
        };
    }).filter((_)=>!!_);
    const hashtagObjects = hashtags.map((hashtag)=>({
            type: "Hashtag",
            name: hashtag
        }));
    const tags = [
        ...mentionObjects,
        ...hashtagObjects
    ];
    fetch(outboxUrl, {
        method: "POST",
        headers: {
            Accept: "application/activity+json"
        },
        body: JSON.stringify({
            "@context": [
                "https://www.w3.org/ns/activitystreams"
            ],
            type: "Update",
            actor: actorId,
            to: [
                "https://www.w3.org/ns/activitystreams#Public",
                followersUrl
            ],
            object: {
                id: actorId,
                name,
                summary: await replaceMicrosyntaxWithMarkup(htmlSummary, mentionedActorUrls),
                ...tags.length ? {
                    tag: tags
                } : null
            }
        })
    }).then((response)=>{
        if (response.headers.get("Location")) window.location.reload();
    }).catch((error)=>{
        console.log(error);
    });
});
const uploadIconFormElement = window.document.querySelector('form[data-action="upload-icon"]');
uploadIconFormElement?.addEventListener("submit", (event)=>{
    event.preventDefault();
    const outboxUrl = uploadIconFormElement.getAttribute("action") ?? "";
    const uploadMediaEndpointUrl = uploadIconFormElement.getAttribute("data-upload-media-endpoint-url") ?? "";
    const followersUrl = uploadIconFormElement.getAttribute("data-followers-url") ?? "";
    const actorId = uploadIconFormElement.getAttribute("data-actor-id") ?? "";
    const formData = new FormData(uploadIconFormElement);
    formData.set("object", JSON.stringify({
        type: "Image"
    }));
    fetch(uploadMediaEndpointUrl, {
        method: "POST",
        headers: {
            Accept: "application/activity+json"
        },
        body: formData
    }).then((response)=>{
        const createActivityUrl = response.headers.get("Location");
        if (createActivityUrl) fetch(`/proxy?resource=${createActivityUrl}`).then((response)=>{
            return response.json();
        }).then(({ object: icon  })=>{
            fetch(outboxUrl, {
                method: "POST",
                headers: {
                    Accept: "application/activity+json"
                },
                body: JSON.stringify({
                    "@context": [
                        "https://www.w3.org/ns/activitystreams"
                    ],
                    type: "Update",
                    actor: actorId,
                    to: [
                        "https://www.w3.org/ns/activitystreams#Public",
                        followersUrl
                    ],
                    object: {
                        id: actorId,
                        icon
                    }
                })
            }).then((response)=>{
                if (response.headers.get("Location")) window.location.reload();
            }).catch((error)=>{
                console.log(error);
            });
        }).catch((error)=>{
            console.log(error);
        });
    }).catch((error)=>{
        console.log(error);
    });
});
const uploadImageFormElement = window.document.querySelector('form[data-action="upload-image"]');
uploadImageFormElement?.addEventListener("submit", (event)=>{
    event.preventDefault();
    const outboxUrl = uploadImageFormElement.getAttribute("action") ?? "";
    const uploadMediaEndpointUrl = uploadImageFormElement.getAttribute("data-upload-media-endpoint-url") ?? "";
    const followersUrl = uploadImageFormElement.getAttribute("data-followers-url") ?? "";
    const actorId = uploadImageFormElement.getAttribute("data-actor-id") ?? "";
    const formData = new FormData(uploadImageFormElement);
    formData.set("object", JSON.stringify({
        type: "Image"
    }));
    fetch(uploadMediaEndpointUrl, {
        method: "POST",
        headers: {
            Accept: "application/activity+json"
        },
        body: formData
    }).then((response)=>{
        const createActivityUrl = response.headers.get("Location");
        if (createActivityUrl) fetch(`/proxy/?resource=${createActivityUrl}`).then((response)=>{
            return response.json();
        }).then(({ object: image  })=>{
            fetch(outboxUrl, {
                method: "POST",
                headers: {
                    Accept: "application/activity+json"
                },
                body: JSON.stringify({
                    "@context": [
                        "https://www.w3.org/ns/activitystreams"
                    ],
                    type: "Update",
                    actor: actorId,
                    to: [
                        "https://www.w3.org/ns/activitystreams#Public",
                        followersUrl
                    ],
                    object: {
                        id: actorId,
                        image
                    }
                })
            }).then((response)=>{
                if (response.headers.get("Location")) window.location.reload();
            }).catch((error)=>{
                console.log(error);
            });
        }).catch((error)=>{
            console.log(error);
        });
    }).catch((error)=>{
        console.log(error);
    });
});
const newMicroblogStatusFormElement = window.document.querySelector('[data-action="new-microblog-status"]');
newMicroblogStatusFormElement?.addEventListener("submit", async (event)=>{
    event.preventDefault();
    const outboxUrl = newMicroblogStatusFormElement.getAttribute("action") ?? "";
    const followersUrl = newMicroblogStatusFormElement.getAttribute("data-followers-url") ?? "";
    const actorId = newMicroblogStatusFormElement.getAttribute("data-actor-id") ?? "";
    const content = newMicroblogStatusFormElement.querySelector('[name="content"]')?.value ?? "";
    const mentions = extractMentions(content);
    const hashtags = extractHashtags(content);
    const mentionedActorUrls = await getMentionActorUrls(mentions);
    const converter = new (0, _showdownDefault.default).Converter();
    const htmlContent = converter.makeHtml(await replaceMicrosyntaxWithMarkup(content, mentionedActorUrls));
    const mentionObjects = mentions.map((mention)=>{
        const url = mentionedActorUrls[mention];
        if (!url) return null;
        return {
            type: "Mention",
            href: url,
            name: mention
        };
    }).filter((_)=>!!_);
    const hashtagObjects = hashtags.map((hashtag)=>({
            type: "Hashtag",
            name: hashtag
        }));
    const tags = [
        ...mentionObjects,
        ...hashtagObjects
    ];
    fetch(outboxUrl, {
        method: "POST",
        headers: {
            Accept: "application/activity+json"
        },
        body: JSON.stringify({
            "@context": [
                "https://www.w3.org/ns/activitystreams"
            ],
            type: "Create",
            actor: actorId,
            to: [
                "https://www.w3.org/ns/activitystreams#Public",
                followersUrl,
                ...Object.values(mentionedActorUrls)
            ],
            object: {
                type: "Note",
                content: htmlContent,
                ...tags.length ? {
                    tag: tags
                } : null
            }
        })
    }).then((response)=>{
        if (response.headers.get("Location")) window.location.reload();
    }).catch((error)=>{
        console.log(error);
    });
});
const updateMicroblogStatusFormElements = [
    ...window.document.querySelectorAll('[data-action="update-microblog-status"]')
];
for (const updateMicroblogStatusFormElement of updateMicroblogStatusFormElements)updateMicroblogStatusFormElement?.addEventListener("submit", async (event)=>{
    event.preventDefault();
    const outboxUrl = updateMicroblogStatusFormElement.getAttribute("action") ?? "";
    const followersUrl = updateMicroblogStatusFormElement.getAttribute("data-followers-url") ?? "";
    const actorId = updateMicroblogStatusFormElement.getAttribute("data-actor-id") ?? "";
    const objectId = updateMicroblogStatusFormElement.getAttribute("data-object-id") ?? "";
    const content = updateMicroblogStatusFormElement.querySelector('[name="content"]')?.value ?? "";
    const converter = new (0, _showdownDefault.default).Converter();
    const htmlContent = converter.makeHtml(content);
    const strippedContent = (0, _stringStripHtml.stripHtml)(htmlContent).result;
    const mentions = extractMentions(strippedContent);
    const hashtags = extractHashtags(strippedContent);
    const mentionedActorUrls = await getMentionActorUrls(mentions);
    const mentionObjects = mentions.map((mention)=>{
        const url = mentionedActorUrls[mention];
        if (!url) return null;
        return {
            type: "Mention",
            href: url,
            name: mention
        };
    }).filter((_)=>!!_);
    const hashtagObjects = hashtags.map((hashtag)=>({
            type: "Hashtag",
            name: hashtag
        }));
    const tags = [
        ...mentionObjects,
        ...hashtagObjects
    ];
    fetch(outboxUrl, {
        method: "POST",
        headers: {
            Accept: "application/activity+json"
        },
        body: JSON.stringify({
            "@context": [
                "https://www.w3.org/ns/activitystreams"
            ],
            type: "Update",
            actor: actorId,
            to: [
                "https://www.w3.org/ns/activitystreams#Public",
                followersUrl,
                ...Object.values(mentionedActorUrls)
            ],
            object: {
                id: objectId,
                content: await replaceMicrosyntaxWithMarkup(htmlContent, mentionedActorUrls),
                ...tags.length ? {
                    tag: tags
                } : null
            }
        })
    }).then((response)=>{
        if (response.headers.get("Location")) window.location.reload();
    }).catch((error)=>{
        console.log(error);
    });
});
const deleteMicroblogStatusFormElements = [
    ...window.document.querySelectorAll('[data-action="delete-microblog-status"]')
];
for (const deleteMicroblogStatusFormElement of deleteMicroblogStatusFormElements)deleteMicroblogStatusFormElement.addEventListener("submit", (event)=>{
    event.preventDefault();
    const outboxUrl = deleteMicroblogStatusFormElement.getAttribute("action") ?? "";
    const followersUrl = deleteMicroblogStatusFormElement.getAttribute("data-followers-url") ?? "";
    const actorId = deleteMicroblogStatusFormElement.getAttribute("data-actor-id") ?? "";
    const objectId = deleteMicroblogStatusFormElement.getAttribute("data-object-id") ?? "";
    fetch(outboxUrl, {
        method: "POST",
        headers: {
            Accept: "application/activity+json"
        },
        body: JSON.stringify({
            "@context": [
                "https://www.w3.org/ns/activitystreams"
            ],
            type: "Delete",
            actor: actorId,
            to: [
                "https://www.w3.org/ns/activitystreams#Public",
                followersUrl
            ],
            object: objectId
        })
    }).then((response)=>{
        if (response.headers.get("Location")) window.location.reload();
    }).catch((error)=>{
        console.log(error);
    });
});
const newBlogPostFormElement = window.document.querySelector('[data-action="new-blog-post"]');
newBlogPostFormElement?.addEventListener("submit", (event)=>{
    event.preventDefault();
    const outboxUrl = newBlogPostFormElement.getAttribute("action") ?? "";
    const followersUrl = newBlogPostFormElement.getAttribute("data-followers-url") ?? "";
    const actorId = newBlogPostFormElement.getAttribute("data-actor-id") ?? "";
    const summary = newBlogPostFormElement.querySelector('[name="summary"]')?.value ?? "";
    const content = newBlogPostFormElement.querySelector('[name="content"]')?.value ?? "";
    const converter = new (0, _showdownDefault.default).Converter();
    const htmlContent = converter.makeHtml(content);
    fetch(outboxUrl, {
        method: "POST",
        headers: {
            Accept: "application/activity+json"
        },
        body: JSON.stringify({
            "@context": [
                "https://www.w3.org/ns/activitystreams"
            ],
            type: "Create",
            actor: actorId,
            to: [
                "https://www.w3.org/ns/activitystreams#Public",
                followersUrl
            ],
            object: {
                type: "Article",
                summary,
                content: htmlContent,
                source: {
                    content,
                    mediaType: "text/markdown"
                }
            }
        })
    }).then((response)=>{
        if (response.headers.get("Location")) window.location.reload();
    }).catch((error)=>{
        console.log(error);
    });
});
const updateBlogPostFormElements = [
    ...window.document.querySelectorAll('[data-action="update-blog-post"]')
];
for (const updateBlogPostFormElement of updateBlogPostFormElements)updateBlogPostFormElement.addEventListener("submit", (event)=>{
    event.preventDefault();
    const outboxUrl = updateBlogPostFormElement.getAttribute("action") ?? "";
    const followersUrl = updateBlogPostFormElement.getAttribute("data-followers-url") ?? "";
    const actorId = updateBlogPostFormElement.getAttribute("data-actor-id") ?? "";
    const objectId = updateBlogPostFormElement.getAttribute("data-object-id") ?? "";
    const summary = updateBlogPostFormElement.querySelector('[name="summary"]')?.value ?? "";
    const content = updateBlogPostFormElement.querySelector('[name="content"]')?.value ?? "";
    const converter = new (0, _showdownDefault.default).Converter();
    const htmlContent = converter.makeHtml(content);
    fetch(outboxUrl, {
        method: "POST",
        headers: {
            Accept: "application/activity+json"
        },
        body: JSON.stringify({
            "@context": [
                "https://www.w3.org/ns/activitystreams"
            ],
            type: "Update",
            actor: actorId,
            to: [
                "https://www.w3.org/ns/activitystreams#Public",
                followersUrl
            ],
            object: {
                id: objectId,
                summary,
                content: htmlContent
            }
        })
    }).then((response)=>{
        if (response.headers.get("Location")) window.location.reload();
    }).catch((error)=>{
        console.log(error);
    });
});
const deleteBlogPostFormElements = [
    ...window.document.querySelectorAll('[data-action="delete-blog-post"]')
];
for (const deleteBlogPostFormElement of deleteBlogPostFormElements)deleteBlogPostFormElement.addEventListener("submit", (event)=>{
    event.preventDefault();
    const outboxUrl = deleteBlogPostFormElement.getAttribute("action") ?? "";
    const followersUrl = deleteBlogPostFormElement.getAttribute("data-followers-url") ?? "";
    const actorId = deleteBlogPostFormElement.getAttribute("data-actor-id") ?? "";
    const objectId = deleteBlogPostFormElement.getAttribute("data-object-id") ?? "";
    fetch(outboxUrl, {
        method: "POST",
        headers: {
            Accept: "application/activity+json"
        },
        body: JSON.stringify({
            "@context": [
                "https://www.w3.org/ns/activitystreams"
            ],
            type: "Delete",
            actor: actorId,
            to: [
                "https://www.w3.org/ns/activitystreams#Public",
                followersUrl
            ],
            object: objectId
        })
    }).then((response)=>{
        if (response.headers.get("Location")) window.location.reload();
    }).catch((error)=>{
        console.log(error);
    });
});
const likeFormElements = [
    ...window.document.querySelectorAll('[data-action="like"]')
];
for (const likeFormElement of likeFormElements)likeFormElement.addEventListener("submit", (event)=>{
    event.preventDefault();
    const outboxUrl = likeFormElement.getAttribute("action") ?? "";
    const followersUrl = likeFormElement.getAttribute("data-followers-url") ?? "";
    const objectActorId = likeFormElement.getAttribute("data-object-actor-url") ?? "";
    const actorId = likeFormElement.getAttribute("data-actor-id") ?? "";
    const objectId = likeFormElement.getAttribute("data-object-id") ?? "";
    fetch(outboxUrl, {
        method: "POST",
        headers: {
            Accept: "application/activity+json"
        },
        body: JSON.stringify({
            "@context": [
                "https://www.w3.org/ns/activitystreams"
            ],
            type: "Like",
            actor: actorId,
            to: [
                "https://www.w3.org/ns/activitystreams#Public",
                followersUrl,
                objectActorId
            ],
            object: objectId
        })
    }).then((response)=>{
        if (response.headers.get("Location")) window.location.reload();
    }).catch((error)=>{
        console.log(error);
    });
});

},{"showdown":"eYddV","string-strip-html":"jDJw2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eYddV":[function(require,module,exports) {
(function() {
    /**
 * Created by Tivie on 13-07-2015.
 */ function getDefaultOpts(simple) {
        "use strict";
        var defaultOptions = {
            omitExtraWLInCodeBlocks: {
                defaultValue: false,
                describe: "Omit the default extra whiteline added to code blocks",
                type: "boolean"
            },
            noHeaderId: {
                defaultValue: false,
                describe: "Turn on/off generated header id",
                type: "boolean"
            },
            prefixHeaderId: {
                defaultValue: false,
                describe: "Add a prefix to the generated header ids. Passing a string will prefix that string to the header id. Setting to true will add a generic 'section-' prefix",
                type: "string"
            },
            rawPrefixHeaderId: {
                defaultValue: false,
                describe: 'Setting this option to true will prevent showdown from modifying the prefix. This might result in malformed IDs (if, for instance, the " char is used in the prefix)',
                type: "boolean"
            },
            ghCompatibleHeaderId: {
                defaultValue: false,
                describe: "Generate header ids compatible with github style (spaces are replaced with dashes, a bunch of non alphanumeric chars are removed)",
                type: "boolean"
            },
            rawHeaderId: {
                defaultValue: false,
                describe: "Remove only spaces, ' and \" from generated header ids (including prefixes), replacing them with dashes (-). WARNING: This might result in malformed ids",
                type: "boolean"
            },
            headerLevelStart: {
                defaultValue: false,
                describe: "The header blocks level start",
                type: "integer"
            },
            parseImgDimensions: {
                defaultValue: false,
                describe: "Turn on/off image dimension parsing",
                type: "boolean"
            },
            simplifiedAutoLink: {
                defaultValue: false,
                describe: "Turn on/off GFM autolink style",
                type: "boolean"
            },
            excludeTrailingPunctuationFromURLs: {
                defaultValue: false,
                describe: "Excludes trailing punctuation from links generated with autoLinking",
                type: "boolean"
            },
            literalMidWordUnderscores: {
                defaultValue: false,
                describe: "Parse midword underscores as literal underscores",
                type: "boolean"
            },
            literalMidWordAsterisks: {
                defaultValue: false,
                describe: "Parse midword asterisks as literal asterisks",
                type: "boolean"
            },
            strikethrough: {
                defaultValue: false,
                describe: "Turn on/off strikethrough support",
                type: "boolean"
            },
            tables: {
                defaultValue: false,
                describe: "Turn on/off tables support",
                type: "boolean"
            },
            tablesHeaderId: {
                defaultValue: false,
                describe: "Add an id to table headers",
                type: "boolean"
            },
            ghCodeBlocks: {
                defaultValue: true,
                describe: "Turn on/off GFM fenced code blocks support",
                type: "boolean"
            },
            tasklists: {
                defaultValue: false,
                describe: "Turn on/off GFM tasklist support",
                type: "boolean"
            },
            smoothLivePreview: {
                defaultValue: false,
                describe: "Prevents weird effects in live previews due to incomplete input",
                type: "boolean"
            },
            smartIndentationFix: {
                defaultValue: false,
                describe: "Tries to smartly fix indentation in es6 strings",
                type: "boolean"
            },
            disableForced4SpacesIndentedSublists: {
                defaultValue: false,
                describe: "Disables the requirement of indenting nested sublists by 4 spaces",
                type: "boolean"
            },
            simpleLineBreaks: {
                defaultValue: false,
                describe: "Parses simple line breaks as <br> (GFM Style)",
                type: "boolean"
            },
            requireSpaceBeforeHeadingText: {
                defaultValue: false,
                describe: "Makes adding a space between `#` and the header text mandatory (GFM Style)",
                type: "boolean"
            },
            ghMentions: {
                defaultValue: false,
                describe: "Enables github @mentions",
                type: "boolean"
            },
            ghMentionsLink: {
                defaultValue: "https://github.com/{u}",
                describe: "Changes the link generated by @mentions. Only applies if ghMentions option is enabled.",
                type: "string"
            },
            encodeEmails: {
                defaultValue: true,
                describe: "Encode e-mail addresses through the use of Character Entities, transforming ASCII e-mail addresses into its equivalent decimal entities",
                type: "boolean"
            },
            openLinksInNewWindow: {
                defaultValue: false,
                describe: "Open all links in new windows",
                type: "boolean"
            },
            backslashEscapesHTMLTags: {
                defaultValue: false,
                describe: "Support for HTML Tag escaping. ex: <div>foo</div>",
                type: "boolean"
            },
            emoji: {
                defaultValue: false,
                describe: "Enable emoji support. Ex: `this is a :smile: emoji`",
                type: "boolean"
            },
            underline: {
                defaultValue: false,
                describe: "Enable support for underline. Syntax is double or triple underscores: `__underline word__`. With this option enabled, underscores no longer parses into `<em>` and `<strong>`",
                type: "boolean"
            },
            ellipsis: {
                defaultValue: true,
                describe: "Replaces three dots with the ellipsis unicode character",
                type: "boolean"
            },
            completeHTMLDocument: {
                defaultValue: false,
                describe: "Outputs a complete html document, including `<html>`, `<head>` and `<body>` tags",
                type: "boolean"
            },
            metadata: {
                defaultValue: false,
                describe: "Enable support for document metadata (defined at the top of the document between `\xab\xab\xab` and `\xbb\xbb\xbb` or between `---` and `---`).",
                type: "boolean"
            },
            splitAdjacentBlockquotes: {
                defaultValue: false,
                describe: "Split adjacent blockquote blocks",
                type: "boolean"
            }
        };
        if (simple === false) return JSON.parse(JSON.stringify(defaultOptions));
        var ret = {};
        for(var opt in defaultOptions)if (defaultOptions.hasOwnProperty(opt)) ret[opt] = defaultOptions[opt].defaultValue;
        return ret;
    }
    function allOptionsOn() {
        "use strict";
        var options = getDefaultOpts(true), ret = {};
        for(var opt in options)if (options.hasOwnProperty(opt)) ret[opt] = true;
        return ret;
    }
    /**
 * Created by Tivie on 06-01-2015.
 */ // Private properties
    var showdown = {}, parsers = {}, extensions = {}, globalOptions = getDefaultOpts(true), setFlavor = "vanilla", flavor = {
        github: {
            omitExtraWLInCodeBlocks: true,
            simplifiedAutoLink: true,
            excludeTrailingPunctuationFromURLs: true,
            literalMidWordUnderscores: true,
            strikethrough: true,
            tables: true,
            tablesHeaderId: true,
            ghCodeBlocks: true,
            tasklists: true,
            disableForced4SpacesIndentedSublists: true,
            simpleLineBreaks: true,
            requireSpaceBeforeHeadingText: true,
            ghCompatibleHeaderId: true,
            ghMentions: true,
            backslashEscapesHTMLTags: true,
            emoji: true,
            splitAdjacentBlockquotes: true
        },
        original: {
            noHeaderId: true,
            ghCodeBlocks: false
        },
        ghost: {
            omitExtraWLInCodeBlocks: true,
            parseImgDimensions: true,
            simplifiedAutoLink: true,
            excludeTrailingPunctuationFromURLs: true,
            literalMidWordUnderscores: true,
            strikethrough: true,
            tables: true,
            tablesHeaderId: true,
            ghCodeBlocks: true,
            tasklists: true,
            smoothLivePreview: true,
            simpleLineBreaks: true,
            requireSpaceBeforeHeadingText: true,
            ghMentions: false,
            encodeEmails: true
        },
        vanilla: getDefaultOpts(true),
        allOn: allOptionsOn()
    };
    /**
 * helper namespace
 * @type {{}}
 */ showdown.helper = {};
    /**
 * TODO LEGACY SUPPORT CODE
 * @type {{}}
 */ showdown.extensions = {};
    /**
 * Set a global option
 * @static
 * @param {string} key
 * @param {*} value
 * @returns {showdown}
 */ showdown.setOption = function(key, value) {
        "use strict";
        globalOptions[key] = value;
        return this;
    };
    /**
 * Get a global option
 * @static
 * @param {string} key
 * @returns {*}
 */ showdown.getOption = function(key) {
        "use strict";
        return globalOptions[key];
    };
    /**
 * Get the global options
 * @static
 * @returns {{}}
 */ showdown.getOptions = function() {
        "use strict";
        return globalOptions;
    };
    /**
 * Reset global options to the default values
 * @static
 */ showdown.resetOptions = function() {
        "use strict";
        globalOptions = getDefaultOpts(true);
    };
    /**
 * Set the flavor showdown should use as default
 * @param {string} name
 */ showdown.setFlavor = function(name) {
        "use strict";
        if (!flavor.hasOwnProperty(name)) throw Error(name + " flavor was not found");
        showdown.resetOptions();
        var preset = flavor[name];
        setFlavor = name;
        for(var option in preset)if (preset.hasOwnProperty(option)) globalOptions[option] = preset[option];
    };
    /**
 * Get the currently set flavor
 * @returns {string}
 */ showdown.getFlavor = function() {
        "use strict";
        return setFlavor;
    };
    /**
 * Get the options of a specified flavor. Returns undefined if the flavor was not found
 * @param {string} name Name of the flavor
 * @returns {{}|undefined}
 */ showdown.getFlavorOptions = function(name) {
        "use strict";
        if (flavor.hasOwnProperty(name)) return flavor[name];
    };
    /**
 * Get the default options
 * @static
 * @param {boolean} [simple=true]
 * @returns {{}}
 */ showdown.getDefaultOptions = function(simple) {
        "use strict";
        return getDefaultOpts(simple);
    };
    /**
 * Get or set a subParser
 *
 * subParser(name)       - Get a registered subParser
 * subParser(name, func) - Register a subParser
 * @static
 * @param {string} name
 * @param {function} [func]
 * @returns {*}
 */ showdown.subParser = function(name, func) {
        "use strict";
        if (showdown.helper.isString(name)) {
            if (typeof func !== "undefined") parsers[name] = func;
            else {
                if (parsers.hasOwnProperty(name)) return parsers[name];
                else throw Error("SubParser named " + name + " not registered!");
            }
        }
    };
    /**
 * Gets or registers an extension
 * @static
 * @param {string} name
 * @param {object|object[]|function=} ext
 * @returns {*}
 */ showdown.extension = function(name, ext) {
        "use strict";
        if (!showdown.helper.isString(name)) throw Error("Extension 'name' must be a string");
        name = showdown.helper.stdExtName(name);
        // Getter
        if (showdown.helper.isUndefined(ext)) {
            if (!extensions.hasOwnProperty(name)) throw Error("Extension named " + name + " is not registered!");
            return extensions[name];
        // Setter
        } else {
            // Expand extension if it's wrapped in a function
            if (typeof ext === "function") ext = ext();
            // Ensure extension is an array
            if (!showdown.helper.isArray(ext)) ext = [
                ext
            ];
            var validExtension = validate(ext, name);
            if (validExtension.valid) extensions[name] = ext;
            else throw Error(validExtension.error);
        }
    };
    /**
 * Gets all extensions registered
 * @returns {{}}
 */ showdown.getAllExtensions = function() {
        "use strict";
        return extensions;
    };
    /**
 * Remove an extension
 * @param {string} name
 */ showdown.removeExtension = function(name) {
        "use strict";
        delete extensions[name];
    };
    /**
 * Removes all extensions
 */ showdown.resetExtensions = function() {
        "use strict";
        extensions = {};
    };
    /**
 * Validate extension
 * @param {array} extension
 * @param {string} name
 * @returns {{valid: boolean, error: string}}
 */ function validate(extension, name) {
        "use strict";
        var errMsg = name ? "Error in " + name + " extension->" : "Error in unnamed extension", ret = {
            valid: true,
            error: ""
        };
        if (!showdown.helper.isArray(extension)) extension = [
            extension
        ];
        for(var i = 0; i < extension.length; ++i){
            var baseMsg = errMsg + " sub-extension " + i + ": ", ext = extension[i];
            if (typeof ext !== "object") {
                ret.valid = false;
                ret.error = baseMsg + "must be an object, but " + typeof ext + " given";
                return ret;
            }
            if (!showdown.helper.isString(ext.type)) {
                ret.valid = false;
                ret.error = baseMsg + 'property "type" must be a string, but ' + typeof ext.type + " given";
                return ret;
            }
            var type = ext.type = ext.type.toLowerCase();
            // normalize extension type
            if (type === "language") type = ext.type = "lang";
            if (type === "html") type = ext.type = "output";
            if (type !== "lang" && type !== "output" && type !== "listener") {
                ret.valid = false;
                ret.error = baseMsg + "type " + type + ' is not recognized. Valid values: "lang/language", "output/html" or "listener"';
                return ret;
            }
            if (type === "listener") {
                if (showdown.helper.isUndefined(ext.listeners)) {
                    ret.valid = false;
                    ret.error = baseMsg + '. Extensions of type "listener" must have a property called "listeners"';
                    return ret;
                }
            } else if (showdown.helper.isUndefined(ext.filter) && showdown.helper.isUndefined(ext.regex)) {
                ret.valid = false;
                ret.error = baseMsg + type + ' extensions must define either a "regex" property or a "filter" method';
                return ret;
            }
            if (ext.listeners) {
                if (typeof ext.listeners !== "object") {
                    ret.valid = false;
                    ret.error = baseMsg + '"listeners" property must be an object but ' + typeof ext.listeners + " given";
                    return ret;
                }
                for(var ln in ext.listeners){
                    if (ext.listeners.hasOwnProperty(ln)) {
                        if (typeof ext.listeners[ln] !== "function") {
                            ret.valid = false;
                            ret.error = baseMsg + '"listeners" property must be an hash of [event name]: [callback]. listeners.' + ln + " must be a function but " + typeof ext.listeners[ln] + " given";
                            return ret;
                        }
                    }
                }
            }
            if (ext.filter) {
                if (typeof ext.filter !== "function") {
                    ret.valid = false;
                    ret.error = baseMsg + '"filter" must be a function, but ' + typeof ext.filter + " given";
                    return ret;
                }
            } else if (ext.regex) {
                if (showdown.helper.isString(ext.regex)) ext.regex = new RegExp(ext.regex, "g");
                if (!(ext.regex instanceof RegExp)) {
                    ret.valid = false;
                    ret.error = baseMsg + '"regex" property must either be a string or a RegExp object, but ' + typeof ext.regex + " given";
                    return ret;
                }
                if (showdown.helper.isUndefined(ext.replace)) {
                    ret.valid = false;
                    ret.error = baseMsg + '"regex" extensions must implement a replace string or function';
                    return ret;
                }
            }
        }
        return ret;
    }
    /**
 * Validate extension
 * @param {object} ext
 * @returns {boolean}
 */ showdown.validateExtension = function(ext) {
        "use strict";
        var validateExtension = validate(ext, null);
        if (!validateExtension.valid) {
            console.warn(validateExtension.error);
            return false;
        }
        return true;
    };
    /**
 * showdownjs helper functions
 */ if (!showdown.hasOwnProperty("helper")) showdown.helper = {};
    /**
 * Check if var is string
 * @static
 * @param {string} a
 * @returns {boolean}
 */ showdown.helper.isString = function(a) {
        "use strict";
        return typeof a === "string" || a instanceof String;
    };
    /**
 * Check if var is a function
 * @static
 * @param {*} a
 * @returns {boolean}
 */ showdown.helper.isFunction = function(a) {
        "use strict";
        var getType = {};
        return a && getType.toString.call(a) === "[object Function]";
    };
    /**
 * isArray helper function
 * @static
 * @param {*} a
 * @returns {boolean}
 */ showdown.helper.isArray = function(a) {
        "use strict";
        return Array.isArray(a);
    };
    /**
 * Check if value is undefined
 * @static
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
 */ showdown.helper.isUndefined = function(value) {
        "use strict";
        return typeof value === "undefined";
    };
    /**
 * ForEach helper function
 * Iterates over Arrays and Objects (own properties only)
 * @static
 * @param {*} obj
 * @param {function} callback Accepts 3 params: 1. value, 2. key, 3. the original array/object
 */ showdown.helper.forEach = function(obj, callback) {
        "use strict";
        // check if obj is defined
        if (showdown.helper.isUndefined(obj)) throw new Error("obj param is required");
        if (showdown.helper.isUndefined(callback)) throw new Error("callback param is required");
        if (!showdown.helper.isFunction(callback)) throw new Error("callback param must be a function/closure");
        if (typeof obj.forEach === "function") obj.forEach(callback);
        else if (showdown.helper.isArray(obj)) for(var i = 0; i < obj.length; i++)callback(obj[i], i, obj);
        else if (typeof obj === "object") {
            for(var prop in obj)if (obj.hasOwnProperty(prop)) callback(obj[prop], prop, obj);
        } else throw new Error("obj does not seem to be an array or an iterable object");
    };
    /**
 * Standardidize extension name
 * @static
 * @param {string} s extension name
 * @returns {string}
 */ showdown.helper.stdExtName = function(s) {
        "use strict";
        return s.replace(/[_?*+\/\\.^-]/g, "").replace(/\s/g, "").toLowerCase();
    };
    function escapeCharactersCallback(wholeMatch, m1) {
        "use strict";
        var charCodeToEscape = m1.charCodeAt(0);
        return "\xa8E" + charCodeToEscape + "E";
    }
    /**
 * Callback used to escape characters when passing through String.replace
 * @static
 * @param {string} wholeMatch
 * @param {string} m1
 * @returns {string}
 */ showdown.helper.escapeCharactersCallback = escapeCharactersCallback;
    /**
 * Escape characters in a string
 * @static
 * @param {string} text
 * @param {string} charsToEscape
 * @param {boolean} afterBackslash
 * @returns {XML|string|void|*}
 */ showdown.helper.escapeCharacters = function(text, charsToEscape, afterBackslash) {
        "use strict";
        // First we have to escape the escape characters so that
        // we can build a character class out of them
        var regexString = "([" + charsToEscape.replace(/([\[\]\\])/g, "\\$1") + "])";
        if (afterBackslash) regexString = "\\\\" + regexString;
        var regex = new RegExp(regexString, "g");
        text = text.replace(regex, escapeCharactersCallback);
        return text;
    };
    /**
 * Unescape HTML entities
 * @param txt
 * @returns {string}
 */ showdown.helper.unescapeHTMLEntities = function(txt) {
        "use strict";
        return txt.replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
    };
    var rgxFindMatchPos = function(str, left, right, flags) {
        "use strict";
        var f = flags || "", g = f.indexOf("g") > -1, x = new RegExp(left + "|" + right, "g" + f.replace(/g/g, "")), l = new RegExp(left, f.replace(/g/g, "")), pos = [], t, s, m, start, end;
        do {
            t = 0;
            while(m = x.exec(str)){
                if (l.test(m[0])) {
                    if (!t++) {
                        s = x.lastIndex;
                        start = s - m[0].length;
                    }
                } else if (t) {
                    if (!--t) {
                        end = m.index + m[0].length;
                        var obj = {
                            left: {
                                start: start,
                                end: s
                            },
                            match: {
                                start: s,
                                end: m.index
                            },
                            right: {
                                start: m.index,
                                end: end
                            },
                            wholeMatch: {
                                start: start,
                                end: end
                            }
                        };
                        pos.push(obj);
                        if (!g) return pos;
                    }
                }
            }
        }while (t && (x.lastIndex = s));
        return pos;
    };
    /**
 * matchRecursiveRegExp
 *
 * (c) 2007 Steven Levithan <stevenlevithan.com>
 * MIT License
 *
 * Accepts a string to search, a left and right format delimiter
 * as regex patterns, and optional regex flags. Returns an array
 * of matches, allowing nested instances of left/right delimiters.
 * Use the "g" flag to return all matches, otherwise only the
 * first is returned. Be careful to ensure that the left and
 * right format delimiters produce mutually exclusive matches.
 * Backreferences are not supported within the right delimiter
 * due to how it is internally combined with the left delimiter.
 * When matching strings whose format delimiters are unbalanced
 * to the left or right, the output is intentionally as a
 * conventional regex library with recursion support would
 * produce, e.g. "<<x>" and "<x>>" both produce ["x"] when using
 * "<" and ">" as the delimiters (both strings contain a single,
 * balanced instance of "<x>").
 *
 * examples:
 * matchRecursiveRegExp("test", "\\(", "\\)")
 * returns: []
 * matchRecursiveRegExp("<t<<e>><s>>t<>", "<", ">", "g")
 * returns: ["t<<e>><s>", ""]
 * matchRecursiveRegExp("<div id=\"x\">test</div>", "<div\\b[^>]*>", "</div>", "gi")
 * returns: ["test"]
 */ showdown.helper.matchRecursiveRegExp = function(str, left, right, flags) {
        "use strict";
        var matchPos = rgxFindMatchPos(str, left, right, flags), results = [];
        for(var i = 0; i < matchPos.length; ++i)results.push([
            str.slice(matchPos[i].wholeMatch.start, matchPos[i].wholeMatch.end),
            str.slice(matchPos[i].match.start, matchPos[i].match.end),
            str.slice(matchPos[i].left.start, matchPos[i].left.end),
            str.slice(matchPos[i].right.start, matchPos[i].right.end)
        ]);
        return results;
    };
    /**
 *
 * @param {string} str
 * @param {string|function} replacement
 * @param {string} left
 * @param {string} right
 * @param {string} flags
 * @returns {string}
 */ showdown.helper.replaceRecursiveRegExp = function(str, replacement, left, right, flags) {
        "use strict";
        if (!showdown.helper.isFunction(replacement)) {
            var repStr = replacement;
            replacement = function() {
                return repStr;
            };
        }
        var matchPos = rgxFindMatchPos(str, left, right, flags), finalStr = str, lng = matchPos.length;
        if (lng > 0) {
            var bits = [];
            if (matchPos[0].wholeMatch.start !== 0) bits.push(str.slice(0, matchPos[0].wholeMatch.start));
            for(var i = 0; i < lng; ++i){
                bits.push(replacement(str.slice(matchPos[i].wholeMatch.start, matchPos[i].wholeMatch.end), str.slice(matchPos[i].match.start, matchPos[i].match.end), str.slice(matchPos[i].left.start, matchPos[i].left.end), str.slice(matchPos[i].right.start, matchPos[i].right.end)));
                if (i < lng - 1) bits.push(str.slice(matchPos[i].wholeMatch.end, matchPos[i + 1].wholeMatch.start));
            }
            if (matchPos[lng - 1].wholeMatch.end < str.length) bits.push(str.slice(matchPos[lng - 1].wholeMatch.end));
            finalStr = bits.join("");
        }
        return finalStr;
    };
    /**
 * Returns the index within the passed String object of the first occurrence of the specified regex,
 * starting the search at fromIndex. Returns -1 if the value is not found.
 *
 * @param {string} str string to search
 * @param {RegExp} regex Regular expression to search
 * @param {int} [fromIndex = 0] Index to start the search
 * @returns {Number}
 * @throws InvalidArgumentError
 */ showdown.helper.regexIndexOf = function(str, regex, fromIndex) {
        "use strict";
        if (!showdown.helper.isString(str)) throw "InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";
        if (regex instanceof RegExp === false) throw "InvalidArgumentError: second parameter of showdown.helper.regexIndexOf function must be an instance of RegExp";
        var indexOf = str.substring(fromIndex || 0).search(regex);
        return indexOf >= 0 ? indexOf + (fromIndex || 0) : indexOf;
    };
    /**
 * Splits the passed string object at the defined index, and returns an array composed of the two substrings
 * @param {string} str string to split
 * @param {int} index index to split string at
 * @returns {[string,string]}
 * @throws InvalidArgumentError
 */ showdown.helper.splitAtIndex = function(str, index) {
        "use strict";
        if (!showdown.helper.isString(str)) throw "InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";
        return [
            str.substring(0, index),
            str.substring(index)
        ];
    };
    /**
 * Obfuscate an e-mail address through the use of Character Entities,
 * transforming ASCII characters into their equivalent decimal or hex entities.
 *
 * Since it has a random component, subsequent calls to this function produce different results
 *
 * @param {string} mail
 * @returns {string}
 */ showdown.helper.encodeEmailAddress = function(mail) {
        "use strict";
        var encode = [
            function(ch) {
                return "&#" + ch.charCodeAt(0) + ";";
            },
            function(ch) {
                return "&#x" + ch.charCodeAt(0).toString(16) + ";";
            },
            function(ch) {
                return ch;
            }
        ];
        mail = mail.replace(/./g, function(ch) {
            if (ch === "@") // this *must* be encoded. I insist.
            ch = encode[Math.floor(Math.random() * 2)](ch);
            else {
                var r = Math.random();
                // roughly 10% raw, 45% hex, 45% dec
                ch = r > 0.9 ? encode[2](ch) : r > 0.45 ? encode[1](ch) : encode[0](ch);
            }
            return ch;
        });
        return mail;
    };
    /**
 *
 * @param str
 * @param targetLength
 * @param padString
 * @returns {string}
 */ showdown.helper.padEnd = function padEnd(str, targetLength, padString) {
        "use strict";
        /*jshint bitwise: false*/ // eslint-disable-next-line space-infix-ops
        targetLength = targetLength >> 0; //floor if number or convert non-number to 0;
        /*jshint bitwise: true*/ padString = String(padString || " ");
        if (str.length > targetLength) return String(str);
        else {
            targetLength = targetLength - str.length;
            if (targetLength > padString.length) padString += padString.repeat(targetLength / padString.length); //append to original to ensure we are longer than needed
            return String(str) + padString.slice(0, targetLength);
        }
    };
    /**
 * POLYFILLS
 */ // use this instead of builtin is undefined for IE8 compatibility
    if (typeof console === "undefined") console = {
        warn: function(msg) {
            "use strict";
            alert(msg);
        },
        log: function(msg) {
            "use strict";
            alert(msg);
        },
        error: function(msg) {
            "use strict";
            throw msg;
        }
    };
    /**
 * Common regexes.
 * We declare some common regexes to improve performance
 */ showdown.helper.regexes = {
        asteriskDashAndColon: /([*_:~])/g
    };
    /**
 * EMOJIS LIST
 */ showdown.helper.emojis = {
        "+1": "\ud83d\udc4d",
        "-1": "\ud83d\udc4e",
        "100": "\ud83d\udcaf",
        "1234": "\ud83d\udd22",
        "1st_place_medal": "\ud83e\udd47",
        "2nd_place_medal": "\ud83e\udd48",
        "3rd_place_medal": "\ud83e\udd49",
        "8ball": "\ud83c\udfb1",
        "a": "\ud83c\udd70️",
        "ab": "\ud83c\udd8e",
        "abc": "\ud83d\udd24",
        "abcd": "\ud83d\udd21",
        "accept": "\ud83c\ude51",
        "aerial_tramway": "\ud83d\udea1",
        "airplane": "✈️",
        "alarm_clock": "⏰",
        "alembic": "⚗️",
        "alien": "\ud83d\udc7d",
        "ambulance": "\ud83d\ude91",
        "amphora": "\ud83c\udffa",
        "anchor": "⚓️",
        "angel": "\ud83d\udc7c",
        "anger": "\ud83d\udca2",
        "angry": "\ud83d\ude20",
        "anguished": "\ud83d\ude27",
        "ant": "\ud83d\udc1c",
        "apple": "\ud83c\udf4e",
        "aquarius": "♒️",
        "aries": "♈️",
        "arrow_backward": "◀️",
        "arrow_double_down": "⏬",
        "arrow_double_up": "⏫",
        "arrow_down": "⬇️",
        "arrow_down_small": "\ud83d\udd3d",
        "arrow_forward": "▶️",
        "arrow_heading_down": "⤵️",
        "arrow_heading_up": "⤴️",
        "arrow_left": "⬅️",
        "arrow_lower_left": "↙️",
        "arrow_lower_right": "↘️",
        "arrow_right": "➡️",
        "arrow_right_hook": "↪️",
        "arrow_up": "⬆️",
        "arrow_up_down": "↕️",
        "arrow_up_small": "\ud83d\udd3c",
        "arrow_upper_left": "↖️",
        "arrow_upper_right": "↗️",
        "arrows_clockwise": "\ud83d\udd03",
        "arrows_counterclockwise": "\ud83d\udd04",
        "art": "\ud83c\udfa8",
        "articulated_lorry": "\ud83d\ude9b",
        "artificial_satellite": "\ud83d\udef0",
        "astonished": "\ud83d\ude32",
        "athletic_shoe": "\ud83d\udc5f",
        "atm": "\ud83c\udfe7",
        "atom_symbol": "⚛️",
        "avocado": "\ud83e\udd51",
        "b": "\ud83c\udd71️",
        "baby": "\ud83d\udc76",
        "baby_bottle": "\ud83c\udf7c",
        "baby_chick": "\ud83d\udc24",
        "baby_symbol": "\ud83d\udebc",
        "back": "\ud83d\udd19",
        "bacon": "\ud83e\udd53",
        "badminton": "\ud83c\udff8",
        "baggage_claim": "\ud83d\udec4",
        "baguette_bread": "\ud83e\udd56",
        "balance_scale": "⚖️",
        "balloon": "\ud83c\udf88",
        "ballot_box": "\ud83d\uddf3",
        "ballot_box_with_check": "☑️",
        "bamboo": "\ud83c\udf8d",
        "banana": "\ud83c\udf4c",
        "bangbang": "‼️",
        "bank": "\ud83c\udfe6",
        "bar_chart": "\ud83d\udcca",
        "barber": "\ud83d\udc88",
        "baseball": "⚾️",
        "basketball": "\ud83c\udfc0",
        "basketball_man": "⛹️",
        "basketball_woman": "⛹️&zwj;♀️",
        "bat": "\ud83e\udd87",
        "bath": "\ud83d\udec0",
        "bathtub": "\ud83d\udec1",
        "battery": "\ud83d\udd0b",
        "beach_umbrella": "\ud83c\udfd6",
        "bear": "\ud83d\udc3b",
        "bed": "\ud83d\udecf",
        "bee": "\ud83d\udc1d",
        "beer": "\ud83c\udf7a",
        "beers": "\ud83c\udf7b",
        "beetle": "\ud83d\udc1e",
        "beginner": "\ud83d\udd30",
        "bell": "\ud83d\udd14",
        "bellhop_bell": "\ud83d\udece",
        "bento": "\ud83c\udf71",
        "biking_man": "\ud83d\udeb4",
        "bike": "\ud83d\udeb2",
        "biking_woman": "\ud83d\udeb4&zwj;♀️",
        "bikini": "\ud83d\udc59",
        "biohazard": "☣️",
        "bird": "\ud83d\udc26",
        "birthday": "\ud83c\udf82",
        "black_circle": "⚫️",
        "black_flag": "\ud83c\udff4",
        "black_heart": "\ud83d\udda4",
        "black_joker": "\ud83c\udccf",
        "black_large_square": "⬛️",
        "black_medium_small_square": "◾️",
        "black_medium_square": "◼️",
        "black_nib": "✒️",
        "black_small_square": "▪️",
        "black_square_button": "\ud83d\udd32",
        "blonde_man": "\ud83d\udc71",
        "blonde_woman": "\ud83d\udc71&zwj;♀️",
        "blossom": "\ud83c\udf3c",
        "blowfish": "\ud83d\udc21",
        "blue_book": "\ud83d\udcd8",
        "blue_car": "\ud83d\ude99",
        "blue_heart": "\ud83d\udc99",
        "blush": "\ud83d\ude0a",
        "boar": "\ud83d\udc17",
        "boat": "⛵️",
        "bomb": "\ud83d\udca3",
        "book": "\ud83d\udcd6",
        "bookmark": "\ud83d\udd16",
        "bookmark_tabs": "\ud83d\udcd1",
        "books": "\ud83d\udcda",
        "boom": "\ud83d\udca5",
        "boot": "\ud83d\udc62",
        "bouquet": "\ud83d\udc90",
        "bowing_man": "\ud83d\ude47",
        "bow_and_arrow": "\ud83c\udff9",
        "bowing_woman": "\ud83d\ude47&zwj;♀️",
        "bowling": "\ud83c\udfb3",
        "boxing_glove": "\ud83e\udd4a",
        "boy": "\ud83d\udc66",
        "bread": "\ud83c\udf5e",
        "bride_with_veil": "\ud83d\udc70",
        "bridge_at_night": "\ud83c\udf09",
        "briefcase": "\ud83d\udcbc",
        "broken_heart": "\ud83d\udc94",
        "bug": "\ud83d\udc1b",
        "building_construction": "\ud83c\udfd7",
        "bulb": "\ud83d\udca1",
        "bullettrain_front": "\ud83d\ude85",
        "bullettrain_side": "\ud83d\ude84",
        "burrito": "\ud83c\udf2f",
        "bus": "\ud83d\ude8c",
        "business_suit_levitating": "\ud83d\udd74",
        "busstop": "\ud83d\ude8f",
        "bust_in_silhouette": "\ud83d\udc64",
        "busts_in_silhouette": "\ud83d\udc65",
        "butterfly": "\ud83e\udd8b",
        "cactus": "\ud83c\udf35",
        "cake": "\ud83c\udf70",
        "calendar": "\ud83d\udcc6",
        "call_me_hand": "\ud83e\udd19",
        "calling": "\ud83d\udcf2",
        "camel": "\ud83d\udc2b",
        "camera": "\ud83d\udcf7",
        "camera_flash": "\ud83d\udcf8",
        "camping": "\ud83c\udfd5",
        "cancer": "♋️",
        "candle": "\ud83d\udd6f",
        "candy": "\ud83c\udf6c",
        "canoe": "\ud83d\udef6",
        "capital_abcd": "\ud83d\udd20",
        "capricorn": "♑️",
        "car": "\ud83d\ude97",
        "card_file_box": "\ud83d\uddc3",
        "card_index": "\ud83d\udcc7",
        "card_index_dividers": "\ud83d\uddc2",
        "carousel_horse": "\ud83c\udfa0",
        "carrot": "\ud83e\udd55",
        "cat": "\ud83d\udc31",
        "cat2": "\ud83d\udc08",
        "cd": "\ud83d\udcbf",
        "chains": "⛓",
        "champagne": "\ud83c\udf7e",
        "chart": "\ud83d\udcb9",
        "chart_with_downwards_trend": "\ud83d\udcc9",
        "chart_with_upwards_trend": "\ud83d\udcc8",
        "checkered_flag": "\ud83c\udfc1",
        "cheese": "\ud83e\uddc0",
        "cherries": "\ud83c\udf52",
        "cherry_blossom": "\ud83c\udf38",
        "chestnut": "\ud83c\udf30",
        "chicken": "\ud83d\udc14",
        "children_crossing": "\ud83d\udeb8",
        "chipmunk": "\ud83d\udc3f",
        "chocolate_bar": "\ud83c\udf6b",
        "christmas_tree": "\ud83c\udf84",
        "church": "⛪️",
        "cinema": "\ud83c\udfa6",
        "circus_tent": "\ud83c\udfaa",
        "city_sunrise": "\ud83c\udf07",
        "city_sunset": "\ud83c\udf06",
        "cityscape": "\ud83c\udfd9",
        "cl": "\ud83c\udd91",
        "clamp": "\ud83d\udddc",
        "clap": "\ud83d\udc4f",
        "clapper": "\ud83c\udfac",
        "classical_building": "\ud83c\udfdb",
        "clinking_glasses": "\ud83e\udd42",
        "clipboard": "\ud83d\udccb",
        "clock1": "\ud83d\udd50",
        "clock10": "\ud83d\udd59",
        "clock1030": "\ud83d\udd65",
        "clock11": "\ud83d\udd5a",
        "clock1130": "\ud83d\udd66",
        "clock12": "\ud83d\udd5b",
        "clock1230": "\ud83d\udd67",
        "clock130": "\ud83d\udd5c",
        "clock2": "\ud83d\udd51",
        "clock230": "\ud83d\udd5d",
        "clock3": "\ud83d\udd52",
        "clock330": "\ud83d\udd5e",
        "clock4": "\ud83d\udd53",
        "clock430": "\ud83d\udd5f",
        "clock5": "\ud83d\udd54",
        "clock530": "\ud83d\udd60",
        "clock6": "\ud83d\udd55",
        "clock630": "\ud83d\udd61",
        "clock7": "\ud83d\udd56",
        "clock730": "\ud83d\udd62",
        "clock8": "\ud83d\udd57",
        "clock830": "\ud83d\udd63",
        "clock9": "\ud83d\udd58",
        "clock930": "\ud83d\udd64",
        "closed_book": "\ud83d\udcd5",
        "closed_lock_with_key": "\ud83d\udd10",
        "closed_umbrella": "\ud83c\udf02",
        "cloud": "☁️",
        "cloud_with_lightning": "\ud83c\udf29",
        "cloud_with_lightning_and_rain": "⛈",
        "cloud_with_rain": "\ud83c\udf27",
        "cloud_with_snow": "\ud83c\udf28",
        "clown_face": "\ud83e\udd21",
        "clubs": "♣️",
        "cocktail": "\ud83c\udf78",
        "coffee": "☕️",
        "coffin": "⚰️",
        "cold_sweat": "\ud83d\ude30",
        "comet": "☄️",
        "computer": "\ud83d\udcbb",
        "computer_mouse": "\ud83d\uddb1",
        "confetti_ball": "\ud83c\udf8a",
        "confounded": "\ud83d\ude16",
        "confused": "\ud83d\ude15",
        "congratulations": "㊗️",
        "construction": "\ud83d\udea7",
        "construction_worker_man": "\ud83d\udc77",
        "construction_worker_woman": "\ud83d\udc77&zwj;♀️",
        "control_knobs": "\ud83c\udf9b",
        "convenience_store": "\ud83c\udfea",
        "cookie": "\ud83c\udf6a",
        "cool": "\ud83c\udd92",
        "policeman": "\ud83d\udc6e",
        "copyright": "\xa9️",
        "corn": "\ud83c\udf3d",
        "couch_and_lamp": "\ud83d\udecb",
        "couple": "\ud83d\udc6b",
        "couple_with_heart_woman_man": "\ud83d\udc91",
        "couple_with_heart_man_man": "\ud83d\udc68&zwj;❤️&zwj;\ud83d\udc68",
        "couple_with_heart_woman_woman": "\ud83d\udc69&zwj;❤️&zwj;\ud83d\udc69",
        "couplekiss_man_man": "\ud83d\udc68&zwj;❤️&zwj;\ud83d\udc8b&zwj;\ud83d\udc68",
        "couplekiss_man_woman": "\ud83d\udc8f",
        "couplekiss_woman_woman": "\ud83d\udc69&zwj;❤️&zwj;\ud83d\udc8b&zwj;\ud83d\udc69",
        "cow": "\ud83d\udc2e",
        "cow2": "\ud83d\udc04",
        "cowboy_hat_face": "\ud83e\udd20",
        "crab": "\ud83e\udd80",
        "crayon": "\ud83d\udd8d",
        "credit_card": "\ud83d\udcb3",
        "crescent_moon": "\ud83c\udf19",
        "cricket": "\ud83c\udfcf",
        "crocodile": "\ud83d\udc0a",
        "croissant": "\ud83e\udd50",
        "crossed_fingers": "\ud83e\udd1e",
        "crossed_flags": "\ud83c\udf8c",
        "crossed_swords": "⚔️",
        "crown": "\ud83d\udc51",
        "cry": "\ud83d\ude22",
        "crying_cat_face": "\ud83d\ude3f",
        "crystal_ball": "\ud83d\udd2e",
        "cucumber": "\ud83e\udd52",
        "cupid": "\ud83d\udc98",
        "curly_loop": "➰",
        "currency_exchange": "\ud83d\udcb1",
        "curry": "\ud83c\udf5b",
        "custard": "\ud83c\udf6e",
        "customs": "\ud83d\udec3",
        "cyclone": "\ud83c\udf00",
        "dagger": "\ud83d\udde1",
        "dancer": "\ud83d\udc83",
        "dancing_women": "\ud83d\udc6f",
        "dancing_men": "\ud83d\udc6f&zwj;♂️",
        "dango": "\ud83c\udf61",
        "dark_sunglasses": "\ud83d\udd76",
        "dart": "\ud83c\udfaf",
        "dash": "\ud83d\udca8",
        "date": "\ud83d\udcc5",
        "deciduous_tree": "\ud83c\udf33",
        "deer": "\ud83e\udd8c",
        "department_store": "\ud83c\udfec",
        "derelict_house": "\ud83c\udfda",
        "desert": "\ud83c\udfdc",
        "desert_island": "\ud83c\udfdd",
        "desktop_computer": "\ud83d\udda5",
        "male_detective": "\ud83d\udd75️",
        "diamond_shape_with_a_dot_inside": "\ud83d\udca0",
        "diamonds": "♦️",
        "disappointed": "\ud83d\ude1e",
        "disappointed_relieved": "\ud83d\ude25",
        "dizzy": "\ud83d\udcab",
        "dizzy_face": "\ud83d\ude35",
        "do_not_litter": "\ud83d\udeaf",
        "dog": "\ud83d\udc36",
        "dog2": "\ud83d\udc15",
        "dollar": "\ud83d\udcb5",
        "dolls": "\ud83c\udf8e",
        "dolphin": "\ud83d\udc2c",
        "door": "\ud83d\udeaa",
        "doughnut": "\ud83c\udf69",
        "dove": "\ud83d\udd4a",
        "dragon": "\ud83d\udc09",
        "dragon_face": "\ud83d\udc32",
        "dress": "\ud83d\udc57",
        "dromedary_camel": "\ud83d\udc2a",
        "drooling_face": "\ud83e\udd24",
        "droplet": "\ud83d\udca7",
        "drum": "\ud83e\udd41",
        "duck": "\ud83e\udd86",
        "dvd": "\ud83d\udcc0",
        "e-mail": "\ud83d\udce7",
        "eagle": "\ud83e\udd85",
        "ear": "\ud83d\udc42",
        "ear_of_rice": "\ud83c\udf3e",
        "earth_africa": "\ud83c\udf0d",
        "earth_americas": "\ud83c\udf0e",
        "earth_asia": "\ud83c\udf0f",
        "egg": "\ud83e\udd5a",
        "eggplant": "\ud83c\udf46",
        "eight_pointed_black_star": "✴️",
        "eight_spoked_asterisk": "✳️",
        "electric_plug": "\ud83d\udd0c",
        "elephant": "\ud83d\udc18",
        "email": "✉️",
        "end": "\ud83d\udd1a",
        "envelope_with_arrow": "\ud83d\udce9",
        "euro": "\ud83d\udcb6",
        "european_castle": "\ud83c\udff0",
        "european_post_office": "\ud83c\udfe4",
        "evergreen_tree": "\ud83c\udf32",
        "exclamation": "❗️",
        "expressionless": "\ud83d\ude11",
        "eye": "\ud83d\udc41",
        "eye_speech_bubble": "\ud83d\udc41&zwj;\ud83d\udde8",
        "eyeglasses": "\ud83d\udc53",
        "eyes": "\ud83d\udc40",
        "face_with_head_bandage": "\ud83e\udd15",
        "face_with_thermometer": "\ud83e\udd12",
        "fist_oncoming": "\ud83d\udc4a",
        "factory": "\ud83c\udfed",
        "fallen_leaf": "\ud83c\udf42",
        "family_man_woman_boy": "\ud83d\udc6a",
        "family_man_boy": "\ud83d\udc68&zwj;\ud83d\udc66",
        "family_man_boy_boy": "\ud83d\udc68&zwj;\ud83d\udc66&zwj;\ud83d\udc66",
        "family_man_girl": "\ud83d\udc68&zwj;\ud83d\udc67",
        "family_man_girl_boy": "\ud83d\udc68&zwj;\ud83d\udc67&zwj;\ud83d\udc66",
        "family_man_girl_girl": "\ud83d\udc68&zwj;\ud83d\udc67&zwj;\ud83d\udc67",
        "family_man_man_boy": "\ud83d\udc68&zwj;\ud83d\udc68&zwj;\ud83d\udc66",
        "family_man_man_boy_boy": "\ud83d\udc68&zwj;\ud83d\udc68&zwj;\ud83d\udc66&zwj;\ud83d\udc66",
        "family_man_man_girl": "\ud83d\udc68&zwj;\ud83d\udc68&zwj;\ud83d\udc67",
        "family_man_man_girl_boy": "\ud83d\udc68&zwj;\ud83d\udc68&zwj;\ud83d\udc67&zwj;\ud83d\udc66",
        "family_man_man_girl_girl": "\ud83d\udc68&zwj;\ud83d\udc68&zwj;\ud83d\udc67&zwj;\ud83d\udc67",
        "family_man_woman_boy_boy": "\ud83d\udc68&zwj;\ud83d\udc69&zwj;\ud83d\udc66&zwj;\ud83d\udc66",
        "family_man_woman_girl": "\ud83d\udc68&zwj;\ud83d\udc69&zwj;\ud83d\udc67",
        "family_man_woman_girl_boy": "\ud83d\udc68&zwj;\ud83d\udc69&zwj;\ud83d\udc67&zwj;\ud83d\udc66",
        "family_man_woman_girl_girl": "\ud83d\udc68&zwj;\ud83d\udc69&zwj;\ud83d\udc67&zwj;\ud83d\udc67",
        "family_woman_boy": "\ud83d\udc69&zwj;\ud83d\udc66",
        "family_woman_boy_boy": "\ud83d\udc69&zwj;\ud83d\udc66&zwj;\ud83d\udc66",
        "family_woman_girl": "\ud83d\udc69&zwj;\ud83d\udc67",
        "family_woman_girl_boy": "\ud83d\udc69&zwj;\ud83d\udc67&zwj;\ud83d\udc66",
        "family_woman_girl_girl": "\ud83d\udc69&zwj;\ud83d\udc67&zwj;\ud83d\udc67",
        "family_woman_woman_boy": "\ud83d\udc69&zwj;\ud83d\udc69&zwj;\ud83d\udc66",
        "family_woman_woman_boy_boy": "\ud83d\udc69&zwj;\ud83d\udc69&zwj;\ud83d\udc66&zwj;\ud83d\udc66",
        "family_woman_woman_girl": "\ud83d\udc69&zwj;\ud83d\udc69&zwj;\ud83d\udc67",
        "family_woman_woman_girl_boy": "\ud83d\udc69&zwj;\ud83d\udc69&zwj;\ud83d\udc67&zwj;\ud83d\udc66",
        "family_woman_woman_girl_girl": "\ud83d\udc69&zwj;\ud83d\udc69&zwj;\ud83d\udc67&zwj;\ud83d\udc67",
        "fast_forward": "⏩",
        "fax": "\ud83d\udce0",
        "fearful": "\ud83d\ude28",
        "feet": "\ud83d\udc3e",
        "female_detective": "\ud83d\udd75️&zwj;♀️",
        "ferris_wheel": "\ud83c\udfa1",
        "ferry": "⛴",
        "field_hockey": "\ud83c\udfd1",
        "file_cabinet": "\ud83d\uddc4",
        "file_folder": "\ud83d\udcc1",
        "film_projector": "\ud83d\udcfd",
        "film_strip": "\ud83c\udf9e",
        "fire": "\ud83d\udd25",
        "fire_engine": "\ud83d\ude92",
        "fireworks": "\ud83c\udf86",
        "first_quarter_moon": "\ud83c\udf13",
        "first_quarter_moon_with_face": "\ud83c\udf1b",
        "fish": "\ud83d\udc1f",
        "fish_cake": "\ud83c\udf65",
        "fishing_pole_and_fish": "\ud83c\udfa3",
        "fist_raised": "✊",
        "fist_left": "\ud83e\udd1b",
        "fist_right": "\ud83e\udd1c",
        "flags": "\ud83c\udf8f",
        "flashlight": "\ud83d\udd26",
        "fleur_de_lis": "⚜️",
        "flight_arrival": "\ud83d\udeec",
        "flight_departure": "\ud83d\udeeb",
        "floppy_disk": "\ud83d\udcbe",
        "flower_playing_cards": "\ud83c\udfb4",
        "flushed": "\ud83d\ude33",
        "fog": "\ud83c\udf2b",
        "foggy": "\ud83c\udf01",
        "football": "\ud83c\udfc8",
        "footprints": "\ud83d\udc63",
        "fork_and_knife": "\ud83c\udf74",
        "fountain": "⛲️",
        "fountain_pen": "\ud83d\udd8b",
        "four_leaf_clover": "\ud83c\udf40",
        "fox_face": "\ud83e\udd8a",
        "framed_picture": "\ud83d\uddbc",
        "free": "\ud83c\udd93",
        "fried_egg": "\ud83c\udf73",
        "fried_shrimp": "\ud83c\udf64",
        "fries": "\ud83c\udf5f",
        "frog": "\ud83d\udc38",
        "frowning": "\ud83d\ude26",
        "frowning_face": "☹️",
        "frowning_man": "\ud83d\ude4d&zwj;♂️",
        "frowning_woman": "\ud83d\ude4d",
        "middle_finger": "\ud83d\udd95",
        "fuelpump": "⛽️",
        "full_moon": "\ud83c\udf15",
        "full_moon_with_face": "\ud83c\udf1d",
        "funeral_urn": "⚱️",
        "game_die": "\ud83c\udfb2",
        "gear": "⚙️",
        "gem": "\ud83d\udc8e",
        "gemini": "♊️",
        "ghost": "\ud83d\udc7b",
        "gift": "\ud83c\udf81",
        "gift_heart": "\ud83d\udc9d",
        "girl": "\ud83d\udc67",
        "globe_with_meridians": "\ud83c\udf10",
        "goal_net": "\ud83e\udd45",
        "goat": "\ud83d\udc10",
        "golf": "⛳️",
        "golfing_man": "\ud83c\udfcc️",
        "golfing_woman": "\ud83c\udfcc️&zwj;♀️",
        "gorilla": "\ud83e\udd8d",
        "grapes": "\ud83c\udf47",
        "green_apple": "\ud83c\udf4f",
        "green_book": "\ud83d\udcd7",
        "green_heart": "\ud83d\udc9a",
        "green_salad": "\ud83e\udd57",
        "grey_exclamation": "❕",
        "grey_question": "❔",
        "grimacing": "\ud83d\ude2c",
        "grin": "\ud83d\ude01",
        "grinning": "\ud83d\ude00",
        "guardsman": "\ud83d\udc82",
        "guardswoman": "\ud83d\udc82&zwj;♀️",
        "guitar": "\ud83c\udfb8",
        "gun": "\ud83d\udd2b",
        "haircut_woman": "\ud83d\udc87",
        "haircut_man": "\ud83d\udc87&zwj;♂️",
        "hamburger": "\ud83c\udf54",
        "hammer": "\ud83d\udd28",
        "hammer_and_pick": "⚒",
        "hammer_and_wrench": "\ud83d\udee0",
        "hamster": "\ud83d\udc39",
        "hand": "✋",
        "handbag": "\ud83d\udc5c",
        "handshake": "\ud83e\udd1d",
        "hankey": "\ud83d\udca9",
        "hatched_chick": "\ud83d\udc25",
        "hatching_chick": "\ud83d\udc23",
        "headphones": "\ud83c\udfa7",
        "hear_no_evil": "\ud83d\ude49",
        "heart": "❤️",
        "heart_decoration": "\ud83d\udc9f",
        "heart_eyes": "\ud83d\ude0d",
        "heart_eyes_cat": "\ud83d\ude3b",
        "heartbeat": "\ud83d\udc93",
        "heartpulse": "\ud83d\udc97",
        "hearts": "♥️",
        "heavy_check_mark": "✔️",
        "heavy_division_sign": "➗",
        "heavy_dollar_sign": "\ud83d\udcb2",
        "heavy_heart_exclamation": "❣️",
        "heavy_minus_sign": "➖",
        "heavy_multiplication_x": "✖️",
        "heavy_plus_sign": "➕",
        "helicopter": "\ud83d\ude81",
        "herb": "\ud83c\udf3f",
        "hibiscus": "\ud83c\udf3a",
        "high_brightness": "\ud83d\udd06",
        "high_heel": "\ud83d\udc60",
        "hocho": "\ud83d\udd2a",
        "hole": "\ud83d\udd73",
        "honey_pot": "\ud83c\udf6f",
        "horse": "\ud83d\udc34",
        "horse_racing": "\ud83c\udfc7",
        "hospital": "\ud83c\udfe5",
        "hot_pepper": "\ud83c\udf36",
        "hotdog": "\ud83c\udf2d",
        "hotel": "\ud83c\udfe8",
        "hotsprings": "♨️",
        "hourglass": "⌛️",
        "hourglass_flowing_sand": "⏳",
        "house": "\ud83c\udfe0",
        "house_with_garden": "\ud83c\udfe1",
        "houses": "\ud83c\udfd8",
        "hugs": "\ud83e\udd17",
        "hushed": "\ud83d\ude2f",
        "ice_cream": "\ud83c\udf68",
        "ice_hockey": "\ud83c\udfd2",
        "ice_skate": "⛸",
        "icecream": "\ud83c\udf66",
        "id": "\ud83c\udd94",
        "ideograph_advantage": "\ud83c\ude50",
        "imp": "\ud83d\udc7f",
        "inbox_tray": "\ud83d\udce5",
        "incoming_envelope": "\ud83d\udce8",
        "tipping_hand_woman": "\ud83d\udc81",
        "information_source": "ℹ️",
        "innocent": "\ud83d\ude07",
        "interrobang": "⁉️",
        "iphone": "\ud83d\udcf1",
        "izakaya_lantern": "\ud83c\udfee",
        "jack_o_lantern": "\ud83c\udf83",
        "japan": "\ud83d\uddfe",
        "japanese_castle": "\ud83c\udfef",
        "japanese_goblin": "\ud83d\udc7a",
        "japanese_ogre": "\ud83d\udc79",
        "jeans": "\ud83d\udc56",
        "joy": "\ud83d\ude02",
        "joy_cat": "\ud83d\ude39",
        "joystick": "\ud83d\udd79",
        "kaaba": "\ud83d\udd4b",
        "key": "\ud83d\udd11",
        "keyboard": "⌨️",
        "keycap_ten": "\ud83d\udd1f",
        "kick_scooter": "\ud83d\udef4",
        "kimono": "\ud83d\udc58",
        "kiss": "\ud83d\udc8b",
        "kissing": "\ud83d\ude17",
        "kissing_cat": "\ud83d\ude3d",
        "kissing_closed_eyes": "\ud83d\ude1a",
        "kissing_heart": "\ud83d\ude18",
        "kissing_smiling_eyes": "\ud83d\ude19",
        "kiwi_fruit": "\ud83e\udd5d",
        "koala": "\ud83d\udc28",
        "koko": "\ud83c\ude01",
        "label": "\ud83c\udff7",
        "large_blue_circle": "\ud83d\udd35",
        "large_blue_diamond": "\ud83d\udd37",
        "large_orange_diamond": "\ud83d\udd36",
        "last_quarter_moon": "\ud83c\udf17",
        "last_quarter_moon_with_face": "\ud83c\udf1c",
        "latin_cross": "✝️",
        "laughing": "\ud83d\ude06",
        "leaves": "\ud83c\udf43",
        "ledger": "\ud83d\udcd2",
        "left_luggage": "\ud83d\udec5",
        "left_right_arrow": "↔️",
        "leftwards_arrow_with_hook": "↩️",
        "lemon": "\ud83c\udf4b",
        "leo": "♌️",
        "leopard": "\ud83d\udc06",
        "level_slider": "\ud83c\udf9a",
        "libra": "♎️",
        "light_rail": "\ud83d\ude88",
        "link": "\ud83d\udd17",
        "lion": "\ud83e\udd81",
        "lips": "\ud83d\udc44",
        "lipstick": "\ud83d\udc84",
        "lizard": "\ud83e\udd8e",
        "lock": "\ud83d\udd12",
        "lock_with_ink_pen": "\ud83d\udd0f",
        "lollipop": "\ud83c\udf6d",
        "loop": "➿",
        "loud_sound": "\ud83d\udd0a",
        "loudspeaker": "\ud83d\udce2",
        "love_hotel": "\ud83c\udfe9",
        "love_letter": "\ud83d\udc8c",
        "low_brightness": "\ud83d\udd05",
        "lying_face": "\ud83e\udd25",
        "m": "Ⓜ️",
        "mag": "\ud83d\udd0d",
        "mag_right": "\ud83d\udd0e",
        "mahjong": "\ud83c\udc04️",
        "mailbox": "\ud83d\udceb",
        "mailbox_closed": "\ud83d\udcea",
        "mailbox_with_mail": "\ud83d\udcec",
        "mailbox_with_no_mail": "\ud83d\udced",
        "man": "\ud83d\udc68",
        "man_artist": "\ud83d\udc68&zwj;\ud83c\udfa8",
        "man_astronaut": "\ud83d\udc68&zwj;\ud83d\ude80",
        "man_cartwheeling": "\ud83e\udd38&zwj;♂️",
        "man_cook": "\ud83d\udc68&zwj;\ud83c\udf73",
        "man_dancing": "\ud83d\udd7a",
        "man_facepalming": "\ud83e\udd26&zwj;♂️",
        "man_factory_worker": "\ud83d\udc68&zwj;\ud83c\udfed",
        "man_farmer": "\ud83d\udc68&zwj;\ud83c\udf3e",
        "man_firefighter": "\ud83d\udc68&zwj;\ud83d\ude92",
        "man_health_worker": "\ud83d\udc68&zwj;⚕️",
        "man_in_tuxedo": "\ud83e\udd35",
        "man_judge": "\ud83d\udc68&zwj;⚖️",
        "man_juggling": "\ud83e\udd39&zwj;♂️",
        "man_mechanic": "\ud83d\udc68&zwj;\ud83d\udd27",
        "man_office_worker": "\ud83d\udc68&zwj;\ud83d\udcbc",
        "man_pilot": "\ud83d\udc68&zwj;✈️",
        "man_playing_handball": "\ud83e\udd3e&zwj;♂️",
        "man_playing_water_polo": "\ud83e\udd3d&zwj;♂️",
        "man_scientist": "\ud83d\udc68&zwj;\ud83d\udd2c",
        "man_shrugging": "\ud83e\udd37&zwj;♂️",
        "man_singer": "\ud83d\udc68&zwj;\ud83c\udfa4",
        "man_student": "\ud83d\udc68&zwj;\ud83c\udf93",
        "man_teacher": "\ud83d\udc68&zwj;\ud83c\udfeb",
        "man_technologist": "\ud83d\udc68&zwj;\ud83d\udcbb",
        "man_with_gua_pi_mao": "\ud83d\udc72",
        "man_with_turban": "\ud83d\udc73",
        "tangerine": "\ud83c\udf4a",
        "mans_shoe": "\ud83d\udc5e",
        "mantelpiece_clock": "\ud83d\udd70",
        "maple_leaf": "\ud83c\udf41",
        "martial_arts_uniform": "\ud83e\udd4b",
        "mask": "\ud83d\ude37",
        "massage_woman": "\ud83d\udc86",
        "massage_man": "\ud83d\udc86&zwj;♂️",
        "meat_on_bone": "\ud83c\udf56",
        "medal_military": "\ud83c\udf96",
        "medal_sports": "\ud83c\udfc5",
        "mega": "\ud83d\udce3",
        "melon": "\ud83c\udf48",
        "memo": "\ud83d\udcdd",
        "men_wrestling": "\ud83e\udd3c&zwj;♂️",
        "menorah": "\ud83d\udd4e",
        "mens": "\ud83d\udeb9",
        "metal": "\ud83e\udd18",
        "metro": "\ud83d\ude87",
        "microphone": "\ud83c\udfa4",
        "microscope": "\ud83d\udd2c",
        "milk_glass": "\ud83e\udd5b",
        "milky_way": "\ud83c\udf0c",
        "minibus": "\ud83d\ude90",
        "minidisc": "\ud83d\udcbd",
        "mobile_phone_off": "\ud83d\udcf4",
        "money_mouth_face": "\ud83e\udd11",
        "money_with_wings": "\ud83d\udcb8",
        "moneybag": "\ud83d\udcb0",
        "monkey": "\ud83d\udc12",
        "monkey_face": "\ud83d\udc35",
        "monorail": "\ud83d\ude9d",
        "moon": "\ud83c\udf14",
        "mortar_board": "\ud83c\udf93",
        "mosque": "\ud83d\udd4c",
        "motor_boat": "\ud83d\udee5",
        "motor_scooter": "\ud83d\udef5",
        "motorcycle": "\ud83c\udfcd",
        "motorway": "\ud83d\udee3",
        "mount_fuji": "\ud83d\uddfb",
        "mountain": "⛰",
        "mountain_biking_man": "\ud83d\udeb5",
        "mountain_biking_woman": "\ud83d\udeb5&zwj;♀️",
        "mountain_cableway": "\ud83d\udea0",
        "mountain_railway": "\ud83d\ude9e",
        "mountain_snow": "\ud83c\udfd4",
        "mouse": "\ud83d\udc2d",
        "mouse2": "\ud83d\udc01",
        "movie_camera": "\ud83c\udfa5",
        "moyai": "\ud83d\uddff",
        "mrs_claus": "\ud83e\udd36",
        "muscle": "\ud83d\udcaa",
        "mushroom": "\ud83c\udf44",
        "musical_keyboard": "\ud83c\udfb9",
        "musical_note": "\ud83c\udfb5",
        "musical_score": "\ud83c\udfbc",
        "mute": "\ud83d\udd07",
        "nail_care": "\ud83d\udc85",
        "name_badge": "\ud83d\udcdb",
        "national_park": "\ud83c\udfde",
        "nauseated_face": "\ud83e\udd22",
        "necktie": "\ud83d\udc54",
        "negative_squared_cross_mark": "❎",
        "nerd_face": "\ud83e\udd13",
        "neutral_face": "\ud83d\ude10",
        "new": "\ud83c\udd95",
        "new_moon": "\ud83c\udf11",
        "new_moon_with_face": "\ud83c\udf1a",
        "newspaper": "\ud83d\udcf0",
        "newspaper_roll": "\ud83d\uddde",
        "next_track_button": "⏭",
        "ng": "\ud83c\udd96",
        "no_good_man": "\ud83d\ude45&zwj;♂️",
        "no_good_woman": "\ud83d\ude45",
        "night_with_stars": "\ud83c\udf03",
        "no_bell": "\ud83d\udd15",
        "no_bicycles": "\ud83d\udeb3",
        "no_entry": "⛔️",
        "no_entry_sign": "\ud83d\udeab",
        "no_mobile_phones": "\ud83d\udcf5",
        "no_mouth": "\ud83d\ude36",
        "no_pedestrians": "\ud83d\udeb7",
        "no_smoking": "\ud83d\udead",
        "non-potable_water": "\ud83d\udeb1",
        "nose": "\ud83d\udc43",
        "notebook": "\ud83d\udcd3",
        "notebook_with_decorative_cover": "\ud83d\udcd4",
        "notes": "\ud83c\udfb6",
        "nut_and_bolt": "\ud83d\udd29",
        "o": "⭕️",
        "o2": "\ud83c\udd7e️",
        "ocean": "\ud83c\udf0a",
        "octopus": "\ud83d\udc19",
        "oden": "\ud83c\udf62",
        "office": "\ud83c\udfe2",
        "oil_drum": "\ud83d\udee2",
        "ok": "\ud83c\udd97",
        "ok_hand": "\ud83d\udc4c",
        "ok_man": "\ud83d\ude46&zwj;♂️",
        "ok_woman": "\ud83d\ude46",
        "old_key": "\ud83d\udddd",
        "older_man": "\ud83d\udc74",
        "older_woman": "\ud83d\udc75",
        "om": "\ud83d\udd49",
        "on": "\ud83d\udd1b",
        "oncoming_automobile": "\ud83d\ude98",
        "oncoming_bus": "\ud83d\ude8d",
        "oncoming_police_car": "\ud83d\ude94",
        "oncoming_taxi": "\ud83d\ude96",
        "open_file_folder": "\ud83d\udcc2",
        "open_hands": "\ud83d\udc50",
        "open_mouth": "\ud83d\ude2e",
        "open_umbrella": "☂️",
        "ophiuchus": "⛎",
        "orange_book": "\ud83d\udcd9",
        "orthodox_cross": "☦️",
        "outbox_tray": "\ud83d\udce4",
        "owl": "\ud83e\udd89",
        "ox": "\ud83d\udc02",
        "package": "\ud83d\udce6",
        "page_facing_up": "\ud83d\udcc4",
        "page_with_curl": "\ud83d\udcc3",
        "pager": "\ud83d\udcdf",
        "paintbrush": "\ud83d\udd8c",
        "palm_tree": "\ud83c\udf34",
        "pancakes": "\ud83e\udd5e",
        "panda_face": "\ud83d\udc3c",
        "paperclip": "\ud83d\udcce",
        "paperclips": "\ud83d\udd87",
        "parasol_on_ground": "⛱",
        "parking": "\ud83c\udd7f️",
        "part_alternation_mark": "〽️",
        "partly_sunny": "⛅️",
        "passenger_ship": "\ud83d\udef3",
        "passport_control": "\ud83d\udec2",
        "pause_button": "⏸",
        "peace_symbol": "☮️",
        "peach": "\ud83c\udf51",
        "peanuts": "\ud83e\udd5c",
        "pear": "\ud83c\udf50",
        "pen": "\ud83d\udd8a",
        "pencil2": "✏️",
        "penguin": "\ud83d\udc27",
        "pensive": "\ud83d\ude14",
        "performing_arts": "\ud83c\udfad",
        "persevere": "\ud83d\ude23",
        "person_fencing": "\ud83e\udd3a",
        "pouting_woman": "\ud83d\ude4e",
        "phone": "☎️",
        "pick": "⛏",
        "pig": "\ud83d\udc37",
        "pig2": "\ud83d\udc16",
        "pig_nose": "\ud83d\udc3d",
        "pill": "\ud83d\udc8a",
        "pineapple": "\ud83c\udf4d",
        "ping_pong": "\ud83c\udfd3",
        "pisces": "♓️",
        "pizza": "\ud83c\udf55",
        "place_of_worship": "\ud83d\uded0",
        "plate_with_cutlery": "\ud83c\udf7d",
        "play_or_pause_button": "⏯",
        "point_down": "\ud83d\udc47",
        "point_left": "\ud83d\udc48",
        "point_right": "\ud83d\udc49",
        "point_up": "☝️",
        "point_up_2": "\ud83d\udc46",
        "police_car": "\ud83d\ude93",
        "policewoman": "\ud83d\udc6e&zwj;♀️",
        "poodle": "\ud83d\udc29",
        "popcorn": "\ud83c\udf7f",
        "post_office": "\ud83c\udfe3",
        "postal_horn": "\ud83d\udcef",
        "postbox": "\ud83d\udcee",
        "potable_water": "\ud83d\udeb0",
        "potato": "\ud83e\udd54",
        "pouch": "\ud83d\udc5d",
        "poultry_leg": "\ud83c\udf57",
        "pound": "\ud83d\udcb7",
        "rage": "\ud83d\ude21",
        "pouting_cat": "\ud83d\ude3e",
        "pouting_man": "\ud83d\ude4e&zwj;♂️",
        "pray": "\ud83d\ude4f",
        "prayer_beads": "\ud83d\udcff",
        "pregnant_woman": "\ud83e\udd30",
        "previous_track_button": "⏮",
        "prince": "\ud83e\udd34",
        "princess": "\ud83d\udc78",
        "printer": "\ud83d\udda8",
        "purple_heart": "\ud83d\udc9c",
        "purse": "\ud83d\udc5b",
        "pushpin": "\ud83d\udccc",
        "put_litter_in_its_place": "\ud83d\udeae",
        "question": "❓",
        "rabbit": "\ud83d\udc30",
        "rabbit2": "\ud83d\udc07",
        "racehorse": "\ud83d\udc0e",
        "racing_car": "\ud83c\udfce",
        "radio": "\ud83d\udcfb",
        "radio_button": "\ud83d\udd18",
        "radioactive": "☢️",
        "railway_car": "\ud83d\ude83",
        "railway_track": "\ud83d\udee4",
        "rainbow": "\ud83c\udf08",
        "rainbow_flag": "\ud83c\udff3️&zwj;\ud83c\udf08",
        "raised_back_of_hand": "\ud83e\udd1a",
        "raised_hand_with_fingers_splayed": "\ud83d\udd90",
        "raised_hands": "\ud83d\ude4c",
        "raising_hand_woman": "\ud83d\ude4b",
        "raising_hand_man": "\ud83d\ude4b&zwj;♂️",
        "ram": "\ud83d\udc0f",
        "ramen": "\ud83c\udf5c",
        "rat": "\ud83d\udc00",
        "record_button": "⏺",
        "recycle": "♻️",
        "red_circle": "\ud83d\udd34",
        "registered": "\xae️",
        "relaxed": "☺️",
        "relieved": "\ud83d\ude0c",
        "reminder_ribbon": "\ud83c\udf97",
        "repeat": "\ud83d\udd01",
        "repeat_one": "\ud83d\udd02",
        "rescue_worker_helmet": "⛑",
        "restroom": "\ud83d\udebb",
        "revolving_hearts": "\ud83d\udc9e",
        "rewind": "⏪",
        "rhinoceros": "\ud83e\udd8f",
        "ribbon": "\ud83c\udf80",
        "rice": "\ud83c\udf5a",
        "rice_ball": "\ud83c\udf59",
        "rice_cracker": "\ud83c\udf58",
        "rice_scene": "\ud83c\udf91",
        "right_anger_bubble": "\ud83d\uddef",
        "ring": "\ud83d\udc8d",
        "robot": "\ud83e\udd16",
        "rocket": "\ud83d\ude80",
        "rofl": "\ud83e\udd23",
        "roll_eyes": "\ud83d\ude44",
        "roller_coaster": "\ud83c\udfa2",
        "rooster": "\ud83d\udc13",
        "rose": "\ud83c\udf39",
        "rosette": "\ud83c\udff5",
        "rotating_light": "\ud83d\udea8",
        "round_pushpin": "\ud83d\udccd",
        "rowing_man": "\ud83d\udea3",
        "rowing_woman": "\ud83d\udea3&zwj;♀️",
        "rugby_football": "\ud83c\udfc9",
        "running_man": "\ud83c\udfc3",
        "running_shirt_with_sash": "\ud83c\udfbd",
        "running_woman": "\ud83c\udfc3&zwj;♀️",
        "sa": "\ud83c\ude02️",
        "sagittarius": "♐️",
        "sake": "\ud83c\udf76",
        "sandal": "\ud83d\udc61",
        "santa": "\ud83c\udf85",
        "satellite": "\ud83d\udce1",
        "saxophone": "\ud83c\udfb7",
        "school": "\ud83c\udfeb",
        "school_satchel": "\ud83c\udf92",
        "scissors": "✂️",
        "scorpion": "\ud83e\udd82",
        "scorpius": "♏️",
        "scream": "\ud83d\ude31",
        "scream_cat": "\ud83d\ude40",
        "scroll": "\ud83d\udcdc",
        "seat": "\ud83d\udcba",
        "secret": "㊙️",
        "see_no_evil": "\ud83d\ude48",
        "seedling": "\ud83c\udf31",
        "selfie": "\ud83e\udd33",
        "shallow_pan_of_food": "\ud83e\udd58",
        "shamrock": "☘️",
        "shark": "\ud83e\udd88",
        "shaved_ice": "\ud83c\udf67",
        "sheep": "\ud83d\udc11",
        "shell": "\ud83d\udc1a",
        "shield": "\ud83d\udee1",
        "shinto_shrine": "⛩",
        "ship": "\ud83d\udea2",
        "shirt": "\ud83d\udc55",
        "shopping": "\ud83d\udecd",
        "shopping_cart": "\ud83d\uded2",
        "shower": "\ud83d\udebf",
        "shrimp": "\ud83e\udd90",
        "signal_strength": "\ud83d\udcf6",
        "six_pointed_star": "\ud83d\udd2f",
        "ski": "\ud83c\udfbf",
        "skier": "⛷",
        "skull": "\ud83d\udc80",
        "skull_and_crossbones": "☠️",
        "sleeping": "\ud83d\ude34",
        "sleeping_bed": "\ud83d\udecc",
        "sleepy": "\ud83d\ude2a",
        "slightly_frowning_face": "\ud83d\ude41",
        "slightly_smiling_face": "\ud83d\ude42",
        "slot_machine": "\ud83c\udfb0",
        "small_airplane": "\ud83d\udee9",
        "small_blue_diamond": "\ud83d\udd39",
        "small_orange_diamond": "\ud83d\udd38",
        "small_red_triangle": "\ud83d\udd3a",
        "small_red_triangle_down": "\ud83d\udd3b",
        "smile": "\ud83d\ude04",
        "smile_cat": "\ud83d\ude38",
        "smiley": "\ud83d\ude03",
        "smiley_cat": "\ud83d\ude3a",
        "smiling_imp": "\ud83d\ude08",
        "smirk": "\ud83d\ude0f",
        "smirk_cat": "\ud83d\ude3c",
        "smoking": "\ud83d\udeac",
        "snail": "\ud83d\udc0c",
        "snake": "\ud83d\udc0d",
        "sneezing_face": "\ud83e\udd27",
        "snowboarder": "\ud83c\udfc2",
        "snowflake": "❄️",
        "snowman": "⛄️",
        "snowman_with_snow": "☃️",
        "sob": "\ud83d\ude2d",
        "soccer": "⚽️",
        "soon": "\ud83d\udd1c",
        "sos": "\ud83c\udd98",
        "sound": "\ud83d\udd09",
        "space_invader": "\ud83d\udc7e",
        "spades": "♠️",
        "spaghetti": "\ud83c\udf5d",
        "sparkle": "❇️",
        "sparkler": "\ud83c\udf87",
        "sparkles": "✨",
        "sparkling_heart": "\ud83d\udc96",
        "speak_no_evil": "\ud83d\ude4a",
        "speaker": "\ud83d\udd08",
        "speaking_head": "\ud83d\udde3",
        "speech_balloon": "\ud83d\udcac",
        "speedboat": "\ud83d\udea4",
        "spider": "\ud83d\udd77",
        "spider_web": "\ud83d\udd78",
        "spiral_calendar": "\ud83d\uddd3",
        "spiral_notepad": "\ud83d\uddd2",
        "spoon": "\ud83e\udd44",
        "squid": "\ud83e\udd91",
        "stadium": "\ud83c\udfdf",
        "star": "⭐️",
        "star2": "\ud83c\udf1f",
        "star_and_crescent": "☪️",
        "star_of_david": "✡️",
        "stars": "\ud83c\udf20",
        "station": "\ud83d\ude89",
        "statue_of_liberty": "\ud83d\uddfd",
        "steam_locomotive": "\ud83d\ude82",
        "stew": "\ud83c\udf72",
        "stop_button": "⏹",
        "stop_sign": "\ud83d\uded1",
        "stopwatch": "⏱",
        "straight_ruler": "\ud83d\udccf",
        "strawberry": "\ud83c\udf53",
        "stuck_out_tongue": "\ud83d\ude1b",
        "stuck_out_tongue_closed_eyes": "\ud83d\ude1d",
        "stuck_out_tongue_winking_eye": "\ud83d\ude1c",
        "studio_microphone": "\ud83c\udf99",
        "stuffed_flatbread": "\ud83e\udd59",
        "sun_behind_large_cloud": "\ud83c\udf25",
        "sun_behind_rain_cloud": "\ud83c\udf26",
        "sun_behind_small_cloud": "\ud83c\udf24",
        "sun_with_face": "\ud83c\udf1e",
        "sunflower": "\ud83c\udf3b",
        "sunglasses": "\ud83d\ude0e",
        "sunny": "☀️",
        "sunrise": "\ud83c\udf05",
        "sunrise_over_mountains": "\ud83c\udf04",
        "surfing_man": "\ud83c\udfc4",
        "surfing_woman": "\ud83c\udfc4&zwj;♀️",
        "sushi": "\ud83c\udf63",
        "suspension_railway": "\ud83d\ude9f",
        "sweat": "\ud83d\ude13",
        "sweat_drops": "\ud83d\udca6",
        "sweat_smile": "\ud83d\ude05",
        "sweet_potato": "\ud83c\udf60",
        "swimming_man": "\ud83c\udfca",
        "swimming_woman": "\ud83c\udfca&zwj;♀️",
        "symbols": "\ud83d\udd23",
        "synagogue": "\ud83d\udd4d",
        "syringe": "\ud83d\udc89",
        "taco": "\ud83c\udf2e",
        "tada": "\ud83c\udf89",
        "tanabata_tree": "\ud83c\udf8b",
        "taurus": "♉️",
        "taxi": "\ud83d\ude95",
        "tea": "\ud83c\udf75",
        "telephone_receiver": "\ud83d\udcde",
        "telescope": "\ud83d\udd2d",
        "tennis": "\ud83c\udfbe",
        "tent": "⛺️",
        "thermometer": "\ud83c\udf21",
        "thinking": "\ud83e\udd14",
        "thought_balloon": "\ud83d\udcad",
        "ticket": "\ud83c\udfab",
        "tickets": "\ud83c\udf9f",
        "tiger": "\ud83d\udc2f",
        "tiger2": "\ud83d\udc05",
        "timer_clock": "⏲",
        "tipping_hand_man": "\ud83d\udc81&zwj;♂️",
        "tired_face": "\ud83d\ude2b",
        "tm": "™️",
        "toilet": "\ud83d\udebd",
        "tokyo_tower": "\ud83d\uddfc",
        "tomato": "\ud83c\udf45",
        "tongue": "\ud83d\udc45",
        "top": "\ud83d\udd1d",
        "tophat": "\ud83c\udfa9",
        "tornado": "\ud83c\udf2a",
        "trackball": "\ud83d\uddb2",
        "tractor": "\ud83d\ude9c",
        "traffic_light": "\ud83d\udea5",
        "train": "\ud83d\ude8b",
        "train2": "\ud83d\ude86",
        "tram": "\ud83d\ude8a",
        "triangular_flag_on_post": "\ud83d\udea9",
        "triangular_ruler": "\ud83d\udcd0",
        "trident": "\ud83d\udd31",
        "triumph": "\ud83d\ude24",
        "trolleybus": "\ud83d\ude8e",
        "trophy": "\ud83c\udfc6",
        "tropical_drink": "\ud83c\udf79",
        "tropical_fish": "\ud83d\udc20",
        "truck": "\ud83d\ude9a",
        "trumpet": "\ud83c\udfba",
        "tulip": "\ud83c\udf37",
        "tumbler_glass": "\ud83e\udd43",
        "turkey": "\ud83e\udd83",
        "turtle": "\ud83d\udc22",
        "tv": "\ud83d\udcfa",
        "twisted_rightwards_arrows": "\ud83d\udd00",
        "two_hearts": "\ud83d\udc95",
        "two_men_holding_hands": "\ud83d\udc6c",
        "two_women_holding_hands": "\ud83d\udc6d",
        "u5272": "\ud83c\ude39",
        "u5408": "\ud83c\ude34",
        "u55b6": "\ud83c\ude3a",
        "u6307": "\ud83c\ude2f️",
        "u6708": "\ud83c\ude37️",
        "u6709": "\ud83c\ude36",
        "u6e80": "\ud83c\ude35",
        "u7121": "\ud83c\ude1a️",
        "u7533": "\ud83c\ude38",
        "u7981": "\ud83c\ude32",
        "u7a7a": "\ud83c\ude33",
        "umbrella": "☔️",
        "unamused": "\ud83d\ude12",
        "underage": "\ud83d\udd1e",
        "unicorn": "\ud83e\udd84",
        "unlock": "\ud83d\udd13",
        "up": "\ud83c\udd99",
        "upside_down_face": "\ud83d\ude43",
        "v": "✌️",
        "vertical_traffic_light": "\ud83d\udea6",
        "vhs": "\ud83d\udcfc",
        "vibration_mode": "\ud83d\udcf3",
        "video_camera": "\ud83d\udcf9",
        "video_game": "\ud83c\udfae",
        "violin": "\ud83c\udfbb",
        "virgo": "♍️",
        "volcano": "\ud83c\udf0b",
        "volleyball": "\ud83c\udfd0",
        "vs": "\ud83c\udd9a",
        "vulcan_salute": "\ud83d\udd96",
        "walking_man": "\ud83d\udeb6",
        "walking_woman": "\ud83d\udeb6&zwj;♀️",
        "waning_crescent_moon": "\ud83c\udf18",
        "waning_gibbous_moon": "\ud83c\udf16",
        "warning": "⚠️",
        "wastebasket": "\ud83d\uddd1",
        "watch": "⌚️",
        "water_buffalo": "\ud83d\udc03",
        "watermelon": "\ud83c\udf49",
        "wave": "\ud83d\udc4b",
        "wavy_dash": "〰️",
        "waxing_crescent_moon": "\ud83c\udf12",
        "wc": "\ud83d\udebe",
        "weary": "\ud83d\ude29",
        "wedding": "\ud83d\udc92",
        "weight_lifting_man": "\ud83c\udfcb️",
        "weight_lifting_woman": "\ud83c\udfcb️&zwj;♀️",
        "whale": "\ud83d\udc33",
        "whale2": "\ud83d\udc0b",
        "wheel_of_dharma": "☸️",
        "wheelchair": "♿️",
        "white_check_mark": "✅",
        "white_circle": "⚪️",
        "white_flag": "\ud83c\udff3️",
        "white_flower": "\ud83d\udcae",
        "white_large_square": "⬜️",
        "white_medium_small_square": "◽️",
        "white_medium_square": "◻️",
        "white_small_square": "▫️",
        "white_square_button": "\ud83d\udd33",
        "wilted_flower": "\ud83e\udd40",
        "wind_chime": "\ud83c\udf90",
        "wind_face": "\ud83c\udf2c",
        "wine_glass": "\ud83c\udf77",
        "wink": "\ud83d\ude09",
        "wolf": "\ud83d\udc3a",
        "woman": "\ud83d\udc69",
        "woman_artist": "\ud83d\udc69&zwj;\ud83c\udfa8",
        "woman_astronaut": "\ud83d\udc69&zwj;\ud83d\ude80",
        "woman_cartwheeling": "\ud83e\udd38&zwj;♀️",
        "woman_cook": "\ud83d\udc69&zwj;\ud83c\udf73",
        "woman_facepalming": "\ud83e\udd26&zwj;♀️",
        "woman_factory_worker": "\ud83d\udc69&zwj;\ud83c\udfed",
        "woman_farmer": "\ud83d\udc69&zwj;\ud83c\udf3e",
        "woman_firefighter": "\ud83d\udc69&zwj;\ud83d\ude92",
        "woman_health_worker": "\ud83d\udc69&zwj;⚕️",
        "woman_judge": "\ud83d\udc69&zwj;⚖️",
        "woman_juggling": "\ud83e\udd39&zwj;♀️",
        "woman_mechanic": "\ud83d\udc69&zwj;\ud83d\udd27",
        "woman_office_worker": "\ud83d\udc69&zwj;\ud83d\udcbc",
        "woman_pilot": "\ud83d\udc69&zwj;✈️",
        "woman_playing_handball": "\ud83e\udd3e&zwj;♀️",
        "woman_playing_water_polo": "\ud83e\udd3d&zwj;♀️",
        "woman_scientist": "\ud83d\udc69&zwj;\ud83d\udd2c",
        "woman_shrugging": "\ud83e\udd37&zwj;♀️",
        "woman_singer": "\ud83d\udc69&zwj;\ud83c\udfa4",
        "woman_student": "\ud83d\udc69&zwj;\ud83c\udf93",
        "woman_teacher": "\ud83d\udc69&zwj;\ud83c\udfeb",
        "woman_technologist": "\ud83d\udc69&zwj;\ud83d\udcbb",
        "woman_with_turban": "\ud83d\udc73&zwj;♀️",
        "womans_clothes": "\ud83d\udc5a",
        "womans_hat": "\ud83d\udc52",
        "women_wrestling": "\ud83e\udd3c&zwj;♀️",
        "womens": "\ud83d\udeba",
        "world_map": "\ud83d\uddfa",
        "worried": "\ud83d\ude1f",
        "wrench": "\ud83d\udd27",
        "writing_hand": "✍️",
        "x": "❌",
        "yellow_heart": "\ud83d\udc9b",
        "yen": "\ud83d\udcb4",
        "yin_yang": "☯️",
        "yum": "\ud83d\ude0b",
        "zap": "⚡️",
        "zipper_mouth_face": "\ud83e\udd10",
        "zzz": "\ud83d\udca4",
        /* special emojis :P */ "octocat": '<img alt=":octocat:" height="20" width="20" align="absmiddle" src="https://assets-cdn.github.com/images/icons/emoji/octocat.png">',
        "showdown": "<span style=\"font-family: 'Anonymous Pro', monospace; text-decoration: underline; text-decoration-style: dashed; text-decoration-color: #3e8b8a;text-underline-position: under;\">S</span>"
    };
    /**
 * Created by Estevao on 31-05-2015.
 */ /**
 * Showdown Converter class
 * @class
 * @param {object} [converterOptions]
 * @returns {Converter}
 */ showdown.Converter = function(converterOptions) {
        "use strict";
        var /**
       * Options used by this converter
       * @private
       * @type {{}}
       */ options = {}, /**
       * Language extensions used by this converter
       * @private
       * @type {Array}
       */ langExtensions = [], /**
       * Output modifiers extensions used by this converter
       * @private
       * @type {Array}
       */ outputModifiers = [], /**
       * Event listeners
       * @private
       * @type {{}}
       */ listeners = {}, /**
       * The flavor set in this converter
       */ setConvFlavor = setFlavor, /**
       * Metadata of the document
       * @type {{parsed: {}, raw: string, format: string}}
       */ metadata = {
            parsed: {},
            raw: "",
            format: ""
        };
        _constructor();
        /**
   * Converter constructor
   * @private
   */ function _constructor() {
            converterOptions = converterOptions || {};
            for(var gOpt in globalOptions)if (globalOptions.hasOwnProperty(gOpt)) options[gOpt] = globalOptions[gOpt];
            // Merge options
            if (typeof converterOptions === "object") {
                for(var opt in converterOptions)if (converterOptions.hasOwnProperty(opt)) options[opt] = converterOptions[opt];
            } else throw Error("Converter expects the passed parameter to be an object, but " + typeof converterOptions + " was passed instead.");
            if (options.extensions) showdown.helper.forEach(options.extensions, _parseExtension);
        }
        /**
   * Parse extension
   * @param {*} ext
   * @param {string} [name='']
   * @private
   */ function _parseExtension(ext, name) {
            name = name || null;
            // If it's a string, the extension was previously loaded
            if (showdown.helper.isString(ext)) {
                ext = showdown.helper.stdExtName(ext);
                name = ext;
                // LEGACY_SUPPORT CODE
                if (showdown.extensions[ext]) {
                    console.warn("DEPRECATION WARNING: " + ext + " is an old extension that uses a deprecated loading method." + "Please inform the developer that the extension should be updated!");
                    legacyExtensionLoading(showdown.extensions[ext], ext);
                    return;
                // END LEGACY SUPPORT CODE
                } else if (!showdown.helper.isUndefined(extensions[ext])) ext = extensions[ext];
                else throw Error('Extension "' + ext + '" could not be loaded. It was either not found or is not a valid extension.');
            }
            if (typeof ext === "function") ext = ext();
            if (!showdown.helper.isArray(ext)) ext = [
                ext
            ];
            var validExt = validate(ext, name);
            if (!validExt.valid) throw Error(validExt.error);
            for(var i = 0; i < ext.length; ++i){
                switch(ext[i].type){
                    case "lang":
                        langExtensions.push(ext[i]);
                        break;
                    case "output":
                        outputModifiers.push(ext[i]);
                        break;
                }
                if (ext[i].hasOwnProperty("listeners")) {
                    for(var ln in ext[i].listeners)if (ext[i].listeners.hasOwnProperty(ln)) listen(ln, ext[i].listeners[ln]);
                }
            }
        }
        /**
   * LEGACY_SUPPORT
   * @param {*} ext
   * @param {string} name
   */ function legacyExtensionLoading(ext, name) {
            if (typeof ext === "function") ext = ext(new showdown.Converter());
            if (!showdown.helper.isArray(ext)) ext = [
                ext
            ];
            var valid = validate(ext, name);
            if (!valid.valid) throw Error(valid.error);
            for(var i = 0; i < ext.length; ++i)switch(ext[i].type){
                case "lang":
                    langExtensions.push(ext[i]);
                    break;
                case "output":
                    outputModifiers.push(ext[i]);
                    break;
                default:
                    throw Error("Extension loader error: Type unrecognized!!!");
            }
        }
        /**
   * Listen to an event
   * @param {string} name
   * @param {function} callback
   */ function listen(name, callback) {
            if (!showdown.helper.isString(name)) throw Error("Invalid argument in converter.listen() method: name must be a string, but " + typeof name + " given");
            if (typeof callback !== "function") throw Error("Invalid argument in converter.listen() method: callback must be a function, but " + typeof callback + " given");
            if (!listeners.hasOwnProperty(name)) listeners[name] = [];
            listeners[name].push(callback);
        }
        function rTrimInputText(text) {
            var rsp = text.match(/^\s*/)[0].length, rgx = new RegExp("^\\s{0," + rsp + "}", "gm");
            return text.replace(rgx, "");
        }
        /**
   * Dispatch an event
   * @private
   * @param {string} evtName Event name
   * @param {string} text Text
   * @param {{}} options Converter Options
   * @param {{}} globals
   * @returns {string}
   */ this._dispatch = function dispatch(evtName, text, options, globals) {
            if (listeners.hasOwnProperty(evtName)) for(var ei = 0; ei < listeners[evtName].length; ++ei){
                var nText = listeners[evtName][ei](evtName, text, this, options, globals);
                if (nText && typeof nText !== "undefined") text = nText;
            }
            return text;
        };
        /**
   * Listen to an event
   * @param {string} name
   * @param {function} callback
   * @returns {showdown.Converter}
   */ this.listen = function(name, callback) {
            listen(name, callback);
            return this;
        };
        /**
   * Converts a markdown string into HTML
   * @param {string} text
   * @returns {*}
   */ this.makeHtml = function(text) {
            //check if text is not falsy
            if (!text) return text;
            var globals = {
                gHtmlBlocks: [],
                gHtmlMdBlocks: [],
                gHtmlSpans: [],
                gUrls: {},
                gTitles: {},
                gDimensions: {},
                gListLevel: 0,
                hashLinkCounts: {},
                langExtensions: langExtensions,
                outputModifiers: outputModifiers,
                converter: this,
                ghCodeBlocks: [],
                metadata: {
                    parsed: {},
                    raw: "",
                    format: ""
                }
            };
            // This lets us use ¨ trema as an escape char to avoid md5 hashes
            // The choice of character is arbitrary; anything that isn't
            // magic in Markdown will work.
            text = text.replace(/¨/g, "\xa8T");
            // Replace $ with ¨D
            // RegExp interprets $ as a special character
            // when it's in a replacement string
            text = text.replace(/\$/g, "\xa8D");
            // Standardize line endings
            text = text.replace(/\r\n/g, "\n"); // DOS to Unix
            text = text.replace(/\r/g, "\n"); // Mac to Unix
            // Stardardize line spaces
            text = text.replace(/\u00A0/g, "&nbsp;");
            if (options.smartIndentationFix) text = rTrimInputText(text);
            // Make sure text begins and ends with a couple of newlines:
            text = "\n\n" + text + "\n\n";
            // detab
            text = showdown.subParser("detab")(text, options, globals);
            /**
     * Strip any lines consisting only of spaces and tabs.
     * This makes subsequent regexs easier to write, because we can
     * match consecutive blank lines with /\n+/ instead of something
     * contorted like /[ \t]*\n+/
     */ text = text.replace(/^[ \t]+$/mg, "");
            //run languageExtensions
            showdown.helper.forEach(langExtensions, function(ext) {
                text = showdown.subParser("runExtension")(ext, text, options, globals);
            });
            // run the sub parsers
            text = showdown.subParser("metadata")(text, options, globals);
            text = showdown.subParser("hashPreCodeTags")(text, options, globals);
            text = showdown.subParser("githubCodeBlocks")(text, options, globals);
            text = showdown.subParser("hashHTMLBlocks")(text, options, globals);
            text = showdown.subParser("hashCodeTags")(text, options, globals);
            text = showdown.subParser("stripLinkDefinitions")(text, options, globals);
            text = showdown.subParser("blockGamut")(text, options, globals);
            text = showdown.subParser("unhashHTMLSpans")(text, options, globals);
            text = showdown.subParser("unescapeSpecialChars")(text, options, globals);
            // attacklab: Restore dollar signs
            text = text.replace(/¨D/g, "$$");
            // attacklab: Restore tremas
            text = text.replace(/¨T/g, "\xa8");
            // render a complete html document instead of a partial if the option is enabled
            text = showdown.subParser("completeHTMLDocument")(text, options, globals);
            // Run output modifiers
            showdown.helper.forEach(outputModifiers, function(ext) {
                text = showdown.subParser("runExtension")(ext, text, options, globals);
            });
            // update metadata
            metadata = globals.metadata;
            return text;
        };
        /**
   * Converts an HTML string into a markdown string
   * @param src
   * @param [HTMLParser] A WHATWG DOM and HTML parser, such as JSDOM. If none is supplied, window.document will be used.
   * @returns {string}
   */ this.makeMarkdown = this.makeMd = function(src, HTMLParser) {
            // replace \r\n with \n
            src = src.replace(/\r\n/g, "\n");
            src = src.replace(/\r/g, "\n"); // old macs
            // due to an edge case, we need to find this: > <
            // to prevent removing of non silent white spaces
            // ex: <em>this is</em> <strong>sparta</strong>
            src = src.replace(/>[ \t]+</, ">\xa8NBSP;<");
            if (!HTMLParser) {
                if (window && window.document) HTMLParser = window.document;
                else throw new Error("HTMLParser is undefined. If in a webworker or nodejs environment, you need to provide a WHATWG DOM and HTML such as JSDOM");
            }
            var doc = HTMLParser.createElement("div");
            doc.innerHTML = src;
            var globals = {
                preList: substitutePreCodeTags(doc)
            };
            // remove all newlines and collapse spaces
            clean(doc);
            // some stuff, like accidental reference links must now be escaped
            // TODO
            // doc.innerHTML = doc.innerHTML.replace(/\[[\S\t ]]/);
            var nodes = doc.childNodes, mdDoc = "";
            for(var i = 0; i < nodes.length; i++)mdDoc += showdown.subParser("makeMarkdown.node")(nodes[i], globals);
            function clean(node) {
                for(var n = 0; n < node.childNodes.length; ++n){
                    var child = node.childNodes[n];
                    if (child.nodeType === 3) {
                        if (!/\S/.test(child.nodeValue) && !/^[ ]+$/.test(child.nodeValue)) {
                            node.removeChild(child);
                            --n;
                        } else {
                            child.nodeValue = child.nodeValue.split("\n").join(" ");
                            child.nodeValue = child.nodeValue.replace(/(\s)+/g, "$1");
                        }
                    } else if (child.nodeType === 1) clean(child);
                }
            }
            // find all pre tags and replace contents with placeholder
            // we need this so that we can remove all indentation from html
            // to ease up parsing
            function substitutePreCodeTags(doc) {
                var pres = doc.querySelectorAll("pre"), presPH = [];
                for(var i = 0; i < pres.length; ++i)if (pres[i].childElementCount === 1 && pres[i].firstChild.tagName.toLowerCase() === "code") {
                    var content = pres[i].firstChild.innerHTML.trim(), language = pres[i].firstChild.getAttribute("data-language") || "";
                    // if data-language attribute is not defined, then we look for class language-*
                    if (language === "") {
                        var classes = pres[i].firstChild.className.split(" ");
                        for(var c = 0; c < classes.length; ++c){
                            var matches = classes[c].match(/^language-(.+)$/);
                            if (matches !== null) {
                                language = matches[1];
                                break;
                            }
                        }
                    }
                    // unescape html entities in content
                    content = showdown.helper.unescapeHTMLEntities(content);
                    presPH.push(content);
                    pres[i].outerHTML = '<precode language="' + language + '" precodenum="' + i.toString() + '"></precode>';
                } else {
                    presPH.push(pres[i].innerHTML);
                    pres[i].innerHTML = "";
                    pres[i].setAttribute("prenum", i.toString());
                }
                return presPH;
            }
            return mdDoc;
        };
        /**
   * Set an option of this Converter instance
   * @param {string} key
   * @param {*} value
   */ this.setOption = function(key, value) {
            options[key] = value;
        };
        /**
   * Get the option of this Converter instance
   * @param {string} key
   * @returns {*}
   */ this.getOption = function(key) {
            return options[key];
        };
        /**
   * Get the options of this Converter instance
   * @returns {{}}
   */ this.getOptions = function() {
            return options;
        };
        /**
   * Add extension to THIS converter
   * @param {{}} extension
   * @param {string} [name=null]
   */ this.addExtension = function(extension, name) {
            name = name || null;
            _parseExtension(extension, name);
        };
        /**
   * Use a global registered extension with THIS converter
   * @param {string} extensionName Name of the previously registered extension
   */ this.useExtension = function(extensionName) {
            _parseExtension(extensionName);
        };
        /**
   * Set the flavor THIS converter should use
   * @param {string} name
   */ this.setFlavor = function(name) {
            if (!flavor.hasOwnProperty(name)) throw Error(name + " flavor was not found");
            var preset = flavor[name];
            setConvFlavor = name;
            for(var option in preset)if (preset.hasOwnProperty(option)) options[option] = preset[option];
        };
        /**
   * Get the currently set flavor of this converter
   * @returns {string}
   */ this.getFlavor = function() {
            return setConvFlavor;
        };
        /**
   * Remove an extension from THIS converter.
   * Note: This is a costly operation. It's better to initialize a new converter
   * and specify the extensions you wish to use
   * @param {Array} extension
   */ this.removeExtension = function(extension) {
            if (!showdown.helper.isArray(extension)) extension = [
                extension
            ];
            for(var a = 0; a < extension.length; ++a){
                var ext = extension[a];
                for(var i = 0; i < langExtensions.length; ++i)if (langExtensions[i] === ext) langExtensions.splice(i, 1);
                for(var ii = 0; ii < outputModifiers.length; ++ii)if (outputModifiers[ii] === ext) outputModifiers.splice(ii, 1);
            }
        };
        /**
   * Get all extension of THIS converter
   * @returns {{language: Array, output: Array}}
   */ this.getAllExtensions = function() {
            return {
                language: langExtensions,
                output: outputModifiers
            };
        };
        /**
   * Get the metadata of the previously parsed document
   * @param raw
   * @returns {string|{}}
   */ this.getMetadata = function(raw) {
            if (raw) return metadata.raw;
            else return metadata.parsed;
        };
        /**
   * Get the metadata format of the previously parsed document
   * @returns {string}
   */ this.getMetadataFormat = function() {
            return metadata.format;
        };
        /**
   * Private: set a single key, value metadata pair
   * @param {string} key
   * @param {string} value
   */ this._setMetadataPair = function(key, value) {
            metadata.parsed[key] = value;
        };
        /**
   * Private: set metadata format
   * @param {string} format
   */ this._setMetadataFormat = function(format) {
            metadata.format = format;
        };
        /**
   * Private: set metadata raw text
   * @param {string} raw
   */ this._setMetadataRaw = function(raw) {
            metadata.raw = raw;
        };
    };
    /**
 * Turn Markdown link shortcuts into XHTML <a> tags.
 */ showdown.subParser("anchors", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("anchors.before", text, options, globals);
        var writeAnchorTag = function(wholeMatch, linkText, linkId, url, m5, m6, title) {
            if (showdown.helper.isUndefined(title)) title = "";
            linkId = linkId.toLowerCase();
            // Special case for explicit empty url
            if (wholeMatch.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1) url = "";
            else if (!url) {
                if (!linkId) // lower-case and turn embedded newlines into spaces
                linkId = linkText.toLowerCase().replace(/ ?\n/g, " ");
                url = "#" + linkId;
                if (!showdown.helper.isUndefined(globals.gUrls[linkId])) {
                    url = globals.gUrls[linkId];
                    if (!showdown.helper.isUndefined(globals.gTitles[linkId])) title = globals.gTitles[linkId];
                } else return wholeMatch;
            }
            //url = showdown.helper.escapeCharacters(url, '*_', false); // replaced line to improve performance
            url = url.replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);
            var result = '<a href="' + url + '"';
            if (title !== "" && title !== null) {
                title = title.replace(/"/g, "&quot;");
                //title = showdown.helper.escapeCharacters(title, '*_', false); // replaced line to improve performance
                title = title.replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);
                result += ' title="' + title + '"';
            }
            // optionLinksInNewWindow only applies
            // to external links. Hash links (#) open in same page
            if (options.openLinksInNewWindow && !/^#/.test(url)) // escaped _
            result += ' rel="noopener noreferrer" target="\xa8E95Eblank"';
            result += ">" + linkText + "</a>";
            return result;
        };
        // First, handle reference-style links: [link text] [id]
        text = text.replace(/\[((?:\[[^\]]*]|[^\[\]])*)] ?(?:\n *)?\[(.*?)]()()()()/g, writeAnchorTag);
        // Next, inline-style links: [link text](url "optional title")
        // cases with crazy urls like ./image/cat1).png
        text = text.replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<([^>]*)>(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g, writeAnchorTag);
        // normal cases
        text = text.replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g, writeAnchorTag);
        // handle reference-style shortcuts: [link text]
        // These must come last in case you've also got [link test][1]
        // or [link test](/foo)
        text = text.replace(/\[([^\[\]]+)]()()()()()/g, writeAnchorTag);
        // Lastly handle GithubMentions if option is enabled
        if (options.ghMentions) text = text.replace(/(^|\s)(\\)?(@([a-z\d]+(?:[a-z\d.-]+?[a-z\d]+)*))/gmi, function(wm, st, escape, mentions, username) {
            if (escape === "\\") return st + mentions;
            //check if options.ghMentionsLink is a string
            if (!showdown.helper.isString(options.ghMentionsLink)) throw new Error("ghMentionsLink option must be a string");
            var lnk = options.ghMentionsLink.replace(/\{u}/g, username), target = "";
            if (options.openLinksInNewWindow) target = ' rel="noopener noreferrer" target="\xa8E95Eblank"';
            return st + '<a href="' + lnk + '"' + target + ">" + mentions + "</a>";
        });
        text = globals.converter._dispatch("anchors.after", text, options, globals);
        return text;
    });
    // url allowed chars [a-z\d_.~:/?#[]@!$&'()*+,;=-]
    var simpleURLRegex = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+?\.[^'">\s]+?)()(\1)?(?=\s|$)(?!["<>])/gi, simpleURLRegex2 = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+?)([.!?,()\[\]])?(\1)?(?=\s|$)(?!["<>])/gi, delimUrlRegex = /()<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)()>()/gi, simpleMailRegex = /(^|\s)(?:mailto:)?([A-Za-z0-9!#$%&'*+-/=?^_`{|}~.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?=$|\s)/gmi, delimMailRegex = /<()(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi, replaceLink = function(options) {
        "use strict";
        return function(wm, leadingMagicChars, link, m2, m3, trailingPunctuation, trailingMagicChars) {
            link = link.replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);
            var lnkTxt = link, append = "", target = "", lmc = leadingMagicChars || "", tmc = trailingMagicChars || "";
            if (/^www\./i.test(link)) link = link.replace(/^www\./i, "http://www.");
            if (options.excludeTrailingPunctuationFromURLs && trailingPunctuation) append = trailingPunctuation;
            if (options.openLinksInNewWindow) target = ' rel="noopener noreferrer" target="\xa8E95Eblank"';
            return lmc + '<a href="' + link + '"' + target + ">" + lnkTxt + "</a>" + append + tmc;
        };
    }, replaceMail = function(options, globals) {
        "use strict";
        return function(wholeMatch, b, mail) {
            var href = "mailto:";
            b = b || "";
            mail = showdown.subParser("unescapeSpecialChars")(mail, options, globals);
            if (options.encodeEmails) {
                href = showdown.helper.encodeEmailAddress(href + mail);
                mail = showdown.helper.encodeEmailAddress(mail);
            } else href = href + mail;
            return b + '<a href="' + href + '">' + mail + "</a>";
        };
    };
    showdown.subParser("autoLinks", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("autoLinks.before", text, options, globals);
        text = text.replace(delimUrlRegex, replaceLink(options));
        text = text.replace(delimMailRegex, replaceMail(options, globals));
        text = globals.converter._dispatch("autoLinks.after", text, options, globals);
        return text;
    });
    showdown.subParser("simplifiedAutoLinks", function(text, options, globals) {
        "use strict";
        if (!options.simplifiedAutoLink) return text;
        text = globals.converter._dispatch("simplifiedAutoLinks.before", text, options, globals);
        if (options.excludeTrailingPunctuationFromURLs) text = text.replace(simpleURLRegex2, replaceLink(options));
        else text = text.replace(simpleURLRegex, replaceLink(options));
        text = text.replace(simpleMailRegex, replaceMail(options, globals));
        text = globals.converter._dispatch("simplifiedAutoLinks.after", text, options, globals);
        return text;
    });
    /**
 * These are all the transformations that form block-level
 * tags like paragraphs, headers, and list items.
 */ showdown.subParser("blockGamut", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("blockGamut.before", text, options, globals);
        // we parse blockquotes first so that we can have headings and hrs
        // inside blockquotes
        text = showdown.subParser("blockQuotes")(text, options, globals);
        text = showdown.subParser("headers")(text, options, globals);
        // Do Horizontal Rules:
        text = showdown.subParser("horizontalRule")(text, options, globals);
        text = showdown.subParser("lists")(text, options, globals);
        text = showdown.subParser("codeBlocks")(text, options, globals);
        text = showdown.subParser("tables")(text, options, globals);
        // We already ran _HashHTMLBlocks() before, in Markdown(), but that
        // was to escape raw HTML in the original Markdown source. This time,
        // we're escaping the markup we've just created, so that we don't wrap
        // <p> tags around block-level tags.
        text = showdown.subParser("hashHTMLBlocks")(text, options, globals);
        text = showdown.subParser("paragraphs")(text, options, globals);
        text = globals.converter._dispatch("blockGamut.after", text, options, globals);
        return text;
    });
    showdown.subParser("blockQuotes", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("blockQuotes.before", text, options, globals);
        // add a couple extra lines after the text and endtext mark
        text = text + "\n\n";
        var rgx = /(^ {0,3}>[ \t]?.+\n(.+\n)*\n*)+/gm;
        if (options.splitAdjacentBlockquotes) rgx = /^ {0,3}>[\s\S]*?(?:\n\n)/gm;
        text = text.replace(rgx, function(bq) {
            // attacklab: hack around Konqueror 3.5.4 bug:
            // "----------bug".replace(/^-/g,"") == "bug"
            bq = bq.replace(/^[ \t]*>[ \t]?/gm, ""); // trim one level of quoting
            // attacklab: clean up hack
            bq = bq.replace(/¨0/g, "");
            bq = bq.replace(/^[ \t]+$/gm, ""); // trim whitespace-only lines
            bq = showdown.subParser("githubCodeBlocks")(bq, options, globals);
            bq = showdown.subParser("blockGamut")(bq, options, globals); // recurse
            bq = bq.replace(/(^|\n)/g, "$1  ");
            // These leading spaces screw with <pre> content, so we need to fix that:
            bq = bq.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm, function(wholeMatch, m1) {
                var pre = m1;
                // attacklab: hack around Konqueror 3.5.4 bug:
                pre = pre.replace(/^  /mg, "\xa80");
                pre = pre.replace(/¨0/g, "");
                return pre;
            });
            return showdown.subParser("hashBlock")("<blockquote>\n" + bq + "\n</blockquote>", options, globals);
        });
        text = globals.converter._dispatch("blockQuotes.after", text, options, globals);
        return text;
    });
    /**
 * Process Markdown `<pre><code>` blocks.
 */ showdown.subParser("codeBlocks", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("codeBlocks.before", text, options, globals);
        // sentinel workarounds for lack of \A and \Z, safari\khtml bug
        text += "\xa80";
        var pattern = /(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=¨0))/g;
        text = text.replace(pattern, function(wholeMatch, m1, m2) {
            var codeblock = m1, nextChar = m2, end = "\n";
            codeblock = showdown.subParser("outdent")(codeblock, options, globals);
            codeblock = showdown.subParser("encodeCode")(codeblock, options, globals);
            codeblock = showdown.subParser("detab")(codeblock, options, globals);
            codeblock = codeblock.replace(/^\n+/g, ""); // trim leading newlines
            codeblock = codeblock.replace(/\n+$/g, ""); // trim trailing newlines
            if (options.omitExtraWLInCodeBlocks) end = "";
            codeblock = "<pre><code>" + codeblock + end + "</code></pre>";
            return showdown.subParser("hashBlock")(codeblock, options, globals) + nextChar;
        });
        // strip sentinel
        text = text.replace(/¨0/, "");
        text = globals.converter._dispatch("codeBlocks.after", text, options, globals);
        return text;
    });
    /**
 *
 *   *  Backtick quotes are used for <code></code> spans.
 *
 *   *  You can use multiple backticks as the delimiters if you want to
 *     include literal backticks in the code span. So, this input:
 *
 *         Just type ``foo `bar` baz`` at the prompt.
 *
 *       Will translate to:
 *
 *         <p>Just type <code>foo `bar` baz</code> at the prompt.</p>
 *
 *    There's no arbitrary limit to the number of backticks you
 *    can use as delimters. If you need three consecutive backticks
 *    in your code, use four for delimiters, etc.
 *
 *  *  You can use spaces to get literal backticks at the edges:
 *
 *         ... type `` `bar` `` ...
 *
 *       Turns to:
 *
 *         ... type <code>`bar`</code> ...
 */ showdown.subParser("codeSpans", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("codeSpans.before", text, options, globals);
        if (typeof text === "undefined") text = "";
        text = text.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm, function(wholeMatch, m1, m2, m3) {
            var c = m3;
            c = c.replace(/^([ \t]*)/g, ""); // leading whitespace
            c = c.replace(/[ \t]*$/g, ""); // trailing whitespace
            c = showdown.subParser("encodeCode")(c, options, globals);
            c = m1 + "<code>" + c + "</code>";
            c = showdown.subParser("hashHTMLSpans")(c, options, globals);
            return c;
        });
        text = globals.converter._dispatch("codeSpans.after", text, options, globals);
        return text;
    });
    /**
 * Create a full HTML document from the processed markdown
 */ showdown.subParser("completeHTMLDocument", function(text, options, globals) {
        "use strict";
        if (!options.completeHTMLDocument) return text;
        text = globals.converter._dispatch("completeHTMLDocument.before", text, options, globals);
        var doctype = "html", doctypeParsed = "<!DOCTYPE HTML>\n", title = "", charset = '<meta charset="utf-8">\n', lang = "", metadata = "";
        if (typeof globals.metadata.parsed.doctype !== "undefined") {
            doctypeParsed = "<!DOCTYPE " + globals.metadata.parsed.doctype + ">\n";
            doctype = globals.metadata.parsed.doctype.toString().toLowerCase();
            if (doctype === "html" || doctype === "html5") charset = '<meta charset="utf-8">';
        }
        for(var meta in globals.metadata.parsed)if (globals.metadata.parsed.hasOwnProperty(meta)) switch(meta.toLowerCase()){
            case "doctype":
                break;
            case "title":
                title = "<title>" + globals.metadata.parsed.title + "</title>\n";
                break;
            case "charset":
                if (doctype === "html" || doctype === "html5") charset = '<meta charset="' + globals.metadata.parsed.charset + '">\n';
                else charset = '<meta name="charset" content="' + globals.metadata.parsed.charset + '">\n';
                break;
            case "language":
            case "lang":
                lang = ' lang="' + globals.metadata.parsed[meta] + '"';
                metadata += '<meta name="' + meta + '" content="' + globals.metadata.parsed[meta] + '">\n';
                break;
            default:
                metadata += '<meta name="' + meta + '" content="' + globals.metadata.parsed[meta] + '">\n';
        }
        text = doctypeParsed + "<html" + lang + ">\n<head>\n" + title + charset + metadata + "</head>\n<body>\n" + text.trim() + "\n</body>\n</html>";
        text = globals.converter._dispatch("completeHTMLDocument.after", text, options, globals);
        return text;
    });
    /**
 * Convert all tabs to spaces
 */ showdown.subParser("detab", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("detab.before", text, options, globals);
        // expand first n-1 tabs
        text = text.replace(/\t(?=\t)/g, "    "); // g_tab_width
        // replace the nth with two sentinels
        text = text.replace(/\t/g, "\xa8A\xa8B");
        // use the sentinel to anchor our regex so it doesn't explode
        text = text.replace(/¨B(.+?)¨A/g, function(wholeMatch, m1) {
            var leadingText = m1, numSpaces = 4 - leadingText.length % 4; // g_tab_width
            // there *must* be a better way to do this:
            for(var i = 0; i < numSpaces; i++)leadingText += " ";
            return leadingText;
        });
        // clean up sentinels
        text = text.replace(/¨A/g, "    "); // g_tab_width
        text = text.replace(/¨B/g, "");
        text = globals.converter._dispatch("detab.after", text, options, globals);
        return text;
    });
    showdown.subParser("ellipsis", function(text, options, globals) {
        "use strict";
        if (!options.ellipsis) return text;
        text = globals.converter._dispatch("ellipsis.before", text, options, globals);
        text = text.replace(/\.\.\./g, "…");
        text = globals.converter._dispatch("ellipsis.after", text, options, globals);
        return text;
    });
    /**
 * Turn emoji codes into emojis
 *
 * List of supported emojis: https://github.com/showdownjs/showdown/wiki/Emojis
 */ showdown.subParser("emoji", function(text, options, globals) {
        "use strict";
        if (!options.emoji) return text;
        text = globals.converter._dispatch("emoji.before", text, options, globals);
        var emojiRgx = /:([\S]+?):/g;
        text = text.replace(emojiRgx, function(wm, emojiCode) {
            if (showdown.helper.emojis.hasOwnProperty(emojiCode)) return showdown.helper.emojis[emojiCode];
            return wm;
        });
        text = globals.converter._dispatch("emoji.after", text, options, globals);
        return text;
    });
    /**
 * Smart processing for ampersands and angle brackets that need to be encoded.
 */ showdown.subParser("encodeAmpsAndAngles", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("encodeAmpsAndAngles.before", text, options, globals);
        // Ampersand-encoding based entirely on Nat Irons's Amputator MT plugin:
        // http://bumppo.net/projects/amputator/
        text = text.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g, "&amp;");
        // Encode naked <'s
        text = text.replace(/<(?![a-z\/?$!])/gi, "&lt;");
        // Encode <
        text = text.replace(/</g, "&lt;");
        // Encode >
        text = text.replace(/>/g, "&gt;");
        text = globals.converter._dispatch("encodeAmpsAndAngles.after", text, options, globals);
        return text;
    });
    /**
 * Returns the string, with after processing the following backslash escape sequences.
 *
 * attacklab: The polite way to do this is with the new escapeCharacters() function:
 *
 *    text = escapeCharacters(text,"\\",true);
 *    text = escapeCharacters(text,"`*_{}[]()>#+-.!",true);
 *
 * ...but we're sidestepping its use of the (slow) RegExp constructor
 * as an optimization for Firefox.  This function gets called a LOT.
 */ showdown.subParser("encodeBackslashEscapes", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("encodeBackslashEscapes.before", text, options, globals);
        text = text.replace(/\\(\\)/g, showdown.helper.escapeCharactersCallback);
        text = text.replace(/\\([`*_{}\[\]()>#+.!~=|:-])/g, showdown.helper.escapeCharactersCallback);
        text = globals.converter._dispatch("encodeBackslashEscapes.after", text, options, globals);
        return text;
    });
    /**
 * Encode/escape certain characters inside Markdown code runs.
 * The point is that in code, these characters are literals,
 * and lose their special Markdown meanings.
 */ showdown.subParser("encodeCode", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("encodeCode.before", text, options, globals);
        // Encode all ampersands; HTML entities are not
        // entities within a Markdown code span.
        text = text.replace(/&/g, "&amp;")// Do the angle bracket song and dance:
        .replace(/</g, "&lt;").replace(/>/g, "&gt;")// Now, escape characters that are magic in Markdown:
        .replace(/([*_{}\[\]\\=~-])/g, showdown.helper.escapeCharactersCallback);
        text = globals.converter._dispatch("encodeCode.after", text, options, globals);
        return text;
    });
    /**
 * Within tags -- meaning between < and > -- encode [\ ` * _ ~ =] so they
 * don't conflict with their use in Markdown for code, italics and strong.
 */ showdown.subParser("escapeSpecialCharsWithinTagAttributes", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("escapeSpecialCharsWithinTagAttributes.before", text, options, globals);
        // Build a regex to find HTML tags.
        var tags = /<\/?[a-z\d_:-]+(?:[\s]+[\s\S]+?)?>/gi, comments = /<!(--(?:(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>/gi;
        text = text.replace(tags, function(wholeMatch) {
            return wholeMatch.replace(/(.)<\/?code>(?=.)/g, "$1`").replace(/([\\`*_~=|])/g, showdown.helper.escapeCharactersCallback);
        });
        text = text.replace(comments, function(wholeMatch) {
            return wholeMatch.replace(/([\\`*_~=|])/g, showdown.helper.escapeCharactersCallback);
        });
        text = globals.converter._dispatch("escapeSpecialCharsWithinTagAttributes.after", text, options, globals);
        return text;
    });
    /**
 * Handle github codeblocks prior to running HashHTML so that
 * HTML contained within the codeblock gets escaped properly
 * Example:
 * ```ruby
 *     def hello_world(x)
 *       puts "Hello, #{x}"
 *     end
 * ```
 */ showdown.subParser("githubCodeBlocks", function(text, options, globals) {
        "use strict";
        // early exit if option is not enabled
        if (!options.ghCodeBlocks) return text;
        text = globals.converter._dispatch("githubCodeBlocks.before", text, options, globals);
        text += "\xa80";
        text = text.replace(/(?:^|\n)(?: {0,3})(```+|~~~+)(?: *)([^\s`~]*)\n([\s\S]*?)\n(?: {0,3})\1/g, function(wholeMatch, delim, language, codeblock) {
            var end = options.omitExtraWLInCodeBlocks ? "" : "\n";
            // First parse the github code block
            codeblock = showdown.subParser("encodeCode")(codeblock, options, globals);
            codeblock = showdown.subParser("detab")(codeblock, options, globals);
            codeblock = codeblock.replace(/^\n+/g, ""); // trim leading newlines
            codeblock = codeblock.replace(/\n+$/g, ""); // trim trailing whitespace
            codeblock = "<pre><code" + (language ? ' class="' + language + " language-" + language + '"' : "") + ">" + codeblock + end + "</code></pre>";
            codeblock = showdown.subParser("hashBlock")(codeblock, options, globals);
            // Since GHCodeblocks can be false positives, we need to
            // store the primitive text and the parsed text in a global var,
            // and then return a token
            return "\n\n\xa8G" + (globals.ghCodeBlocks.push({
                text: wholeMatch,
                codeblock: codeblock
            }) - 1) + "G\n\n";
        });
        // attacklab: strip sentinel
        text = text.replace(/¨0/, "");
        return globals.converter._dispatch("githubCodeBlocks.after", text, options, globals);
    });
    showdown.subParser("hashBlock", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("hashBlock.before", text, options, globals);
        text = text.replace(/(^\n+|\n+$)/g, "");
        text = "\n\n\xa8K" + (globals.gHtmlBlocks.push(text) - 1) + "K\n\n";
        text = globals.converter._dispatch("hashBlock.after", text, options, globals);
        return text;
    });
    /**
 * Hash and escape <code> elements that should not be parsed as markdown
 */ showdown.subParser("hashCodeTags", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("hashCodeTags.before", text, options, globals);
        var repFunc = function(wholeMatch, match, left, right) {
            var codeblock = left + showdown.subParser("encodeCode")(match, options, globals) + right;
            return "\xa8C" + (globals.gHtmlSpans.push(codeblock) - 1) + "C";
        };
        // Hash naked <code>
        text = showdown.helper.replaceRecursiveRegExp(text, repFunc, "<code\\b[^>]*>", "</code>", "gim");
        text = globals.converter._dispatch("hashCodeTags.after", text, options, globals);
        return text;
    });
    showdown.subParser("hashElement", function(text, options, globals) {
        "use strict";
        return function(wholeMatch, m1) {
            var blockText = m1;
            // Undo double lines
            blockText = blockText.replace(/\n\n/g, "\n");
            blockText = blockText.replace(/^\n/, "");
            // strip trailing blank lines
            blockText = blockText.replace(/\n+$/g, "");
            // Replace the element text with a marker ("¨KxK" where x is its key)
            blockText = "\n\n\xa8K" + (globals.gHtmlBlocks.push(blockText) - 1) + "K\n\n";
            return blockText;
        };
    });
    showdown.subParser("hashHTMLBlocks", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("hashHTMLBlocks.before", text, options, globals);
        var blockTags = [
            "pre",
            "div",
            "h1",
            "h2",
            "h3",
            "h4",
            "h5",
            "h6",
            "blockquote",
            "table",
            "dl",
            "ol",
            "ul",
            "script",
            "noscript",
            "form",
            "fieldset",
            "iframe",
            "math",
            "style",
            "section",
            "header",
            "footer",
            "nav",
            "article",
            "aside",
            "address",
            "audio",
            "canvas",
            "figure",
            "hgroup",
            "output",
            "video",
            "p"
        ], repFunc = function(wholeMatch, match, left, right) {
            var txt = wholeMatch;
            // check if this html element is marked as markdown
            // if so, it's contents should be parsed as markdown
            if (left.search(/\bmarkdown\b/) !== -1) txt = left + globals.converter.makeHtml(match) + right;
            return "\n\n\xa8K" + (globals.gHtmlBlocks.push(txt) - 1) + "K\n\n";
        };
        if (options.backslashEscapesHTMLTags) // encode backslash escaped HTML tags
        text = text.replace(/\\<(\/?[^>]+?)>/g, function(wm, inside) {
            return "&lt;" + inside + "&gt;";
        });
        // hash HTML Blocks
        for(var i = 0; i < blockTags.length; ++i){
            var opTagPos, rgx1 = new RegExp("^ {0,3}(<" + blockTags[i] + "\\b[^>]*>)", "im"), patLeft = "<" + blockTags[i] + "\\b[^>]*>", patRight = "</" + blockTags[i] + ">";
            // 1. Look for the first position of the first opening HTML tag in the text
            while((opTagPos = showdown.helper.regexIndexOf(text, rgx1)) !== -1){
                // if the HTML tag is \ escaped, we need to escape it and break
                //2. Split the text in that position
                var subTexts = showdown.helper.splitAtIndex(text, opTagPos), //3. Match recursively
                newSubText1 = showdown.helper.replaceRecursiveRegExp(subTexts[1], repFunc, patLeft, patRight, "im");
                // prevent an infinite loop
                if (newSubText1 === subTexts[1]) break;
                text = subTexts[0].concat(newSubText1);
            }
        }
        // HR SPECIAL CASE
        text = text.replace(/(\n {0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g, showdown.subParser("hashElement")(text, options, globals));
        // Special case for standalone HTML comments
        text = showdown.helper.replaceRecursiveRegExp(text, function(txt) {
            return "\n\n\xa8K" + (globals.gHtmlBlocks.push(txt) - 1) + "K\n\n";
        }, "^ {0,3}<!--", "-->", "gm");
        // PHP and ASP-style processor instructions (<?...?> and <%...%>)
        text = text.replace(/(?:\n\n)( {0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g, showdown.subParser("hashElement")(text, options, globals));
        text = globals.converter._dispatch("hashHTMLBlocks.after", text, options, globals);
        return text;
    });
    /**
 * Hash span elements that should not be parsed as markdown
 */ showdown.subParser("hashHTMLSpans", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("hashHTMLSpans.before", text, options, globals);
        function hashHTMLSpan(html) {
            return "\xa8C" + (globals.gHtmlSpans.push(html) - 1) + "C";
        }
        // Hash Self Closing tags
        text = text.replace(/<[^>]+?\/>/gi, function(wm) {
            return hashHTMLSpan(wm);
        });
        // Hash tags without properties
        text = text.replace(/<([^>]+?)>[\s\S]*?<\/\1>/g, function(wm) {
            return hashHTMLSpan(wm);
        });
        // Hash tags with properties
        text = text.replace(/<([^>]+?)\s[^>]+?>[\s\S]*?<\/\1>/g, function(wm) {
            return hashHTMLSpan(wm);
        });
        // Hash self closing tags without />
        text = text.replace(/<[^>]+?>/gi, function(wm) {
            return hashHTMLSpan(wm);
        });
        /*showdown.helper.matchRecursiveRegExp(text, '<code\\b[^>]*>', '</code>', 'gi');*/ text = globals.converter._dispatch("hashHTMLSpans.after", text, options, globals);
        return text;
    });
    /**
 * Unhash HTML spans
 */ showdown.subParser("unhashHTMLSpans", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("unhashHTMLSpans.before", text, options, globals);
        for(var i = 0; i < globals.gHtmlSpans.length; ++i){
            var repText = globals.gHtmlSpans[i], // limiter to prevent infinite loop (assume 10 as limit for recurse)
            limit = 0;
            while(/¨C(\d+)C/.test(repText)){
                var num = RegExp.$1;
                repText = repText.replace("\xa8C" + num + "C", globals.gHtmlSpans[num]);
                if (limit === 10) {
                    console.error("maximum nesting of 10 spans reached!!!");
                    break;
                }
                ++limit;
            }
            text = text.replace("\xa8C" + i + "C", repText);
        }
        text = globals.converter._dispatch("unhashHTMLSpans.after", text, options, globals);
        return text;
    });
    /**
 * Hash and escape <pre><code> elements that should not be parsed as markdown
 */ showdown.subParser("hashPreCodeTags", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("hashPreCodeTags.before", text, options, globals);
        var repFunc = function(wholeMatch, match, left, right) {
            // encode html entities
            var codeblock = left + showdown.subParser("encodeCode")(match, options, globals) + right;
            return "\n\n\xa8G" + (globals.ghCodeBlocks.push({
                text: wholeMatch,
                codeblock: codeblock
            }) - 1) + "G\n\n";
        };
        // Hash <pre><code>
        text = showdown.helper.replaceRecursiveRegExp(text, repFunc, "^ {0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>", "^ {0,3}</code>\\s*</pre>", "gim");
        text = globals.converter._dispatch("hashPreCodeTags.after", text, options, globals);
        return text;
    });
    showdown.subParser("headers", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("headers.before", text, options, globals);
        var headerLevelStart = isNaN(parseInt(options.headerLevelStart)) ? 1 : parseInt(options.headerLevelStart), // Set text-style headers:
        //	Header 1
        //	========
        //
        //	Header 2
        //	--------
        //
        setextRegexH1 = options.smoothLivePreview ? /^(.+)[ \t]*\n={2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n=+[ \t]*\n+/gm, setextRegexH2 = options.smoothLivePreview ? /^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n-+[ \t]*\n+/gm;
        text = text.replace(setextRegexH1, function(wholeMatch, m1) {
            var spanGamut = showdown.subParser("spanGamut")(m1, options, globals), hID = options.noHeaderId ? "" : ' id="' + headerId(m1) + '"', hLevel = headerLevelStart, hashBlock = "<h" + hLevel + hID + ">" + spanGamut + "</h" + hLevel + ">";
            return showdown.subParser("hashBlock")(hashBlock, options, globals);
        });
        text = text.replace(setextRegexH2, function(matchFound, m1) {
            var spanGamut = showdown.subParser("spanGamut")(m1, options, globals), hID = options.noHeaderId ? "" : ' id="' + headerId(m1) + '"', hLevel = headerLevelStart + 1, hashBlock = "<h" + hLevel + hID + ">" + spanGamut + "</h" + hLevel + ">";
            return showdown.subParser("hashBlock")(hashBlock, options, globals);
        });
        // atx-style headers:
        //  # Header 1
        //  ## Header 2
        //  ## Header 2 with closing hashes ##
        //  ...
        //  ###### Header 6
        //
        var atxStyle = options.requireSpaceBeforeHeadingText ? /^(#{1,6})[ \t]+(.+?)[ \t]*#*\n+/gm : /^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm;
        text = text.replace(atxStyle, function(wholeMatch, m1, m2) {
            var hText = m2;
            if (options.customizedHeaderId) hText = m2.replace(/\s?\{([^{]+?)}\s*$/, "");
            var span = showdown.subParser("spanGamut")(hText, options, globals), hID = options.noHeaderId ? "" : ' id="' + headerId(m2) + '"', hLevel = headerLevelStart - 1 + m1.length, header = "<h" + hLevel + hID + ">" + span + "</h" + hLevel + ">";
            return showdown.subParser("hashBlock")(header, options, globals);
        });
        function headerId(m) {
            var title, prefix;
            // It is separate from other options to allow combining prefix and customized
            if (options.customizedHeaderId) {
                var match = m.match(/\{([^{]+?)}\s*$/);
                if (match && match[1]) m = match[1];
            }
            title = m;
            // Prefix id to prevent causing inadvertent pre-existing style matches.
            if (showdown.helper.isString(options.prefixHeaderId)) prefix = options.prefixHeaderId;
            else if (options.prefixHeaderId === true) prefix = "section-";
            else prefix = "";
            if (!options.rawPrefixHeaderId) title = prefix + title;
            if (options.ghCompatibleHeaderId) title = title.replace(/ /g, "-")// replace previously escaped chars (&, ¨ and $)
            .replace(/&amp;/g, "").replace(/¨T/g, "").replace(/¨D/g, "")// replace rest of the chars (&~$ are repeated as they might have been escaped)
            // borrowed from github's redcarpet (some they should produce similar results)
            .replace(/[&+$,\/:;=?@"#{}|^¨~\[\]`\\*)(%.!'<>]/g, "").toLowerCase();
            else if (options.rawHeaderId) title = title.replace(/ /g, "-")// replace previously escaped chars (&, ¨ and $)
            .replace(/&amp;/g, "&").replace(/¨T/g, "\xa8").replace(/¨D/g, "$")// replace " and '
            .replace(/["']/g, "-").toLowerCase();
            else title = title.replace(/[^\w]/g, "").toLowerCase();
            if (options.rawPrefixHeaderId) title = prefix + title;
            if (globals.hashLinkCounts[title]) title = title + "-" + globals.hashLinkCounts[title]++;
            else globals.hashLinkCounts[title] = 1;
            return title;
        }
        text = globals.converter._dispatch("headers.after", text, options, globals);
        return text;
    });
    /**
 * Turn Markdown link shortcuts into XHTML <a> tags.
 */ showdown.subParser("horizontalRule", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("horizontalRule.before", text, options, globals);
        var key = showdown.subParser("hashBlock")("<hr />", options, globals);
        text = text.replace(/^ {0,2}( ?-){3,}[ \t]*$/gm, key);
        text = text.replace(/^ {0,2}( ?\*){3,}[ \t]*$/gm, key);
        text = text.replace(/^ {0,2}( ?_){3,}[ \t]*$/gm, key);
        text = globals.converter._dispatch("horizontalRule.after", text, options, globals);
        return text;
    });
    /**
 * Turn Markdown image shortcuts into <img> tags.
 */ showdown.subParser("images", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("images.before", text, options, globals);
        var inlineRegExp = /!\[([^\]]*?)][ \t]*()\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g, crazyRegExp = /!\[([^\]]*?)][ \t]*()\([ \t]?<([^>]*)>(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(?:(["'])([^"]*?)\6))?[ \t]?\)/g, base64RegExp = /!\[([^\]]*?)][ \t]*()\([ \t]?<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g, referenceRegExp = /!\[([^\]]*?)] ?(?:\n *)?\[([\s\S]*?)]()()()()()/g, refShortcutRegExp = /!\[([^\[\]]+)]()()()()()/g;
        function writeImageTagBase64(wholeMatch, altText, linkId, url, width, height, m5, title) {
            url = url.replace(/\s/g, "");
            return writeImageTag(wholeMatch, altText, linkId, url, width, height, m5, title);
        }
        function writeImageTag(wholeMatch, altText, linkId, url, width, height, m5, title) {
            var gUrls = globals.gUrls, gTitles = globals.gTitles, gDims = globals.gDimensions;
            linkId = linkId.toLowerCase();
            if (!title) title = "";
            // Special case for explicit empty url
            if (wholeMatch.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1) url = "";
            else if (url === "" || url === null) {
                if (linkId === "" || linkId === null) // lower-case and turn embedded newlines into spaces
                linkId = altText.toLowerCase().replace(/ ?\n/g, " ");
                url = "#" + linkId;
                if (!showdown.helper.isUndefined(gUrls[linkId])) {
                    url = gUrls[linkId];
                    if (!showdown.helper.isUndefined(gTitles[linkId])) title = gTitles[linkId];
                    if (!showdown.helper.isUndefined(gDims[linkId])) {
                        width = gDims[linkId].width;
                        height = gDims[linkId].height;
                    }
                } else return wholeMatch;
            }
            altText = altText.replace(/"/g, "&quot;")//altText = showdown.helper.escapeCharacters(altText, '*_', false);
            .replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);
            //url = showdown.helper.escapeCharacters(url, '*_', false);
            url = url.replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);
            var result = '<img src="' + url + '" alt="' + altText + '"';
            if (title && showdown.helper.isString(title)) {
                title = title.replace(/"/g, "&quot;")//title = showdown.helper.escapeCharacters(title, '*_', false);
                .replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);
                result += ' title="' + title + '"';
            }
            if (width && height) {
                width = width === "*" ? "auto" : width;
                height = height === "*" ? "auto" : height;
                result += ' width="' + width + '"';
                result += ' height="' + height + '"';
            }
            result += " />";
            return result;
        }
        // First, handle reference-style labeled images: ![alt text][id]
        text = text.replace(referenceRegExp, writeImageTag);
        // Next, handle inline images:  ![alt text](url =<width>x<height> "optional title")
        // base64 encoded images
        text = text.replace(base64RegExp, writeImageTagBase64);
        // cases with crazy urls like ./image/cat1).png
        text = text.replace(crazyRegExp, writeImageTag);
        // normal cases
        text = text.replace(inlineRegExp, writeImageTag);
        // handle reference-style shortcuts: ![img text]
        text = text.replace(refShortcutRegExp, writeImageTag);
        text = globals.converter._dispatch("images.after", text, options, globals);
        return text;
    });
    showdown.subParser("italicsAndBold", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("italicsAndBold.before", text, options, globals);
        // it's faster to have 3 separate regexes for each case than have just one
        // because of backtracing, in some cases, it could lead to an exponential effect
        // called "catastrophic backtrace". Ominous!
        function parseInside(txt, left, right) {
            /*
    if (options.simplifiedAutoLink) {
      txt = showdown.subParser('simplifiedAutoLinks')(txt, options, globals);
    }
    */ return left + txt + right;
        }
        // Parse underscores
        if (options.literalMidWordUnderscores) {
            text = text.replace(/\b___(\S[\s\S]*?)___\b/g, function(wm, txt) {
                return parseInside(txt, "<strong><em>", "</em></strong>");
            });
            text = text.replace(/\b__(\S[\s\S]*?)__\b/g, function(wm, txt) {
                return parseInside(txt, "<strong>", "</strong>");
            });
            text = text.replace(/\b_(\S[\s\S]*?)_\b/g, function(wm, txt) {
                return parseInside(txt, "<em>", "</em>");
            });
        } else {
            text = text.replace(/___(\S[\s\S]*?)___/g, function(wm, m) {
                return /\S$/.test(m) ? parseInside(m, "<strong><em>", "</em></strong>") : wm;
            });
            text = text.replace(/__(\S[\s\S]*?)__/g, function(wm, m) {
                return /\S$/.test(m) ? parseInside(m, "<strong>", "</strong>") : wm;
            });
            text = text.replace(/_([^\s_][\s\S]*?)_/g, function(wm, m) {
                // !/^_[^_]/.test(m) - test if it doesn't start with __ (since it seems redundant, we removed it)
                return /\S$/.test(m) ? parseInside(m, "<em>", "</em>") : wm;
            });
        }
        // Now parse asterisks
        if (options.literalMidWordAsterisks) {
            text = text.replace(/([^*]|^)\B\*\*\*(\S[\s\S]*?)\*\*\*\B(?!\*)/g, function(wm, lead, txt) {
                return parseInside(txt, lead + "<strong><em>", "</em></strong>");
            });
            text = text.replace(/([^*]|^)\B\*\*(\S[\s\S]*?)\*\*\B(?!\*)/g, function(wm, lead, txt) {
                return parseInside(txt, lead + "<strong>", "</strong>");
            });
            text = text.replace(/([^*]|^)\B\*(\S[\s\S]*?)\*\B(?!\*)/g, function(wm, lead, txt) {
                return parseInside(txt, lead + "<em>", "</em>");
            });
        } else {
            text = text.replace(/\*\*\*(\S[\s\S]*?)\*\*\*/g, function(wm, m) {
                return /\S$/.test(m) ? parseInside(m, "<strong><em>", "</em></strong>") : wm;
            });
            text = text.replace(/\*\*(\S[\s\S]*?)\*\*/g, function(wm, m) {
                return /\S$/.test(m) ? parseInside(m, "<strong>", "</strong>") : wm;
            });
            text = text.replace(/\*([^\s*][\s\S]*?)\*/g, function(wm, m) {
                // !/^\*[^*]/.test(m) - test if it doesn't start with ** (since it seems redundant, we removed it)
                return /\S$/.test(m) ? parseInside(m, "<em>", "</em>") : wm;
            });
        }
        text = globals.converter._dispatch("italicsAndBold.after", text, options, globals);
        return text;
    });
    /**
 * Form HTML ordered (numbered) and unordered (bulleted) lists.
 */ showdown.subParser("lists", function(text, options, globals) {
        "use strict";
        /**
   * Process the contents of a single ordered or unordered list, splitting it
   * into individual list items.
   * @param {string} listStr
   * @param {boolean} trimTrailing
   * @returns {string}
   */ function processListItems(listStr, trimTrailing) {
            // The $g_list_level global keeps track of when we're inside a list.
            // Each time we enter a list, we increment it; when we leave a list,
            // we decrement. If it's zero, we're not in a list anymore.
            //
            // We do this because when we're not inside a list, we want to treat
            // something like this:
            //
            //    I recommend upgrading to version
            //    8. Oops, now this line is treated
            //    as a sub-list.
            //
            // As a single paragraph, despite the fact that the second line starts
            // with a digit-period-space sequence.
            //
            // Whereas when we're inside a list (or sub-list), that line will be
            // treated as the start of a sub-list. What a kludge, huh? This is
            // an aspect of Markdown's syntax that's hard to parse perfectly
            // without resorting to mind-reading. Perhaps the solution is to
            // change the syntax rules such that sub-lists must start with a
            // starting cardinal number; e.g. "1." or "a.".
            globals.gListLevel++;
            // trim trailing blank lines:
            listStr = listStr.replace(/\n{2,}$/, "\n");
            // attacklab: add sentinel to emulate \z
            listStr += "\xa80";
            var rgx = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0| {0,3}([*+-]|\d+[.])[ \t]+))/gm, isParagraphed = /\n[ \t]*\n(?!¨0)/.test(listStr);
            // Since version 1.5, nesting sublists requires 4 spaces (or 1 tab) indentation,
            // which is a syntax breaking change
            // activating this option reverts to old behavior
            if (options.disableForced4SpacesIndentedSublists) rgx = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0|\2([*+-]|\d+[.])[ \t]+))/gm;
            listStr = listStr.replace(rgx, function(wholeMatch, m1, m2, m3, m4, taskbtn, checked) {
                checked = checked && checked.trim() !== "";
                var item = showdown.subParser("outdent")(m4, options, globals), bulletStyle = "";
                // Support for github tasklists
                if (taskbtn && options.tasklists) {
                    bulletStyle = ' class="task-list-item" style="list-style-type: none;"';
                    item = item.replace(/^[ \t]*\[(x|X| )?]/m, function() {
                        var otp = '<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';
                        if (checked) otp += " checked";
                        otp += ">";
                        return otp;
                    });
                }
                // ISSUE #312
                // This input: - - - a
                // causes trouble to the parser, since it interprets it as:
                // <ul><li><li><li>a</li></li></li></ul>
                // instead of:
                // <ul><li>- - a</li></ul>
                // So, to prevent it, we will put a marker (¨A)in the beginning of the line
                // Kind of hackish/monkey patching, but seems more effective than overcomplicating the list parser
                item = item.replace(/^([-*+]|\d\.)[ \t]+[\S\n ]*/g, function(wm2) {
                    return "\xa8A" + wm2;
                });
                // m1 - Leading line or
                // Has a double return (multi paragraph) or
                // Has sublist
                if (m1 || item.search(/\n{2,}/) > -1) {
                    item = showdown.subParser("githubCodeBlocks")(item, options, globals);
                    item = showdown.subParser("blockGamut")(item, options, globals);
                } else {
                    // Recursion for sub-lists:
                    item = showdown.subParser("lists")(item, options, globals);
                    item = item.replace(/\n$/, ""); // chomp(item)
                    item = showdown.subParser("hashHTMLBlocks")(item, options, globals);
                    // Colapse double linebreaks
                    item = item.replace(/\n\n+/g, "\n\n");
                    if (isParagraphed) item = showdown.subParser("paragraphs")(item, options, globals);
                    else item = showdown.subParser("spanGamut")(item, options, globals);
                }
                // now we need to remove the marker (¨A)
                item = item.replace("\xa8A", "");
                // we can finally wrap the line in list item tags
                item = "<li" + bulletStyle + ">" + item + "</li>\n";
                return item;
            });
            // attacklab: strip sentinel
            listStr = listStr.replace(/¨0/g, "");
            globals.gListLevel--;
            if (trimTrailing) listStr = listStr.replace(/\s+$/, "");
            return listStr;
        }
        function styleStartNumber(list, listType) {
            // check if ol and starts by a number different than 1
            if (listType === "ol") {
                var res = list.match(/^ *(\d+)\./);
                if (res && res[1] !== "1") return ' start="' + res[1] + '"';
            }
            return "";
        }
        /**
   * Check and parse consecutive lists (better fix for issue #142)
   * @param {string} list
   * @param {string} listType
   * @param {boolean} trimTrailing
   * @returns {string}
   */ function parseConsecutiveLists(list, listType, trimTrailing) {
            // check if we caught 2 or more consecutive lists by mistake
            // we use the counterRgx, meaning if listType is UL we look for OL and vice versa
            var olRgx = options.disableForced4SpacesIndentedSublists ? /^ ?\d+\.[ \t]/gm : /^ {0,3}\d+\.[ \t]/gm, ulRgx = options.disableForced4SpacesIndentedSublists ? /^ ?[*+-][ \t]/gm : /^ {0,3}[*+-][ \t]/gm, counterRxg = listType === "ul" ? olRgx : ulRgx, result = "";
            if (list.search(counterRxg) !== -1) (function parseCL(txt) {
                var pos = txt.search(counterRxg), style = styleStartNumber(list, listType);
                if (pos !== -1) {
                    // slice
                    result += "\n\n<" + listType + style + ">\n" + processListItems(txt.slice(0, pos), !!trimTrailing) + "</" + listType + ">\n";
                    // invert counterType and listType
                    listType = listType === "ul" ? "ol" : "ul";
                    counterRxg = listType === "ul" ? olRgx : ulRgx;
                    //recurse
                    parseCL(txt.slice(pos));
                } else result += "\n\n<" + listType + style + ">\n" + processListItems(txt, !!trimTrailing) + "</" + listType + ">\n";
            })(list);
            else {
                var style = styleStartNumber(list, listType);
                result = "\n\n<" + listType + style + ">\n" + processListItems(list, !!trimTrailing) + "</" + listType + ">\n";
            }
            return result;
        }
        /** Start of list parsing **/ text = globals.converter._dispatch("lists.before", text, options, globals);
        // add sentinel to hack around khtml/safari bug:
        // http://bugs.webkit.org/show_bug.cgi?id=11231
        text += "\xa80";
        if (globals.gListLevel) text = text.replace(/^(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm, function(wholeMatch, list, m2) {
            var listType = m2.search(/[*+-]/g) > -1 ? "ul" : "ol";
            return parseConsecutiveLists(list, listType, true);
        });
        else text = text.replace(/(\n\n|^\n?)(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm, function(wholeMatch, m1, list, m3) {
            var listType = m3.search(/[*+-]/g) > -1 ? "ul" : "ol";
            return parseConsecutiveLists(list, listType, false);
        });
        // strip sentinel
        text = text.replace(/¨0/, "");
        text = globals.converter._dispatch("lists.after", text, options, globals);
        return text;
    });
    /**
 * Parse metadata at the top of the document
 */ showdown.subParser("metadata", function(text, options, globals) {
        "use strict";
        if (!options.metadata) return text;
        text = globals.converter._dispatch("metadata.before", text, options, globals);
        function parseMetadataContents(content) {
            // raw is raw so it's not changed in any way
            globals.metadata.raw = content;
            // escape chars forbidden in html attributes
            // double quotes
            content = content// ampersand first
            .replace(/&/g, "&amp;")// double quotes
            .replace(/"/g, "&quot;");
            content = content.replace(/\n {4}/g, " ");
            content.replace(/^([\S ]+): +([\s\S]+?)$/gm, function(wm, key, value) {
                globals.metadata.parsed[key] = value;
                return "";
            });
        }
        text = text.replace(/^\s*«««+(\S*?)\n([\s\S]+?)\n»»»+\n/, function(wholematch, format, content) {
            parseMetadataContents(content);
            return "\xa8M";
        });
        text = text.replace(/^\s*---+(\S*?)\n([\s\S]+?)\n---+\n/, function(wholematch, format, content) {
            if (format) globals.metadata.format = format;
            parseMetadataContents(content);
            return "\xa8M";
        });
        text = text.replace(/¨M/g, "");
        text = globals.converter._dispatch("metadata.after", text, options, globals);
        return text;
    });
    /**
 * Remove one level of line-leading tabs or spaces
 */ showdown.subParser("outdent", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("outdent.before", text, options, globals);
        // attacklab: hack around Konqueror 3.5.4 bug:
        // "----------bug".replace(/^-/g,"") == "bug"
        text = text.replace(/^(\t|[ ]{1,4})/gm, "\xa80"); // attacklab: g_tab_width
        // attacklab: clean up hack
        text = text.replace(/¨0/g, "");
        text = globals.converter._dispatch("outdent.after", text, options, globals);
        return text;
    });
    /**
 *
 */ showdown.subParser("paragraphs", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("paragraphs.before", text, options, globals);
        // Strip leading and trailing lines:
        text = text.replace(/^\n+/g, "");
        text = text.replace(/\n+$/g, "");
        var grafs = text.split(/\n{2,}/g), grafsOut = [], end = grafs.length; // Wrap <p> tags
        for(var i = 0; i < end; i++){
            var str = grafs[i];
            // if this is an HTML marker, copy it
            if (str.search(/¨(K|G)(\d+)\1/g) >= 0) grafsOut.push(str);
            else if (str.search(/\S/) >= 0) {
                str = showdown.subParser("spanGamut")(str, options, globals);
                str = str.replace(/^([ \t]*)/g, "<p>");
                str += "</p>";
                grafsOut.push(str);
            }
        }
        /** Unhashify HTML blocks */ end = grafsOut.length;
        for(i = 0; i < end; i++){
            var blockText = "", grafsOutIt = grafsOut[i], codeFlag = false;
            // if this is a marker for an html block...
            // use RegExp.test instead of string.search because of QML bug
            while(/¨(K|G)(\d+)\1/.test(grafsOutIt)){
                var delim = RegExp.$1, num = RegExp.$2;
                if (delim === "K") blockText = globals.gHtmlBlocks[num];
                else // we need to check if ghBlock is a false positive
                if (codeFlag) // use encoded version of all text
                blockText = showdown.subParser("encodeCode")(globals.ghCodeBlocks[num].text, options, globals);
                else blockText = globals.ghCodeBlocks[num].codeblock;
                blockText = blockText.replace(/\$/g, "$$$$"); // Escape any dollar signs
                grafsOutIt = grafsOutIt.replace(/(\n\n)?¨(K|G)\d+\2(\n\n)?/, blockText);
                // Check if grafsOutIt is a pre->code
                if (/^<pre\b[^>]*>\s*<code\b[^>]*>/.test(grafsOutIt)) codeFlag = true;
            }
            grafsOut[i] = grafsOutIt;
        }
        text = grafsOut.join("\n");
        // Strip leading and trailing lines:
        text = text.replace(/^\n+/g, "");
        text = text.replace(/\n+$/g, "");
        return globals.converter._dispatch("paragraphs.after", text, options, globals);
    });
    /**
 * Run extension
 */ showdown.subParser("runExtension", function(ext, text, options, globals) {
        "use strict";
        if (ext.filter) text = ext.filter(text, globals.converter, options);
        else if (ext.regex) {
            // TODO remove this when old extension loading mechanism is deprecated
            var re = ext.regex;
            if (!(re instanceof RegExp)) re = new RegExp(re, "g");
            text = text.replace(re, ext.replace);
        }
        return text;
    });
    /**
 * These are all the transformations that occur *within* block-level
 * tags like paragraphs, headers, and list items.
 */ showdown.subParser("spanGamut", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("spanGamut.before", text, options, globals);
        text = showdown.subParser("codeSpans")(text, options, globals);
        text = showdown.subParser("escapeSpecialCharsWithinTagAttributes")(text, options, globals);
        text = showdown.subParser("encodeBackslashEscapes")(text, options, globals);
        // Process anchor and image tags. Images must come first,
        // because ![foo][f] looks like an anchor.
        text = showdown.subParser("images")(text, options, globals);
        text = showdown.subParser("anchors")(text, options, globals);
        // Make links out of things like `<http://example.com/>`
        // Must come after anchors, because you can use < and >
        // delimiters in inline links like [this](<url>).
        text = showdown.subParser("autoLinks")(text, options, globals);
        text = showdown.subParser("simplifiedAutoLinks")(text, options, globals);
        text = showdown.subParser("emoji")(text, options, globals);
        text = showdown.subParser("underline")(text, options, globals);
        text = showdown.subParser("italicsAndBold")(text, options, globals);
        text = showdown.subParser("strikethrough")(text, options, globals);
        text = showdown.subParser("ellipsis")(text, options, globals);
        // we need to hash HTML tags inside spans
        text = showdown.subParser("hashHTMLSpans")(text, options, globals);
        // now we encode amps and angles
        text = showdown.subParser("encodeAmpsAndAngles")(text, options, globals);
        // Do hard breaks
        if (options.simpleLineBreaks) // GFM style hard breaks
        // only add line breaks if the text does not contain a block (special case for lists)
        {
            if (!/\n\n¨K/.test(text)) text = text.replace(/\n+/g, "<br />\n");
        } else // Vanilla hard breaks
        text = text.replace(/  +\n/g, "<br />\n");
        text = globals.converter._dispatch("spanGamut.after", text, options, globals);
        return text;
    });
    showdown.subParser("strikethrough", function(text, options, globals) {
        "use strict";
        function parseInside(txt) {
            if (options.simplifiedAutoLink) txt = showdown.subParser("simplifiedAutoLinks")(txt, options, globals);
            return "<del>" + txt + "</del>";
        }
        if (options.strikethrough) {
            text = globals.converter._dispatch("strikethrough.before", text, options, globals);
            text = text.replace(/(?:~){2}([\s\S]+?)(?:~){2}/g, function(wm, txt) {
                return parseInside(txt);
            });
            text = globals.converter._dispatch("strikethrough.after", text, options, globals);
        }
        return text;
    });
    /**
 * Strips link definitions from text, stores the URLs and titles in
 * hash references.
 * Link defs are in the form: ^[id]: url "optional title"
 */ showdown.subParser("stripLinkDefinitions", function(text, options, globals) {
        "use strict";
        var regex = /^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?([^>\s]+)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=¨0))/gm, base64Regex = /^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n\n|(?=¨0)|(?=\n\[))/gm;
        // attacklab: sentinel workarounds for lack of \A and \Z, safari\khtml bug
        text += "\xa80";
        var replaceFunc = function(wholeMatch, linkId, url, width, height, blankLines, title) {
            // if there aren't two instances of linkId it must not be a reference link so back out
            linkId = linkId.toLowerCase();
            if (text.toLowerCase().split(linkId).length - 1 < 2) return wholeMatch;
            if (url.match(/^data:.+?\/.+?;base64,/)) // remove newlines
            globals.gUrls[linkId] = url.replace(/\s/g, "");
            else globals.gUrls[linkId] = showdown.subParser("encodeAmpsAndAngles")(url, options, globals); // Link IDs are case-insensitive
            if (blankLines) // Oops, found blank lines, so it's not a title.
            // Put back the parenthetical statement we stole.
            return blankLines + title;
            else {
                if (title) globals.gTitles[linkId] = title.replace(/"|'/g, "&quot;");
                if (options.parseImgDimensions && width && height) globals.gDimensions[linkId] = {
                    width: width,
                    height: height
                };
            }
            // Completely remove the definition from the text
            return "";
        };
        // first we try to find base64 link references
        text = text.replace(base64Regex, replaceFunc);
        text = text.replace(regex, replaceFunc);
        // attacklab: strip sentinel
        text = text.replace(/¨0/, "");
        return text;
    });
    showdown.subParser("tables", function(text, options, globals) {
        "use strict";
        if (!options.tables) return text;
        var tableRgx = /^ {0,3}\|?.+\|.+\n {0,3}\|?[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:[-=]){2,}[\s\S]+?(?:\n\n|¨0)/gm, //singeColTblRgx = /^ {0,3}\|.+\|\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*\n(?: {0,3}\|.+\|\n)+(?:\n\n|¨0)/gm;
        singeColTblRgx = /^ {0,3}\|.+\|[ \t]*\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*\n( {0,3}\|.+\|[ \t]*\n)*(?:\n|¨0)/gm;
        function parseStyles(sLine) {
            if (/^:[ \t]*--*$/.test(sLine)) return ' style="text-align:left;"';
            else if (/^--*[ \t]*:[ \t]*$/.test(sLine)) return ' style="text-align:right;"';
            else if (/^:[ \t]*--*[ \t]*:$/.test(sLine)) return ' style="text-align:center;"';
            else return "";
        }
        function parseHeaders(header, style) {
            var id = "";
            header = header.trim();
            // support both tablesHeaderId and tableHeaderId due to error in documentation so we don't break backwards compatibility
            if (options.tablesHeaderId || options.tableHeaderId) id = ' id="' + header.replace(/ /g, "_").toLowerCase() + '"';
            header = showdown.subParser("spanGamut")(header, options, globals);
            return "<th" + id + style + ">" + header + "</th>\n";
        }
        function parseCells(cell, style) {
            var subText = showdown.subParser("spanGamut")(cell, options, globals);
            return "<td" + style + ">" + subText + "</td>\n";
        }
        function buildTable(headers, cells) {
            var tb = "<table>\n<thead>\n<tr>\n", tblLgn = headers.length;
            for(var i = 0; i < tblLgn; ++i)tb += headers[i];
            tb += "</tr>\n</thead>\n<tbody>\n";
            for(i = 0; i < cells.length; ++i){
                tb += "<tr>\n";
                for(var ii = 0; ii < tblLgn; ++ii)tb += cells[i][ii];
                tb += "</tr>\n";
            }
            tb += "</tbody>\n</table>\n";
            return tb;
        }
        function parseTable(rawTable) {
            var i, tableLines = rawTable.split("\n");
            for(i = 0; i < tableLines.length; ++i){
                // strip wrong first and last column if wrapped tables are used
                if (/^ {0,3}\|/.test(tableLines[i])) tableLines[i] = tableLines[i].replace(/^ {0,3}\|/, "");
                if (/\|[ \t]*$/.test(tableLines[i])) tableLines[i] = tableLines[i].replace(/\|[ \t]*$/, "");
                // parse code spans first, but we only support one line code spans
                tableLines[i] = showdown.subParser("codeSpans")(tableLines[i], options, globals);
            }
            var rawHeaders = tableLines[0].split("|").map(function(s) {
                return s.trim();
            }), rawStyles = tableLines[1].split("|").map(function(s) {
                return s.trim();
            }), rawCells = [], headers = [], styles = [], cells = [];
            tableLines.shift();
            tableLines.shift();
            for(i = 0; i < tableLines.length; ++i){
                if (tableLines[i].trim() === "") continue;
                rawCells.push(tableLines[i].split("|").map(function(s) {
                    return s.trim();
                }));
            }
            if (rawHeaders.length < rawStyles.length) return rawTable;
            for(i = 0; i < rawStyles.length; ++i)styles.push(parseStyles(rawStyles[i]));
            for(i = 0; i < rawHeaders.length; ++i){
                if (showdown.helper.isUndefined(styles[i])) styles[i] = "";
                headers.push(parseHeaders(rawHeaders[i], styles[i]));
            }
            for(i = 0; i < rawCells.length; ++i){
                var row = [];
                for(var ii = 0; ii < headers.length; ++ii){
                    showdown.helper.isUndefined(rawCells[i][ii]);
                    row.push(parseCells(rawCells[i][ii], styles[ii]));
                }
                cells.push(row);
            }
            return buildTable(headers, cells);
        }
        text = globals.converter._dispatch("tables.before", text, options, globals);
        // find escaped pipe characters
        text = text.replace(/\\(\|)/g, showdown.helper.escapeCharactersCallback);
        // parse multi column tables
        text = text.replace(tableRgx, parseTable);
        // parse one column tables
        text = text.replace(singeColTblRgx, parseTable);
        text = globals.converter._dispatch("tables.after", text, options, globals);
        return text;
    });
    showdown.subParser("underline", function(text, options, globals) {
        "use strict";
        if (!options.underline) return text;
        text = globals.converter._dispatch("underline.before", text, options, globals);
        if (options.literalMidWordUnderscores) {
            text = text.replace(/\b___(\S[\s\S]*?)___\b/g, function(wm, txt) {
                return "<u>" + txt + "</u>";
            });
            text = text.replace(/\b__(\S[\s\S]*?)__\b/g, function(wm, txt) {
                return "<u>" + txt + "</u>";
            });
        } else {
            text = text.replace(/___(\S[\s\S]*?)___/g, function(wm, m) {
                return /\S$/.test(m) ? "<u>" + m + "</u>" : wm;
            });
            text = text.replace(/__(\S[\s\S]*?)__/g, function(wm, m) {
                return /\S$/.test(m) ? "<u>" + m + "</u>" : wm;
            });
        }
        // escape remaining underscores to prevent them being parsed by italic and bold
        text = text.replace(/(_)/g, showdown.helper.escapeCharactersCallback);
        text = globals.converter._dispatch("underline.after", text, options, globals);
        return text;
    });
    /**
 * Swap back in all the special characters we've hidden.
 */ showdown.subParser("unescapeSpecialChars", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("unescapeSpecialChars.before", text, options, globals);
        text = text.replace(/¨E(\d+)E/g, function(wholeMatch, m1) {
            var charCodeToReplace = parseInt(m1);
            return String.fromCharCode(charCodeToReplace);
        });
        text = globals.converter._dispatch("unescapeSpecialChars.after", text, options, globals);
        return text;
    });
    showdown.subParser("makeMarkdown.blockquote", function(node, globals) {
        "use strict";
        var txt = "";
        if (node.hasChildNodes()) {
            var children = node.childNodes, childrenLength = children.length;
            for(var i = 0; i < childrenLength; ++i){
                var innerTxt = showdown.subParser("makeMarkdown.node")(children[i], globals);
                if (innerTxt === "") continue;
                txt += innerTxt;
            }
        }
        // cleanup
        txt = txt.trim();
        txt = "> " + txt.split("\n").join("\n> ");
        return txt;
    });
    showdown.subParser("makeMarkdown.codeBlock", function(node, globals) {
        "use strict";
        var lang = node.getAttribute("language"), num = node.getAttribute("precodenum");
        return "```" + lang + "\n" + globals.preList[num] + "\n```";
    });
    showdown.subParser("makeMarkdown.codeSpan", function(node) {
        "use strict";
        return "`" + node.innerHTML + "`";
    });
    showdown.subParser("makeMarkdown.emphasis", function(node, globals) {
        "use strict";
        var txt = "";
        if (node.hasChildNodes()) {
            txt += "*";
            var children = node.childNodes, childrenLength = children.length;
            for(var i = 0; i < childrenLength; ++i)txt += showdown.subParser("makeMarkdown.node")(children[i], globals);
            txt += "*";
        }
        return txt;
    });
    showdown.subParser("makeMarkdown.header", function(node, globals, headerLevel) {
        "use strict";
        var headerMark = new Array(headerLevel + 1).join("#"), txt = "";
        if (node.hasChildNodes()) {
            txt = headerMark + " ";
            var children = node.childNodes, childrenLength = children.length;
            for(var i = 0; i < childrenLength; ++i)txt += showdown.subParser("makeMarkdown.node")(children[i], globals);
        }
        return txt;
    });
    showdown.subParser("makeMarkdown.hr", function() {
        "use strict";
        return "---";
    });
    showdown.subParser("makeMarkdown.image", function(node) {
        "use strict";
        var txt = "";
        if (node.hasAttribute("src")) {
            txt += "![" + node.getAttribute("alt") + "](";
            txt += "<" + node.getAttribute("src") + ">";
            if (node.hasAttribute("width") && node.hasAttribute("height")) txt += " =" + node.getAttribute("width") + "x" + node.getAttribute("height");
            if (node.hasAttribute("title")) txt += ' "' + node.getAttribute("title") + '"';
            txt += ")";
        }
        return txt;
    });
    showdown.subParser("makeMarkdown.links", function(node, globals) {
        "use strict";
        var txt = "";
        if (node.hasChildNodes() && node.hasAttribute("href")) {
            var children = node.childNodes, childrenLength = children.length;
            txt = "[";
            for(var i = 0; i < childrenLength; ++i)txt += showdown.subParser("makeMarkdown.node")(children[i], globals);
            txt += "](";
            txt += "<" + node.getAttribute("href") + ">";
            if (node.hasAttribute("title")) txt += ' "' + node.getAttribute("title") + '"';
            txt += ")";
        }
        return txt;
    });
    showdown.subParser("makeMarkdown.list", function(node, globals, type) {
        "use strict";
        var txt = "";
        if (!node.hasChildNodes()) return "";
        var listItems = node.childNodes, listItemsLenght = listItems.length, listNum = node.getAttribute("start") || 1;
        for(var i = 0; i < listItemsLenght; ++i){
            if (typeof listItems[i].tagName === "undefined" || listItems[i].tagName.toLowerCase() !== "li") continue;
            // define the bullet to use in list
            var bullet = "";
            if (type === "ol") bullet = listNum.toString() + ". ";
            else bullet = "- ";
            // parse list item
            txt += bullet + showdown.subParser("makeMarkdown.listItem")(listItems[i], globals);
            ++listNum;
        }
        // add comment at the end to prevent consecutive lists to be parsed as one
        txt += "\n<!-- -->\n";
        return txt.trim();
    });
    showdown.subParser("makeMarkdown.listItem", function(node, globals) {
        "use strict";
        var listItemTxt = "";
        var children = node.childNodes, childrenLenght = children.length;
        for(var i = 0; i < childrenLenght; ++i)listItemTxt += showdown.subParser("makeMarkdown.node")(children[i], globals);
        // if it's only one liner, we need to add a newline at the end
        if (!/\n$/.test(listItemTxt)) listItemTxt += "\n";
        else // it's multiparagraph, so we need to indent
        listItemTxt = listItemTxt.split("\n").join("\n    ").replace(/^ {4}$/gm, "").replace(/\n\n+/g, "\n\n");
        return listItemTxt;
    });
    showdown.subParser("makeMarkdown.node", function(node, globals, spansOnly) {
        "use strict";
        spansOnly = spansOnly || false;
        var txt = "";
        // edge case of text without wrapper paragraph
        if (node.nodeType === 3) return showdown.subParser("makeMarkdown.txt")(node, globals);
        // HTML comment
        if (node.nodeType === 8) return "<!--" + node.data + "-->\n\n";
        // process only node elements
        if (node.nodeType !== 1) return "";
        var tagName = node.tagName.toLowerCase();
        switch(tagName){
            //
            // BLOCKS
            //
            case "h1":
                if (!spansOnly) txt = showdown.subParser("makeMarkdown.header")(node, globals, 1) + "\n\n";
                break;
            case "h2":
                if (!spansOnly) txt = showdown.subParser("makeMarkdown.header")(node, globals, 2) + "\n\n";
                break;
            case "h3":
                if (!spansOnly) txt = showdown.subParser("makeMarkdown.header")(node, globals, 3) + "\n\n";
                break;
            case "h4":
                if (!spansOnly) txt = showdown.subParser("makeMarkdown.header")(node, globals, 4) + "\n\n";
                break;
            case "h5":
                if (!spansOnly) txt = showdown.subParser("makeMarkdown.header")(node, globals, 5) + "\n\n";
                break;
            case "h6":
                if (!spansOnly) txt = showdown.subParser("makeMarkdown.header")(node, globals, 6) + "\n\n";
                break;
            case "p":
                if (!spansOnly) txt = showdown.subParser("makeMarkdown.paragraph")(node, globals) + "\n\n";
                break;
            case "blockquote":
                if (!spansOnly) txt = showdown.subParser("makeMarkdown.blockquote")(node, globals) + "\n\n";
                break;
            case "hr":
                if (!spansOnly) txt = showdown.subParser("makeMarkdown.hr")(node, globals) + "\n\n";
                break;
            case "ol":
                if (!spansOnly) txt = showdown.subParser("makeMarkdown.list")(node, globals, "ol") + "\n\n";
                break;
            case "ul":
                if (!spansOnly) txt = showdown.subParser("makeMarkdown.list")(node, globals, "ul") + "\n\n";
                break;
            case "precode":
                if (!spansOnly) txt = showdown.subParser("makeMarkdown.codeBlock")(node, globals) + "\n\n";
                break;
            case "pre":
                if (!spansOnly) txt = showdown.subParser("makeMarkdown.pre")(node, globals) + "\n\n";
                break;
            case "table":
                if (!spansOnly) txt = showdown.subParser("makeMarkdown.table")(node, globals) + "\n\n";
                break;
            //
            // SPANS
            //
            case "code":
                txt = showdown.subParser("makeMarkdown.codeSpan")(node, globals);
                break;
            case "em":
            case "i":
                txt = showdown.subParser("makeMarkdown.emphasis")(node, globals);
                break;
            case "strong":
            case "b":
                txt = showdown.subParser("makeMarkdown.strong")(node, globals);
                break;
            case "del":
                txt = showdown.subParser("makeMarkdown.strikethrough")(node, globals);
                break;
            case "a":
                txt = showdown.subParser("makeMarkdown.links")(node, globals);
                break;
            case "img":
                txt = showdown.subParser("makeMarkdown.image")(node, globals);
                break;
            default:
                txt = node.outerHTML + "\n\n";
        }
        // common normalization
        // TODO eventually
        return txt;
    });
    showdown.subParser("makeMarkdown.paragraph", function(node, globals) {
        "use strict";
        var txt = "";
        if (node.hasChildNodes()) {
            var children = node.childNodes, childrenLength = children.length;
            for(var i = 0; i < childrenLength; ++i)txt += showdown.subParser("makeMarkdown.node")(children[i], globals);
        }
        // some text normalization
        txt = txt.trim();
        return txt;
    });
    showdown.subParser("makeMarkdown.pre", function(node, globals) {
        "use strict";
        var num = node.getAttribute("prenum");
        return "<pre>" + globals.preList[num] + "</pre>";
    });
    showdown.subParser("makeMarkdown.strikethrough", function(node, globals) {
        "use strict";
        var txt = "";
        if (node.hasChildNodes()) {
            txt += "~~";
            var children = node.childNodes, childrenLength = children.length;
            for(var i = 0; i < childrenLength; ++i)txt += showdown.subParser("makeMarkdown.node")(children[i], globals);
            txt += "~~";
        }
        return txt;
    });
    showdown.subParser("makeMarkdown.strong", function(node, globals) {
        "use strict";
        var txt = "";
        if (node.hasChildNodes()) {
            txt += "**";
            var children = node.childNodes, childrenLength = children.length;
            for(var i = 0; i < childrenLength; ++i)txt += showdown.subParser("makeMarkdown.node")(children[i], globals);
            txt += "**";
        }
        return txt;
    });
    showdown.subParser("makeMarkdown.table", function(node, globals) {
        "use strict";
        var txt = "", tableArray = [
            [],
            []
        ], headings = node.querySelectorAll("thead>tr>th"), rows = node.querySelectorAll("tbody>tr"), i, ii;
        for(i = 0; i < headings.length; ++i){
            var headContent = showdown.subParser("makeMarkdown.tableCell")(headings[i], globals), allign = "---";
            if (headings[i].hasAttribute("style")) {
                var style = headings[i].getAttribute("style").toLowerCase().replace(/\s/g, "");
                switch(style){
                    case "text-align:left;":
                        allign = ":---";
                        break;
                    case "text-align:right;":
                        allign = "---:";
                        break;
                    case "text-align:center;":
                        allign = ":---:";
                        break;
                }
            }
            tableArray[0][i] = headContent.trim();
            tableArray[1][i] = allign;
        }
        for(i = 0; i < rows.length; ++i){
            var r = tableArray.push([]) - 1, cols = rows[i].getElementsByTagName("td");
            for(ii = 0; ii < headings.length; ++ii){
                var cellContent = " ";
                if (typeof cols[ii] !== "undefined") cellContent = showdown.subParser("makeMarkdown.tableCell")(cols[ii], globals);
                tableArray[r].push(cellContent);
            }
        }
        var cellSpacesCount = 3;
        for(i = 0; i < tableArray.length; ++i)for(ii = 0; ii < tableArray[i].length; ++ii){
            var strLen = tableArray[i][ii].length;
            if (strLen > cellSpacesCount) cellSpacesCount = strLen;
        }
        for(i = 0; i < tableArray.length; ++i){
            for(ii = 0; ii < tableArray[i].length; ++ii)if (i === 1) {
                if (tableArray[i][ii].slice(-1) === ":") tableArray[i][ii] = showdown.helper.padEnd(tableArray[i][ii].slice(-1), cellSpacesCount - 1, "-") + ":";
                else tableArray[i][ii] = showdown.helper.padEnd(tableArray[i][ii], cellSpacesCount, "-");
            } else tableArray[i][ii] = showdown.helper.padEnd(tableArray[i][ii], cellSpacesCount);
            txt += "| " + tableArray[i].join(" | ") + " |\n";
        }
        return txt.trim();
    });
    showdown.subParser("makeMarkdown.tableCell", function(node, globals) {
        "use strict";
        var txt = "";
        if (!node.hasChildNodes()) return "";
        var children = node.childNodes, childrenLength = children.length;
        for(var i = 0; i < childrenLength; ++i)txt += showdown.subParser("makeMarkdown.node")(children[i], globals, true);
        return txt.trim();
    });
    showdown.subParser("makeMarkdown.txt", function(node) {
        "use strict";
        var txt = node.nodeValue;
        // multiple spaces are collapsed
        txt = txt.replace(/ +/g, " ");
        // replace the custom ¨NBSP; with a space
        txt = txt.replace(/¨NBSP;/g, " ");
        // ", <, > and & should replace escaped html entities
        txt = showdown.helper.unescapeHTMLEntities(txt);
        // escape markdown magic characters
        // emphasis, strong and strikethrough - can appear everywhere
        // we also escape pipe (|) because of tables
        // and escape ` because of code blocks and spans
        txt = txt.replace(/([*_~|`])/g, "\\$1");
        // escape > because of blockquotes
        txt = txt.replace(/^(\s*)>/g, "\\$1>");
        // hash character, only troublesome at the beginning of a line because of headers
        txt = txt.replace(/^#/gm, "\\#");
        // horizontal rules
        txt = txt.replace(/^(\s*)([-=]{3,})(\s*)$/, "$1\\$2$3");
        // dot, because of ordered lists, only troublesome at the beginning of a line when preceded by an integer
        txt = txt.replace(/^( {0,3}\d+)\./gm, "$1\\.");
        // +, * and -, at the beginning of a line becomes a list, so we need to escape them also (asterisk was already escaped)
        txt = txt.replace(/^( {0,3})([+-])/gm, "$1\\$2");
        // images and links, ] followed by ( is problematic, so we escape it
        txt = txt.replace(/]([\s]*)\(/g, "\\]$1\\(");
        // reference URIs must also be escaped
        txt = txt.replace(/^ {0,3}\[([\S \t]*?)]:/gm, "\\[$1]:");
        return txt;
    });
    var root = this;
    // AMD Loader
    if (typeof define === "function" && define.amd) define(function() {
        "use strict";
        return showdown;
    });
    else if (0, module.exports) module.exports = showdown;
    else root.showdown = showdown;
}).call(this);

},{}],"jDJw2":[function(require,module,exports) {
/**
 * @name string-strip-html
 * @fileoverview Strip HTML tags from strings. No parser, accepts mixed sources.
 * @version 8.4.0
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/string-strip-html/}
 */ var global = arguments[3];
"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod)=>function __require() {
        return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = {
            exports: {}
        }).exports, mod), mod.exports;
    };
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = (to, from, except, desc)=>{
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
            get: ()=>from[key],
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
    }
    return to;
};
var __toESM = (mod, isNodeMode, target)=>(target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
        value: mod,
        enumerable: true
    }) : target, mod));
var __toCommonJS = (mod)=>__copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
// ../../node_modules/lodash.trim/index.js
var require_lodash = __commonJS({
    "../../node_modules/lodash.trim/index.js" (exports, module2) {
        var INFINITY = 1 / 0;
        var symbolTag = "[object Symbol]";
        var reTrim = /^\s+|\s+$/g;
        var rsAstralRange = "\ud800-\udfff";
        var rsComboMarksRange = "\\u0300-\\u036f\\ufe20-\\ufe23";
        var rsComboSymbolsRange = "\\u20d0-\\u20f0";
        var rsVarRange = "\\ufe0e\\ufe0f";
        var rsAstral = "[" + rsAstralRange + "]";
        var rsCombo = "[" + rsComboMarksRange + rsComboSymbolsRange + "]";
        var rsFitz = "\ud83c[\udffb-\udfff]";
        var rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")";
        var rsNonAstral = "[^" + rsAstralRange + "]";
        var rsRegional = "(?:\ud83c[\udde6-\uddff]){2}";
        var rsSurrPair = "[\ud800-\udbff][\udc00-\udfff]";
        var rsZWJ = "\\u200d";
        var reOptMod = rsModifier + "?";
        var rsOptVar = "[" + rsVarRange + "]?";
        var rsOptJoin = "(?:" + rsZWJ + "(?:" + [
            rsNonAstral,
            rsRegional,
            rsSurrPair
        ].join("|") + ")" + rsOptVar + reOptMod + ")*";
        var rsSeq = rsOptVar + reOptMod + rsOptJoin;
        var rsSymbol = "(?:" + [
            rsNonAstral + rsCombo + "?",
            rsCombo,
            rsRegional,
            rsSurrPair,
            rsAstral
        ].join("|") + ")";
        var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
        var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboMarksRange + rsComboSymbolsRange + rsVarRange + "]");
        var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
        var freeSelf = typeof self == "object" && self && self.Object === Object && self;
        var root = freeGlobal || freeSelf || Function("return this")();
        function asciiToArray(string) {
            return string.split("");
        }
        function baseFindIndex(array, predicate, fromIndex, fromRight) {
            var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
            while(fromRight ? index-- : ++index < length){
                if (predicate(array[index], index, array)) return index;
            }
            return -1;
        }
        function baseIndexOf(array, value, fromIndex) {
            if (value !== value) return baseFindIndex(array, baseIsNaN, fromIndex);
            var index = fromIndex - 1, length = array.length;
            while(++index < length){
                if (array[index] === value) return index;
            }
            return -1;
        }
        function baseIsNaN(value) {
            return value !== value;
        }
        function charsStartIndex(strSymbols, chrSymbols) {
            var index = -1, length = strSymbols.length;
            while(++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1);
            return index;
        }
        function charsEndIndex(strSymbols, chrSymbols) {
            var index = strSymbols.length;
            while(index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1);
            return index;
        }
        function hasUnicode(string) {
            return reHasUnicode.test(string);
        }
        function stringToArray(string) {
            return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
        }
        function unicodeToArray(string) {
            return string.match(reUnicode) || [];
        }
        var objectProto = Object.prototype;
        var objectToString = objectProto.toString;
        var Symbol2 = root.Symbol;
        var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
        var symbolToString = symbolProto ? symbolProto.toString : void 0;
        function baseSlice(array, start, end) {
            var index = -1, length = array.length;
            if (start < 0) start = -start > length ? 0 : length + start;
            end = end > length ? length : end;
            if (end < 0) end += length;
            length = start > end ? 0 : end - start >>> 0;
            start >>>= 0;
            var result = Array(length);
            while(++index < length)result[index] = array[index + start];
            return result;
        }
        function baseToString(value) {
            if (typeof value == "string") return value;
            if (isSymbol(value)) return symbolToString ? symbolToString.call(value) : "";
            var result = value + "";
            return result == "0" && 1 / value == -INFINITY ? "-0" : result;
        }
        function castSlice(array, start, end) {
            var length = array.length;
            end = end === void 0 ? length : end;
            return !start && end >= length ? array : baseSlice(array, start, end);
        }
        function isObjectLike(value) {
            return !!value && typeof value == "object";
        }
        function isSymbol(value) {
            return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
        }
        function toString(value) {
            return value == null ? "" : baseToString(value);
        }
        function trim2(string, chars, guard) {
            string = toString(string);
            if (string && (guard || chars === void 0)) return string.replace(reTrim, "");
            if (!string || !(chars = baseToString(chars))) return string;
            var strSymbols = stringToArray(string), chrSymbols = stringToArray(chars), start = charsStartIndex(strSymbols, chrSymbols), end = charsEndIndex(strSymbols, chrSymbols) + 1;
            return castSlice(strSymbols, start, end).join("");
        }
        module2.exports = trim2;
    }
});
// ../../node_modules/lodash.without/index.js
var require_lodash2 = __commonJS({
    "../../node_modules/lodash.without/index.js" (exports, module2) {
        var LARGE_ARRAY_SIZE = 200;
        var HASH_UNDEFINED = "__lodash_hash_undefined__";
        var MAX_SAFE_INTEGER = 9007199254740991;
        var funcTag = "[object Function]";
        var genTag = "[object GeneratorFunction]";
        var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
        var reIsHostCtor = /^\[object .+?Constructor\]$/;
        var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
        var freeSelf = typeof self == "object" && self && self.Object === Object && self;
        var root = freeGlobal || freeSelf || Function("return this")();
        function apply(func, thisArg, args) {
            switch(args.length){
                case 0:
                    return func.call(thisArg);
                case 1:
                    return func.call(thisArg, args[0]);
                case 2:
                    return func.call(thisArg, args[0], args[1]);
                case 3:
                    return func.call(thisArg, args[0], args[1], args[2]);
            }
            return func.apply(thisArg, args);
        }
        function arrayIncludes(array, value) {
            var length = array ? array.length : 0;
            return !!length && baseIndexOf(array, value, 0) > -1;
        }
        function arrayIncludesWith(array, value, comparator) {
            var index = -1, length = array ? array.length : 0;
            while(++index < length){
                if (comparator(value, array[index])) return true;
            }
            return false;
        }
        function arrayMap(array, iteratee) {
            var index = -1, length = array ? array.length : 0, result = Array(length);
            while(++index < length)result[index] = iteratee(array[index], index, array);
            return result;
        }
        function baseFindIndex(array, predicate, fromIndex, fromRight) {
            var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
            while(fromRight ? index-- : ++index < length){
                if (predicate(array[index], index, array)) return index;
            }
            return -1;
        }
        function baseIndexOf(array, value, fromIndex) {
            if (value !== value) return baseFindIndex(array, baseIsNaN, fromIndex);
            var index = fromIndex - 1, length = array.length;
            while(++index < length){
                if (array[index] === value) return index;
            }
            return -1;
        }
        function baseIsNaN(value) {
            return value !== value;
        }
        function baseUnary(func) {
            return function(value) {
                return func(value);
            };
        }
        function cacheHas(cache, key) {
            return cache.has(key);
        }
        function getValue(object, key) {
            return object == null ? void 0 : object[key];
        }
        function isHostObject(value) {
            var result = false;
            if (value != null && typeof value.toString != "function") try {
                result = !!(value + "");
            } catch (e) {}
            return result;
        }
        var arrayProto = Array.prototype;
        var funcProto = Function.prototype;
        var objectProto = Object.prototype;
        var coreJsData = root["__core-js_shared__"];
        var maskSrcKey = function() {
            var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
            return uid ? "Symbol(src)_1." + uid : "";
        }();
        var funcToString = funcProto.toString;
        var hasOwnProperty = objectProto.hasOwnProperty;
        var objectToString = objectProto.toString;
        var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
        var splice = arrayProto.splice;
        var nativeMax = Math.max;
        var Map = getNative(root, "Map");
        var nativeCreate = getNative(Object, "create");
        function Hash(entries) {
            var index = -1, length = entries ? entries.length : 0;
            this.clear();
            while(++index < length){
                var entry = entries[index];
                this.set(entry[0], entry[1]);
            }
        }
        function hashClear() {
            this.__data__ = nativeCreate ? nativeCreate(null) : {};
        }
        function hashDelete(key) {
            return this.has(key) && delete this.__data__[key];
        }
        function hashGet(key) {
            var data = this.__data__;
            if (nativeCreate) {
                var result = data[key];
                return result === HASH_UNDEFINED ? void 0 : result;
            }
            return hasOwnProperty.call(data, key) ? data[key] : void 0;
        }
        function hashHas(key) {
            var data = this.__data__;
            return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
        }
        function hashSet(key, value) {
            var data = this.__data__;
            data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
            return this;
        }
        Hash.prototype.clear = hashClear;
        Hash.prototype["delete"] = hashDelete;
        Hash.prototype.get = hashGet;
        Hash.prototype.has = hashHas;
        Hash.prototype.set = hashSet;
        function ListCache(entries) {
            var index = -1, length = entries ? entries.length : 0;
            this.clear();
            while(++index < length){
                var entry = entries[index];
                this.set(entry[0], entry[1]);
            }
        }
        function listCacheClear() {
            this.__data__ = [];
        }
        function listCacheDelete(key) {
            var data = this.__data__, index = assocIndexOf(data, key);
            if (index < 0) return false;
            var lastIndex = data.length - 1;
            if (index == lastIndex) data.pop();
            else splice.call(data, index, 1);
            return true;
        }
        function listCacheGet(key) {
            var data = this.__data__, index = assocIndexOf(data, key);
            return index < 0 ? void 0 : data[index][1];
        }
        function listCacheHas(key) {
            return assocIndexOf(this.__data__, key) > -1;
        }
        function listCacheSet(key, value) {
            var data = this.__data__, index = assocIndexOf(data, key);
            if (index < 0) data.push([
                key,
                value
            ]);
            else data[index][1] = value;
            return this;
        }
        ListCache.prototype.clear = listCacheClear;
        ListCache.prototype["delete"] = listCacheDelete;
        ListCache.prototype.get = listCacheGet;
        ListCache.prototype.has = listCacheHas;
        ListCache.prototype.set = listCacheSet;
        function MapCache(entries) {
            var index = -1, length = entries ? entries.length : 0;
            this.clear();
            while(++index < length){
                var entry = entries[index];
                this.set(entry[0], entry[1]);
            }
        }
        function mapCacheClear() {
            this.__data__ = {
                hash: new Hash(),
                map: new (Map || ListCache)(),
                string: new Hash()
            };
        }
        function mapCacheDelete(key) {
            return getMapData(this, key)["delete"](key);
        }
        function mapCacheGet(key) {
            return getMapData(this, key).get(key);
        }
        function mapCacheHas(key) {
            return getMapData(this, key).has(key);
        }
        function mapCacheSet(key, value) {
            getMapData(this, key).set(key, value);
            return this;
        }
        MapCache.prototype.clear = mapCacheClear;
        MapCache.prototype["delete"] = mapCacheDelete;
        MapCache.prototype.get = mapCacheGet;
        MapCache.prototype.has = mapCacheHas;
        MapCache.prototype.set = mapCacheSet;
        function SetCache(values) {
            var index = -1, length = values ? values.length : 0;
            this.__data__ = new MapCache();
            while(++index < length)this.add(values[index]);
        }
        function setCacheAdd(value) {
            this.__data__.set(value, HASH_UNDEFINED);
            return this;
        }
        function setCacheHas(value) {
            return this.__data__.has(value);
        }
        SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
        SetCache.prototype.has = setCacheHas;
        function assocIndexOf(array, key) {
            var length = array.length;
            while(length--){
                if (eq(array[length][0], key)) return length;
            }
            return -1;
        }
        function baseDifference(array, values, iteratee, comparator) {
            var index = -1, includes = arrayIncludes, isCommon = true, length = array.length, result = [], valuesLength = values.length;
            if (!length) return result;
            if (iteratee) values = arrayMap(values, baseUnary(iteratee));
            if (comparator) {
                includes = arrayIncludesWith;
                isCommon = false;
            } else if (values.length >= LARGE_ARRAY_SIZE) {
                includes = cacheHas;
                isCommon = false;
                values = new SetCache(values);
            }
            outer: while(++index < length){
                var value = array[index], computed = iteratee ? iteratee(value) : value;
                value = comparator || value !== 0 ? value : 0;
                if (isCommon && computed === computed) {
                    var valuesIndex = valuesLength;
                    while(valuesIndex--){
                        if (values[valuesIndex] === computed) continue outer;
                    }
                    result.push(value);
                } else if (!includes(values, computed, comparator)) result.push(value);
            }
            return result;
        }
        function baseIsNative(value) {
            if (!isObject(value) || isMasked(value)) return false;
            var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
            return pattern.test(toSource(value));
        }
        function baseRest(func, start) {
            start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
            return function() {
                var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
                while(++index < length)array[index] = args[start + index];
                index = -1;
                var otherArgs = Array(start + 1);
                while(++index < start)otherArgs[index] = args[index];
                otherArgs[start] = array;
                return apply(func, this, otherArgs);
            };
        }
        function getMapData(map, key) {
            var data = map.__data__;
            return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
        }
        function getNative(object, key) {
            var value = getValue(object, key);
            return baseIsNative(value) ? value : void 0;
        }
        function isKeyable(value) {
            var type = typeof value;
            return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
        }
        function isMasked(func) {
            return !!maskSrcKey && maskSrcKey in func;
        }
        function toSource(func) {
            if (func != null) {
                try {
                    return funcToString.call(func);
                } catch (e) {}
                try {
                    return func + "";
                } catch (e) {}
            }
            return "";
        }
        var without2 = baseRest(function(array, values) {
            return isArrayLikeObject(array) ? baseDifference(array, values) : [];
        });
        function eq(value, other) {
            return value === other || value !== value && other !== other;
        }
        function isArrayLike(value) {
            return value != null && isLength(value.length) && !isFunction(value);
        }
        function isArrayLikeObject(value) {
            return isObjectLike(value) && isArrayLike(value);
        }
        function isFunction(value) {
            var tag = isObject(value) ? objectToString.call(value) : "";
            return tag == funcTag || tag == genTag;
        }
        function isLength(value) {
            return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
        }
        function isObject(value) {
            var type = typeof value;
            return !!value && (type == "object" || type == "function");
        }
        function isObjectLike(value) {
            return !!value && typeof value == "object";
        }
        module2.exports = without2;
    }
});
// ../../node_modules/html-entities/lib/named-references.js
var require_named_references = __commonJS({
    "../../node_modules/html-entities/lib/named-references.js" (exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.bodyRegExps = {
            xml: /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g,
            html4: /&(?:nbsp|iexcl|cent|pound|curren|yen|brvbar|sect|uml|copy|ordf|laquo|not|shy|reg|macr|deg|plusmn|sup2|sup3|acute|micro|para|middot|cedil|sup1|ordm|raquo|frac14|frac12|frac34|iquest|Agrave|Aacute|Acirc|Atilde|Auml|Aring|AElig|Ccedil|Egrave|Eacute|Ecirc|Euml|Igrave|Iacute|Icirc|Iuml|ETH|Ntilde|Ograve|Oacute|Ocirc|Otilde|Ouml|times|Oslash|Ugrave|Uacute|Ucirc|Uuml|Yacute|THORN|szlig|agrave|aacute|acirc|atilde|auml|aring|aelig|ccedil|egrave|eacute|ecirc|euml|igrave|iacute|icirc|iuml|eth|ntilde|ograve|oacute|ocirc|otilde|ouml|divide|oslash|ugrave|uacute|ucirc|uuml|yacute|thorn|yuml|quot|amp|lt|gt|#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g,
            html5: /&(?:AElig|AMP|Aacute|Acirc|Agrave|Aring|Atilde|Auml|COPY|Ccedil|ETH|Eacute|Ecirc|Egrave|Euml|GT|Iacute|Icirc|Igrave|Iuml|LT|Ntilde|Oacute|Ocirc|Ograve|Oslash|Otilde|Ouml|QUOT|REG|THORN|Uacute|Ucirc|Ugrave|Uuml|Yacute|aacute|acirc|acute|aelig|agrave|amp|aring|atilde|auml|brvbar|ccedil|cedil|cent|copy|curren|deg|divide|eacute|ecirc|egrave|eth|euml|frac12|frac14|frac34|gt|iacute|icirc|iexcl|igrave|iquest|iuml|laquo|lt|macr|micro|middot|nbsp|not|ntilde|oacute|ocirc|ograve|ordf|ordm|oslash|otilde|ouml|para|plusmn|pound|quot|raquo|reg|sect|shy|sup1|sup2|sup3|szlig|thorn|times|uacute|ucirc|ugrave|uml|uuml|yacute|yen|yuml|#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g
        };
        exports.namedReferences = {
            xml: {
                entities: {
                    "&lt;": "<",
                    "&gt;": ">",
                    "&quot;": '"',
                    "&apos;": "'",
                    "&amp;": "&"
                },
                characters: {
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&apos;",
                    "&": "&amp;"
                }
            },
            html4: {
                entities: {
                    "&apos;": "'",
                    "&nbsp": "\xa0",
                    "&nbsp;": "\xa0",
                    "&iexcl": "\xa1",
                    "&iexcl;": "\xa1",
                    "&cent": "\xa2",
                    "&cent;": "\xa2",
                    "&pound": "\xa3",
                    "&pound;": "\xa3",
                    "&curren": "\xa4",
                    "&curren;": "\xa4",
                    "&yen": "\xa5",
                    "&yen;": "\xa5",
                    "&brvbar": "\xa6",
                    "&brvbar;": "\xa6",
                    "&sect": "\xa7",
                    "&sect;": "\xa7",
                    "&uml": "\xa8",
                    "&uml;": "\xa8",
                    "&copy": "\xa9",
                    "&copy;": "\xa9",
                    "&ordf": "\xaa",
                    "&ordf;": "\xaa",
                    "&laquo": "\xab",
                    "&laquo;": "\xab",
                    "&not": "\xac",
                    "&not;": "\xac",
                    "&shy": "\xad",
                    "&shy;": "\xad",
                    "&reg": "\xae",
                    "&reg;": "\xae",
                    "&macr": "\xaf",
                    "&macr;": "\xaf",
                    "&deg": "\xb0",
                    "&deg;": "\xb0",
                    "&plusmn": "\xb1",
                    "&plusmn;": "\xb1",
                    "&sup2": "\xb2",
                    "&sup2;": "\xb2",
                    "&sup3": "\xb3",
                    "&sup3;": "\xb3",
                    "&acute": "\xb4",
                    "&acute;": "\xb4",
                    "&micro": "\xb5",
                    "&micro;": "\xb5",
                    "&para": "\xb6",
                    "&para;": "\xb6",
                    "&middot": "\xb7",
                    "&middot;": "\xb7",
                    "&cedil": "\xb8",
                    "&cedil;": "\xb8",
                    "&sup1": "\xb9",
                    "&sup1;": "\xb9",
                    "&ordm": "\xba",
                    "&ordm;": "\xba",
                    "&raquo": "\xbb",
                    "&raquo;": "\xbb",
                    "&frac14": "\xbc",
                    "&frac14;": "\xbc",
                    "&frac12": "\xbd",
                    "&frac12;": "\xbd",
                    "&frac34": "\xbe",
                    "&frac34;": "\xbe",
                    "&iquest": "\xbf",
                    "&iquest;": "\xbf",
                    "&Agrave": "\xc0",
                    "&Agrave;": "\xc0",
                    "&Aacute": "\xc1",
                    "&Aacute;": "\xc1",
                    "&Acirc": "\xc2",
                    "&Acirc;": "\xc2",
                    "&Atilde": "\xc3",
                    "&Atilde;": "\xc3",
                    "&Auml": "\xc4",
                    "&Auml;": "\xc4",
                    "&Aring": "\xc5",
                    "&Aring;": "\xc5",
                    "&AElig": "\xc6",
                    "&AElig;": "\xc6",
                    "&Ccedil": "\xc7",
                    "&Ccedil;": "\xc7",
                    "&Egrave": "\xc8",
                    "&Egrave;": "\xc8",
                    "&Eacute": "\xc9",
                    "&Eacute;": "\xc9",
                    "&Ecirc": "\xca",
                    "&Ecirc;": "\xca",
                    "&Euml": "\xcb",
                    "&Euml;": "\xcb",
                    "&Igrave": "\xcc",
                    "&Igrave;": "\xcc",
                    "&Iacute": "\xcd",
                    "&Iacute;": "\xcd",
                    "&Icirc": "\xce",
                    "&Icirc;": "\xce",
                    "&Iuml": "\xcf",
                    "&Iuml;": "\xcf",
                    "&ETH": "\xd0",
                    "&ETH;": "\xd0",
                    "&Ntilde": "\xd1",
                    "&Ntilde;": "\xd1",
                    "&Ograve": "\xd2",
                    "&Ograve;": "\xd2",
                    "&Oacute": "\xd3",
                    "&Oacute;": "\xd3",
                    "&Ocirc": "\xd4",
                    "&Ocirc;": "\xd4",
                    "&Otilde": "\xd5",
                    "&Otilde;": "\xd5",
                    "&Ouml": "\xd6",
                    "&Ouml;": "\xd6",
                    "&times": "\xd7",
                    "&times;": "\xd7",
                    "&Oslash": "\xd8",
                    "&Oslash;": "\xd8",
                    "&Ugrave": "\xd9",
                    "&Ugrave;": "\xd9",
                    "&Uacute": "\xda",
                    "&Uacute;": "\xda",
                    "&Ucirc": "\xdb",
                    "&Ucirc;": "\xdb",
                    "&Uuml": "\xdc",
                    "&Uuml;": "\xdc",
                    "&Yacute": "\xdd",
                    "&Yacute;": "\xdd",
                    "&THORN": "\xde",
                    "&THORN;": "\xde",
                    "&szlig": "\xdf",
                    "&szlig;": "\xdf",
                    "&agrave": "\xe0",
                    "&agrave;": "\xe0",
                    "&aacute": "\xe1",
                    "&aacute;": "\xe1",
                    "&acirc": "\xe2",
                    "&acirc;": "\xe2",
                    "&atilde": "\xe3",
                    "&atilde;": "\xe3",
                    "&auml": "\xe4",
                    "&auml;": "\xe4",
                    "&aring": "\xe5",
                    "&aring;": "\xe5",
                    "&aelig": "\xe6",
                    "&aelig;": "\xe6",
                    "&ccedil": "\xe7",
                    "&ccedil;": "\xe7",
                    "&egrave": "\xe8",
                    "&egrave;": "\xe8",
                    "&eacute": "\xe9",
                    "&eacute;": "\xe9",
                    "&ecirc": "\xea",
                    "&ecirc;": "\xea",
                    "&euml": "\xeb",
                    "&euml;": "\xeb",
                    "&igrave": "\xec",
                    "&igrave;": "\xec",
                    "&iacute": "\xed",
                    "&iacute;": "\xed",
                    "&icirc": "\xee",
                    "&icirc;": "\xee",
                    "&iuml": "\xef",
                    "&iuml;": "\xef",
                    "&eth": "\xf0",
                    "&eth;": "\xf0",
                    "&ntilde": "\xf1",
                    "&ntilde;": "\xf1",
                    "&ograve": "\xf2",
                    "&ograve;": "\xf2",
                    "&oacute": "\xf3",
                    "&oacute;": "\xf3",
                    "&ocirc": "\xf4",
                    "&ocirc;": "\xf4",
                    "&otilde": "\xf5",
                    "&otilde;": "\xf5",
                    "&ouml": "\xf6",
                    "&ouml;": "\xf6",
                    "&divide": "\xf7",
                    "&divide;": "\xf7",
                    "&oslash": "\xf8",
                    "&oslash;": "\xf8",
                    "&ugrave": "\xf9",
                    "&ugrave;": "\xf9",
                    "&uacute": "\xfa",
                    "&uacute;": "\xfa",
                    "&ucirc": "\xfb",
                    "&ucirc;": "\xfb",
                    "&uuml": "\xfc",
                    "&uuml;": "\xfc",
                    "&yacute": "\xfd",
                    "&yacute;": "\xfd",
                    "&thorn": "\xfe",
                    "&thorn;": "\xfe",
                    "&yuml": "\xff",
                    "&yuml;": "\xff",
                    "&quot": '"',
                    "&quot;": '"',
                    "&amp": "&",
                    "&amp;": "&",
                    "&lt": "<",
                    "&lt;": "<",
                    "&gt": ">",
                    "&gt;": ">",
                    "&OElig;": "Œ",
                    "&oelig;": "œ",
                    "&Scaron;": "Š",
                    "&scaron;": "š",
                    "&Yuml;": "Ÿ",
                    "&circ;": "ˆ",
                    "&tilde;": "˜",
                    "&ensp;": " ",
                    "&emsp;": " ",
                    "&thinsp;": " ",
                    "&zwnj;": "‌",
                    "&zwj;": "‍",
                    "&lrm;": "‎",
                    "&rlm;": "‏",
                    "&ndash;": "–",
                    "&mdash;": "—",
                    "&lsquo;": "‘",
                    "&rsquo;": "’",
                    "&sbquo;": "‚",
                    "&ldquo;": "“",
                    "&rdquo;": "”",
                    "&bdquo;": "„",
                    "&dagger;": "†",
                    "&Dagger;": "‡",
                    "&permil;": "‰",
                    "&lsaquo;": "‹",
                    "&rsaquo;": "›",
                    "&euro;": "€",
                    "&fnof;": "ƒ",
                    "&Alpha;": "Α",
                    "&Beta;": "Β",
                    "&Gamma;": "Γ",
                    "&Delta;": "Δ",
                    "&Epsilon;": "Ε",
                    "&Zeta;": "Ζ",
                    "&Eta;": "Η",
                    "&Theta;": "Θ",
                    "&Iota;": "Ι",
                    "&Kappa;": "Κ",
                    "&Lambda;": "Λ",
                    "&Mu;": "Μ",
                    "&Nu;": "Ν",
                    "&Xi;": "Ξ",
                    "&Omicron;": "Ο",
                    "&Pi;": "Π",
                    "&Rho;": "Ρ",
                    "&Sigma;": "Σ",
                    "&Tau;": "Τ",
                    "&Upsilon;": "Υ",
                    "&Phi;": "Φ",
                    "&Chi;": "Χ",
                    "&Psi;": "Ψ",
                    "&Omega;": "Ω",
                    "&alpha;": "α",
                    "&beta;": "β",
                    "&gamma;": "γ",
                    "&delta;": "δ",
                    "&epsilon;": "ε",
                    "&zeta;": "ζ",
                    "&eta;": "η",
                    "&theta;": "θ",
                    "&iota;": "ι",
                    "&kappa;": "κ",
                    "&lambda;": "λ",
                    "&mu;": "μ",
                    "&nu;": "ν",
                    "&xi;": "ξ",
                    "&omicron;": "ο",
                    "&pi;": "π",
                    "&rho;": "ρ",
                    "&sigmaf;": "ς",
                    "&sigma;": "σ",
                    "&tau;": "τ",
                    "&upsilon;": "υ",
                    "&phi;": "φ",
                    "&chi;": "χ",
                    "&psi;": "ψ",
                    "&omega;": "ω",
                    "&thetasym;": "ϑ",
                    "&upsih;": "ϒ",
                    "&piv;": "ϖ",
                    "&bull;": "•",
                    "&hellip;": "…",
                    "&prime;": "′",
                    "&Prime;": "″",
                    "&oline;": "‾",
                    "&frasl;": "⁄",
                    "&weierp;": "℘",
                    "&image;": "ℑ",
                    "&real;": "ℜ",
                    "&trade;": "™",
                    "&alefsym;": "ℵ",
                    "&larr;": "←",
                    "&uarr;": "↑",
                    "&rarr;": "→",
                    "&darr;": "↓",
                    "&harr;": "↔",
                    "&crarr;": "↵",
                    "&lArr;": "⇐",
                    "&uArr;": "⇑",
                    "&rArr;": "⇒",
                    "&dArr;": "⇓",
                    "&hArr;": "⇔",
                    "&forall;": "∀",
                    "&part;": "∂",
                    "&exist;": "∃",
                    "&empty;": "∅",
                    "&nabla;": "∇",
                    "&isin;": "∈",
                    "&notin;": "∉",
                    "&ni;": "∋",
                    "&prod;": "∏",
                    "&sum;": "∑",
                    "&minus;": "−",
                    "&lowast;": "∗",
                    "&radic;": "√",
                    "&prop;": "∝",
                    "&infin;": "∞",
                    "&ang;": "∠",
                    "&and;": "∧",
                    "&or;": "∨",
                    "&cap;": "∩",
                    "&cup;": "∪",
                    "&int;": "∫",
                    "&there4;": "∴",
                    "&sim;": "∼",
                    "&cong;": "≅",
                    "&asymp;": "≈",
                    "&ne;": "≠",
                    "&equiv;": "≡",
                    "&le;": "≤",
                    "&ge;": "≥",
                    "&sub;": "⊂",
                    "&sup;": "⊃",
                    "&nsub;": "⊄",
                    "&sube;": "⊆",
                    "&supe;": "⊇",
                    "&oplus;": "⊕",
                    "&otimes;": "⊗",
                    "&perp;": "⊥",
                    "&sdot;": "⋅",
                    "&lceil;": "⌈",
                    "&rceil;": "⌉",
                    "&lfloor;": "⌊",
                    "&rfloor;": "⌋",
                    "&lang;": "〈",
                    "&rang;": "〉",
                    "&loz;": "◊",
                    "&spades;": "♠",
                    "&clubs;": "♣",
                    "&hearts;": "♥",
                    "&diams;": "♦"
                },
                characters: {
                    "'": "&apos;",
                    "\xa0": "&nbsp;",
                    "\xa1": "&iexcl;",
                    "\xa2": "&cent;",
                    "\xa3": "&pound;",
                    "\xa4": "&curren;",
                    "\xa5": "&yen;",
                    "\xa6": "&brvbar;",
                    "\xa7": "&sect;",
                    "\xa8": "&uml;",
                    "\xa9": "&copy;",
                    "\xaa": "&ordf;",
                    "\xab": "&laquo;",
                    "\xac": "&not;",
                    "\xad": "&shy;",
                    "\xae": "&reg;",
                    "\xaf": "&macr;",
                    "\xb0": "&deg;",
                    "\xb1": "&plusmn;",
                    "\xb2": "&sup2;",
                    "\xb3": "&sup3;",
                    "\xb4": "&acute;",
                    "\xb5": "&micro;",
                    "\xb6": "&para;",
                    "\xb7": "&middot;",
                    "\xb8": "&cedil;",
                    "\xb9": "&sup1;",
                    "\xba": "&ordm;",
                    "\xbb": "&raquo;",
                    "\xbc": "&frac14;",
                    "\xbd": "&frac12;",
                    "\xbe": "&frac34;",
                    "\xbf": "&iquest;",
                    "\xc0": "&Agrave;",
                    "\xc1": "&Aacute;",
                    "\xc2": "&Acirc;",
                    "\xc3": "&Atilde;",
                    "\xc4": "&Auml;",
                    "\xc5": "&Aring;",
                    "\xc6": "&AElig;",
                    "\xc7": "&Ccedil;",
                    "\xc8": "&Egrave;",
                    "\xc9": "&Eacute;",
                    "\xca": "&Ecirc;",
                    "\xcb": "&Euml;",
                    "\xcc": "&Igrave;",
                    "\xcd": "&Iacute;",
                    "\xce": "&Icirc;",
                    "\xcf": "&Iuml;",
                    "\xd0": "&ETH;",
                    "\xd1": "&Ntilde;",
                    "\xd2": "&Ograve;",
                    "\xd3": "&Oacute;",
                    "\xd4": "&Ocirc;",
                    "\xd5": "&Otilde;",
                    "\xd6": "&Ouml;",
                    "\xd7": "&times;",
                    "\xd8": "&Oslash;",
                    "\xd9": "&Ugrave;",
                    "\xda": "&Uacute;",
                    "\xdb": "&Ucirc;",
                    "\xdc": "&Uuml;",
                    "\xdd": "&Yacute;",
                    "\xde": "&THORN;",
                    "\xdf": "&szlig;",
                    "\xe0": "&agrave;",
                    "\xe1": "&aacute;",
                    "\xe2": "&acirc;",
                    "\xe3": "&atilde;",
                    "\xe4": "&auml;",
                    "\xe5": "&aring;",
                    "\xe6": "&aelig;",
                    "\xe7": "&ccedil;",
                    "\xe8": "&egrave;",
                    "\xe9": "&eacute;",
                    "\xea": "&ecirc;",
                    "\xeb": "&euml;",
                    "\xec": "&igrave;",
                    "\xed": "&iacute;",
                    "\xee": "&icirc;",
                    "\xef": "&iuml;",
                    "\xf0": "&eth;",
                    "\xf1": "&ntilde;",
                    "\xf2": "&ograve;",
                    "\xf3": "&oacute;",
                    "\xf4": "&ocirc;",
                    "\xf5": "&otilde;",
                    "\xf6": "&ouml;",
                    "\xf7": "&divide;",
                    "\xf8": "&oslash;",
                    "\xf9": "&ugrave;",
                    "\xfa": "&uacute;",
                    "\xfb": "&ucirc;",
                    "\xfc": "&uuml;",
                    "\xfd": "&yacute;",
                    "\xfe": "&thorn;",
                    "\xff": "&yuml;",
                    '"': "&quot;",
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    "Œ": "&OElig;",
                    "œ": "&oelig;",
                    "Š": "&Scaron;",
                    "š": "&scaron;",
                    "Ÿ": "&Yuml;",
                    "ˆ": "&circ;",
                    "˜": "&tilde;",
                    " ": "&ensp;",
                    " ": "&emsp;",
                    " ": "&thinsp;",
                    "‌": "&zwnj;",
                    "‍": "&zwj;",
                    "‎": "&lrm;",
                    "‏": "&rlm;",
                    "–": "&ndash;",
                    "—": "&mdash;",
                    "‘": "&lsquo;",
                    "’": "&rsquo;",
                    "‚": "&sbquo;",
                    "“": "&ldquo;",
                    "”": "&rdquo;",
                    "„": "&bdquo;",
                    "†": "&dagger;",
                    "‡": "&Dagger;",
                    "‰": "&permil;",
                    "‹": "&lsaquo;",
                    "›": "&rsaquo;",
                    "€": "&euro;",
                    "ƒ": "&fnof;",
                    "Α": "&Alpha;",
                    "Β": "&Beta;",
                    "Γ": "&Gamma;",
                    "Δ": "&Delta;",
                    "Ε": "&Epsilon;",
                    "Ζ": "&Zeta;",
                    "Η": "&Eta;",
                    "Θ": "&Theta;",
                    "Ι": "&Iota;",
                    "Κ": "&Kappa;",
                    "Λ": "&Lambda;",
                    "Μ": "&Mu;",
                    "Ν": "&Nu;",
                    "Ξ": "&Xi;",
                    "Ο": "&Omicron;",
                    "Π": "&Pi;",
                    "Ρ": "&Rho;",
                    "Σ": "&Sigma;",
                    "Τ": "&Tau;",
                    "Υ": "&Upsilon;",
                    "Φ": "&Phi;",
                    "Χ": "&Chi;",
                    "Ψ": "&Psi;",
                    "Ω": "&Omega;",
                    "α": "&alpha;",
                    "β": "&beta;",
                    "γ": "&gamma;",
                    "δ": "&delta;",
                    "ε": "&epsilon;",
                    "ζ": "&zeta;",
                    "η": "&eta;",
                    "θ": "&theta;",
                    "ι": "&iota;",
                    "κ": "&kappa;",
                    "λ": "&lambda;",
                    "μ": "&mu;",
                    "ν": "&nu;",
                    "ξ": "&xi;",
                    "ο": "&omicron;",
                    "π": "&pi;",
                    "ρ": "&rho;",
                    "ς": "&sigmaf;",
                    "σ": "&sigma;",
                    "τ": "&tau;",
                    "υ": "&upsilon;",
                    "φ": "&phi;",
                    "χ": "&chi;",
                    "ψ": "&psi;",
                    "ω": "&omega;",
                    "ϑ": "&thetasym;",
                    "ϒ": "&upsih;",
                    "ϖ": "&piv;",
                    "•": "&bull;",
                    "…": "&hellip;",
                    "′": "&prime;",
                    "″": "&Prime;",
                    "‾": "&oline;",
                    "⁄": "&frasl;",
                    "℘": "&weierp;",
                    "ℑ": "&image;",
                    "ℜ": "&real;",
                    "™": "&trade;",
                    "ℵ": "&alefsym;",
                    "←": "&larr;",
                    "↑": "&uarr;",
                    "→": "&rarr;",
                    "↓": "&darr;",
                    "↔": "&harr;",
                    "↵": "&crarr;",
                    "⇐": "&lArr;",
                    "⇑": "&uArr;",
                    "⇒": "&rArr;",
                    "⇓": "&dArr;",
                    "⇔": "&hArr;",
                    "∀": "&forall;",
                    "∂": "&part;",
                    "∃": "&exist;",
                    "∅": "&empty;",
                    "∇": "&nabla;",
                    "∈": "&isin;",
                    "∉": "&notin;",
                    "∋": "&ni;",
                    "∏": "&prod;",
                    "∑": "&sum;",
                    "−": "&minus;",
                    "∗": "&lowast;",
                    "√": "&radic;",
                    "∝": "&prop;",
                    "∞": "&infin;",
                    "∠": "&ang;",
                    "∧": "&and;",
                    "∨": "&or;",
                    "∩": "&cap;",
                    "∪": "&cup;",
                    "∫": "&int;",
                    "∴": "&there4;",
                    "∼": "&sim;",
                    "≅": "&cong;",
                    "≈": "&asymp;",
                    "≠": "&ne;",
                    "≡": "&equiv;",
                    "≤": "&le;",
                    "≥": "&ge;",
                    "⊂": "&sub;",
                    "⊃": "&sup;",
                    "⊄": "&nsub;",
                    "⊆": "&sube;",
                    "⊇": "&supe;",
                    "⊕": "&oplus;",
                    "⊗": "&otimes;",
                    "⊥": "&perp;",
                    "⋅": "&sdot;",
                    "⌈": "&lceil;",
                    "⌉": "&rceil;",
                    "⌊": "&lfloor;",
                    "⌋": "&rfloor;",
                    "〈": "&lang;",
                    "〉": "&rang;",
                    "◊": "&loz;",
                    "♠": "&spades;",
                    "♣": "&clubs;",
                    "♥": "&hearts;",
                    "♦": "&diams;"
                }
            },
            html5: {
                entities: {
                    "&AElig": "\xc6",
                    "&AElig;": "\xc6",
                    "&AMP": "&",
                    "&AMP;": "&",
                    "&Aacute": "\xc1",
                    "&Aacute;": "\xc1",
                    "&Abreve;": "Ă",
                    "&Acirc": "\xc2",
                    "&Acirc;": "\xc2",
                    "&Acy;": "А",
                    "&Afr;": "\uD835\uDD04",
                    "&Agrave": "\xc0",
                    "&Agrave;": "\xc0",
                    "&Alpha;": "Α",
                    "&Amacr;": "Ā",
                    "&And;": "⩓",
                    "&Aogon;": "Ą",
                    "&Aopf;": "\uD835\uDD38",
                    "&ApplyFunction;": "⁡",
                    "&Aring": "\xc5",
                    "&Aring;": "\xc5",
                    "&Ascr;": "\uD835\uDC9C",
                    "&Assign;": "≔",
                    "&Atilde": "\xc3",
                    "&Atilde;": "\xc3",
                    "&Auml": "\xc4",
                    "&Auml;": "\xc4",
                    "&Backslash;": "∖",
                    "&Barv;": "⫧",
                    "&Barwed;": "⌆",
                    "&Bcy;": "Б",
                    "&Because;": "∵",
                    "&Bernoullis;": "ℬ",
                    "&Beta;": "Β",
                    "&Bfr;": "\uD835\uDD05",
                    "&Bopf;": "\uD835\uDD39",
                    "&Breve;": "˘",
                    "&Bscr;": "ℬ",
                    "&Bumpeq;": "≎",
                    "&CHcy;": "Ч",
                    "&COPY": "\xa9",
                    "&COPY;": "\xa9",
                    "&Cacute;": "Ć",
                    "&Cap;": "⋒",
                    "&CapitalDifferentialD;": "ⅅ",
                    "&Cayleys;": "ℭ",
                    "&Ccaron;": "Č",
                    "&Ccedil": "\xc7",
                    "&Ccedil;": "\xc7",
                    "&Ccirc;": "Ĉ",
                    "&Cconint;": "∰",
                    "&Cdot;": "Ċ",
                    "&Cedilla;": "\xb8",
                    "&CenterDot;": "\xb7",
                    "&Cfr;": "ℭ",
                    "&Chi;": "Χ",
                    "&CircleDot;": "⊙",
                    "&CircleMinus;": "⊖",
                    "&CirclePlus;": "⊕",
                    "&CircleTimes;": "⊗",
                    "&ClockwiseContourIntegral;": "∲",
                    "&CloseCurlyDoubleQuote;": "”",
                    "&CloseCurlyQuote;": "’",
                    "&Colon;": "∷",
                    "&Colone;": "⩴",
                    "&Congruent;": "≡",
                    "&Conint;": "∯",
                    "&ContourIntegral;": "∮",
                    "&Copf;": "ℂ",
                    "&Coproduct;": "∐",
                    "&CounterClockwiseContourIntegral;": "∳",
                    "&Cross;": "⨯",
                    "&Cscr;": "\uD835\uDC9E",
                    "&Cup;": "⋓",
                    "&CupCap;": "≍",
                    "&DD;": "ⅅ",
                    "&DDotrahd;": "⤑",
                    "&DJcy;": "Ђ",
                    "&DScy;": "Ѕ",
                    "&DZcy;": "Џ",
                    "&Dagger;": "‡",
                    "&Darr;": "↡",
                    "&Dashv;": "⫤",
                    "&Dcaron;": "Ď",
                    "&Dcy;": "Д",
                    "&Del;": "∇",
                    "&Delta;": "Δ",
                    "&Dfr;": "\uD835\uDD07",
                    "&DiacriticalAcute;": "\xb4",
                    "&DiacriticalDot;": "˙",
                    "&DiacriticalDoubleAcute;": "˝",
                    "&DiacriticalGrave;": "`",
                    "&DiacriticalTilde;": "˜",
                    "&Diamond;": "⋄",
                    "&DifferentialD;": "ⅆ",
                    "&Dopf;": "\uD835\uDD3B",
                    "&Dot;": "\xa8",
                    "&DotDot;": "⃜",
                    "&DotEqual;": "≐",
                    "&DoubleContourIntegral;": "∯",
                    "&DoubleDot;": "\xa8",
                    "&DoubleDownArrow;": "⇓",
                    "&DoubleLeftArrow;": "⇐",
                    "&DoubleLeftRightArrow;": "⇔",
                    "&DoubleLeftTee;": "⫤",
                    "&DoubleLongLeftArrow;": "⟸",
                    "&DoubleLongLeftRightArrow;": "⟺",
                    "&DoubleLongRightArrow;": "⟹",
                    "&DoubleRightArrow;": "⇒",
                    "&DoubleRightTee;": "⊨",
                    "&DoubleUpArrow;": "⇑",
                    "&DoubleUpDownArrow;": "⇕",
                    "&DoubleVerticalBar;": "∥",
                    "&DownArrow;": "↓",
                    "&DownArrowBar;": "⤓",
                    "&DownArrowUpArrow;": "⇵",
                    "&DownBreve;": "̑",
                    "&DownLeftRightVector;": "⥐",
                    "&DownLeftTeeVector;": "⥞",
                    "&DownLeftVector;": "↽",
                    "&DownLeftVectorBar;": "⥖",
                    "&DownRightTeeVector;": "⥟",
                    "&DownRightVector;": "⇁",
                    "&DownRightVectorBar;": "⥗",
                    "&DownTee;": "⊤",
                    "&DownTeeArrow;": "↧",
                    "&Downarrow;": "⇓",
                    "&Dscr;": "\uD835\uDC9F",
                    "&Dstrok;": "Đ",
                    "&ENG;": "Ŋ",
                    "&ETH": "\xd0",
                    "&ETH;": "\xd0",
                    "&Eacute": "\xc9",
                    "&Eacute;": "\xc9",
                    "&Ecaron;": "Ě",
                    "&Ecirc": "\xca",
                    "&Ecirc;": "\xca",
                    "&Ecy;": "Э",
                    "&Edot;": "Ė",
                    "&Efr;": "\uD835\uDD08",
                    "&Egrave": "\xc8",
                    "&Egrave;": "\xc8",
                    "&Element;": "∈",
                    "&Emacr;": "Ē",
                    "&EmptySmallSquare;": "◻",
                    "&EmptyVerySmallSquare;": "▫",
                    "&Eogon;": "Ę",
                    "&Eopf;": "\uD835\uDD3C",
                    "&Epsilon;": "Ε",
                    "&Equal;": "⩵",
                    "&EqualTilde;": "≂",
                    "&Equilibrium;": "⇌",
                    "&Escr;": "ℰ",
                    "&Esim;": "⩳",
                    "&Eta;": "Η",
                    "&Euml": "\xcb",
                    "&Euml;": "\xcb",
                    "&Exists;": "∃",
                    "&ExponentialE;": "ⅇ",
                    "&Fcy;": "Ф",
                    "&Ffr;": "\uD835\uDD09",
                    "&FilledSmallSquare;": "◼",
                    "&FilledVerySmallSquare;": "▪",
                    "&Fopf;": "\uD835\uDD3D",
                    "&ForAll;": "∀",
                    "&Fouriertrf;": "ℱ",
                    "&Fscr;": "ℱ",
                    "&GJcy;": "Ѓ",
                    "&GT": ">",
                    "&GT;": ">",
                    "&Gamma;": "Γ",
                    "&Gammad;": "Ϝ",
                    "&Gbreve;": "Ğ",
                    "&Gcedil;": "Ģ",
                    "&Gcirc;": "Ĝ",
                    "&Gcy;": "Г",
                    "&Gdot;": "Ġ",
                    "&Gfr;": "\uD835\uDD0A",
                    "&Gg;": "⋙",
                    "&Gopf;": "\uD835\uDD3E",
                    "&GreaterEqual;": "≥",
                    "&GreaterEqualLess;": "⋛",
                    "&GreaterFullEqual;": "≧",
                    "&GreaterGreater;": "⪢",
                    "&GreaterLess;": "≷",
                    "&GreaterSlantEqual;": "⩾",
                    "&GreaterTilde;": "≳",
                    "&Gscr;": "\uD835\uDCA2",
                    "&Gt;": "≫",
                    "&HARDcy;": "Ъ",
                    "&Hacek;": "ˇ",
                    "&Hat;": "^",
                    "&Hcirc;": "Ĥ",
                    "&Hfr;": "ℌ",
                    "&HilbertSpace;": "ℋ",
                    "&Hopf;": "ℍ",
                    "&HorizontalLine;": "─",
                    "&Hscr;": "ℋ",
                    "&Hstrok;": "Ħ",
                    "&HumpDownHump;": "≎",
                    "&HumpEqual;": "≏",
                    "&IEcy;": "Е",
                    "&IJlig;": "Ĳ",
                    "&IOcy;": "Ё",
                    "&Iacute": "\xcd",
                    "&Iacute;": "\xcd",
                    "&Icirc": "\xce",
                    "&Icirc;": "\xce",
                    "&Icy;": "И",
                    "&Idot;": "İ",
                    "&Ifr;": "ℑ",
                    "&Igrave": "\xcc",
                    "&Igrave;": "\xcc",
                    "&Im;": "ℑ",
                    "&Imacr;": "Ī",
                    "&ImaginaryI;": "ⅈ",
                    "&Implies;": "⇒",
                    "&Int;": "∬",
                    "&Integral;": "∫",
                    "&Intersection;": "⋂",
                    "&InvisibleComma;": "⁣",
                    "&InvisibleTimes;": "⁢",
                    "&Iogon;": "Į",
                    "&Iopf;": "\uD835\uDD40",
                    "&Iota;": "Ι",
                    "&Iscr;": "ℐ",
                    "&Itilde;": "Ĩ",
                    "&Iukcy;": "І",
                    "&Iuml": "\xcf",
                    "&Iuml;": "\xcf",
                    "&Jcirc;": "Ĵ",
                    "&Jcy;": "Й",
                    "&Jfr;": "\uD835\uDD0D",
                    "&Jopf;": "\uD835\uDD41",
                    "&Jscr;": "\uD835\uDCA5",
                    "&Jsercy;": "Ј",
                    "&Jukcy;": "Є",
                    "&KHcy;": "Х",
                    "&KJcy;": "Ќ",
                    "&Kappa;": "Κ",
                    "&Kcedil;": "Ķ",
                    "&Kcy;": "К",
                    "&Kfr;": "\uD835\uDD0E",
                    "&Kopf;": "\uD835\uDD42",
                    "&Kscr;": "\uD835\uDCA6",
                    "&LJcy;": "Љ",
                    "&LT": "<",
                    "&LT;": "<",
                    "&Lacute;": "Ĺ",
                    "&Lambda;": "Λ",
                    "&Lang;": "⟪",
                    "&Laplacetrf;": "ℒ",
                    "&Larr;": "↞",
                    "&Lcaron;": "Ľ",
                    "&Lcedil;": "Ļ",
                    "&Lcy;": "Л",
                    "&LeftAngleBracket;": "⟨",
                    "&LeftArrow;": "←",
                    "&LeftArrowBar;": "⇤",
                    "&LeftArrowRightArrow;": "⇆",
                    "&LeftCeiling;": "⌈",
                    "&LeftDoubleBracket;": "⟦",
                    "&LeftDownTeeVector;": "⥡",
                    "&LeftDownVector;": "⇃",
                    "&LeftDownVectorBar;": "⥙",
                    "&LeftFloor;": "⌊",
                    "&LeftRightArrow;": "↔",
                    "&LeftRightVector;": "⥎",
                    "&LeftTee;": "⊣",
                    "&LeftTeeArrow;": "↤",
                    "&LeftTeeVector;": "⥚",
                    "&LeftTriangle;": "⊲",
                    "&LeftTriangleBar;": "⧏",
                    "&LeftTriangleEqual;": "⊴",
                    "&LeftUpDownVector;": "⥑",
                    "&LeftUpTeeVector;": "⥠",
                    "&LeftUpVector;": "↿",
                    "&LeftUpVectorBar;": "⥘",
                    "&LeftVector;": "↼",
                    "&LeftVectorBar;": "⥒",
                    "&Leftarrow;": "⇐",
                    "&Leftrightarrow;": "⇔",
                    "&LessEqualGreater;": "⋚",
                    "&LessFullEqual;": "≦",
                    "&LessGreater;": "≶",
                    "&LessLess;": "⪡",
                    "&LessSlantEqual;": "⩽",
                    "&LessTilde;": "≲",
                    "&Lfr;": "\uD835\uDD0F",
                    "&Ll;": "⋘",
                    "&Lleftarrow;": "⇚",
                    "&Lmidot;": "Ŀ",
                    "&LongLeftArrow;": "⟵",
                    "&LongLeftRightArrow;": "⟷",
                    "&LongRightArrow;": "⟶",
                    "&Longleftarrow;": "⟸",
                    "&Longleftrightarrow;": "⟺",
                    "&Longrightarrow;": "⟹",
                    "&Lopf;": "\uD835\uDD43",
                    "&LowerLeftArrow;": "↙",
                    "&LowerRightArrow;": "↘",
                    "&Lscr;": "ℒ",
                    "&Lsh;": "↰",
                    "&Lstrok;": "Ł",
                    "&Lt;": "≪",
                    "&Map;": "⤅",
                    "&Mcy;": "М",
                    "&MediumSpace;": " ",
                    "&Mellintrf;": "ℳ",
                    "&Mfr;": "\uD835\uDD10",
                    "&MinusPlus;": "∓",
                    "&Mopf;": "\uD835\uDD44",
                    "&Mscr;": "ℳ",
                    "&Mu;": "Μ",
                    "&NJcy;": "Њ",
                    "&Nacute;": "Ń",
                    "&Ncaron;": "Ň",
                    "&Ncedil;": "Ņ",
                    "&Ncy;": "Н",
                    "&NegativeMediumSpace;": "​",
                    "&NegativeThickSpace;": "​",
                    "&NegativeThinSpace;": "​",
                    "&NegativeVeryThinSpace;": "​",
                    "&NestedGreaterGreater;": "≫",
                    "&NestedLessLess;": "≪",
                    "&NewLine;": "\n",
                    "&Nfr;": "\uD835\uDD11",
                    "&NoBreak;": "⁠",
                    "&NonBreakingSpace;": "\xa0",
                    "&Nopf;": "ℕ",
                    "&Not;": "⫬",
                    "&NotCongruent;": "≢",
                    "&NotCupCap;": "≭",
                    "&NotDoubleVerticalBar;": "∦",
                    "&NotElement;": "∉",
                    "&NotEqual;": "≠",
                    "&NotEqualTilde;": "≂̸",
                    "&NotExists;": "∄",
                    "&NotGreater;": "≯",
                    "&NotGreaterEqual;": "≱",
                    "&NotGreaterFullEqual;": "≧̸",
                    "&NotGreaterGreater;": "≫̸",
                    "&NotGreaterLess;": "≹",
                    "&NotGreaterSlantEqual;": "⩾̸",
                    "&NotGreaterTilde;": "≵",
                    "&NotHumpDownHump;": "≎̸",
                    "&NotHumpEqual;": "≏̸",
                    "&NotLeftTriangle;": "⋪",
                    "&NotLeftTriangleBar;": "⧏̸",
                    "&NotLeftTriangleEqual;": "⋬",
                    "&NotLess;": "≮",
                    "&NotLessEqual;": "≰",
                    "&NotLessGreater;": "≸",
                    "&NotLessLess;": "≪̸",
                    "&NotLessSlantEqual;": "⩽̸",
                    "&NotLessTilde;": "≴",
                    "&NotNestedGreaterGreater;": "⪢̸",
                    "&NotNestedLessLess;": "⪡̸",
                    "&NotPrecedes;": "⊀",
                    "&NotPrecedesEqual;": "⪯̸",
                    "&NotPrecedesSlantEqual;": "⋠",
                    "&NotReverseElement;": "∌",
                    "&NotRightTriangle;": "⋫",
                    "&NotRightTriangleBar;": "⧐̸",
                    "&NotRightTriangleEqual;": "⋭",
                    "&NotSquareSubset;": "⊏̸",
                    "&NotSquareSubsetEqual;": "⋢",
                    "&NotSquareSuperset;": "⊐̸",
                    "&NotSquareSupersetEqual;": "⋣",
                    "&NotSubset;": "⊂⃒",
                    "&NotSubsetEqual;": "⊈",
                    "&NotSucceeds;": "⊁",
                    "&NotSucceedsEqual;": "⪰̸",
                    "&NotSucceedsSlantEqual;": "⋡",
                    "&NotSucceedsTilde;": "≿̸",
                    "&NotSuperset;": "⊃⃒",
                    "&NotSupersetEqual;": "⊉",
                    "&NotTilde;": "≁",
                    "&NotTildeEqual;": "≄",
                    "&NotTildeFullEqual;": "≇",
                    "&NotTildeTilde;": "≉",
                    "&NotVerticalBar;": "∤",
                    "&Nscr;": "\uD835\uDCA9",
                    "&Ntilde": "\xd1",
                    "&Ntilde;": "\xd1",
                    "&Nu;": "Ν",
                    "&OElig;": "Œ",
                    "&Oacute": "\xd3",
                    "&Oacute;": "\xd3",
                    "&Ocirc": "\xd4",
                    "&Ocirc;": "\xd4",
                    "&Ocy;": "О",
                    "&Odblac;": "Ő",
                    "&Ofr;": "\uD835\uDD12",
                    "&Ograve": "\xd2",
                    "&Ograve;": "\xd2",
                    "&Omacr;": "Ō",
                    "&Omega;": "Ω",
                    "&Omicron;": "Ο",
                    "&Oopf;": "\uD835\uDD46",
                    "&OpenCurlyDoubleQuote;": "“",
                    "&OpenCurlyQuote;": "‘",
                    "&Or;": "⩔",
                    "&Oscr;": "\uD835\uDCAA",
                    "&Oslash": "\xd8",
                    "&Oslash;": "\xd8",
                    "&Otilde": "\xd5",
                    "&Otilde;": "\xd5",
                    "&Otimes;": "⨷",
                    "&Ouml": "\xd6",
                    "&Ouml;": "\xd6",
                    "&OverBar;": "‾",
                    "&OverBrace;": "⏞",
                    "&OverBracket;": "⎴",
                    "&OverParenthesis;": "⏜",
                    "&PartialD;": "∂",
                    "&Pcy;": "П",
                    "&Pfr;": "\uD835\uDD13",
                    "&Phi;": "Φ",
                    "&Pi;": "Π",
                    "&PlusMinus;": "\xb1",
                    "&Poincareplane;": "ℌ",
                    "&Popf;": "ℙ",
                    "&Pr;": "⪻",
                    "&Precedes;": "≺",
                    "&PrecedesEqual;": "⪯",
                    "&PrecedesSlantEqual;": "≼",
                    "&PrecedesTilde;": "≾",
                    "&Prime;": "″",
                    "&Product;": "∏",
                    "&Proportion;": "∷",
                    "&Proportional;": "∝",
                    "&Pscr;": "\uD835\uDCAB",
                    "&Psi;": "Ψ",
                    "&QUOT": '"',
                    "&QUOT;": '"',
                    "&Qfr;": "\uD835\uDD14",
                    "&Qopf;": "ℚ",
                    "&Qscr;": "\uD835\uDCAC",
                    "&RBarr;": "⤐",
                    "&REG": "\xae",
                    "&REG;": "\xae",
                    "&Racute;": "Ŕ",
                    "&Rang;": "⟫",
                    "&Rarr;": "↠",
                    "&Rarrtl;": "⤖",
                    "&Rcaron;": "Ř",
                    "&Rcedil;": "Ŗ",
                    "&Rcy;": "Р",
                    "&Re;": "ℜ",
                    "&ReverseElement;": "∋",
                    "&ReverseEquilibrium;": "⇋",
                    "&ReverseUpEquilibrium;": "⥯",
                    "&Rfr;": "ℜ",
                    "&Rho;": "Ρ",
                    "&RightAngleBracket;": "⟩",
                    "&RightArrow;": "→",
                    "&RightArrowBar;": "⇥",
                    "&RightArrowLeftArrow;": "⇄",
                    "&RightCeiling;": "⌉",
                    "&RightDoubleBracket;": "⟧",
                    "&RightDownTeeVector;": "⥝",
                    "&RightDownVector;": "⇂",
                    "&RightDownVectorBar;": "⥕",
                    "&RightFloor;": "⌋",
                    "&RightTee;": "⊢",
                    "&RightTeeArrow;": "↦",
                    "&RightTeeVector;": "⥛",
                    "&RightTriangle;": "⊳",
                    "&RightTriangleBar;": "⧐",
                    "&RightTriangleEqual;": "⊵",
                    "&RightUpDownVector;": "⥏",
                    "&RightUpTeeVector;": "⥜",
                    "&RightUpVector;": "↾",
                    "&RightUpVectorBar;": "⥔",
                    "&RightVector;": "⇀",
                    "&RightVectorBar;": "⥓",
                    "&Rightarrow;": "⇒",
                    "&Ropf;": "ℝ",
                    "&RoundImplies;": "⥰",
                    "&Rrightarrow;": "⇛",
                    "&Rscr;": "ℛ",
                    "&Rsh;": "↱",
                    "&RuleDelayed;": "⧴",
                    "&SHCHcy;": "Щ",
                    "&SHcy;": "Ш",
                    "&SOFTcy;": "Ь",
                    "&Sacute;": "Ś",
                    "&Sc;": "⪼",
                    "&Scaron;": "Š",
                    "&Scedil;": "Ş",
                    "&Scirc;": "Ŝ",
                    "&Scy;": "С",
                    "&Sfr;": "\uD835\uDD16",
                    "&ShortDownArrow;": "↓",
                    "&ShortLeftArrow;": "←",
                    "&ShortRightArrow;": "→",
                    "&ShortUpArrow;": "↑",
                    "&Sigma;": "Σ",
                    "&SmallCircle;": "∘",
                    "&Sopf;": "\uD835\uDD4A",
                    "&Sqrt;": "√",
                    "&Square;": "□",
                    "&SquareIntersection;": "⊓",
                    "&SquareSubset;": "⊏",
                    "&SquareSubsetEqual;": "⊑",
                    "&SquareSuperset;": "⊐",
                    "&SquareSupersetEqual;": "⊒",
                    "&SquareUnion;": "⊔",
                    "&Sscr;": "\uD835\uDCAE",
                    "&Star;": "⋆",
                    "&Sub;": "⋐",
                    "&Subset;": "⋐",
                    "&SubsetEqual;": "⊆",
                    "&Succeeds;": "≻",
                    "&SucceedsEqual;": "⪰",
                    "&SucceedsSlantEqual;": "≽",
                    "&SucceedsTilde;": "≿",
                    "&SuchThat;": "∋",
                    "&Sum;": "∑",
                    "&Sup;": "⋑",
                    "&Superset;": "⊃",
                    "&SupersetEqual;": "⊇",
                    "&Supset;": "⋑",
                    "&THORN": "\xde",
                    "&THORN;": "\xde",
                    "&TRADE;": "™",
                    "&TSHcy;": "Ћ",
                    "&TScy;": "Ц",
                    "&Tab;": "	",
                    "&Tau;": "Τ",
                    "&Tcaron;": "Ť",
                    "&Tcedil;": "Ţ",
                    "&Tcy;": "Т",
                    "&Tfr;": "\uD835\uDD17",
                    "&Therefore;": "∴",
                    "&Theta;": "Θ",
                    "&ThickSpace;": "  ",
                    "&ThinSpace;": " ",
                    "&Tilde;": "∼",
                    "&TildeEqual;": "≃",
                    "&TildeFullEqual;": "≅",
                    "&TildeTilde;": "≈",
                    "&Topf;": "\uD835\uDD4B",
                    "&TripleDot;": "⃛",
                    "&Tscr;": "\uD835\uDCAF",
                    "&Tstrok;": "Ŧ",
                    "&Uacute": "\xda",
                    "&Uacute;": "\xda",
                    "&Uarr;": "↟",
                    "&Uarrocir;": "⥉",
                    "&Ubrcy;": "Ў",
                    "&Ubreve;": "Ŭ",
                    "&Ucirc": "\xdb",
                    "&Ucirc;": "\xdb",
                    "&Ucy;": "У",
                    "&Udblac;": "Ű",
                    "&Ufr;": "\uD835\uDD18",
                    "&Ugrave": "\xd9",
                    "&Ugrave;": "\xd9",
                    "&Umacr;": "Ū",
                    "&UnderBar;": "_",
                    "&UnderBrace;": "⏟",
                    "&UnderBracket;": "⎵",
                    "&UnderParenthesis;": "⏝",
                    "&Union;": "⋃",
                    "&UnionPlus;": "⊎",
                    "&Uogon;": "Ų",
                    "&Uopf;": "\uD835\uDD4C",
                    "&UpArrow;": "↑",
                    "&UpArrowBar;": "⤒",
                    "&UpArrowDownArrow;": "⇅",
                    "&UpDownArrow;": "↕",
                    "&UpEquilibrium;": "⥮",
                    "&UpTee;": "⊥",
                    "&UpTeeArrow;": "↥",
                    "&Uparrow;": "⇑",
                    "&Updownarrow;": "⇕",
                    "&UpperLeftArrow;": "↖",
                    "&UpperRightArrow;": "↗",
                    "&Upsi;": "ϒ",
                    "&Upsilon;": "Υ",
                    "&Uring;": "Ů",
                    "&Uscr;": "\uD835\uDCB0",
                    "&Utilde;": "Ũ",
                    "&Uuml": "\xdc",
                    "&Uuml;": "\xdc",
                    "&VDash;": "⊫",
                    "&Vbar;": "⫫",
                    "&Vcy;": "В",
                    "&Vdash;": "⊩",
                    "&Vdashl;": "⫦",
                    "&Vee;": "⋁",
                    "&Verbar;": "‖",
                    "&Vert;": "‖",
                    "&VerticalBar;": "∣",
                    "&VerticalLine;": "|",
                    "&VerticalSeparator;": "❘",
                    "&VerticalTilde;": "≀",
                    "&VeryThinSpace;": " ",
                    "&Vfr;": "\uD835\uDD19",
                    "&Vopf;": "\uD835\uDD4D",
                    "&Vscr;": "\uD835\uDCB1",
                    "&Vvdash;": "⊪",
                    "&Wcirc;": "Ŵ",
                    "&Wedge;": "⋀",
                    "&Wfr;": "\uD835\uDD1A",
                    "&Wopf;": "\uD835\uDD4E",
                    "&Wscr;": "\uD835\uDCB2",
                    "&Xfr;": "\uD835\uDD1B",
                    "&Xi;": "Ξ",
                    "&Xopf;": "\uD835\uDD4F",
                    "&Xscr;": "\uD835\uDCB3",
                    "&YAcy;": "Я",
                    "&YIcy;": "Ї",
                    "&YUcy;": "Ю",
                    "&Yacute": "\xdd",
                    "&Yacute;": "\xdd",
                    "&Ycirc;": "Ŷ",
                    "&Ycy;": "Ы",
                    "&Yfr;": "\uD835\uDD1C",
                    "&Yopf;": "\uD835\uDD50",
                    "&Yscr;": "\uD835\uDCB4",
                    "&Yuml;": "Ÿ",
                    "&ZHcy;": "Ж",
                    "&Zacute;": "Ź",
                    "&Zcaron;": "Ž",
                    "&Zcy;": "З",
                    "&Zdot;": "Ż",
                    "&ZeroWidthSpace;": "​",
                    "&Zeta;": "Ζ",
                    "&Zfr;": "ℨ",
                    "&Zopf;": "ℤ",
                    "&Zscr;": "\uD835\uDCB5",
                    "&aacute": "\xe1",
                    "&aacute;": "\xe1",
                    "&abreve;": "ă",
                    "&ac;": "∾",
                    "&acE;": "∾̳",
                    "&acd;": "∿",
                    "&acirc": "\xe2",
                    "&acirc;": "\xe2",
                    "&acute": "\xb4",
                    "&acute;": "\xb4",
                    "&acy;": "а",
                    "&aelig": "\xe6",
                    "&aelig;": "\xe6",
                    "&af;": "⁡",
                    "&afr;": "\uD835\uDD1E",
                    "&agrave": "\xe0",
                    "&agrave;": "\xe0",
                    "&alefsym;": "ℵ",
                    "&aleph;": "ℵ",
                    "&alpha;": "α",
                    "&amacr;": "ā",
                    "&amalg;": "⨿",
                    "&amp": "&",
                    "&amp;": "&",
                    "&and;": "∧",
                    "&andand;": "⩕",
                    "&andd;": "⩜",
                    "&andslope;": "⩘",
                    "&andv;": "⩚",
                    "&ang;": "∠",
                    "&ange;": "⦤",
                    "&angle;": "∠",
                    "&angmsd;": "∡",
                    "&angmsdaa;": "⦨",
                    "&angmsdab;": "⦩",
                    "&angmsdac;": "⦪",
                    "&angmsdad;": "⦫",
                    "&angmsdae;": "⦬",
                    "&angmsdaf;": "⦭",
                    "&angmsdag;": "⦮",
                    "&angmsdah;": "⦯",
                    "&angrt;": "∟",
                    "&angrtvb;": "⊾",
                    "&angrtvbd;": "⦝",
                    "&angsph;": "∢",
                    "&angst;": "\xc5",
                    "&angzarr;": "⍼",
                    "&aogon;": "ą",
                    "&aopf;": "\uD835\uDD52",
                    "&ap;": "≈",
                    "&apE;": "⩰",
                    "&apacir;": "⩯",
                    "&ape;": "≊",
                    "&apid;": "≋",
                    "&apos;": "'",
                    "&approx;": "≈",
                    "&approxeq;": "≊",
                    "&aring": "\xe5",
                    "&aring;": "\xe5",
                    "&ascr;": "\uD835\uDCB6",
                    "&ast;": "*",
                    "&asymp;": "≈",
                    "&asympeq;": "≍",
                    "&atilde": "\xe3",
                    "&atilde;": "\xe3",
                    "&auml": "\xe4",
                    "&auml;": "\xe4",
                    "&awconint;": "∳",
                    "&awint;": "⨑",
                    "&bNot;": "⫭",
                    "&backcong;": "≌",
                    "&backepsilon;": "϶",
                    "&backprime;": "‵",
                    "&backsim;": "∽",
                    "&backsimeq;": "⋍",
                    "&barvee;": "⊽",
                    "&barwed;": "⌅",
                    "&barwedge;": "⌅",
                    "&bbrk;": "⎵",
                    "&bbrktbrk;": "⎶",
                    "&bcong;": "≌",
                    "&bcy;": "б",
                    "&bdquo;": "„",
                    "&becaus;": "∵",
                    "&because;": "∵",
                    "&bemptyv;": "⦰",
                    "&bepsi;": "϶",
                    "&bernou;": "ℬ",
                    "&beta;": "β",
                    "&beth;": "ℶ",
                    "&between;": "≬",
                    "&bfr;": "\uD835\uDD1F",
                    "&bigcap;": "⋂",
                    "&bigcirc;": "◯",
                    "&bigcup;": "⋃",
                    "&bigodot;": "⨀",
                    "&bigoplus;": "⨁",
                    "&bigotimes;": "⨂",
                    "&bigsqcup;": "⨆",
                    "&bigstar;": "★",
                    "&bigtriangledown;": "▽",
                    "&bigtriangleup;": "△",
                    "&biguplus;": "⨄",
                    "&bigvee;": "⋁",
                    "&bigwedge;": "⋀",
                    "&bkarow;": "⤍",
                    "&blacklozenge;": "⧫",
                    "&blacksquare;": "▪",
                    "&blacktriangle;": "▴",
                    "&blacktriangledown;": "▾",
                    "&blacktriangleleft;": "◂",
                    "&blacktriangleright;": "▸",
                    "&blank;": "␣",
                    "&blk12;": "▒",
                    "&blk14;": "░",
                    "&blk34;": "▓",
                    "&block;": "█",
                    "&bne;": "=⃥",
                    "&bnequiv;": "≡⃥",
                    "&bnot;": "⌐",
                    "&bopf;": "\uD835\uDD53",
                    "&bot;": "⊥",
                    "&bottom;": "⊥",
                    "&bowtie;": "⋈",
                    "&boxDL;": "╗",
                    "&boxDR;": "╔",
                    "&boxDl;": "╖",
                    "&boxDr;": "╓",
                    "&boxH;": "═",
                    "&boxHD;": "╦",
                    "&boxHU;": "╩",
                    "&boxHd;": "╤",
                    "&boxHu;": "╧",
                    "&boxUL;": "╝",
                    "&boxUR;": "╚",
                    "&boxUl;": "╜",
                    "&boxUr;": "╙",
                    "&boxV;": "║",
                    "&boxVH;": "╬",
                    "&boxVL;": "╣",
                    "&boxVR;": "╠",
                    "&boxVh;": "╫",
                    "&boxVl;": "╢",
                    "&boxVr;": "╟",
                    "&boxbox;": "⧉",
                    "&boxdL;": "╕",
                    "&boxdR;": "╒",
                    "&boxdl;": "┐",
                    "&boxdr;": "┌",
                    "&boxh;": "─",
                    "&boxhD;": "╥",
                    "&boxhU;": "╨",
                    "&boxhd;": "┬",
                    "&boxhu;": "┴",
                    "&boxminus;": "⊟",
                    "&boxplus;": "⊞",
                    "&boxtimes;": "⊠",
                    "&boxuL;": "╛",
                    "&boxuR;": "╘",
                    "&boxul;": "┘",
                    "&boxur;": "└",
                    "&boxv;": "│",
                    "&boxvH;": "╪",
                    "&boxvL;": "╡",
                    "&boxvR;": "╞",
                    "&boxvh;": "┼",
                    "&boxvl;": "┤",
                    "&boxvr;": "├",
                    "&bprime;": "‵",
                    "&breve;": "˘",
                    "&brvbar": "\xa6",
                    "&brvbar;": "\xa6",
                    "&bscr;": "\uD835\uDCB7",
                    "&bsemi;": "⁏",
                    "&bsim;": "∽",
                    "&bsime;": "⋍",
                    "&bsol;": "\\",
                    "&bsolb;": "⧅",
                    "&bsolhsub;": "⟈",
                    "&bull;": "•",
                    "&bullet;": "•",
                    "&bump;": "≎",
                    "&bumpE;": "⪮",
                    "&bumpe;": "≏",
                    "&bumpeq;": "≏",
                    "&cacute;": "ć",
                    "&cap;": "∩",
                    "&capand;": "⩄",
                    "&capbrcup;": "⩉",
                    "&capcap;": "⩋",
                    "&capcup;": "⩇",
                    "&capdot;": "⩀",
                    "&caps;": "∩︀",
                    "&caret;": "⁁",
                    "&caron;": "ˇ",
                    "&ccaps;": "⩍",
                    "&ccaron;": "č",
                    "&ccedil": "\xe7",
                    "&ccedil;": "\xe7",
                    "&ccirc;": "ĉ",
                    "&ccups;": "⩌",
                    "&ccupssm;": "⩐",
                    "&cdot;": "ċ",
                    "&cedil": "\xb8",
                    "&cedil;": "\xb8",
                    "&cemptyv;": "⦲",
                    "&cent": "\xa2",
                    "&cent;": "\xa2",
                    "&centerdot;": "\xb7",
                    "&cfr;": "\uD835\uDD20",
                    "&chcy;": "ч",
                    "&check;": "✓",
                    "&checkmark;": "✓",
                    "&chi;": "χ",
                    "&cir;": "○",
                    "&cirE;": "⧃",
                    "&circ;": "ˆ",
                    "&circeq;": "≗",
                    "&circlearrowleft;": "↺",
                    "&circlearrowright;": "↻",
                    "&circledR;": "\xae",
                    "&circledS;": "Ⓢ",
                    "&circledast;": "⊛",
                    "&circledcirc;": "⊚",
                    "&circleddash;": "⊝",
                    "&cire;": "≗",
                    "&cirfnint;": "⨐",
                    "&cirmid;": "⫯",
                    "&cirscir;": "⧂",
                    "&clubs;": "♣",
                    "&clubsuit;": "♣",
                    "&colon;": ":",
                    "&colone;": "≔",
                    "&coloneq;": "≔",
                    "&comma;": ",",
                    "&commat;": "@",
                    "&comp;": "∁",
                    "&compfn;": "∘",
                    "&complement;": "∁",
                    "&complexes;": "ℂ",
                    "&cong;": "≅",
                    "&congdot;": "⩭",
                    "&conint;": "∮",
                    "&copf;": "\uD835\uDD54",
                    "&coprod;": "∐",
                    "&copy": "\xa9",
                    "&copy;": "\xa9",
                    "&copysr;": "℗",
                    "&crarr;": "↵",
                    "&cross;": "✗",
                    "&cscr;": "\uD835\uDCB8",
                    "&csub;": "⫏",
                    "&csube;": "⫑",
                    "&csup;": "⫐",
                    "&csupe;": "⫒",
                    "&ctdot;": "⋯",
                    "&cudarrl;": "⤸",
                    "&cudarrr;": "⤵",
                    "&cuepr;": "⋞",
                    "&cuesc;": "⋟",
                    "&cularr;": "↶",
                    "&cularrp;": "⤽",
                    "&cup;": "∪",
                    "&cupbrcap;": "⩈",
                    "&cupcap;": "⩆",
                    "&cupcup;": "⩊",
                    "&cupdot;": "⊍",
                    "&cupor;": "⩅",
                    "&cups;": "∪︀",
                    "&curarr;": "↷",
                    "&curarrm;": "⤼",
                    "&curlyeqprec;": "⋞",
                    "&curlyeqsucc;": "⋟",
                    "&curlyvee;": "⋎",
                    "&curlywedge;": "⋏",
                    "&curren": "\xa4",
                    "&curren;": "\xa4",
                    "&curvearrowleft;": "↶",
                    "&curvearrowright;": "↷",
                    "&cuvee;": "⋎",
                    "&cuwed;": "⋏",
                    "&cwconint;": "∲",
                    "&cwint;": "∱",
                    "&cylcty;": "⌭",
                    "&dArr;": "⇓",
                    "&dHar;": "⥥",
                    "&dagger;": "†",
                    "&daleth;": "ℸ",
                    "&darr;": "↓",
                    "&dash;": "‐",
                    "&dashv;": "⊣",
                    "&dbkarow;": "⤏",
                    "&dblac;": "˝",
                    "&dcaron;": "ď",
                    "&dcy;": "д",
                    "&dd;": "ⅆ",
                    "&ddagger;": "‡",
                    "&ddarr;": "⇊",
                    "&ddotseq;": "⩷",
                    "&deg": "\xb0",
                    "&deg;": "\xb0",
                    "&delta;": "δ",
                    "&demptyv;": "⦱",
                    "&dfisht;": "⥿",
                    "&dfr;": "\uD835\uDD21",
                    "&dharl;": "⇃",
                    "&dharr;": "⇂",
                    "&diam;": "⋄",
                    "&diamond;": "⋄",
                    "&diamondsuit;": "♦",
                    "&diams;": "♦",
                    "&die;": "\xa8",
                    "&digamma;": "ϝ",
                    "&disin;": "⋲",
                    "&div;": "\xf7",
                    "&divide": "\xf7",
                    "&divide;": "\xf7",
                    "&divideontimes;": "⋇",
                    "&divonx;": "⋇",
                    "&djcy;": "ђ",
                    "&dlcorn;": "⌞",
                    "&dlcrop;": "⌍",
                    "&dollar;": "$",
                    "&dopf;": "\uD835\uDD55",
                    "&dot;": "˙",
                    "&doteq;": "≐",
                    "&doteqdot;": "≑",
                    "&dotminus;": "∸",
                    "&dotplus;": "∔",
                    "&dotsquare;": "⊡",
                    "&doublebarwedge;": "⌆",
                    "&downarrow;": "↓",
                    "&downdownarrows;": "⇊",
                    "&downharpoonleft;": "⇃",
                    "&downharpoonright;": "⇂",
                    "&drbkarow;": "⤐",
                    "&drcorn;": "⌟",
                    "&drcrop;": "⌌",
                    "&dscr;": "\uD835\uDCB9",
                    "&dscy;": "ѕ",
                    "&dsol;": "⧶",
                    "&dstrok;": "đ",
                    "&dtdot;": "⋱",
                    "&dtri;": "▿",
                    "&dtrif;": "▾",
                    "&duarr;": "⇵",
                    "&duhar;": "⥯",
                    "&dwangle;": "⦦",
                    "&dzcy;": "џ",
                    "&dzigrarr;": "⟿",
                    "&eDDot;": "⩷",
                    "&eDot;": "≑",
                    "&eacute": "\xe9",
                    "&eacute;": "\xe9",
                    "&easter;": "⩮",
                    "&ecaron;": "ě",
                    "&ecir;": "≖",
                    "&ecirc": "\xea",
                    "&ecirc;": "\xea",
                    "&ecolon;": "≕",
                    "&ecy;": "э",
                    "&edot;": "ė",
                    "&ee;": "ⅇ",
                    "&efDot;": "≒",
                    "&efr;": "\uD835\uDD22",
                    "&eg;": "⪚",
                    "&egrave": "\xe8",
                    "&egrave;": "\xe8",
                    "&egs;": "⪖",
                    "&egsdot;": "⪘",
                    "&el;": "⪙",
                    "&elinters;": "⏧",
                    "&ell;": "ℓ",
                    "&els;": "⪕",
                    "&elsdot;": "⪗",
                    "&emacr;": "ē",
                    "&empty;": "∅",
                    "&emptyset;": "∅",
                    "&emptyv;": "∅",
                    "&emsp13;": " ",
                    "&emsp14;": " ",
                    "&emsp;": " ",
                    "&eng;": "ŋ",
                    "&ensp;": " ",
                    "&eogon;": "ę",
                    "&eopf;": "\uD835\uDD56",
                    "&epar;": "⋕",
                    "&eparsl;": "⧣",
                    "&eplus;": "⩱",
                    "&epsi;": "ε",
                    "&epsilon;": "ε",
                    "&epsiv;": "ϵ",
                    "&eqcirc;": "≖",
                    "&eqcolon;": "≕",
                    "&eqsim;": "≂",
                    "&eqslantgtr;": "⪖",
                    "&eqslantless;": "⪕",
                    "&equals;": "=",
                    "&equest;": "≟",
                    "&equiv;": "≡",
                    "&equivDD;": "⩸",
                    "&eqvparsl;": "⧥",
                    "&erDot;": "≓",
                    "&erarr;": "⥱",
                    "&escr;": "ℯ",
                    "&esdot;": "≐",
                    "&esim;": "≂",
                    "&eta;": "η",
                    "&eth": "\xf0",
                    "&eth;": "\xf0",
                    "&euml": "\xeb",
                    "&euml;": "\xeb",
                    "&euro;": "€",
                    "&excl;": "!",
                    "&exist;": "∃",
                    "&expectation;": "ℰ",
                    "&exponentiale;": "ⅇ",
                    "&fallingdotseq;": "≒",
                    "&fcy;": "ф",
                    "&female;": "♀",
                    "&ffilig;": "ﬃ",
                    "&fflig;": "ﬀ",
                    "&ffllig;": "ﬄ",
                    "&ffr;": "\uD835\uDD23",
                    "&filig;": "ﬁ",
                    "&fjlig;": "fj",
                    "&flat;": "♭",
                    "&fllig;": "ﬂ",
                    "&fltns;": "▱",
                    "&fnof;": "ƒ",
                    "&fopf;": "\uD835\uDD57",
                    "&forall;": "∀",
                    "&fork;": "⋔",
                    "&forkv;": "⫙",
                    "&fpartint;": "⨍",
                    "&frac12": "\xbd",
                    "&frac12;": "\xbd",
                    "&frac13;": "⅓",
                    "&frac14": "\xbc",
                    "&frac14;": "\xbc",
                    "&frac15;": "⅕",
                    "&frac16;": "⅙",
                    "&frac18;": "⅛",
                    "&frac23;": "⅔",
                    "&frac25;": "⅖",
                    "&frac34": "\xbe",
                    "&frac34;": "\xbe",
                    "&frac35;": "⅗",
                    "&frac38;": "⅜",
                    "&frac45;": "⅘",
                    "&frac56;": "⅚",
                    "&frac58;": "⅝",
                    "&frac78;": "⅞",
                    "&frasl;": "⁄",
                    "&frown;": "⌢",
                    "&fscr;": "\uD835\uDCBB",
                    "&gE;": "≧",
                    "&gEl;": "⪌",
                    "&gacute;": "ǵ",
                    "&gamma;": "γ",
                    "&gammad;": "ϝ",
                    "&gap;": "⪆",
                    "&gbreve;": "ğ",
                    "&gcirc;": "ĝ",
                    "&gcy;": "г",
                    "&gdot;": "ġ",
                    "&ge;": "≥",
                    "&gel;": "⋛",
                    "&geq;": "≥",
                    "&geqq;": "≧",
                    "&geqslant;": "⩾",
                    "&ges;": "⩾",
                    "&gescc;": "⪩",
                    "&gesdot;": "⪀",
                    "&gesdoto;": "⪂",
                    "&gesdotol;": "⪄",
                    "&gesl;": "⋛︀",
                    "&gesles;": "⪔",
                    "&gfr;": "\uD835\uDD24",
                    "&gg;": "≫",
                    "&ggg;": "⋙",
                    "&gimel;": "ℷ",
                    "&gjcy;": "ѓ",
                    "&gl;": "≷",
                    "&glE;": "⪒",
                    "&gla;": "⪥",
                    "&glj;": "⪤",
                    "&gnE;": "≩",
                    "&gnap;": "⪊",
                    "&gnapprox;": "⪊",
                    "&gne;": "⪈",
                    "&gneq;": "⪈",
                    "&gneqq;": "≩",
                    "&gnsim;": "⋧",
                    "&gopf;": "\uD835\uDD58",
                    "&grave;": "`",
                    "&gscr;": "ℊ",
                    "&gsim;": "≳",
                    "&gsime;": "⪎",
                    "&gsiml;": "⪐",
                    "&gt": ">",
                    "&gt;": ">",
                    "&gtcc;": "⪧",
                    "&gtcir;": "⩺",
                    "&gtdot;": "⋗",
                    "&gtlPar;": "⦕",
                    "&gtquest;": "⩼",
                    "&gtrapprox;": "⪆",
                    "&gtrarr;": "⥸",
                    "&gtrdot;": "⋗",
                    "&gtreqless;": "⋛",
                    "&gtreqqless;": "⪌",
                    "&gtrless;": "≷",
                    "&gtrsim;": "≳",
                    "&gvertneqq;": "≩︀",
                    "&gvnE;": "≩︀",
                    "&hArr;": "⇔",
                    "&hairsp;": " ",
                    "&half;": "\xbd",
                    "&hamilt;": "ℋ",
                    "&hardcy;": "ъ",
                    "&harr;": "↔",
                    "&harrcir;": "⥈",
                    "&harrw;": "↭",
                    "&hbar;": "ℏ",
                    "&hcirc;": "ĥ",
                    "&hearts;": "♥",
                    "&heartsuit;": "♥",
                    "&hellip;": "…",
                    "&hercon;": "⊹",
                    "&hfr;": "\uD835\uDD25",
                    "&hksearow;": "⤥",
                    "&hkswarow;": "⤦",
                    "&hoarr;": "⇿",
                    "&homtht;": "∻",
                    "&hookleftarrow;": "↩",
                    "&hookrightarrow;": "↪",
                    "&hopf;": "\uD835\uDD59",
                    "&horbar;": "―",
                    "&hscr;": "\uD835\uDCBD",
                    "&hslash;": "ℏ",
                    "&hstrok;": "ħ",
                    "&hybull;": "⁃",
                    "&hyphen;": "‐",
                    "&iacute": "\xed",
                    "&iacute;": "\xed",
                    "&ic;": "⁣",
                    "&icirc": "\xee",
                    "&icirc;": "\xee",
                    "&icy;": "и",
                    "&iecy;": "е",
                    "&iexcl": "\xa1",
                    "&iexcl;": "\xa1",
                    "&iff;": "⇔",
                    "&ifr;": "\uD835\uDD26",
                    "&igrave": "\xec",
                    "&igrave;": "\xec",
                    "&ii;": "ⅈ",
                    "&iiiint;": "⨌",
                    "&iiint;": "∭",
                    "&iinfin;": "⧜",
                    "&iiota;": "℩",
                    "&ijlig;": "ĳ",
                    "&imacr;": "ī",
                    "&image;": "ℑ",
                    "&imagline;": "ℐ",
                    "&imagpart;": "ℑ",
                    "&imath;": "ı",
                    "&imof;": "⊷",
                    "&imped;": "Ƶ",
                    "&in;": "∈",
                    "&incare;": "℅",
                    "&infin;": "∞",
                    "&infintie;": "⧝",
                    "&inodot;": "ı",
                    "&int;": "∫",
                    "&intcal;": "⊺",
                    "&integers;": "ℤ",
                    "&intercal;": "⊺",
                    "&intlarhk;": "⨗",
                    "&intprod;": "⨼",
                    "&iocy;": "ё",
                    "&iogon;": "į",
                    "&iopf;": "\uD835\uDD5A",
                    "&iota;": "ι",
                    "&iprod;": "⨼",
                    "&iquest": "\xbf",
                    "&iquest;": "\xbf",
                    "&iscr;": "\uD835\uDCBE",
                    "&isin;": "∈",
                    "&isinE;": "⋹",
                    "&isindot;": "⋵",
                    "&isins;": "⋴",
                    "&isinsv;": "⋳",
                    "&isinv;": "∈",
                    "&it;": "⁢",
                    "&itilde;": "ĩ",
                    "&iukcy;": "і",
                    "&iuml": "\xef",
                    "&iuml;": "\xef",
                    "&jcirc;": "ĵ",
                    "&jcy;": "й",
                    "&jfr;": "\uD835\uDD27",
                    "&jmath;": "ȷ",
                    "&jopf;": "\uD835\uDD5B",
                    "&jscr;": "\uD835\uDCBF",
                    "&jsercy;": "ј",
                    "&jukcy;": "є",
                    "&kappa;": "κ",
                    "&kappav;": "ϰ",
                    "&kcedil;": "ķ",
                    "&kcy;": "к",
                    "&kfr;": "\uD835\uDD28",
                    "&kgreen;": "ĸ",
                    "&khcy;": "х",
                    "&kjcy;": "ќ",
                    "&kopf;": "\uD835\uDD5C",
                    "&kscr;": "\uD835\uDCC0",
                    "&lAarr;": "⇚",
                    "&lArr;": "⇐",
                    "&lAtail;": "⤛",
                    "&lBarr;": "⤎",
                    "&lE;": "≦",
                    "&lEg;": "⪋",
                    "&lHar;": "⥢",
                    "&lacute;": "ĺ",
                    "&laemptyv;": "⦴",
                    "&lagran;": "ℒ",
                    "&lambda;": "λ",
                    "&lang;": "⟨",
                    "&langd;": "⦑",
                    "&langle;": "⟨",
                    "&lap;": "⪅",
                    "&laquo": "\xab",
                    "&laquo;": "\xab",
                    "&larr;": "←",
                    "&larrb;": "⇤",
                    "&larrbfs;": "⤟",
                    "&larrfs;": "⤝",
                    "&larrhk;": "↩",
                    "&larrlp;": "↫",
                    "&larrpl;": "⤹",
                    "&larrsim;": "⥳",
                    "&larrtl;": "↢",
                    "&lat;": "⪫",
                    "&latail;": "⤙",
                    "&late;": "⪭",
                    "&lates;": "⪭︀",
                    "&lbarr;": "⤌",
                    "&lbbrk;": "❲",
                    "&lbrace;": "{",
                    "&lbrack;": "[",
                    "&lbrke;": "⦋",
                    "&lbrksld;": "⦏",
                    "&lbrkslu;": "⦍",
                    "&lcaron;": "ľ",
                    "&lcedil;": "ļ",
                    "&lceil;": "⌈",
                    "&lcub;": "{",
                    "&lcy;": "л",
                    "&ldca;": "⤶",
                    "&ldquo;": "“",
                    "&ldquor;": "„",
                    "&ldrdhar;": "⥧",
                    "&ldrushar;": "⥋",
                    "&ldsh;": "↲",
                    "&le;": "≤",
                    "&leftarrow;": "←",
                    "&leftarrowtail;": "↢",
                    "&leftharpoondown;": "↽",
                    "&leftharpoonup;": "↼",
                    "&leftleftarrows;": "⇇",
                    "&leftrightarrow;": "↔",
                    "&leftrightarrows;": "⇆",
                    "&leftrightharpoons;": "⇋",
                    "&leftrightsquigarrow;": "↭",
                    "&leftthreetimes;": "⋋",
                    "&leg;": "⋚",
                    "&leq;": "≤",
                    "&leqq;": "≦",
                    "&leqslant;": "⩽",
                    "&les;": "⩽",
                    "&lescc;": "⪨",
                    "&lesdot;": "⩿",
                    "&lesdoto;": "⪁",
                    "&lesdotor;": "⪃",
                    "&lesg;": "⋚︀",
                    "&lesges;": "⪓",
                    "&lessapprox;": "⪅",
                    "&lessdot;": "⋖",
                    "&lesseqgtr;": "⋚",
                    "&lesseqqgtr;": "⪋",
                    "&lessgtr;": "≶",
                    "&lesssim;": "≲",
                    "&lfisht;": "⥼",
                    "&lfloor;": "⌊",
                    "&lfr;": "\uD835\uDD29",
                    "&lg;": "≶",
                    "&lgE;": "⪑",
                    "&lhard;": "↽",
                    "&lharu;": "↼",
                    "&lharul;": "⥪",
                    "&lhblk;": "▄",
                    "&ljcy;": "љ",
                    "&ll;": "≪",
                    "&llarr;": "⇇",
                    "&llcorner;": "⌞",
                    "&llhard;": "⥫",
                    "&lltri;": "◺",
                    "&lmidot;": "ŀ",
                    "&lmoust;": "⎰",
                    "&lmoustache;": "⎰",
                    "&lnE;": "≨",
                    "&lnap;": "⪉",
                    "&lnapprox;": "⪉",
                    "&lne;": "⪇",
                    "&lneq;": "⪇",
                    "&lneqq;": "≨",
                    "&lnsim;": "⋦",
                    "&loang;": "⟬",
                    "&loarr;": "⇽",
                    "&lobrk;": "⟦",
                    "&longleftarrow;": "⟵",
                    "&longleftrightarrow;": "⟷",
                    "&longmapsto;": "⟼",
                    "&longrightarrow;": "⟶",
                    "&looparrowleft;": "↫",
                    "&looparrowright;": "↬",
                    "&lopar;": "⦅",
                    "&lopf;": "\uD835\uDD5D",
                    "&loplus;": "⨭",
                    "&lotimes;": "⨴",
                    "&lowast;": "∗",
                    "&lowbar;": "_",
                    "&loz;": "◊",
                    "&lozenge;": "◊",
                    "&lozf;": "⧫",
                    "&lpar;": "(",
                    "&lparlt;": "⦓",
                    "&lrarr;": "⇆",
                    "&lrcorner;": "⌟",
                    "&lrhar;": "⇋",
                    "&lrhard;": "⥭",
                    "&lrm;": "‎",
                    "&lrtri;": "⊿",
                    "&lsaquo;": "‹",
                    "&lscr;": "\uD835\uDCC1",
                    "&lsh;": "↰",
                    "&lsim;": "≲",
                    "&lsime;": "⪍",
                    "&lsimg;": "⪏",
                    "&lsqb;": "[",
                    "&lsquo;": "‘",
                    "&lsquor;": "‚",
                    "&lstrok;": "ł",
                    "&lt": "<",
                    "&lt;": "<",
                    "&ltcc;": "⪦",
                    "&ltcir;": "⩹",
                    "&ltdot;": "⋖",
                    "&lthree;": "⋋",
                    "&ltimes;": "⋉",
                    "&ltlarr;": "⥶",
                    "&ltquest;": "⩻",
                    "&ltrPar;": "⦖",
                    "&ltri;": "◃",
                    "&ltrie;": "⊴",
                    "&ltrif;": "◂",
                    "&lurdshar;": "⥊",
                    "&luruhar;": "⥦",
                    "&lvertneqq;": "≨︀",
                    "&lvnE;": "≨︀",
                    "&mDDot;": "∺",
                    "&macr": "\xaf",
                    "&macr;": "\xaf",
                    "&male;": "♂",
                    "&malt;": "✠",
                    "&maltese;": "✠",
                    "&map;": "↦",
                    "&mapsto;": "↦",
                    "&mapstodown;": "↧",
                    "&mapstoleft;": "↤",
                    "&mapstoup;": "↥",
                    "&marker;": "▮",
                    "&mcomma;": "⨩",
                    "&mcy;": "м",
                    "&mdash;": "—",
                    "&measuredangle;": "∡",
                    "&mfr;": "\uD835\uDD2A",
                    "&mho;": "℧",
                    "&micro": "\xb5",
                    "&micro;": "\xb5",
                    "&mid;": "∣",
                    "&midast;": "*",
                    "&midcir;": "⫰",
                    "&middot": "\xb7",
                    "&middot;": "\xb7",
                    "&minus;": "−",
                    "&minusb;": "⊟",
                    "&minusd;": "∸",
                    "&minusdu;": "⨪",
                    "&mlcp;": "⫛",
                    "&mldr;": "…",
                    "&mnplus;": "∓",
                    "&models;": "⊧",
                    "&mopf;": "\uD835\uDD5E",
                    "&mp;": "∓",
                    "&mscr;": "\uD835\uDCC2",
                    "&mstpos;": "∾",
                    "&mu;": "μ",
                    "&multimap;": "⊸",
                    "&mumap;": "⊸",
                    "&nGg;": "⋙̸",
                    "&nGt;": "≫⃒",
                    "&nGtv;": "≫̸",
                    "&nLeftarrow;": "⇍",
                    "&nLeftrightarrow;": "⇎",
                    "&nLl;": "⋘̸",
                    "&nLt;": "≪⃒",
                    "&nLtv;": "≪̸",
                    "&nRightarrow;": "⇏",
                    "&nVDash;": "⊯",
                    "&nVdash;": "⊮",
                    "&nabla;": "∇",
                    "&nacute;": "ń",
                    "&nang;": "∠⃒",
                    "&nap;": "≉",
                    "&napE;": "⩰̸",
                    "&napid;": "≋̸",
                    "&napos;": "ŉ",
                    "&napprox;": "≉",
                    "&natur;": "♮",
                    "&natural;": "♮",
                    "&naturals;": "ℕ",
                    "&nbsp": "\xa0",
                    "&nbsp;": "\xa0",
                    "&nbump;": "≎̸",
                    "&nbumpe;": "≏̸",
                    "&ncap;": "⩃",
                    "&ncaron;": "ň",
                    "&ncedil;": "ņ",
                    "&ncong;": "≇",
                    "&ncongdot;": "⩭̸",
                    "&ncup;": "⩂",
                    "&ncy;": "н",
                    "&ndash;": "–",
                    "&ne;": "≠",
                    "&neArr;": "⇗",
                    "&nearhk;": "⤤",
                    "&nearr;": "↗",
                    "&nearrow;": "↗",
                    "&nedot;": "≐̸",
                    "&nequiv;": "≢",
                    "&nesear;": "⤨",
                    "&nesim;": "≂̸",
                    "&nexist;": "∄",
                    "&nexists;": "∄",
                    "&nfr;": "\uD835\uDD2B",
                    "&ngE;": "≧̸",
                    "&nge;": "≱",
                    "&ngeq;": "≱",
                    "&ngeqq;": "≧̸",
                    "&ngeqslant;": "⩾̸",
                    "&nges;": "⩾̸",
                    "&ngsim;": "≵",
                    "&ngt;": "≯",
                    "&ngtr;": "≯",
                    "&nhArr;": "⇎",
                    "&nharr;": "↮",
                    "&nhpar;": "⫲",
                    "&ni;": "∋",
                    "&nis;": "⋼",
                    "&nisd;": "⋺",
                    "&niv;": "∋",
                    "&njcy;": "њ",
                    "&nlArr;": "⇍",
                    "&nlE;": "≦̸",
                    "&nlarr;": "↚",
                    "&nldr;": "‥",
                    "&nle;": "≰",
                    "&nleftarrow;": "↚",
                    "&nleftrightarrow;": "↮",
                    "&nleq;": "≰",
                    "&nleqq;": "≦̸",
                    "&nleqslant;": "⩽̸",
                    "&nles;": "⩽̸",
                    "&nless;": "≮",
                    "&nlsim;": "≴",
                    "&nlt;": "≮",
                    "&nltri;": "⋪",
                    "&nltrie;": "⋬",
                    "&nmid;": "∤",
                    "&nopf;": "\uD835\uDD5F",
                    "&not": "\xac",
                    "&not;": "\xac",
                    "&notin;": "∉",
                    "&notinE;": "⋹̸",
                    "&notindot;": "⋵̸",
                    "&notinva;": "∉",
                    "&notinvb;": "⋷",
                    "&notinvc;": "⋶",
                    "&notni;": "∌",
                    "&notniva;": "∌",
                    "&notnivb;": "⋾",
                    "&notnivc;": "⋽",
                    "&npar;": "∦",
                    "&nparallel;": "∦",
                    "&nparsl;": "⫽⃥",
                    "&npart;": "∂̸",
                    "&npolint;": "⨔",
                    "&npr;": "⊀",
                    "&nprcue;": "⋠",
                    "&npre;": "⪯̸",
                    "&nprec;": "⊀",
                    "&npreceq;": "⪯̸",
                    "&nrArr;": "⇏",
                    "&nrarr;": "↛",
                    "&nrarrc;": "⤳̸",
                    "&nrarrw;": "↝̸",
                    "&nrightarrow;": "↛",
                    "&nrtri;": "⋫",
                    "&nrtrie;": "⋭",
                    "&nsc;": "⊁",
                    "&nsccue;": "⋡",
                    "&nsce;": "⪰̸",
                    "&nscr;": "\uD835\uDCC3",
                    "&nshortmid;": "∤",
                    "&nshortparallel;": "∦",
                    "&nsim;": "≁",
                    "&nsime;": "≄",
                    "&nsimeq;": "≄",
                    "&nsmid;": "∤",
                    "&nspar;": "∦",
                    "&nsqsube;": "⋢",
                    "&nsqsupe;": "⋣",
                    "&nsub;": "⊄",
                    "&nsubE;": "⫅̸",
                    "&nsube;": "⊈",
                    "&nsubset;": "⊂⃒",
                    "&nsubseteq;": "⊈",
                    "&nsubseteqq;": "⫅̸",
                    "&nsucc;": "⊁",
                    "&nsucceq;": "⪰̸",
                    "&nsup;": "⊅",
                    "&nsupE;": "⫆̸",
                    "&nsupe;": "⊉",
                    "&nsupset;": "⊃⃒",
                    "&nsupseteq;": "⊉",
                    "&nsupseteqq;": "⫆̸",
                    "&ntgl;": "≹",
                    "&ntilde": "\xf1",
                    "&ntilde;": "\xf1",
                    "&ntlg;": "≸",
                    "&ntriangleleft;": "⋪",
                    "&ntrianglelefteq;": "⋬",
                    "&ntriangleright;": "⋫",
                    "&ntrianglerighteq;": "⋭",
                    "&nu;": "ν",
                    "&num;": "#",
                    "&numero;": "№",
                    "&numsp;": " ",
                    "&nvDash;": "⊭",
                    "&nvHarr;": "⤄",
                    "&nvap;": "≍⃒",
                    "&nvdash;": "⊬",
                    "&nvge;": "≥⃒",
                    "&nvgt;": ">⃒",
                    "&nvinfin;": "⧞",
                    "&nvlArr;": "⤂",
                    "&nvle;": "≤⃒",
                    "&nvlt;": "<⃒",
                    "&nvltrie;": "⊴⃒",
                    "&nvrArr;": "⤃",
                    "&nvrtrie;": "⊵⃒",
                    "&nvsim;": "∼⃒",
                    "&nwArr;": "⇖",
                    "&nwarhk;": "⤣",
                    "&nwarr;": "↖",
                    "&nwarrow;": "↖",
                    "&nwnear;": "⤧",
                    "&oS;": "Ⓢ",
                    "&oacute": "\xf3",
                    "&oacute;": "\xf3",
                    "&oast;": "⊛",
                    "&ocir;": "⊚",
                    "&ocirc": "\xf4",
                    "&ocirc;": "\xf4",
                    "&ocy;": "о",
                    "&odash;": "⊝",
                    "&odblac;": "ő",
                    "&odiv;": "⨸",
                    "&odot;": "⊙",
                    "&odsold;": "⦼",
                    "&oelig;": "œ",
                    "&ofcir;": "⦿",
                    "&ofr;": "\uD835\uDD2C",
                    "&ogon;": "˛",
                    "&ograve": "\xf2",
                    "&ograve;": "\xf2",
                    "&ogt;": "⧁",
                    "&ohbar;": "⦵",
                    "&ohm;": "Ω",
                    "&oint;": "∮",
                    "&olarr;": "↺",
                    "&olcir;": "⦾",
                    "&olcross;": "⦻",
                    "&oline;": "‾",
                    "&olt;": "⧀",
                    "&omacr;": "ō",
                    "&omega;": "ω",
                    "&omicron;": "ο",
                    "&omid;": "⦶",
                    "&ominus;": "⊖",
                    "&oopf;": "\uD835\uDD60",
                    "&opar;": "⦷",
                    "&operp;": "⦹",
                    "&oplus;": "⊕",
                    "&or;": "∨",
                    "&orarr;": "↻",
                    "&ord;": "⩝",
                    "&order;": "ℴ",
                    "&orderof;": "ℴ",
                    "&ordf": "\xaa",
                    "&ordf;": "\xaa",
                    "&ordm": "\xba",
                    "&ordm;": "\xba",
                    "&origof;": "⊶",
                    "&oror;": "⩖",
                    "&orslope;": "⩗",
                    "&orv;": "⩛",
                    "&oscr;": "ℴ",
                    "&oslash": "\xf8",
                    "&oslash;": "\xf8",
                    "&osol;": "⊘",
                    "&otilde": "\xf5",
                    "&otilde;": "\xf5",
                    "&otimes;": "⊗",
                    "&otimesas;": "⨶",
                    "&ouml": "\xf6",
                    "&ouml;": "\xf6",
                    "&ovbar;": "⌽",
                    "&par;": "∥",
                    "&para": "\xb6",
                    "&para;": "\xb6",
                    "&parallel;": "∥",
                    "&parsim;": "⫳",
                    "&parsl;": "⫽",
                    "&part;": "∂",
                    "&pcy;": "п",
                    "&percnt;": "%",
                    "&period;": ".",
                    "&permil;": "‰",
                    "&perp;": "⊥",
                    "&pertenk;": "‱",
                    "&pfr;": "\uD835\uDD2D",
                    "&phi;": "φ",
                    "&phiv;": "ϕ",
                    "&phmmat;": "ℳ",
                    "&phone;": "☎",
                    "&pi;": "π",
                    "&pitchfork;": "⋔",
                    "&piv;": "ϖ",
                    "&planck;": "ℏ",
                    "&planckh;": "ℎ",
                    "&plankv;": "ℏ",
                    "&plus;": "+",
                    "&plusacir;": "⨣",
                    "&plusb;": "⊞",
                    "&pluscir;": "⨢",
                    "&plusdo;": "∔",
                    "&plusdu;": "⨥",
                    "&pluse;": "⩲",
                    "&plusmn": "\xb1",
                    "&plusmn;": "\xb1",
                    "&plussim;": "⨦",
                    "&plustwo;": "⨧",
                    "&pm;": "\xb1",
                    "&pointint;": "⨕",
                    "&popf;": "\uD835\uDD61",
                    "&pound": "\xa3",
                    "&pound;": "\xa3",
                    "&pr;": "≺",
                    "&prE;": "⪳",
                    "&prap;": "⪷",
                    "&prcue;": "≼",
                    "&pre;": "⪯",
                    "&prec;": "≺",
                    "&precapprox;": "⪷",
                    "&preccurlyeq;": "≼",
                    "&preceq;": "⪯",
                    "&precnapprox;": "⪹",
                    "&precneqq;": "⪵",
                    "&precnsim;": "⋨",
                    "&precsim;": "≾",
                    "&prime;": "′",
                    "&primes;": "ℙ",
                    "&prnE;": "⪵",
                    "&prnap;": "⪹",
                    "&prnsim;": "⋨",
                    "&prod;": "∏",
                    "&profalar;": "⌮",
                    "&profline;": "⌒",
                    "&profsurf;": "⌓",
                    "&prop;": "∝",
                    "&propto;": "∝",
                    "&prsim;": "≾",
                    "&prurel;": "⊰",
                    "&pscr;": "\uD835\uDCC5",
                    "&psi;": "ψ",
                    "&puncsp;": " ",
                    "&qfr;": "\uD835\uDD2E",
                    "&qint;": "⨌",
                    "&qopf;": "\uD835\uDD62",
                    "&qprime;": "⁗",
                    "&qscr;": "\uD835\uDCC6",
                    "&quaternions;": "ℍ",
                    "&quatint;": "⨖",
                    "&quest;": "?",
                    "&questeq;": "≟",
                    "&quot": '"',
                    "&quot;": '"',
                    "&rAarr;": "⇛",
                    "&rArr;": "⇒",
                    "&rAtail;": "⤜",
                    "&rBarr;": "⤏",
                    "&rHar;": "⥤",
                    "&race;": "∽̱",
                    "&racute;": "ŕ",
                    "&radic;": "√",
                    "&raemptyv;": "⦳",
                    "&rang;": "⟩",
                    "&rangd;": "⦒",
                    "&range;": "⦥",
                    "&rangle;": "⟩",
                    "&raquo": "\xbb",
                    "&raquo;": "\xbb",
                    "&rarr;": "→",
                    "&rarrap;": "⥵",
                    "&rarrb;": "⇥",
                    "&rarrbfs;": "⤠",
                    "&rarrc;": "⤳",
                    "&rarrfs;": "⤞",
                    "&rarrhk;": "↪",
                    "&rarrlp;": "↬",
                    "&rarrpl;": "⥅",
                    "&rarrsim;": "⥴",
                    "&rarrtl;": "↣",
                    "&rarrw;": "↝",
                    "&ratail;": "⤚",
                    "&ratio;": "∶",
                    "&rationals;": "ℚ",
                    "&rbarr;": "⤍",
                    "&rbbrk;": "❳",
                    "&rbrace;": "}",
                    "&rbrack;": "]",
                    "&rbrke;": "⦌",
                    "&rbrksld;": "⦎",
                    "&rbrkslu;": "⦐",
                    "&rcaron;": "ř",
                    "&rcedil;": "ŗ",
                    "&rceil;": "⌉",
                    "&rcub;": "}",
                    "&rcy;": "р",
                    "&rdca;": "⤷",
                    "&rdldhar;": "⥩",
                    "&rdquo;": "”",
                    "&rdquor;": "”",
                    "&rdsh;": "↳",
                    "&real;": "ℜ",
                    "&realine;": "ℛ",
                    "&realpart;": "ℜ",
                    "&reals;": "ℝ",
                    "&rect;": "▭",
                    "&reg": "\xae",
                    "&reg;": "\xae",
                    "&rfisht;": "⥽",
                    "&rfloor;": "⌋",
                    "&rfr;": "\uD835\uDD2F",
                    "&rhard;": "⇁",
                    "&rharu;": "⇀",
                    "&rharul;": "⥬",
                    "&rho;": "ρ",
                    "&rhov;": "ϱ",
                    "&rightarrow;": "→",
                    "&rightarrowtail;": "↣",
                    "&rightharpoondown;": "⇁",
                    "&rightharpoonup;": "⇀",
                    "&rightleftarrows;": "⇄",
                    "&rightleftharpoons;": "⇌",
                    "&rightrightarrows;": "⇉",
                    "&rightsquigarrow;": "↝",
                    "&rightthreetimes;": "⋌",
                    "&ring;": "˚",
                    "&risingdotseq;": "≓",
                    "&rlarr;": "⇄",
                    "&rlhar;": "⇌",
                    "&rlm;": "‏",
                    "&rmoust;": "⎱",
                    "&rmoustache;": "⎱",
                    "&rnmid;": "⫮",
                    "&roang;": "⟭",
                    "&roarr;": "⇾",
                    "&robrk;": "⟧",
                    "&ropar;": "⦆",
                    "&ropf;": "\uD835\uDD63",
                    "&roplus;": "⨮",
                    "&rotimes;": "⨵",
                    "&rpar;": ")",
                    "&rpargt;": "⦔",
                    "&rppolint;": "⨒",
                    "&rrarr;": "⇉",
                    "&rsaquo;": "›",
                    "&rscr;": "\uD835\uDCC7",
                    "&rsh;": "↱",
                    "&rsqb;": "]",
                    "&rsquo;": "’",
                    "&rsquor;": "’",
                    "&rthree;": "⋌",
                    "&rtimes;": "⋊",
                    "&rtri;": "▹",
                    "&rtrie;": "⊵",
                    "&rtrif;": "▸",
                    "&rtriltri;": "⧎",
                    "&ruluhar;": "⥨",
                    "&rx;": "℞",
                    "&sacute;": "ś",
                    "&sbquo;": "‚",
                    "&sc;": "≻",
                    "&scE;": "⪴",
                    "&scap;": "⪸",
                    "&scaron;": "š",
                    "&sccue;": "≽",
                    "&sce;": "⪰",
                    "&scedil;": "ş",
                    "&scirc;": "ŝ",
                    "&scnE;": "⪶",
                    "&scnap;": "⪺",
                    "&scnsim;": "⋩",
                    "&scpolint;": "⨓",
                    "&scsim;": "≿",
                    "&scy;": "с",
                    "&sdot;": "⋅",
                    "&sdotb;": "⊡",
                    "&sdote;": "⩦",
                    "&seArr;": "⇘",
                    "&searhk;": "⤥",
                    "&searr;": "↘",
                    "&searrow;": "↘",
                    "&sect": "\xa7",
                    "&sect;": "\xa7",
                    "&semi;": ";",
                    "&seswar;": "⤩",
                    "&setminus;": "∖",
                    "&setmn;": "∖",
                    "&sext;": "✶",
                    "&sfr;": "\uD835\uDD30",
                    "&sfrown;": "⌢",
                    "&sharp;": "♯",
                    "&shchcy;": "щ",
                    "&shcy;": "ш",
                    "&shortmid;": "∣",
                    "&shortparallel;": "∥",
                    "&shy": "\xad",
                    "&shy;": "\xad",
                    "&sigma;": "σ",
                    "&sigmaf;": "ς",
                    "&sigmav;": "ς",
                    "&sim;": "∼",
                    "&simdot;": "⩪",
                    "&sime;": "≃",
                    "&simeq;": "≃",
                    "&simg;": "⪞",
                    "&simgE;": "⪠",
                    "&siml;": "⪝",
                    "&simlE;": "⪟",
                    "&simne;": "≆",
                    "&simplus;": "⨤",
                    "&simrarr;": "⥲",
                    "&slarr;": "←",
                    "&smallsetminus;": "∖",
                    "&smashp;": "⨳",
                    "&smeparsl;": "⧤",
                    "&smid;": "∣",
                    "&smile;": "⌣",
                    "&smt;": "⪪",
                    "&smte;": "⪬",
                    "&smtes;": "⪬︀",
                    "&softcy;": "ь",
                    "&sol;": "/",
                    "&solb;": "⧄",
                    "&solbar;": "⌿",
                    "&sopf;": "\uD835\uDD64",
                    "&spades;": "♠",
                    "&spadesuit;": "♠",
                    "&spar;": "∥",
                    "&sqcap;": "⊓",
                    "&sqcaps;": "⊓︀",
                    "&sqcup;": "⊔",
                    "&sqcups;": "⊔︀",
                    "&sqsub;": "⊏",
                    "&sqsube;": "⊑",
                    "&sqsubset;": "⊏",
                    "&sqsubseteq;": "⊑",
                    "&sqsup;": "⊐",
                    "&sqsupe;": "⊒",
                    "&sqsupset;": "⊐",
                    "&sqsupseteq;": "⊒",
                    "&squ;": "□",
                    "&square;": "□",
                    "&squarf;": "▪",
                    "&squf;": "▪",
                    "&srarr;": "→",
                    "&sscr;": "\uD835\uDCC8",
                    "&ssetmn;": "∖",
                    "&ssmile;": "⌣",
                    "&sstarf;": "⋆",
                    "&star;": "☆",
                    "&starf;": "★",
                    "&straightepsilon;": "ϵ",
                    "&straightphi;": "ϕ",
                    "&strns;": "\xaf",
                    "&sub;": "⊂",
                    "&subE;": "⫅",
                    "&subdot;": "⪽",
                    "&sube;": "⊆",
                    "&subedot;": "⫃",
                    "&submult;": "⫁",
                    "&subnE;": "⫋",
                    "&subne;": "⊊",
                    "&subplus;": "⪿",
                    "&subrarr;": "⥹",
                    "&subset;": "⊂",
                    "&subseteq;": "⊆",
                    "&subseteqq;": "⫅",
                    "&subsetneq;": "⊊",
                    "&subsetneqq;": "⫋",
                    "&subsim;": "⫇",
                    "&subsub;": "⫕",
                    "&subsup;": "⫓",
                    "&succ;": "≻",
                    "&succapprox;": "⪸",
                    "&succcurlyeq;": "≽",
                    "&succeq;": "⪰",
                    "&succnapprox;": "⪺",
                    "&succneqq;": "⪶",
                    "&succnsim;": "⋩",
                    "&succsim;": "≿",
                    "&sum;": "∑",
                    "&sung;": "♪",
                    "&sup1": "\xb9",
                    "&sup1;": "\xb9",
                    "&sup2": "\xb2",
                    "&sup2;": "\xb2",
                    "&sup3": "\xb3",
                    "&sup3;": "\xb3",
                    "&sup;": "⊃",
                    "&supE;": "⫆",
                    "&supdot;": "⪾",
                    "&supdsub;": "⫘",
                    "&supe;": "⊇",
                    "&supedot;": "⫄",
                    "&suphsol;": "⟉",
                    "&suphsub;": "⫗",
                    "&suplarr;": "⥻",
                    "&supmult;": "⫂",
                    "&supnE;": "⫌",
                    "&supne;": "⊋",
                    "&supplus;": "⫀",
                    "&supset;": "⊃",
                    "&supseteq;": "⊇",
                    "&supseteqq;": "⫆",
                    "&supsetneq;": "⊋",
                    "&supsetneqq;": "⫌",
                    "&supsim;": "⫈",
                    "&supsub;": "⫔",
                    "&supsup;": "⫖",
                    "&swArr;": "⇙",
                    "&swarhk;": "⤦",
                    "&swarr;": "↙",
                    "&swarrow;": "↙",
                    "&swnwar;": "⤪",
                    "&szlig": "\xdf",
                    "&szlig;": "\xdf",
                    "&target;": "⌖",
                    "&tau;": "τ",
                    "&tbrk;": "⎴",
                    "&tcaron;": "ť",
                    "&tcedil;": "ţ",
                    "&tcy;": "т",
                    "&tdot;": "⃛",
                    "&telrec;": "⌕",
                    "&tfr;": "\uD835\uDD31",
                    "&there4;": "∴",
                    "&therefore;": "∴",
                    "&theta;": "θ",
                    "&thetasym;": "ϑ",
                    "&thetav;": "ϑ",
                    "&thickapprox;": "≈",
                    "&thicksim;": "∼",
                    "&thinsp;": " ",
                    "&thkap;": "≈",
                    "&thksim;": "∼",
                    "&thorn": "\xfe",
                    "&thorn;": "\xfe",
                    "&tilde;": "˜",
                    "&times": "\xd7",
                    "&times;": "\xd7",
                    "&timesb;": "⊠",
                    "&timesbar;": "⨱",
                    "&timesd;": "⨰",
                    "&tint;": "∭",
                    "&toea;": "⤨",
                    "&top;": "⊤",
                    "&topbot;": "⌶",
                    "&topcir;": "⫱",
                    "&topf;": "\uD835\uDD65",
                    "&topfork;": "⫚",
                    "&tosa;": "⤩",
                    "&tprime;": "‴",
                    "&trade;": "™",
                    "&triangle;": "▵",
                    "&triangledown;": "▿",
                    "&triangleleft;": "◃",
                    "&trianglelefteq;": "⊴",
                    "&triangleq;": "≜",
                    "&triangleright;": "▹",
                    "&trianglerighteq;": "⊵",
                    "&tridot;": "◬",
                    "&trie;": "≜",
                    "&triminus;": "⨺",
                    "&triplus;": "⨹",
                    "&trisb;": "⧍",
                    "&tritime;": "⨻",
                    "&trpezium;": "⏢",
                    "&tscr;": "\uD835\uDCC9",
                    "&tscy;": "ц",
                    "&tshcy;": "ћ",
                    "&tstrok;": "ŧ",
                    "&twixt;": "≬",
                    "&twoheadleftarrow;": "↞",
                    "&twoheadrightarrow;": "↠",
                    "&uArr;": "⇑",
                    "&uHar;": "⥣",
                    "&uacute": "\xfa",
                    "&uacute;": "\xfa",
                    "&uarr;": "↑",
                    "&ubrcy;": "ў",
                    "&ubreve;": "ŭ",
                    "&ucirc": "\xfb",
                    "&ucirc;": "\xfb",
                    "&ucy;": "у",
                    "&udarr;": "⇅",
                    "&udblac;": "ű",
                    "&udhar;": "⥮",
                    "&ufisht;": "⥾",
                    "&ufr;": "\uD835\uDD32",
                    "&ugrave": "\xf9",
                    "&ugrave;": "\xf9",
                    "&uharl;": "↿",
                    "&uharr;": "↾",
                    "&uhblk;": "▀",
                    "&ulcorn;": "⌜",
                    "&ulcorner;": "⌜",
                    "&ulcrop;": "⌏",
                    "&ultri;": "◸",
                    "&umacr;": "ū",
                    "&uml": "\xa8",
                    "&uml;": "\xa8",
                    "&uogon;": "ų",
                    "&uopf;": "\uD835\uDD66",
                    "&uparrow;": "↑",
                    "&updownarrow;": "↕",
                    "&upharpoonleft;": "↿",
                    "&upharpoonright;": "↾",
                    "&uplus;": "⊎",
                    "&upsi;": "υ",
                    "&upsih;": "ϒ",
                    "&upsilon;": "υ",
                    "&upuparrows;": "⇈",
                    "&urcorn;": "⌝",
                    "&urcorner;": "⌝",
                    "&urcrop;": "⌎",
                    "&uring;": "ů",
                    "&urtri;": "◹",
                    "&uscr;": "\uD835\uDCCA",
                    "&utdot;": "⋰",
                    "&utilde;": "ũ",
                    "&utri;": "▵",
                    "&utrif;": "▴",
                    "&uuarr;": "⇈",
                    "&uuml": "\xfc",
                    "&uuml;": "\xfc",
                    "&uwangle;": "⦧",
                    "&vArr;": "⇕",
                    "&vBar;": "⫨",
                    "&vBarv;": "⫩",
                    "&vDash;": "⊨",
                    "&vangrt;": "⦜",
                    "&varepsilon;": "ϵ",
                    "&varkappa;": "ϰ",
                    "&varnothing;": "∅",
                    "&varphi;": "ϕ",
                    "&varpi;": "ϖ",
                    "&varpropto;": "∝",
                    "&varr;": "↕",
                    "&varrho;": "ϱ",
                    "&varsigma;": "ς",
                    "&varsubsetneq;": "⊊︀",
                    "&varsubsetneqq;": "⫋︀",
                    "&varsupsetneq;": "⊋︀",
                    "&varsupsetneqq;": "⫌︀",
                    "&vartheta;": "ϑ",
                    "&vartriangleleft;": "⊲",
                    "&vartriangleright;": "⊳",
                    "&vcy;": "в",
                    "&vdash;": "⊢",
                    "&vee;": "∨",
                    "&veebar;": "⊻",
                    "&veeeq;": "≚",
                    "&vellip;": "⋮",
                    "&verbar;": "|",
                    "&vert;": "|",
                    "&vfr;": "\uD835\uDD33",
                    "&vltri;": "⊲",
                    "&vnsub;": "⊂⃒",
                    "&vnsup;": "⊃⃒",
                    "&vopf;": "\uD835\uDD67",
                    "&vprop;": "∝",
                    "&vrtri;": "⊳",
                    "&vscr;": "\uD835\uDCCB",
                    "&vsubnE;": "⫋︀",
                    "&vsubne;": "⊊︀",
                    "&vsupnE;": "⫌︀",
                    "&vsupne;": "⊋︀",
                    "&vzigzag;": "⦚",
                    "&wcirc;": "ŵ",
                    "&wedbar;": "⩟",
                    "&wedge;": "∧",
                    "&wedgeq;": "≙",
                    "&weierp;": "℘",
                    "&wfr;": "\uD835\uDD34",
                    "&wopf;": "\uD835\uDD68",
                    "&wp;": "℘",
                    "&wr;": "≀",
                    "&wreath;": "≀",
                    "&wscr;": "\uD835\uDCCC",
                    "&xcap;": "⋂",
                    "&xcirc;": "◯",
                    "&xcup;": "⋃",
                    "&xdtri;": "▽",
                    "&xfr;": "\uD835\uDD35",
                    "&xhArr;": "⟺",
                    "&xharr;": "⟷",
                    "&xi;": "ξ",
                    "&xlArr;": "⟸",
                    "&xlarr;": "⟵",
                    "&xmap;": "⟼",
                    "&xnis;": "⋻",
                    "&xodot;": "⨀",
                    "&xopf;": "\uD835\uDD69",
                    "&xoplus;": "⨁",
                    "&xotime;": "⨂",
                    "&xrArr;": "⟹",
                    "&xrarr;": "⟶",
                    "&xscr;": "\uD835\uDCCD",
                    "&xsqcup;": "⨆",
                    "&xuplus;": "⨄",
                    "&xutri;": "△",
                    "&xvee;": "⋁",
                    "&xwedge;": "⋀",
                    "&yacute": "\xfd",
                    "&yacute;": "\xfd",
                    "&yacy;": "я",
                    "&ycirc;": "ŷ",
                    "&ycy;": "ы",
                    "&yen": "\xa5",
                    "&yen;": "\xa5",
                    "&yfr;": "\uD835\uDD36",
                    "&yicy;": "ї",
                    "&yopf;": "\uD835\uDD6A",
                    "&yscr;": "\uD835\uDCCE",
                    "&yucy;": "ю",
                    "&yuml": "\xff",
                    "&yuml;": "\xff",
                    "&zacute;": "ź",
                    "&zcaron;": "ž",
                    "&zcy;": "з",
                    "&zdot;": "ż",
                    "&zeetrf;": "ℨ",
                    "&zeta;": "ζ",
                    "&zfr;": "\uD835\uDD37",
                    "&zhcy;": "ж",
                    "&zigrarr;": "⇝",
                    "&zopf;": "\uD835\uDD6B",
                    "&zscr;": "\uD835\uDCCF",
                    "&zwj;": "‍",
                    "&zwnj;": "‌"
                },
                characters: {
                    "\xc6": "&AElig;",
                    "&": "&amp;",
                    "\xc1": "&Aacute;",
                    "Ă": "&Abreve;",
                    "\xc2": "&Acirc;",
                    "А": "&Acy;",
                    "\uD835\uDD04": "&Afr;",
                    "\xc0": "&Agrave;",
                    "Α": "&Alpha;",
                    "Ā": "&Amacr;",
                    "⩓": "&And;",
                    "Ą": "&Aogon;",
                    "\uD835\uDD38": "&Aopf;",
                    "⁡": "&af;",
                    "\xc5": "&angst;",
                    "\uD835\uDC9C": "&Ascr;",
                    "≔": "&coloneq;",
                    "\xc3": "&Atilde;",
                    "\xc4": "&Auml;",
                    "∖": "&ssetmn;",
                    "⫧": "&Barv;",
                    "⌆": "&doublebarwedge;",
                    "Б": "&Bcy;",
                    "∵": "&because;",
                    "ℬ": "&bernou;",
                    "Β": "&Beta;",
                    "\uD835\uDD05": "&Bfr;",
                    "\uD835\uDD39": "&Bopf;",
                    "˘": "&breve;",
                    "≎": "&bump;",
                    "Ч": "&CHcy;",
                    "\xa9": "&copy;",
                    "Ć": "&Cacute;",
                    "⋒": "&Cap;",
                    "ⅅ": "&DD;",
                    "ℭ": "&Cfr;",
                    "Č": "&Ccaron;",
                    "\xc7": "&Ccedil;",
                    "Ĉ": "&Ccirc;",
                    "∰": "&Cconint;",
                    "Ċ": "&Cdot;",
                    "\xb8": "&cedil;",
                    "\xb7": "&middot;",
                    "Χ": "&Chi;",
                    "⊙": "&odot;",
                    "⊖": "&ominus;",
                    "⊕": "&oplus;",
                    "⊗": "&otimes;",
                    "∲": "&cwconint;",
                    "”": "&rdquor;",
                    "’": "&rsquor;",
                    "∷": "&Proportion;",
                    "⩴": "&Colone;",
                    "≡": "&equiv;",
                    "∯": "&DoubleContourIntegral;",
                    "∮": "&oint;",
                    "ℂ": "&complexes;",
                    "∐": "&coprod;",
                    "∳": "&awconint;",
                    "⨯": "&Cross;",
                    "\uD835\uDC9E": "&Cscr;",
                    "⋓": "&Cup;",
                    "≍": "&asympeq;",
                    "⤑": "&DDotrahd;",
                    "Ђ": "&DJcy;",
                    "Ѕ": "&DScy;",
                    "Џ": "&DZcy;",
                    "‡": "&ddagger;",
                    "↡": "&Darr;",
                    "⫤": "&DoubleLeftTee;",
                    "Ď": "&Dcaron;",
                    "Д": "&Dcy;",
                    "∇": "&nabla;",
                    "Δ": "&Delta;",
                    "\uD835\uDD07": "&Dfr;",
                    "\xb4": "&acute;",
                    "˙": "&dot;",
                    "˝": "&dblac;",
                    "`": "&grave;",
                    "˜": "&tilde;",
                    "⋄": "&diamond;",
                    "ⅆ": "&dd;",
                    "\uD835\uDD3B": "&Dopf;",
                    "\xa8": "&uml;",
                    "⃜": "&DotDot;",
                    "≐": "&esdot;",
                    "⇓": "&dArr;",
                    "⇐": "&lArr;",
                    "⇔": "&iff;",
                    "⟸": "&xlArr;",
                    "⟺": "&xhArr;",
                    "⟹": "&xrArr;",
                    "⇒": "&rArr;",
                    "⊨": "&vDash;",
                    "⇑": "&uArr;",
                    "⇕": "&vArr;",
                    "∥": "&spar;",
                    "↓": "&downarrow;",
                    "⤓": "&DownArrowBar;",
                    "⇵": "&duarr;",
                    "̑": "&DownBreve;",
                    "⥐": "&DownLeftRightVector;",
                    "⥞": "&DownLeftTeeVector;",
                    "↽": "&lhard;",
                    "⥖": "&DownLeftVectorBar;",
                    "⥟": "&DownRightTeeVector;",
                    "⇁": "&rightharpoondown;",
                    "⥗": "&DownRightVectorBar;",
                    "⊤": "&top;",
                    "↧": "&mapstodown;",
                    "\uD835\uDC9F": "&Dscr;",
                    "Đ": "&Dstrok;",
                    "Ŋ": "&ENG;",
                    "\xd0": "&ETH;",
                    "\xc9": "&Eacute;",
                    "Ě": "&Ecaron;",
                    "\xca": "&Ecirc;",
                    "Э": "&Ecy;",
                    "Ė": "&Edot;",
                    "\uD835\uDD08": "&Efr;",
                    "\xc8": "&Egrave;",
                    "∈": "&isinv;",
                    "Ē": "&Emacr;",
                    "◻": "&EmptySmallSquare;",
                    "▫": "&EmptyVerySmallSquare;",
                    "Ę": "&Eogon;",
                    "\uD835\uDD3C": "&Eopf;",
                    "Ε": "&Epsilon;",
                    "⩵": "&Equal;",
                    "≂": "&esim;",
                    "⇌": "&rlhar;",
                    "ℰ": "&expectation;",
                    "⩳": "&Esim;",
                    "Η": "&Eta;",
                    "\xcb": "&Euml;",
                    "∃": "&exist;",
                    "ⅇ": "&exponentiale;",
                    "Ф": "&Fcy;",
                    "\uD835\uDD09": "&Ffr;",
                    "◼": "&FilledSmallSquare;",
                    "▪": "&squf;",
                    "\uD835\uDD3D": "&Fopf;",
                    "∀": "&forall;",
                    "ℱ": "&Fscr;",
                    "Ѓ": "&GJcy;",
                    ">": "&gt;",
                    "Γ": "&Gamma;",
                    "Ϝ": "&Gammad;",
                    "Ğ": "&Gbreve;",
                    "Ģ": "&Gcedil;",
                    "Ĝ": "&Gcirc;",
                    "Г": "&Gcy;",
                    "Ġ": "&Gdot;",
                    "\uD835\uDD0A": "&Gfr;",
                    "⋙": "&ggg;",
                    "\uD835\uDD3E": "&Gopf;",
                    "≥": "&geq;",
                    "⋛": "&gtreqless;",
                    "≧": "&geqq;",
                    "⪢": "&GreaterGreater;",
                    "≷": "&gtrless;",
                    "⩾": "&ges;",
                    "≳": "&gtrsim;",
                    "\uD835\uDCA2": "&Gscr;",
                    "≫": "&gg;",
                    "Ъ": "&HARDcy;",
                    "ˇ": "&caron;",
                    "^": "&Hat;",
                    "Ĥ": "&Hcirc;",
                    "ℌ": "&Poincareplane;",
                    "ℋ": "&hamilt;",
                    "ℍ": "&quaternions;",
                    "─": "&boxh;",
                    "Ħ": "&Hstrok;",
                    "≏": "&bumpeq;",
                    "Е": "&IEcy;",
                    "Ĳ": "&IJlig;",
                    "Ё": "&IOcy;",
                    "\xcd": "&Iacute;",
                    "\xce": "&Icirc;",
                    "И": "&Icy;",
                    "İ": "&Idot;",
                    "ℑ": "&imagpart;",
                    "\xcc": "&Igrave;",
                    "Ī": "&Imacr;",
                    "ⅈ": "&ii;",
                    "∬": "&Int;",
                    "∫": "&int;",
                    "⋂": "&xcap;",
                    "⁣": "&ic;",
                    "⁢": "&it;",
                    "Į": "&Iogon;",
                    "\uD835\uDD40": "&Iopf;",
                    "Ι": "&Iota;",
                    "ℐ": "&imagline;",
                    "Ĩ": "&Itilde;",
                    "І": "&Iukcy;",
                    "\xcf": "&Iuml;",
                    "Ĵ": "&Jcirc;",
                    "Й": "&Jcy;",
                    "\uD835\uDD0D": "&Jfr;",
                    "\uD835\uDD41": "&Jopf;",
                    "\uD835\uDCA5": "&Jscr;",
                    "Ј": "&Jsercy;",
                    "Є": "&Jukcy;",
                    "Х": "&KHcy;",
                    "Ќ": "&KJcy;",
                    "Κ": "&Kappa;",
                    "Ķ": "&Kcedil;",
                    "К": "&Kcy;",
                    "\uD835\uDD0E": "&Kfr;",
                    "\uD835\uDD42": "&Kopf;",
                    "\uD835\uDCA6": "&Kscr;",
                    "Љ": "&LJcy;",
                    "<": "&lt;",
                    "Ĺ": "&Lacute;",
                    "Λ": "&Lambda;",
                    "⟪": "&Lang;",
                    "ℒ": "&lagran;",
                    "↞": "&twoheadleftarrow;",
                    "Ľ": "&Lcaron;",
                    "Ļ": "&Lcedil;",
                    "Л": "&Lcy;",
                    "⟨": "&langle;",
                    "←": "&slarr;",
                    "⇤": "&larrb;",
                    "⇆": "&lrarr;",
                    "⌈": "&lceil;",
                    "⟦": "&lobrk;",
                    "⥡": "&LeftDownTeeVector;",
                    "⇃": "&downharpoonleft;",
                    "⥙": "&LeftDownVectorBar;",
                    "⌊": "&lfloor;",
                    "↔": "&leftrightarrow;",
                    "⥎": "&LeftRightVector;",
                    "⊣": "&dashv;",
                    "↤": "&mapstoleft;",
                    "⥚": "&LeftTeeVector;",
                    "⊲": "&vltri;",
                    "⧏": "&LeftTriangleBar;",
                    "⊴": "&trianglelefteq;",
                    "⥑": "&LeftUpDownVector;",
                    "⥠": "&LeftUpTeeVector;",
                    "↿": "&upharpoonleft;",
                    "⥘": "&LeftUpVectorBar;",
                    "↼": "&lharu;",
                    "⥒": "&LeftVectorBar;",
                    "⋚": "&lesseqgtr;",
                    "≦": "&leqq;",
                    "≶": "&lg;",
                    "⪡": "&LessLess;",
                    "⩽": "&les;",
                    "≲": "&lsim;",
                    "\uD835\uDD0F": "&Lfr;",
                    "⋘": "&Ll;",
                    "⇚": "&lAarr;",
                    "Ŀ": "&Lmidot;",
                    "⟵": "&xlarr;",
                    "⟷": "&xharr;",
                    "⟶": "&xrarr;",
                    "\uD835\uDD43": "&Lopf;",
                    "↙": "&swarrow;",
                    "↘": "&searrow;",
                    "↰": "&lsh;",
                    "Ł": "&Lstrok;",
                    "≪": "&ll;",
                    "⤅": "&Map;",
                    "М": "&Mcy;",
                    " ": "&MediumSpace;",
                    "ℳ": "&phmmat;",
                    "\uD835\uDD10": "&Mfr;",
                    "∓": "&mp;",
                    "\uD835\uDD44": "&Mopf;",
                    "Μ": "&Mu;",
                    "Њ": "&NJcy;",
                    "Ń": "&Nacute;",
                    "Ň": "&Ncaron;",
                    "Ņ": "&Ncedil;",
                    "Н": "&Ncy;",
                    "​": "&ZeroWidthSpace;",
                    "\n": "&NewLine;",
                    "\uD835\uDD11": "&Nfr;",
                    "⁠": "&NoBreak;",
                    "\xa0": "&nbsp;",
                    "ℕ": "&naturals;",
                    "⫬": "&Not;",
                    "≢": "&nequiv;",
                    "≭": "&NotCupCap;",
                    "∦": "&nspar;",
                    "∉": "&notinva;",
                    "≠": "&ne;",
                    "≂̸": "&nesim;",
                    "∄": "&nexists;",
                    "≯": "&ngtr;",
                    "≱": "&ngeq;",
                    "≧̸": "&ngeqq;",
                    "≫̸": "&nGtv;",
                    "≹": "&ntgl;",
                    "⩾̸": "&nges;",
                    "≵": "&ngsim;",
                    "≎̸": "&nbump;",
                    "≏̸": "&nbumpe;",
                    "⋪": "&ntriangleleft;",
                    "⧏̸": "&NotLeftTriangleBar;",
                    "⋬": "&ntrianglelefteq;",
                    "≮": "&nlt;",
                    "≰": "&nleq;",
                    "≸": "&ntlg;",
                    "≪̸": "&nLtv;",
                    "⩽̸": "&nles;",
                    "≴": "&nlsim;",
                    "⪢̸": "&NotNestedGreaterGreater;",
                    "⪡̸": "&NotNestedLessLess;",
                    "⊀": "&nprec;",
                    "⪯̸": "&npreceq;",
                    "⋠": "&nprcue;",
                    "∌": "&notniva;",
                    "⋫": "&ntriangleright;",
                    "⧐̸": "&NotRightTriangleBar;",
                    "⋭": "&ntrianglerighteq;",
                    "⊏̸": "&NotSquareSubset;",
                    "⋢": "&nsqsube;",
                    "⊐̸": "&NotSquareSuperset;",
                    "⋣": "&nsqsupe;",
                    "⊂⃒": "&vnsub;",
                    "⊈": "&nsubseteq;",
                    "⊁": "&nsucc;",
                    "⪰̸": "&nsucceq;",
                    "⋡": "&nsccue;",
                    "≿̸": "&NotSucceedsTilde;",
                    "⊃⃒": "&vnsup;",
                    "⊉": "&nsupseteq;",
                    "≁": "&nsim;",
                    "≄": "&nsimeq;",
                    "≇": "&ncong;",
                    "≉": "&napprox;",
                    "∤": "&nsmid;",
                    "\uD835\uDCA9": "&Nscr;",
                    "\xd1": "&Ntilde;",
                    "Ν": "&Nu;",
                    "Œ": "&OElig;",
                    "\xd3": "&Oacute;",
                    "\xd4": "&Ocirc;",
                    "О": "&Ocy;",
                    "Ő": "&Odblac;",
                    "\uD835\uDD12": "&Ofr;",
                    "\xd2": "&Ograve;",
                    "Ō": "&Omacr;",
                    "Ω": "&ohm;",
                    "Ο": "&Omicron;",
                    "\uD835\uDD46": "&Oopf;",
                    "“": "&ldquo;",
                    "‘": "&lsquo;",
                    "⩔": "&Or;",
                    "\uD835\uDCAA": "&Oscr;",
                    "\xd8": "&Oslash;",
                    "\xd5": "&Otilde;",
                    "⨷": "&Otimes;",
                    "\xd6": "&Ouml;",
                    "‾": "&oline;",
                    "⏞": "&OverBrace;",
                    "⎴": "&tbrk;",
                    "⏜": "&OverParenthesis;",
                    "∂": "&part;",
                    "П": "&Pcy;",
                    "\uD835\uDD13": "&Pfr;",
                    "Φ": "&Phi;",
                    "Π": "&Pi;",
                    "\xb1": "&pm;",
                    "ℙ": "&primes;",
                    "⪻": "&Pr;",
                    "≺": "&prec;",
                    "⪯": "&preceq;",
                    "≼": "&preccurlyeq;",
                    "≾": "&prsim;",
                    "″": "&Prime;",
                    "∏": "&prod;",
                    "∝": "&vprop;",
                    "\uD835\uDCAB": "&Pscr;",
                    "Ψ": "&Psi;",
                    '"': "&quot;",
                    "\uD835\uDD14": "&Qfr;",
                    "ℚ": "&rationals;",
                    "\uD835\uDCAC": "&Qscr;",
                    "⤐": "&drbkarow;",
                    "\xae": "&reg;",
                    "Ŕ": "&Racute;",
                    "⟫": "&Rang;",
                    "↠": "&twoheadrightarrow;",
                    "⤖": "&Rarrtl;",
                    "Ř": "&Rcaron;",
                    "Ŗ": "&Rcedil;",
                    "Р": "&Rcy;",
                    "ℜ": "&realpart;",
                    "∋": "&niv;",
                    "⇋": "&lrhar;",
                    "⥯": "&duhar;",
                    "Ρ": "&Rho;",
                    "⟩": "&rangle;",
                    "→": "&srarr;",
                    "⇥": "&rarrb;",
                    "⇄": "&rlarr;",
                    "⌉": "&rceil;",
                    "⟧": "&robrk;",
                    "⥝": "&RightDownTeeVector;",
                    "⇂": "&downharpoonright;",
                    "⥕": "&RightDownVectorBar;",
                    "⌋": "&rfloor;",
                    "⊢": "&vdash;",
                    "↦": "&mapsto;",
                    "⥛": "&RightTeeVector;",
                    "⊳": "&vrtri;",
                    "⧐": "&RightTriangleBar;",
                    "⊵": "&trianglerighteq;",
                    "⥏": "&RightUpDownVector;",
                    "⥜": "&RightUpTeeVector;",
                    "↾": "&upharpoonright;",
                    "⥔": "&RightUpVectorBar;",
                    "⇀": "&rightharpoonup;",
                    "⥓": "&RightVectorBar;",
                    "ℝ": "&reals;",
                    "⥰": "&RoundImplies;",
                    "⇛": "&rAarr;",
                    "ℛ": "&realine;",
                    "↱": "&rsh;",
                    "⧴": "&RuleDelayed;",
                    "Щ": "&SHCHcy;",
                    "Ш": "&SHcy;",
                    "Ь": "&SOFTcy;",
                    "Ś": "&Sacute;",
                    "⪼": "&Sc;",
                    "Š": "&Scaron;",
                    "Ş": "&Scedil;",
                    "Ŝ": "&Scirc;",
                    "С": "&Scy;",
                    "\uD835\uDD16": "&Sfr;",
                    "↑": "&uparrow;",
                    "Σ": "&Sigma;",
                    "∘": "&compfn;",
                    "\uD835\uDD4A": "&Sopf;",
                    "√": "&radic;",
                    "□": "&square;",
                    "⊓": "&sqcap;",
                    "⊏": "&sqsubset;",
                    "⊑": "&sqsubseteq;",
                    "⊐": "&sqsupset;",
                    "⊒": "&sqsupseteq;",
                    "⊔": "&sqcup;",
                    "\uD835\uDCAE": "&Sscr;",
                    "⋆": "&sstarf;",
                    "⋐": "&Subset;",
                    "⊆": "&subseteq;",
                    "≻": "&succ;",
                    "⪰": "&succeq;",
                    "≽": "&succcurlyeq;",
                    "≿": "&succsim;",
                    "∑": "&sum;",
                    "⋑": "&Supset;",
                    "⊃": "&supset;",
                    "⊇": "&supseteq;",
                    "\xde": "&THORN;",
                    "™": "&trade;",
                    "Ћ": "&TSHcy;",
                    "Ц": "&TScy;",
                    "	": "&Tab;",
                    "Τ": "&Tau;",
                    "Ť": "&Tcaron;",
                    "Ţ": "&Tcedil;",
                    "Т": "&Tcy;",
                    "\uD835\uDD17": "&Tfr;",
                    "∴": "&therefore;",
                    "Θ": "&Theta;",
                    "  ": "&ThickSpace;",
                    " ": "&thinsp;",
                    "∼": "&thksim;",
                    "≃": "&simeq;",
                    "≅": "&cong;",
                    "≈": "&thkap;",
                    "\uD835\uDD4B": "&Topf;",
                    "⃛": "&tdot;",
                    "\uD835\uDCAF": "&Tscr;",
                    "Ŧ": "&Tstrok;",
                    "\xda": "&Uacute;",
                    "↟": "&Uarr;",
                    "⥉": "&Uarrocir;",
                    "Ў": "&Ubrcy;",
                    "Ŭ": "&Ubreve;",
                    "\xdb": "&Ucirc;",
                    "У": "&Ucy;",
                    "Ű": "&Udblac;",
                    "\uD835\uDD18": "&Ufr;",
                    "\xd9": "&Ugrave;",
                    "Ū": "&Umacr;",
                    _: "&lowbar;",
                    "⏟": "&UnderBrace;",
                    "⎵": "&bbrk;",
                    "⏝": "&UnderParenthesis;",
                    "⋃": "&xcup;",
                    "⊎": "&uplus;",
                    "Ų": "&Uogon;",
                    "\uD835\uDD4C": "&Uopf;",
                    "⤒": "&UpArrowBar;",
                    "⇅": "&udarr;",
                    "↕": "&varr;",
                    "⥮": "&udhar;",
                    "⊥": "&perp;",
                    "↥": "&mapstoup;",
                    "↖": "&nwarrow;",
                    "↗": "&nearrow;",
                    "ϒ": "&upsih;",
                    "Υ": "&Upsilon;",
                    "Ů": "&Uring;",
                    "\uD835\uDCB0": "&Uscr;",
                    "Ũ": "&Utilde;",
                    "\xdc": "&Uuml;",
                    "⊫": "&VDash;",
                    "⫫": "&Vbar;",
                    "В": "&Vcy;",
                    "⊩": "&Vdash;",
                    "⫦": "&Vdashl;",
                    "⋁": "&xvee;",
                    "‖": "&Vert;",
                    "∣": "&smid;",
                    "|": "&vert;",
                    "❘": "&VerticalSeparator;",
                    "≀": "&wreath;",
                    " ": "&hairsp;",
                    "\uD835\uDD19": "&Vfr;",
                    "\uD835\uDD4D": "&Vopf;",
                    "\uD835\uDCB1": "&Vscr;",
                    "⊪": "&Vvdash;",
                    "Ŵ": "&Wcirc;",
                    "⋀": "&xwedge;",
                    "\uD835\uDD1A": "&Wfr;",
                    "\uD835\uDD4E": "&Wopf;",
                    "\uD835\uDCB2": "&Wscr;",
                    "\uD835\uDD1B": "&Xfr;",
                    "Ξ": "&Xi;",
                    "\uD835\uDD4F": "&Xopf;",
                    "\uD835\uDCB3": "&Xscr;",
                    "Я": "&YAcy;",
                    "Ї": "&YIcy;",
                    "Ю": "&YUcy;",
                    "\xdd": "&Yacute;",
                    "Ŷ": "&Ycirc;",
                    "Ы": "&Ycy;",
                    "\uD835\uDD1C": "&Yfr;",
                    "\uD835\uDD50": "&Yopf;",
                    "\uD835\uDCB4": "&Yscr;",
                    "Ÿ": "&Yuml;",
                    "Ж": "&ZHcy;",
                    "Ź": "&Zacute;",
                    "Ž": "&Zcaron;",
                    "З": "&Zcy;",
                    "Ż": "&Zdot;",
                    "Ζ": "&Zeta;",
                    "ℨ": "&zeetrf;",
                    "ℤ": "&integers;",
                    "\uD835\uDCB5": "&Zscr;",
                    "\xe1": "&aacute;",
                    "ă": "&abreve;",
                    "∾": "&mstpos;",
                    "∾̳": "&acE;",
                    "∿": "&acd;",
                    "\xe2": "&acirc;",
                    "а": "&acy;",
                    "\xe6": "&aelig;",
                    "\uD835\uDD1E": "&afr;",
                    "\xe0": "&agrave;",
                    "ℵ": "&aleph;",
                    "α": "&alpha;",
                    "ā": "&amacr;",
                    "⨿": "&amalg;",
                    "∧": "&wedge;",
                    "⩕": "&andand;",
                    "⩜": "&andd;",
                    "⩘": "&andslope;",
                    "⩚": "&andv;",
                    "∠": "&angle;",
                    "⦤": "&ange;",
                    "∡": "&measuredangle;",
                    "⦨": "&angmsdaa;",
                    "⦩": "&angmsdab;",
                    "⦪": "&angmsdac;",
                    "⦫": "&angmsdad;",
                    "⦬": "&angmsdae;",
                    "⦭": "&angmsdaf;",
                    "⦮": "&angmsdag;",
                    "⦯": "&angmsdah;",
                    "∟": "&angrt;",
                    "⊾": "&angrtvb;",
                    "⦝": "&angrtvbd;",
                    "∢": "&angsph;",
                    "⍼": "&angzarr;",
                    "ą": "&aogon;",
                    "\uD835\uDD52": "&aopf;",
                    "⩰": "&apE;",
                    "⩯": "&apacir;",
                    "≊": "&approxeq;",
                    "≋": "&apid;",
                    "'": "&apos;",
                    "\xe5": "&aring;",
                    "\uD835\uDCB6": "&ascr;",
                    "*": "&midast;",
                    "\xe3": "&atilde;",
                    "\xe4": "&auml;",
                    "⨑": "&awint;",
                    "⫭": "&bNot;",
                    "≌": "&bcong;",
                    "϶": "&bepsi;",
                    "‵": "&bprime;",
                    "∽": "&bsim;",
                    "⋍": "&bsime;",
                    "⊽": "&barvee;",
                    "⌅": "&barwedge;",
                    "⎶": "&bbrktbrk;",
                    "б": "&bcy;",
                    "„": "&ldquor;",
                    "⦰": "&bemptyv;",
                    "β": "&beta;",
                    "ℶ": "&beth;",
                    "≬": "&twixt;",
                    "\uD835\uDD1F": "&bfr;",
                    "◯": "&xcirc;",
                    "⨀": "&xodot;",
                    "⨁": "&xoplus;",
                    "⨂": "&xotime;",
                    "⨆": "&xsqcup;",
                    "★": "&starf;",
                    "▽": "&xdtri;",
                    "△": "&xutri;",
                    "⨄": "&xuplus;",
                    "⤍": "&rbarr;",
                    "⧫": "&lozf;",
                    "▴": "&utrif;",
                    "▾": "&dtrif;",
                    "◂": "&ltrif;",
                    "▸": "&rtrif;",
                    "␣": "&blank;",
                    "▒": "&blk12;",
                    "░": "&blk14;",
                    "▓": "&blk34;",
                    "█": "&block;",
                    "=⃥": "&bne;",
                    "≡⃥": "&bnequiv;",
                    "⌐": "&bnot;",
                    "\uD835\uDD53": "&bopf;",
                    "⋈": "&bowtie;",
                    "╗": "&boxDL;",
                    "╔": "&boxDR;",
                    "╖": "&boxDl;",
                    "╓": "&boxDr;",
                    "═": "&boxH;",
                    "╦": "&boxHD;",
                    "╩": "&boxHU;",
                    "╤": "&boxHd;",
                    "╧": "&boxHu;",
                    "╝": "&boxUL;",
                    "╚": "&boxUR;",
                    "╜": "&boxUl;",
                    "╙": "&boxUr;",
                    "║": "&boxV;",
                    "╬": "&boxVH;",
                    "╣": "&boxVL;",
                    "╠": "&boxVR;",
                    "╫": "&boxVh;",
                    "╢": "&boxVl;",
                    "╟": "&boxVr;",
                    "⧉": "&boxbox;",
                    "╕": "&boxdL;",
                    "╒": "&boxdR;",
                    "┐": "&boxdl;",
                    "┌": "&boxdr;",
                    "╥": "&boxhD;",
                    "╨": "&boxhU;",
                    "┬": "&boxhd;",
                    "┴": "&boxhu;",
                    "⊟": "&minusb;",
                    "⊞": "&plusb;",
                    "⊠": "&timesb;",
                    "╛": "&boxuL;",
                    "╘": "&boxuR;",
                    "┘": "&boxul;",
                    "└": "&boxur;",
                    "│": "&boxv;",
                    "╪": "&boxvH;",
                    "╡": "&boxvL;",
                    "╞": "&boxvR;",
                    "┼": "&boxvh;",
                    "┤": "&boxvl;",
                    "├": "&boxvr;",
                    "\xa6": "&brvbar;",
                    "\uD835\uDCB7": "&bscr;",
                    "⁏": "&bsemi;",
                    "\\": "&bsol;",
                    "⧅": "&bsolb;",
                    "⟈": "&bsolhsub;",
                    "•": "&bullet;",
                    "⪮": "&bumpE;",
                    "ć": "&cacute;",
                    "∩": "&cap;",
                    "⩄": "&capand;",
                    "⩉": "&capbrcup;",
                    "⩋": "&capcap;",
                    "⩇": "&capcup;",
                    "⩀": "&capdot;",
                    "∩︀": "&caps;",
                    "⁁": "&caret;",
                    "⩍": "&ccaps;",
                    "č": "&ccaron;",
                    "\xe7": "&ccedil;",
                    "ĉ": "&ccirc;",
                    "⩌": "&ccups;",
                    "⩐": "&ccupssm;",
                    "ċ": "&cdot;",
                    "⦲": "&cemptyv;",
                    "\xa2": "&cent;",
                    "\uD835\uDD20": "&cfr;",
                    "ч": "&chcy;",
                    "✓": "&checkmark;",
                    "χ": "&chi;",
                    "○": "&cir;",
                    "⧃": "&cirE;",
                    "ˆ": "&circ;",
                    "≗": "&cire;",
                    "↺": "&olarr;",
                    "↻": "&orarr;",
                    "Ⓢ": "&oS;",
                    "⊛": "&oast;",
                    "⊚": "&ocir;",
                    "⊝": "&odash;",
                    "⨐": "&cirfnint;",
                    "⫯": "&cirmid;",
                    "⧂": "&cirscir;",
                    "♣": "&clubsuit;",
                    ":": "&colon;",
                    ",": "&comma;",
                    "@": "&commat;",
                    "∁": "&complement;",
                    "⩭": "&congdot;",
                    "\uD835\uDD54": "&copf;",
                    "℗": "&copysr;",
                    "↵": "&crarr;",
                    "✗": "&cross;",
                    "\uD835\uDCB8": "&cscr;",
                    "⫏": "&csub;",
                    "⫑": "&csube;",
                    "⫐": "&csup;",
                    "⫒": "&csupe;",
                    "⋯": "&ctdot;",
                    "⤸": "&cudarrl;",
                    "⤵": "&cudarrr;",
                    "⋞": "&curlyeqprec;",
                    "⋟": "&curlyeqsucc;",
                    "↶": "&curvearrowleft;",
                    "⤽": "&cularrp;",
                    "∪": "&cup;",
                    "⩈": "&cupbrcap;",
                    "⩆": "&cupcap;",
                    "⩊": "&cupcup;",
                    "⊍": "&cupdot;",
                    "⩅": "&cupor;",
                    "∪︀": "&cups;",
                    "↷": "&curvearrowright;",
                    "⤼": "&curarrm;",
                    "⋎": "&cuvee;",
                    "⋏": "&cuwed;",
                    "\xa4": "&curren;",
                    "∱": "&cwint;",
                    "⌭": "&cylcty;",
                    "⥥": "&dHar;",
                    "†": "&dagger;",
                    "ℸ": "&daleth;",
                    "‐": "&hyphen;",
                    "⤏": "&rBarr;",
                    "ď": "&dcaron;",
                    "д": "&dcy;",
                    "⇊": "&downdownarrows;",
                    "⩷": "&eDDot;",
                    "\xb0": "&deg;",
                    "δ": "&delta;",
                    "⦱": "&demptyv;",
                    "⥿": "&dfisht;",
                    "\uD835\uDD21": "&dfr;",
                    "♦": "&diams;",
                    "ϝ": "&gammad;",
                    "⋲": "&disin;",
                    "\xf7": "&divide;",
                    "⋇": "&divonx;",
                    "ђ": "&djcy;",
                    "⌞": "&llcorner;",
                    "⌍": "&dlcrop;",
                    $: "&dollar;",
                    "\uD835\uDD55": "&dopf;",
                    "≑": "&eDot;",
                    "∸": "&minusd;",
                    "∔": "&plusdo;",
                    "⊡": "&sdotb;",
                    "⌟": "&lrcorner;",
                    "⌌": "&drcrop;",
                    "\uD835\uDCB9": "&dscr;",
                    "ѕ": "&dscy;",
                    "⧶": "&dsol;",
                    "đ": "&dstrok;",
                    "⋱": "&dtdot;",
                    "▿": "&triangledown;",
                    "⦦": "&dwangle;",
                    "џ": "&dzcy;",
                    "⟿": "&dzigrarr;",
                    "\xe9": "&eacute;",
                    "⩮": "&easter;",
                    "ě": "&ecaron;",
                    "≖": "&eqcirc;",
                    "\xea": "&ecirc;",
                    "≕": "&eqcolon;",
                    "э": "&ecy;",
                    "ė": "&edot;",
                    "≒": "&fallingdotseq;",
                    "\uD835\uDD22": "&efr;",
                    "⪚": "&eg;",
                    "\xe8": "&egrave;",
                    "⪖": "&eqslantgtr;",
                    "⪘": "&egsdot;",
                    "⪙": "&el;",
                    "⏧": "&elinters;",
                    "ℓ": "&ell;",
                    "⪕": "&eqslantless;",
                    "⪗": "&elsdot;",
                    "ē": "&emacr;",
                    "∅": "&varnothing;",
                    " ": "&emsp13;",
                    " ": "&emsp14;",
                    " ": "&emsp;",
                    "ŋ": "&eng;",
                    " ": "&ensp;",
                    "ę": "&eogon;",
                    "\uD835\uDD56": "&eopf;",
                    "⋕": "&epar;",
                    "⧣": "&eparsl;",
                    "⩱": "&eplus;",
                    "ε": "&epsilon;",
                    "ϵ": "&varepsilon;",
                    "=": "&equals;",
                    "≟": "&questeq;",
                    "⩸": "&equivDD;",
                    "⧥": "&eqvparsl;",
                    "≓": "&risingdotseq;",
                    "⥱": "&erarr;",
                    "ℯ": "&escr;",
                    "η": "&eta;",
                    "\xf0": "&eth;",
                    "\xeb": "&euml;",
                    "€": "&euro;",
                    "!": "&excl;",
                    "ф": "&fcy;",
                    "♀": "&female;",
                    "ﬃ": "&ffilig;",
                    "ﬀ": "&fflig;",
                    "ﬄ": "&ffllig;",
                    "\uD835\uDD23": "&ffr;",
                    "ﬁ": "&filig;",
                    fj: "&fjlig;",
                    "♭": "&flat;",
                    "ﬂ": "&fllig;",
                    "▱": "&fltns;",
                    "ƒ": "&fnof;",
                    "\uD835\uDD57": "&fopf;",
                    "⋔": "&pitchfork;",
                    "⫙": "&forkv;",
                    "⨍": "&fpartint;",
                    "\xbd": "&half;",
                    "⅓": "&frac13;",
                    "\xbc": "&frac14;",
                    "⅕": "&frac15;",
                    "⅙": "&frac16;",
                    "⅛": "&frac18;",
                    "⅔": "&frac23;",
                    "⅖": "&frac25;",
                    "\xbe": "&frac34;",
                    "⅗": "&frac35;",
                    "⅜": "&frac38;",
                    "⅘": "&frac45;",
                    "⅚": "&frac56;",
                    "⅝": "&frac58;",
                    "⅞": "&frac78;",
                    "⁄": "&frasl;",
                    "⌢": "&sfrown;",
                    "\uD835\uDCBB": "&fscr;",
                    "⪌": "&gtreqqless;",
                    "ǵ": "&gacute;",
                    "γ": "&gamma;",
                    "⪆": "&gtrapprox;",
                    "ğ": "&gbreve;",
                    "ĝ": "&gcirc;",
                    "г": "&gcy;",
                    "ġ": "&gdot;",
                    "⪩": "&gescc;",
                    "⪀": "&gesdot;",
                    "⪂": "&gesdoto;",
                    "⪄": "&gesdotol;",
                    "⋛︀": "&gesl;",
                    "⪔": "&gesles;",
                    "\uD835\uDD24": "&gfr;",
                    "ℷ": "&gimel;",
                    "ѓ": "&gjcy;",
                    "⪒": "&glE;",
                    "⪥": "&gla;",
                    "⪤": "&glj;",
                    "≩": "&gneqq;",
                    "⪊": "&gnapprox;",
                    "⪈": "&gneq;",
                    "⋧": "&gnsim;",
                    "\uD835\uDD58": "&gopf;",
                    "ℊ": "&gscr;",
                    "⪎": "&gsime;",
                    "⪐": "&gsiml;",
                    "⪧": "&gtcc;",
                    "⩺": "&gtcir;",
                    "⋗": "&gtrdot;",
                    "⦕": "&gtlPar;",
                    "⩼": "&gtquest;",
                    "⥸": "&gtrarr;",
                    "≩︀": "&gvnE;",
                    "ъ": "&hardcy;",
                    "⥈": "&harrcir;",
                    "↭": "&leftrightsquigarrow;",
                    "ℏ": "&plankv;",
                    "ĥ": "&hcirc;",
                    "♥": "&heartsuit;",
                    "…": "&mldr;",
                    "⊹": "&hercon;",
                    "\uD835\uDD25": "&hfr;",
                    "⤥": "&searhk;",
                    "⤦": "&swarhk;",
                    "⇿": "&hoarr;",
                    "∻": "&homtht;",
                    "↩": "&larrhk;",
                    "↪": "&rarrhk;",
                    "\uD835\uDD59": "&hopf;",
                    "―": "&horbar;",
                    "\uD835\uDCBD": "&hscr;",
                    "ħ": "&hstrok;",
                    "⁃": "&hybull;",
                    "\xed": "&iacute;",
                    "\xee": "&icirc;",
                    "и": "&icy;",
                    "е": "&iecy;",
                    "\xa1": "&iexcl;",
                    "\uD835\uDD26": "&ifr;",
                    "\xec": "&igrave;",
                    "⨌": "&qint;",
                    "∭": "&tint;",
                    "⧜": "&iinfin;",
                    "℩": "&iiota;",
                    "ĳ": "&ijlig;",
                    "ī": "&imacr;",
                    "ı": "&inodot;",
                    "⊷": "&imof;",
                    "Ƶ": "&imped;",
                    "℅": "&incare;",
                    "∞": "&infin;",
                    "⧝": "&infintie;",
                    "⊺": "&intercal;",
                    "⨗": "&intlarhk;",
                    "⨼": "&iprod;",
                    "ё": "&iocy;",
                    "į": "&iogon;",
                    "\uD835\uDD5A": "&iopf;",
                    "ι": "&iota;",
                    "\xbf": "&iquest;",
                    "\uD835\uDCBE": "&iscr;",
                    "⋹": "&isinE;",
                    "⋵": "&isindot;",
                    "⋴": "&isins;",
                    "⋳": "&isinsv;",
                    "ĩ": "&itilde;",
                    "і": "&iukcy;",
                    "\xef": "&iuml;",
                    "ĵ": "&jcirc;",
                    "й": "&jcy;",
                    "\uD835\uDD27": "&jfr;",
                    "ȷ": "&jmath;",
                    "\uD835\uDD5B": "&jopf;",
                    "\uD835\uDCBF": "&jscr;",
                    "ј": "&jsercy;",
                    "є": "&jukcy;",
                    "κ": "&kappa;",
                    "ϰ": "&varkappa;",
                    "ķ": "&kcedil;",
                    "к": "&kcy;",
                    "\uD835\uDD28": "&kfr;",
                    "ĸ": "&kgreen;",
                    "х": "&khcy;",
                    "ќ": "&kjcy;",
                    "\uD835\uDD5C": "&kopf;",
                    "\uD835\uDCC0": "&kscr;",
                    "⤛": "&lAtail;",
                    "⤎": "&lBarr;",
                    "⪋": "&lesseqqgtr;",
                    "⥢": "&lHar;",
                    "ĺ": "&lacute;",
                    "⦴": "&laemptyv;",
                    "λ": "&lambda;",
                    "⦑": "&langd;",
                    "⪅": "&lessapprox;",
                    "\xab": "&laquo;",
                    "⤟": "&larrbfs;",
                    "⤝": "&larrfs;",
                    "↫": "&looparrowleft;",
                    "⤹": "&larrpl;",
                    "⥳": "&larrsim;",
                    "↢": "&leftarrowtail;",
                    "⪫": "&lat;",
                    "⤙": "&latail;",
                    "⪭": "&late;",
                    "⪭︀": "&lates;",
                    "⤌": "&lbarr;",
                    "❲": "&lbbrk;",
                    "{": "&lcub;",
                    "[": "&lsqb;",
                    "⦋": "&lbrke;",
                    "⦏": "&lbrksld;",
                    "⦍": "&lbrkslu;",
                    "ľ": "&lcaron;",
                    "ļ": "&lcedil;",
                    "л": "&lcy;",
                    "⤶": "&ldca;",
                    "⥧": "&ldrdhar;",
                    "⥋": "&ldrushar;",
                    "↲": "&ldsh;",
                    "≤": "&leq;",
                    "⇇": "&llarr;",
                    "⋋": "&lthree;",
                    "⪨": "&lescc;",
                    "⩿": "&lesdot;",
                    "⪁": "&lesdoto;",
                    "⪃": "&lesdotor;",
                    "⋚︀": "&lesg;",
                    "⪓": "&lesges;",
                    "⋖": "&ltdot;",
                    "⥼": "&lfisht;",
                    "\uD835\uDD29": "&lfr;",
                    "⪑": "&lgE;",
                    "⥪": "&lharul;",
                    "▄": "&lhblk;",
                    "љ": "&ljcy;",
                    "⥫": "&llhard;",
                    "◺": "&lltri;",
                    "ŀ": "&lmidot;",
                    "⎰": "&lmoustache;",
                    "≨": "&lneqq;",
                    "⪉": "&lnapprox;",
                    "⪇": "&lneq;",
                    "⋦": "&lnsim;",
                    "⟬": "&loang;",
                    "⇽": "&loarr;",
                    "⟼": "&xmap;",
                    "↬": "&rarrlp;",
                    "⦅": "&lopar;",
                    "\uD835\uDD5D": "&lopf;",
                    "⨭": "&loplus;",
                    "⨴": "&lotimes;",
                    "∗": "&lowast;",
                    "◊": "&lozenge;",
                    "(": "&lpar;",
                    "⦓": "&lparlt;",
                    "⥭": "&lrhard;",
                    "‎": "&lrm;",
                    "⊿": "&lrtri;",
                    "‹": "&lsaquo;",
                    "\uD835\uDCC1": "&lscr;",
                    "⪍": "&lsime;",
                    "⪏": "&lsimg;",
                    "‚": "&sbquo;",
                    "ł": "&lstrok;",
                    "⪦": "&ltcc;",
                    "⩹": "&ltcir;",
                    "⋉": "&ltimes;",
                    "⥶": "&ltlarr;",
                    "⩻": "&ltquest;",
                    "⦖": "&ltrPar;",
                    "◃": "&triangleleft;",
                    "⥊": "&lurdshar;",
                    "⥦": "&luruhar;",
                    "≨︀": "&lvnE;",
                    "∺": "&mDDot;",
                    "\xaf": "&strns;",
                    "♂": "&male;",
                    "✠": "&maltese;",
                    "▮": "&marker;",
                    "⨩": "&mcomma;",
                    "м": "&mcy;",
                    "—": "&mdash;",
                    "\uD835\uDD2A": "&mfr;",
                    "℧": "&mho;",
                    "\xb5": "&micro;",
                    "⫰": "&midcir;",
                    "−": "&minus;",
                    "⨪": "&minusdu;",
                    "⫛": "&mlcp;",
                    "⊧": "&models;",
                    "\uD835\uDD5E": "&mopf;",
                    "\uD835\uDCC2": "&mscr;",
                    "μ": "&mu;",
                    "⊸": "&mumap;",
                    "⋙̸": "&nGg;",
                    "≫⃒": "&nGt;",
                    "⇍": "&nlArr;",
                    "⇎": "&nhArr;",
                    "⋘̸": "&nLl;",
                    "≪⃒": "&nLt;",
                    "⇏": "&nrArr;",
                    "⊯": "&nVDash;",
                    "⊮": "&nVdash;",
                    "ń": "&nacute;",
                    "∠⃒": "&nang;",
                    "⩰̸": "&napE;",
                    "≋̸": "&napid;",
                    "ŉ": "&napos;",
                    "♮": "&natural;",
                    "⩃": "&ncap;",
                    "ň": "&ncaron;",
                    "ņ": "&ncedil;",
                    "⩭̸": "&ncongdot;",
                    "⩂": "&ncup;",
                    "н": "&ncy;",
                    "–": "&ndash;",
                    "⇗": "&neArr;",
                    "⤤": "&nearhk;",
                    "≐̸": "&nedot;",
                    "⤨": "&toea;",
                    "\uD835\uDD2B": "&nfr;",
                    "↮": "&nleftrightarrow;",
                    "⫲": "&nhpar;",
                    "⋼": "&nis;",
                    "⋺": "&nisd;",
                    "њ": "&njcy;",
                    "≦̸": "&nleqq;",
                    "↚": "&nleftarrow;",
                    "‥": "&nldr;",
                    "\uD835\uDD5F": "&nopf;",
                    "\xac": "&not;",
                    "⋹̸": "&notinE;",
                    "⋵̸": "&notindot;",
                    "⋷": "&notinvb;",
                    "⋶": "&notinvc;",
                    "⋾": "&notnivb;",
                    "⋽": "&notnivc;",
                    "⫽⃥": "&nparsl;",
                    "∂̸": "&npart;",
                    "⨔": "&npolint;",
                    "↛": "&nrightarrow;",
                    "⤳̸": "&nrarrc;",
                    "↝̸": "&nrarrw;",
                    "\uD835\uDCC3": "&nscr;",
                    "⊄": "&nsub;",
                    "⫅̸": "&nsubseteqq;",
                    "⊅": "&nsup;",
                    "⫆̸": "&nsupseteqq;",
                    "\xf1": "&ntilde;",
                    "ν": "&nu;",
                    "#": "&num;",
                    "№": "&numero;",
                    " ": "&numsp;",
                    "⊭": "&nvDash;",
                    "⤄": "&nvHarr;",
                    "≍⃒": "&nvap;",
                    "⊬": "&nvdash;",
                    "≥⃒": "&nvge;",
                    ">⃒": "&nvgt;",
                    "⧞": "&nvinfin;",
                    "⤂": "&nvlArr;",
                    "≤⃒": "&nvle;",
                    "<⃒": "&nvlt;",
                    "⊴⃒": "&nvltrie;",
                    "⤃": "&nvrArr;",
                    "⊵⃒": "&nvrtrie;",
                    "∼⃒": "&nvsim;",
                    "⇖": "&nwArr;",
                    "⤣": "&nwarhk;",
                    "⤧": "&nwnear;",
                    "\xf3": "&oacute;",
                    "\xf4": "&ocirc;",
                    "о": "&ocy;",
                    "ő": "&odblac;",
                    "⨸": "&odiv;",
                    "⦼": "&odsold;",
                    "œ": "&oelig;",
                    "⦿": "&ofcir;",
                    "\uD835\uDD2C": "&ofr;",
                    "˛": "&ogon;",
                    "\xf2": "&ograve;",
                    "⧁": "&ogt;",
                    "⦵": "&ohbar;",
                    "⦾": "&olcir;",
                    "⦻": "&olcross;",
                    "⧀": "&olt;",
                    "ō": "&omacr;",
                    "ω": "&omega;",
                    "ο": "&omicron;",
                    "⦶": "&omid;",
                    "\uD835\uDD60": "&oopf;",
                    "⦷": "&opar;",
                    "⦹": "&operp;",
                    "∨": "&vee;",
                    "⩝": "&ord;",
                    "ℴ": "&oscr;",
                    "\xaa": "&ordf;",
                    "\xba": "&ordm;",
                    "⊶": "&origof;",
                    "⩖": "&oror;",
                    "⩗": "&orslope;",
                    "⩛": "&orv;",
                    "\xf8": "&oslash;",
                    "⊘": "&osol;",
                    "\xf5": "&otilde;",
                    "⨶": "&otimesas;",
                    "\xf6": "&ouml;",
                    "⌽": "&ovbar;",
                    "\xb6": "&para;",
                    "⫳": "&parsim;",
                    "⫽": "&parsl;",
                    "п": "&pcy;",
                    "%": "&percnt;",
                    ".": "&period;",
                    "‰": "&permil;",
                    "‱": "&pertenk;",
                    "\uD835\uDD2D": "&pfr;",
                    "φ": "&phi;",
                    "ϕ": "&varphi;",
                    "☎": "&phone;",
                    "π": "&pi;",
                    "ϖ": "&varpi;",
                    "ℎ": "&planckh;",
                    "+": "&plus;",
                    "⨣": "&plusacir;",
                    "⨢": "&pluscir;",
                    "⨥": "&plusdu;",
                    "⩲": "&pluse;",
                    "⨦": "&plussim;",
                    "⨧": "&plustwo;",
                    "⨕": "&pointint;",
                    "\uD835\uDD61": "&popf;",
                    "\xa3": "&pound;",
                    "⪳": "&prE;",
                    "⪷": "&precapprox;",
                    "⪹": "&prnap;",
                    "⪵": "&prnE;",
                    "⋨": "&prnsim;",
                    "′": "&prime;",
                    "⌮": "&profalar;",
                    "⌒": "&profline;",
                    "⌓": "&profsurf;",
                    "⊰": "&prurel;",
                    "\uD835\uDCC5": "&pscr;",
                    "ψ": "&psi;",
                    " ": "&puncsp;",
                    "\uD835\uDD2E": "&qfr;",
                    "\uD835\uDD62": "&qopf;",
                    "⁗": "&qprime;",
                    "\uD835\uDCC6": "&qscr;",
                    "⨖": "&quatint;",
                    "?": "&quest;",
                    "⤜": "&rAtail;",
                    "⥤": "&rHar;",
                    "∽̱": "&race;",
                    "ŕ": "&racute;",
                    "⦳": "&raemptyv;",
                    "⦒": "&rangd;",
                    "⦥": "&range;",
                    "\xbb": "&raquo;",
                    "⥵": "&rarrap;",
                    "⤠": "&rarrbfs;",
                    "⤳": "&rarrc;",
                    "⤞": "&rarrfs;",
                    "⥅": "&rarrpl;",
                    "⥴": "&rarrsim;",
                    "↣": "&rightarrowtail;",
                    "↝": "&rightsquigarrow;",
                    "⤚": "&ratail;",
                    "∶": "&ratio;",
                    "❳": "&rbbrk;",
                    "}": "&rcub;",
                    "]": "&rsqb;",
                    "⦌": "&rbrke;",
                    "⦎": "&rbrksld;",
                    "⦐": "&rbrkslu;",
                    "ř": "&rcaron;",
                    "ŗ": "&rcedil;",
                    "р": "&rcy;",
                    "⤷": "&rdca;",
                    "⥩": "&rdldhar;",
                    "↳": "&rdsh;",
                    "▭": "&rect;",
                    "⥽": "&rfisht;",
                    "\uD835\uDD2F": "&rfr;",
                    "⥬": "&rharul;",
                    "ρ": "&rho;",
                    "ϱ": "&varrho;",
                    "⇉": "&rrarr;",
                    "⋌": "&rthree;",
                    "˚": "&ring;",
                    "‏": "&rlm;",
                    "⎱": "&rmoustache;",
                    "⫮": "&rnmid;",
                    "⟭": "&roang;",
                    "⇾": "&roarr;",
                    "⦆": "&ropar;",
                    "\uD835\uDD63": "&ropf;",
                    "⨮": "&roplus;",
                    "⨵": "&rotimes;",
                    ")": "&rpar;",
                    "⦔": "&rpargt;",
                    "⨒": "&rppolint;",
                    "›": "&rsaquo;",
                    "\uD835\uDCC7": "&rscr;",
                    "⋊": "&rtimes;",
                    "▹": "&triangleright;",
                    "⧎": "&rtriltri;",
                    "⥨": "&ruluhar;",
                    "℞": "&rx;",
                    "ś": "&sacute;",
                    "⪴": "&scE;",
                    "⪸": "&succapprox;",
                    "š": "&scaron;",
                    "ş": "&scedil;",
                    "ŝ": "&scirc;",
                    "⪶": "&succneqq;",
                    "⪺": "&succnapprox;",
                    "⋩": "&succnsim;",
                    "⨓": "&scpolint;",
                    "с": "&scy;",
                    "⋅": "&sdot;",
                    "⩦": "&sdote;",
                    "⇘": "&seArr;",
                    "\xa7": "&sect;",
                    ";": "&semi;",
                    "⤩": "&tosa;",
                    "✶": "&sext;",
                    "\uD835\uDD30": "&sfr;",
                    "♯": "&sharp;",
                    "щ": "&shchcy;",
                    "ш": "&shcy;",
                    "\xad": "&shy;",
                    "σ": "&sigma;",
                    "ς": "&varsigma;",
                    "⩪": "&simdot;",
                    "⪞": "&simg;",
                    "⪠": "&simgE;",
                    "⪝": "&siml;",
                    "⪟": "&simlE;",
                    "≆": "&simne;",
                    "⨤": "&simplus;",
                    "⥲": "&simrarr;",
                    "⨳": "&smashp;",
                    "⧤": "&smeparsl;",
                    "⌣": "&ssmile;",
                    "⪪": "&smt;",
                    "⪬": "&smte;",
                    "⪬︀": "&smtes;",
                    "ь": "&softcy;",
                    "/": "&sol;",
                    "⧄": "&solb;",
                    "⌿": "&solbar;",
                    "\uD835\uDD64": "&sopf;",
                    "♠": "&spadesuit;",
                    "⊓︀": "&sqcaps;",
                    "⊔︀": "&sqcups;",
                    "\uD835\uDCC8": "&sscr;",
                    "☆": "&star;",
                    "⊂": "&subset;",
                    "⫅": "&subseteqq;",
                    "⪽": "&subdot;",
                    "⫃": "&subedot;",
                    "⫁": "&submult;",
                    "⫋": "&subsetneqq;",
                    "⊊": "&subsetneq;",
                    "⪿": "&subplus;",
                    "⥹": "&subrarr;",
                    "⫇": "&subsim;",
                    "⫕": "&subsub;",
                    "⫓": "&subsup;",
                    "♪": "&sung;",
                    "\xb9": "&sup1;",
                    "\xb2": "&sup2;",
                    "\xb3": "&sup3;",
                    "⫆": "&supseteqq;",
                    "⪾": "&supdot;",
                    "⫘": "&supdsub;",
                    "⫄": "&supedot;",
                    "⟉": "&suphsol;",
                    "⫗": "&suphsub;",
                    "⥻": "&suplarr;",
                    "⫂": "&supmult;",
                    "⫌": "&supsetneqq;",
                    "⊋": "&supsetneq;",
                    "⫀": "&supplus;",
                    "⫈": "&supsim;",
                    "⫔": "&supsub;",
                    "⫖": "&supsup;",
                    "⇙": "&swArr;",
                    "⤪": "&swnwar;",
                    "\xdf": "&szlig;",
                    "⌖": "&target;",
                    "τ": "&tau;",
                    "ť": "&tcaron;",
                    "ţ": "&tcedil;",
                    "т": "&tcy;",
                    "⌕": "&telrec;",
                    "\uD835\uDD31": "&tfr;",
                    "θ": "&theta;",
                    "ϑ": "&vartheta;",
                    "\xfe": "&thorn;",
                    "\xd7": "&times;",
                    "⨱": "&timesbar;",
                    "⨰": "&timesd;",
                    "⌶": "&topbot;",
                    "⫱": "&topcir;",
                    "\uD835\uDD65": "&topf;",
                    "⫚": "&topfork;",
                    "‴": "&tprime;",
                    "▵": "&utri;",
                    "≜": "&trie;",
                    "◬": "&tridot;",
                    "⨺": "&triminus;",
                    "⨹": "&triplus;",
                    "⧍": "&trisb;",
                    "⨻": "&tritime;",
                    "⏢": "&trpezium;",
                    "\uD835\uDCC9": "&tscr;",
                    "ц": "&tscy;",
                    "ћ": "&tshcy;",
                    "ŧ": "&tstrok;",
                    "⥣": "&uHar;",
                    "\xfa": "&uacute;",
                    "ў": "&ubrcy;",
                    "ŭ": "&ubreve;",
                    "\xfb": "&ucirc;",
                    "у": "&ucy;",
                    "ű": "&udblac;",
                    "⥾": "&ufisht;",
                    "\uD835\uDD32": "&ufr;",
                    "\xf9": "&ugrave;",
                    "▀": "&uhblk;",
                    "⌜": "&ulcorner;",
                    "⌏": "&ulcrop;",
                    "◸": "&ultri;",
                    "ū": "&umacr;",
                    "ų": "&uogon;",
                    "\uD835\uDD66": "&uopf;",
                    "υ": "&upsilon;",
                    "⇈": "&uuarr;",
                    "⌝": "&urcorner;",
                    "⌎": "&urcrop;",
                    "ů": "&uring;",
                    "◹": "&urtri;",
                    "\uD835\uDCCA": "&uscr;",
                    "⋰": "&utdot;",
                    "ũ": "&utilde;",
                    "\xfc": "&uuml;",
                    "⦧": "&uwangle;",
                    "⫨": "&vBar;",
                    "⫩": "&vBarv;",
                    "⦜": "&vangrt;",
                    "⊊︀": "&vsubne;",
                    "⫋︀": "&vsubnE;",
                    "⊋︀": "&vsupne;",
                    "⫌︀": "&vsupnE;",
                    "в": "&vcy;",
                    "⊻": "&veebar;",
                    "≚": "&veeeq;",
                    "⋮": "&vellip;",
                    "\uD835\uDD33": "&vfr;",
                    "\uD835\uDD67": "&vopf;",
                    "\uD835\uDCCB": "&vscr;",
                    "⦚": "&vzigzag;",
                    "ŵ": "&wcirc;",
                    "⩟": "&wedbar;",
                    "≙": "&wedgeq;",
                    "℘": "&wp;",
                    "\uD835\uDD34": "&wfr;",
                    "\uD835\uDD68": "&wopf;",
                    "\uD835\uDCCC": "&wscr;",
                    "\uD835\uDD35": "&xfr;",
                    "ξ": "&xi;",
                    "⋻": "&xnis;",
                    "\uD835\uDD69": "&xopf;",
                    "\uD835\uDCCD": "&xscr;",
                    "\xfd": "&yacute;",
                    "я": "&yacy;",
                    "ŷ": "&ycirc;",
                    "ы": "&ycy;",
                    "\xa5": "&yen;",
                    "\uD835\uDD36": "&yfr;",
                    "ї": "&yicy;",
                    "\uD835\uDD6A": "&yopf;",
                    "\uD835\uDCCE": "&yscr;",
                    "ю": "&yucy;",
                    "\xff": "&yuml;",
                    "ź": "&zacute;",
                    "ž": "&zcaron;",
                    "з": "&zcy;",
                    "ż": "&zdot;",
                    "ζ": "&zeta;",
                    "\uD835\uDD37": "&zfr;",
                    "ж": "&zhcy;",
                    "⇝": "&zigrarr;",
                    "\uD835\uDD6B": "&zopf;",
                    "\uD835\uDCCF": "&zscr;",
                    "‍": "&zwj;",
                    "‌": "&zwnj;"
                }
            }
        };
    }
});
// ../../node_modules/html-entities/lib/numeric-unicode-map.js
var require_numeric_unicode_map = __commonJS({
    "../../node_modules/html-entities/lib/numeric-unicode-map.js" (exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.numericUnicodeMap = {
            0: 65533,
            128: 8364,
            130: 8218,
            131: 402,
            132: 8222,
            133: 8230,
            134: 8224,
            135: 8225,
            136: 710,
            137: 8240,
            138: 352,
            139: 8249,
            140: 338,
            142: 381,
            145: 8216,
            146: 8217,
            147: 8220,
            148: 8221,
            149: 8226,
            150: 8211,
            151: 8212,
            152: 732,
            153: 8482,
            154: 353,
            155: 8250,
            156: 339,
            158: 382,
            159: 376
        };
    }
});
// ../../node_modules/html-entities/lib/surrogate-pairs.js
var require_surrogate_pairs = __commonJS({
    "../../node_modules/html-entities/lib/surrogate-pairs.js" (exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.fromCodePoint = String.fromCodePoint || function(astralCodePoint) {
            return String.fromCharCode(Math.floor((astralCodePoint - 65536) / 1024) + 55296, (astralCodePoint - 65536) % 1024 + 56320);
        };
        exports.getCodePoint = String.prototype.codePointAt ? function(input, position) {
            return input.codePointAt(position);
        } : function(input, position) {
            return (input.charCodeAt(position) - 55296) * 1024 + input.charCodeAt(position + 1) - 56320 + 65536;
        };
        exports.highSurrogateFrom = 55296;
        exports.highSurrogateTo = 56319;
    }
});
// ../../node_modules/html-entities/lib/index.js
var require_lib = __commonJS({
    "../../node_modules/html-entities/lib/index.js" (exports) {
        "use strict";
        var __assign = exports && exports.__assign || function() {
            __assign = Object.assign || function(t) {
                for(var s, i = 1, n = arguments.length; i < n; i++){
                    s = arguments[i];
                    for(var p2 in s)if (Object.prototype.hasOwnProperty.call(s, p2)) t[p2] = s[p2];
                }
                return t;
            };
            return __assign.apply(this, arguments);
        };
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var named_references_1 = require_named_references();
        var numeric_unicode_map_1 = require_numeric_unicode_map();
        var surrogate_pairs_1 = require_surrogate_pairs();
        var allNamedReferences = __assign(__assign({}, named_references_1.namedReferences), {
            all: named_references_1.namedReferences.html5
        });
        var encodeRegExps = {
            specialChars: /[<>'"&]/g,
            nonAscii: /(?:[<>'"&\u0080-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g,
            nonAsciiPrintable: /(?:[<>'"&\x01-\x08\x11-\x15\x17-\x1F\x7f-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g,
            extensive: /(?:[\x01-\x0c\x0e-\x1f\x21-\x2c\x2e-\x2f\x3a-\x40\x5b-\x60\x7b-\x7d\x7f-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g
        };
        var defaultEncodeOptions = {
            mode: "specialChars",
            level: "all",
            numeric: "decimal"
        };
        function encode(text, _a) {
            var _b = _a === void 0 ? defaultEncodeOptions : _a, _c = _b.mode, mode = _c === void 0 ? "specialChars" : _c, _d = _b.numeric, numeric = _d === void 0 ? "decimal" : _d, _e = _b.level, level = _e === void 0 ? "all" : _e;
            if (!text) return "";
            var encodeRegExp = encodeRegExps[mode];
            var references = allNamedReferences[level].characters;
            var isHex = numeric === "hexadecimal";
            encodeRegExp.lastIndex = 0;
            var _b = encodeRegExp.exec(text);
            var _c;
            if (_b) {
                _c = "";
                var _d = 0;
                do {
                    if (_d !== _b.index) _c += text.substring(_d, _b.index);
                    var _e = _b[0];
                    var result_1 = references[_e];
                    if (!result_1) {
                        var code_1 = _e.length > 1 ? surrogate_pairs_1.getCodePoint(_e, 0) : _e.charCodeAt(0);
                        result_1 = (isHex ? "&#x" + code_1.toString(16) : "&#" + code_1) + ";";
                    }
                    _c += result_1;
                    _d = _b.index + _e.length;
                }while (_b = encodeRegExp.exec(text));
                if (_d !== text.length) _c += text.substring(_d);
            } else _c = text;
            return _c;
        }
        exports.encode = encode;
        var defaultDecodeOptions = {
            scope: "body",
            level: "all"
        };
        var strict = /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);/g;
        var attribute = /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+)[;=]?/g;
        var baseDecodeRegExps = {
            xml: {
                strict,
                attribute,
                body: named_references_1.bodyRegExps.xml
            },
            html4: {
                strict,
                attribute,
                body: named_references_1.bodyRegExps.html4
            },
            html5: {
                strict,
                attribute,
                body: named_references_1.bodyRegExps.html5
            }
        };
        var decodeRegExps = __assign(__assign({}, baseDecodeRegExps), {
            all: baseDecodeRegExps.html5
        });
        var fromCharCode = String.fromCharCode;
        var outOfBoundsChar = fromCharCode(65533);
        var defaultDecodeEntityOptions = {
            level: "all"
        };
        function decodeEntity(entity, _a) {
            var _b = (_a === void 0 ? defaultDecodeEntityOptions : _a).level, level = _b === void 0 ? "all" : _b;
            if (!entity) return "";
            var _b = entity;
            var decodeEntityLastChar_1 = entity[entity.length - 1];
            var decodeResultByReference_1 = allNamedReferences[level].entities[entity];
            if (decodeResultByReference_1) _b = decodeResultByReference_1;
            else if (entity[0] === "&" && entity[1] === "#") {
                var decodeSecondChar_1 = entity[2];
                var decodeCode_1 = decodeSecondChar_1 == "x" || decodeSecondChar_1 == "X" ? parseInt(entity.substr(3), 16) : parseInt(entity.substr(2));
                _b = decodeCode_1 >= 1114111 ? outOfBoundsChar : decodeCode_1 > 65535 ? surrogate_pairs_1.fromCodePoint(decodeCode_1) : fromCharCode(numeric_unicode_map_1.numericUnicodeMap[decodeCode_1] || decodeCode_1);
            }
            return _b;
        }
        exports.decodeEntity = decodeEntity;
        function decode2(text, _a) {
            var decodeSecondChar_1 = _a === void 0 ? defaultDecodeOptions : _a, decodeCode_1 = decodeSecondChar_1.level, level = decodeCode_1 === void 0 ? "all" : decodeCode_1, _b = decodeSecondChar_1.scope, scope = _b === void 0 ? level === "xml" ? "strict" : "body" : _b;
            if (!text) return "";
            var decodeRegExp = decodeRegExps[level][scope];
            var references = allNamedReferences[level].entities;
            var isAttribute = scope === "attribute";
            var isStrict = scope === "strict";
            decodeRegExp.lastIndex = 0;
            var replaceMatch_1 = decodeRegExp.exec(text);
            var replaceResult_1;
            if (replaceMatch_1) {
                replaceResult_1 = "";
                var replaceLastIndex_1 = 0;
                do {
                    if (replaceLastIndex_1 !== replaceMatch_1.index) replaceResult_1 += text.substring(replaceLastIndex_1, replaceMatch_1.index);
                    var replaceInput_1 = replaceMatch_1[0];
                    var decodeResult_1 = replaceInput_1;
                    var decodeEntityLastChar_2 = replaceInput_1[replaceInput_1.length - 1];
                    if (isAttribute && decodeEntityLastChar_2 === "=") decodeResult_1 = replaceInput_1;
                    else if (isStrict && decodeEntityLastChar_2 !== ";") decodeResult_1 = replaceInput_1;
                    else {
                        var decodeResultByReference_2 = references[replaceInput_1];
                        if (decodeResultByReference_2) decodeResult_1 = decodeResultByReference_2;
                        else if (replaceInput_1[0] === "&" && replaceInput_1[1] === "#") {
                            var decodeSecondChar_2 = replaceInput_1[2];
                            var decodeCode_2 = decodeSecondChar_2 == "x" || decodeSecondChar_2 == "X" ? parseInt(replaceInput_1.substr(3), 16) : parseInt(replaceInput_1.substr(2));
                            decodeResult_1 = decodeCode_2 >= 1114111 ? outOfBoundsChar : decodeCode_2 > 65535 ? surrogate_pairs_1.fromCodePoint(decodeCode_2) : fromCharCode(numeric_unicode_map_1.numericUnicodeMap[decodeCode_2] || decodeCode_2);
                        }
                    }
                    replaceResult_1 += decodeResult_1;
                    replaceLastIndex_1 = replaceMatch_1.index + replaceInput_1.length;
                }while (replaceMatch_1 = decodeRegExp.exec(text));
                if (replaceLastIndex_1 !== text.length) replaceResult_1 += text.substring(replaceLastIndex_1);
            } else replaceResult_1 = text;
            return replaceResult_1;
        }
        exports.decode = decode2;
    }
});
// ../../node_modules/lodash.clonedeep/index.js
var require_lodash3 = __commonJS({
    "../../node_modules/lodash.clonedeep/index.js" (exports, module2) {
        var LARGE_ARRAY_SIZE = 200;
        var HASH_UNDEFINED = "__lodash_hash_undefined__";
        var MAX_SAFE_INTEGER = 9007199254740991;
        var argsTag = "[object Arguments]";
        var arrayTag = "[object Array]";
        var boolTag = "[object Boolean]";
        var dateTag = "[object Date]";
        var errorTag = "[object Error]";
        var funcTag = "[object Function]";
        var genTag = "[object GeneratorFunction]";
        var mapTag = "[object Map]";
        var numberTag = "[object Number]";
        var objectTag = "[object Object]";
        var promiseTag = "[object Promise]";
        var regexpTag = "[object RegExp]";
        var setTag = "[object Set]";
        var stringTag = "[object String]";
        var symbolTag = "[object Symbol]";
        var weakMapTag = "[object WeakMap]";
        var arrayBufferTag = "[object ArrayBuffer]";
        var dataViewTag = "[object DataView]";
        var float32Tag = "[object Float32Array]";
        var float64Tag = "[object Float64Array]";
        var int8Tag = "[object Int8Array]";
        var int16Tag = "[object Int16Array]";
        var int32Tag = "[object Int32Array]";
        var uint8Tag = "[object Uint8Array]";
        var uint8ClampedTag = "[object Uint8ClampedArray]";
        var uint16Tag = "[object Uint16Array]";
        var uint32Tag = "[object Uint32Array]";
        var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
        var reFlags = /\w*$/;
        var reIsHostCtor = /^\[object .+?Constructor\]$/;
        var reIsUint = /^(?:0|[1-9]\d*)$/;
        var cloneableTags = {};
        cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
        cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
        var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
        var freeSelf = typeof self == "object" && self && self.Object === Object && self;
        var root = freeGlobal || freeSelf || Function("return this")();
        var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
        var freeModule = freeExports && typeof module2 == "object" && module2 && !module2.nodeType && module2;
        var moduleExports = freeModule && freeModule.exports === freeExports;
        function addMapEntry(map, pair) {
            map.set(pair[0], pair[1]);
            return map;
        }
        function addSetEntry(set, value) {
            set.add(value);
            return set;
        }
        function arrayEach(array, iteratee) {
            var index = -1, length = array ? array.length : 0;
            while(++index < length){
                if (iteratee(array[index], index, array) === false) break;
            }
            return array;
        }
        function arrayPush(array, values) {
            var index = -1, length = values.length, offset = array.length;
            while(++index < length)array[offset + index] = values[index];
            return array;
        }
        function arrayReduce(array, iteratee, accumulator, initAccum) {
            var index = -1, length = array ? array.length : 0;
            if (initAccum && length) accumulator = array[++index];
            while(++index < length)accumulator = iteratee(accumulator, array[index], index, array);
            return accumulator;
        }
        function baseTimes(n, iteratee) {
            var index = -1, result = Array(n);
            while(++index < n)result[index] = iteratee(index);
            return result;
        }
        function getValue(object, key) {
            return object == null ? void 0 : object[key];
        }
        function isHostObject(value) {
            var result = false;
            if (value != null && typeof value.toString != "function") try {
                result = !!(value + "");
            } catch (e) {}
            return result;
        }
        function mapToArray(map) {
            var index = -1, result = Array(map.size);
            map.forEach(function(value, key) {
                result[++index] = [
                    key,
                    value
                ];
            });
            return result;
        }
        function overArg(func, transform) {
            return function(arg) {
                return func(transform(arg));
            };
        }
        function setToArray(set) {
            var index = -1, result = Array(set.size);
            set.forEach(function(value) {
                result[++index] = value;
            });
            return result;
        }
        var arrayProto = Array.prototype;
        var funcProto = Function.prototype;
        var objectProto = Object.prototype;
        var coreJsData = root["__core-js_shared__"];
        var maskSrcKey = function() {
            var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
            return uid ? "Symbol(src)_1." + uid : "";
        }();
        var funcToString = funcProto.toString;
        var hasOwnProperty = objectProto.hasOwnProperty;
        var objectToString = objectProto.toString;
        var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
        var Buffer2 = moduleExports ? root.Buffer : void 0;
        var Symbol2 = root.Symbol;
        var Uint8Array2 = root.Uint8Array;
        var getPrototype = overArg(Object.getPrototypeOf, Object);
        var objectCreate = Object.create;
        var propertyIsEnumerable = objectProto.propertyIsEnumerable;
        var splice = arrayProto.splice;
        var nativeGetSymbols = Object.getOwnPropertySymbols;
        var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
        var nativeKeys = overArg(Object.keys, Object);
        var DataView = getNative(root, "DataView");
        var Map = getNative(root, "Map");
        var Promise2 = getNative(root, "Promise");
        var Set2 = getNative(root, "Set");
        var WeakMap = getNative(root, "WeakMap");
        var nativeCreate = getNative(Object, "create");
        var dataViewCtorString = toSource(DataView);
        var mapCtorString = toSource(Map);
        var promiseCtorString = toSource(Promise2);
        var setCtorString = toSource(Set2);
        var weakMapCtorString = toSource(WeakMap);
        var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
        var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
        function Hash(entries) {
            var index = -1, length = entries ? entries.length : 0;
            this.clear();
            while(++index < length){
                var entry = entries[index];
                this.set(entry[0], entry[1]);
            }
        }
        function hashClear() {
            this.__data__ = nativeCreate ? nativeCreate(null) : {};
        }
        function hashDelete(key) {
            return this.has(key) && delete this.__data__[key];
        }
        function hashGet(key) {
            var data = this.__data__;
            if (nativeCreate) {
                var result = data[key];
                return result === HASH_UNDEFINED ? void 0 : result;
            }
            return hasOwnProperty.call(data, key) ? data[key] : void 0;
        }
        function hashHas(key) {
            var data = this.__data__;
            return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
        }
        function hashSet(key, value) {
            var data = this.__data__;
            data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
            return this;
        }
        Hash.prototype.clear = hashClear;
        Hash.prototype["delete"] = hashDelete;
        Hash.prototype.get = hashGet;
        Hash.prototype.has = hashHas;
        Hash.prototype.set = hashSet;
        function ListCache(entries) {
            var index = -1, length = entries ? entries.length : 0;
            this.clear();
            while(++index < length){
                var entry = entries[index];
                this.set(entry[0], entry[1]);
            }
        }
        function listCacheClear() {
            this.__data__ = [];
        }
        function listCacheDelete(key) {
            var data = this.__data__, index = assocIndexOf(data, key);
            if (index < 0) return false;
            var lastIndex = data.length - 1;
            if (index == lastIndex) data.pop();
            else splice.call(data, index, 1);
            return true;
        }
        function listCacheGet(key) {
            var data = this.__data__, index = assocIndexOf(data, key);
            return index < 0 ? void 0 : data[index][1];
        }
        function listCacheHas(key) {
            return assocIndexOf(this.__data__, key) > -1;
        }
        function listCacheSet(key, value) {
            var data = this.__data__, index = assocIndexOf(data, key);
            if (index < 0) data.push([
                key,
                value
            ]);
            else data[index][1] = value;
            return this;
        }
        ListCache.prototype.clear = listCacheClear;
        ListCache.prototype["delete"] = listCacheDelete;
        ListCache.prototype.get = listCacheGet;
        ListCache.prototype.has = listCacheHas;
        ListCache.prototype.set = listCacheSet;
        function MapCache(entries) {
            var index = -1, length = entries ? entries.length : 0;
            this.clear();
            while(++index < length){
                var entry = entries[index];
                this.set(entry[0], entry[1]);
            }
        }
        function mapCacheClear() {
            this.__data__ = {
                hash: new Hash(),
                map: new (Map || ListCache)(),
                string: new Hash()
            };
        }
        function mapCacheDelete(key) {
            return getMapData(this, key)["delete"](key);
        }
        function mapCacheGet(key) {
            return getMapData(this, key).get(key);
        }
        function mapCacheHas(key) {
            return getMapData(this, key).has(key);
        }
        function mapCacheSet(key, value) {
            getMapData(this, key).set(key, value);
            return this;
        }
        MapCache.prototype.clear = mapCacheClear;
        MapCache.prototype["delete"] = mapCacheDelete;
        MapCache.prototype.get = mapCacheGet;
        MapCache.prototype.has = mapCacheHas;
        MapCache.prototype.set = mapCacheSet;
        function Stack(entries) {
            this.__data__ = new ListCache(entries);
        }
        function stackClear() {
            this.__data__ = new ListCache();
        }
        function stackDelete(key) {
            return this.__data__["delete"](key);
        }
        function stackGet(key) {
            return this.__data__.get(key);
        }
        function stackHas(key) {
            return this.__data__.has(key);
        }
        function stackSet(key, value) {
            var cache = this.__data__;
            if (cache instanceof ListCache) {
                var pairs = cache.__data__;
                if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
                    pairs.push([
                        key,
                        value
                    ]);
                    return this;
                }
                cache = this.__data__ = new MapCache(pairs);
            }
            cache.set(key, value);
            return this;
        }
        Stack.prototype.clear = stackClear;
        Stack.prototype["delete"] = stackDelete;
        Stack.prototype.get = stackGet;
        Stack.prototype.has = stackHas;
        Stack.prototype.set = stackSet;
        function arrayLikeKeys(value, inherited) {
            var result = isArray(value) || isArguments(value) ? baseTimes(value.length, String) : [];
            var length = result.length, skipIndexes = !!length;
            for(var key in value)if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == "length" || isIndex(key, length)))) result.push(key);
            return result;
        }
        function assignValue(object, key, value) {
            var objValue = object[key];
            if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) object[key] = value;
        }
        function assocIndexOf(array, key) {
            var length = array.length;
            while(length--){
                if (eq(array[length][0], key)) return length;
            }
            return -1;
        }
        function baseAssign(object, source) {
            return object && copyObject(source, keys(source), object);
        }
        function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
            var result;
            if (customizer) result = object ? customizer(value, key, object, stack) : customizer(value);
            if (result !== void 0) return result;
            if (!isObject(value)) return value;
            var isArr = isArray(value);
            if (isArr) {
                result = initCloneArray(value);
                if (!isDeep) return copyArray(value, result);
            } else {
                var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
                if (isBuffer(value)) return cloneBuffer(value, isDeep);
                if (tag == objectTag || tag == argsTag || isFunc && !object) {
                    if (isHostObject(value)) return object ? value : {};
                    result = initCloneObject(isFunc ? {} : value);
                    if (!isDeep) return copySymbols(value, baseAssign(result, value));
                } else {
                    if (!cloneableTags[tag]) return object ? value : {};
                    result = initCloneByTag(value, tag, baseClone, isDeep);
                }
            }
            stack || (stack = new Stack());
            var stacked = stack.get(value);
            if (stacked) return stacked;
            stack.set(value, result);
            if (!isArr) var props = isFull ? getAllKeys(value) : keys(value);
            arrayEach(props || value, function(subValue, key2) {
                if (props) {
                    key2 = subValue;
                    subValue = value[key2];
                }
                assignValue(result, key2, baseClone(subValue, isDeep, isFull, customizer, key2, value, stack));
            });
            return result;
        }
        function baseCreate(proto) {
            return isObject(proto) ? objectCreate(proto) : {};
        }
        function baseGetAllKeys(object, keysFunc, symbolsFunc) {
            var result = keysFunc(object);
            return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
        }
        function baseGetTag(value) {
            return objectToString.call(value);
        }
        function baseIsNative(value) {
            if (!isObject(value) || isMasked(value)) return false;
            var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
            return pattern.test(toSource(value));
        }
        function baseKeys(object) {
            if (!isPrototype(object)) return nativeKeys(object);
            var result = [];
            for(var key in Object(object))if (hasOwnProperty.call(object, key) && key != "constructor") result.push(key);
            return result;
        }
        function cloneBuffer(buffer, isDeep) {
            if (isDeep) return buffer.slice();
            var result = new buffer.constructor(buffer.length);
            buffer.copy(result);
            return result;
        }
        function cloneArrayBuffer(arrayBuffer) {
            var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
            new Uint8Array2(result).set(new Uint8Array2(arrayBuffer));
            return result;
        }
        function cloneDataView(dataView, isDeep) {
            var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
            return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
        }
        function cloneMap(map, isDeep, cloneFunc) {
            var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
            return arrayReduce(array, addMapEntry, new map.constructor());
        }
        function cloneRegExp(regexp) {
            var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
            result.lastIndex = regexp.lastIndex;
            return result;
        }
        function cloneSet(set, isDeep, cloneFunc) {
            var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
            return arrayReduce(array, addSetEntry, new set.constructor());
        }
        function cloneSymbol(symbol) {
            return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
        }
        function cloneTypedArray(typedArray, isDeep) {
            var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
            return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
        }
        function copyArray(source, array) {
            var index = -1, length = source.length;
            array || (array = Array(length));
            while(++index < length)array[index] = source[index];
            return array;
        }
        function copyObject(source, props, object, customizer) {
            object || (object = {});
            var index = -1, length = props.length;
            while(++index < length){
                var key = props[index];
                var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
                assignValue(object, key, newValue === void 0 ? source[key] : newValue);
            }
            return object;
        }
        function copySymbols(source, object) {
            return copyObject(source, getSymbols(source), object);
        }
        function getAllKeys(object) {
            return baseGetAllKeys(object, keys, getSymbols);
        }
        function getMapData(map, key) {
            var data = map.__data__;
            return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
        }
        function getNative(object, key) {
            var value = getValue(object, key);
            return baseIsNative(value) ? value : void 0;
        }
        var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;
        var getTag = baseGetTag;
        if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) getTag = function(value) {
            var result = objectToString.call(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : void 0;
            if (ctorString) switch(ctorString){
                case dataViewCtorString:
                    return dataViewTag;
                case mapCtorString:
                    return mapTag;
                case promiseCtorString:
                    return promiseTag;
                case setCtorString:
                    return setTag;
                case weakMapCtorString:
                    return weakMapTag;
            }
            return result;
        };
        function initCloneArray(array) {
            var length = array.length, result = array.constructor(length);
            if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
                result.index = array.index;
                result.input = array.input;
            }
            return result;
        }
        function initCloneObject(object) {
            return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
        }
        function initCloneByTag(object, tag, cloneFunc, isDeep) {
            var Ctor = object.constructor;
            switch(tag){
                case arrayBufferTag:
                    return cloneArrayBuffer(object);
                case boolTag:
                case dateTag:
                    return new Ctor(+object);
                case dataViewTag:
                    return cloneDataView(object, isDeep);
                case float32Tag:
                case float64Tag:
                case int8Tag:
                case int16Tag:
                case int32Tag:
                case uint8Tag:
                case uint8ClampedTag:
                case uint16Tag:
                case uint32Tag:
                    return cloneTypedArray(object, isDeep);
                case mapTag:
                    return cloneMap(object, isDeep, cloneFunc);
                case numberTag:
                case stringTag:
                    return new Ctor(object);
                case regexpTag:
                    return cloneRegExp(object);
                case setTag:
                    return cloneSet(object, isDeep, cloneFunc);
                case symbolTag:
                    return cloneSymbol(object);
            }
        }
        function isIndex(value, length) {
            length = length == null ? MAX_SAFE_INTEGER : length;
            return !!length && (typeof value == "number" || reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
        }
        function isKeyable(value) {
            var type = typeof value;
            return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
        }
        function isMasked(func) {
            return !!maskSrcKey && maskSrcKey in func;
        }
        function isPrototype(value) {
            var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
            return value === proto;
        }
        function toSource(func) {
            if (func != null) {
                try {
                    return funcToString.call(func);
                } catch (e) {}
                try {
                    return func + "";
                } catch (e) {}
            }
            return "";
        }
        function cloneDeep(value) {
            return baseClone(value, true, true);
        }
        function eq(value, other) {
            return value === other || value !== value && other !== other;
        }
        function isArguments(value) {
            return isArrayLikeObject(value) && hasOwnProperty.call(value, "callee") && (!propertyIsEnumerable.call(value, "callee") || objectToString.call(value) == argsTag);
        }
        var isArray = Array.isArray;
        function isArrayLike(value) {
            return value != null && isLength(value.length) && !isFunction(value);
        }
        function isArrayLikeObject(value) {
            return isObjectLike(value) && isArrayLike(value);
        }
        var isBuffer = nativeIsBuffer || stubFalse;
        function isFunction(value) {
            var tag = isObject(value) ? objectToString.call(value) : "";
            return tag == funcTag || tag == genTag;
        }
        function isLength(value) {
            return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
        }
        function isObject(value) {
            var type = typeof value;
            return !!value && (type == "object" || type == "function");
        }
        function isObjectLike(value) {
            return !!value && typeof value == "object";
        }
        function keys(object) {
            return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
        }
        function stubArray() {
            return [];
        }
        function stubFalse() {
            return false;
        }
        module2.exports = cloneDeep;
    }
});
// src/main.ts
var main_exports = {};
__export(main_exports, {
    defaults: ()=>defaults,
    stripHtml: ()=>stripHtml,
    version: ()=>version2
});
// ../codsen-utils/dist/codsen-utils.esm.js
function O(t) {
    if (t == null || typeof t != "object") return false;
    let e = Object.getPrototypeOf(t);
    return e !== null && e !== Object.prototype && Object.getPrototypeOf(e) !== null ? false : !(Symbol.iterator in t) && !(Symbol.toStringTag in t);
}
// src/main.ts
var import_lodash2 = __toESM(require_lodash(), 1);
var import_lodash3 = __toESM(require_lodash2(), 1);
var import_html_entities = __toESM(require_lib(), 1);
// ../ranges-sort/dist/ranges-sort.esm.js
var d = {
    strictlyTwoElementsInRangeArrays: false,
    progressFn: null
};
function g(t, u2) {
    if (!Array.isArray(t) || !t.length) return t;
    let n = {
        ...d,
        ...u2
    }, s, o;
    if (n.strictlyTwoElementsInRangeArrays && !t.every((e, r)=>!Array.isArray(e) || e.length !== 2 ? (s = r, o = e.length, false) : true)) throw new TypeError(`ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ${s}th range (${JSON.stringify(t[s], null, 4)}) has not two but ${o} elements!`);
    if (!t.every((e, r)=>!Array.isArray(e) || !Number.isInteger(e[0]) || e[0] < 0 || !Number.isInteger(e[1]) || e[1] < 0 ? (s = r, false) : true)) throw new TypeError(`ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ${s}th range (${JSON.stringify(t[s], null, 4)}) does not consist of only natural numbers!`);
    let p2 = t.length ** 2, i = 0;
    return Array.from(t).sort((e, r)=>(n.progressFn && (i += 1, n.progressFn(Math.floor(i * 100 / p2))), e[0] === r[0] ? e[1] < r[1] ? -1 : e[1] > r[1] ? 1 : 0 : e[0] < r[0] ? -1 : 1));
}
// ../ranges-merge/dist/ranges-merge.esm.js
var d2 = {
    mergeType: 1,
    progressFn: null,
    joinRangesThatTouchEdges: true
};
function b(i, r) {
    function l(e) {
        return !!e && typeof e == "object" && !Array.isArray(e);
    }
    if (!Array.isArray(i) || !i.length) return null;
    let n;
    if (r) {
        if (l(r)) {
            if (n = {
                ...d2,
                ...r
            }, n.progressFn && l(n.progressFn) && !Object.keys(n.progressFn).length) n.progressFn = null;
            else if (n.progressFn && typeof n.progressFn != "function") throw new Error(`ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "${typeof n.progressFn}", equal to ${JSON.stringify(n.progressFn, null, 4)}`);
            if (![
                1,
                2,
                "1",
                "2"
            ].includes(n.mergeType)) throw new Error(`ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof n.mergeType}", equal to ${JSON.stringify(n.mergeType, null, 4)}`);
            if (typeof n.joinRangesThatTouchEdges != "boolean") throw new Error(`ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "${typeof n.joinRangesThatTouchEdges}", equal to ${JSON.stringify(n.joinRangesThatTouchEdges, null, 4)}`);
        } else throw new Error(`emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:
${JSON.stringify(r, null, 4)} (type ${typeof r})`);
    } else n = {
        ...d2
    };
    let g2 = i.filter((e)=>Array.isArray(e)).map((e)=>[
            ...e
        ]).filter((e)=>e[2] !== void 0 || e[0] !== e[1]), s, o, t;
    n.progressFn ? s = g(g2, {
        progressFn: (e)=>{
            t = Math.floor(e / 5), t !== o && (o = t, n.progressFn(t));
        }
    }) : s = g(g2);
    let a = s.length - 1;
    for(let e = a; e > 0; e--)n.progressFn && (t = Math.floor((1 - e / a) * 78) + 21, t !== o && t > o && (o = t, n.progressFn(t))), (s[e][0] <= s[e - 1][0] || !n.joinRangesThatTouchEdges && s[e][0] < s[e - 1][1] || n.joinRangesThatTouchEdges && s[e][0] <= s[e - 1][1]) && (s[e - 1][0] = Math.min(s[e][0], s[e - 1][0]), s[e - 1][1] = Math.max(s[e][1], s[e - 1][1]), s[e][2] !== void 0 && (s[e - 1][0] >= s[e][0] || s[e - 1][1] <= s[e][1]) && s[e - 1][2] !== null && (s[e][2] === null && s[e - 1][2] !== null ? s[e - 1][2] = null : s[e - 1][2] != null ? +n.mergeType == 2 && s[e - 1][0] === s[e][0] ? s[e - 1][2] = s[e][2] : s[e - 1][2] += s[e][2] : s[e - 1][2] = s[e][2]), s.splice(e, 1), e = s.length);
    return s.length ? s : null;
}
// ../../node_modules/tiny-invariant/dist/esm/tiny-invariant.js
var isProduction = false;
var prefix = "Invariant failed";
function invariant(condition, message) {
    if (condition) return;
    if (isProduction) throw new Error(prefix);
    var provided = typeof message === "function" ? message() : message;
    var value = provided ? "".concat(prefix, ": ").concat(provided) : prefix;
    throw new Error(value);
}
// ../ranges-apply/dist/ranges-apply.esm.js
function _(s, n, r) {
    let t = 0, p2 = 0;
    if (arguments.length === 0) throw new Error("ranges-apply: [THROW_ID_01] inputs missing!");
    if (typeof s != "string") throw new TypeError(`ranges-apply: [THROW_ID_02] first input argument must be a string! Currently it's: ${typeof s}, equal to: ${JSON.stringify(s, null, 4)}`);
    if (n && !Array.isArray(n)) throw new TypeError(`ranges-apply: [THROW_ID_03] second input argument must be an array (or null)! Currently it's: ${typeof n}, equal to: ${JSON.stringify(n, null, 4)}`);
    if (r && typeof r != "function") throw new TypeError(`ranges-apply: [THROW_ID_04] the third input argument must be a function (or falsey)! Currently it's: ${typeof r}, equal to: ${JSON.stringify(r, null, 4)}`);
    if (!n || !n.filter((e)=>e).length) return s;
    let i;
    Array.isArray(n) && Number.isInteger(n[0]) && Number.isInteger(n[1]) ? i = [
        Array.from(n)
    ] : i = Array.from(n);
    let f2 = i.length, c2 = 0;
    i.filter((e)=>e).forEach((e, a)=>{
        if (r && (t = Math.floor(c2 / f2 * 10), t !== p2 && (p2 = t, r(t))), !Array.isArray(e)) throw new TypeError(`ranges-apply: [THROW_ID_05] ranges array, second input arg., has ${a}th element not an array: ${JSON.stringify(e, null, 4)}, which is ${typeof e}`);
        if (!Number.isInteger(e[0])) {
            if (!Number.isInteger(+e[0]) || +e[0] < 0) throw new TypeError(`ranges-apply: [THROW_ID_06] ranges array, second input arg. has ${a}th element, array ${JSON.stringify(e, null, 0)}. Its first element is not an integer, string index, but ${typeof e[0]}, equal to: ${JSON.stringify(e[0], null, 4)}.`);
            i[a][0] = +i[a][0];
        }
        if (!Number.isInteger(e[1])) {
            if (!Number.isInteger(+e[1]) || +e[1] < 0) throw new TypeError(`ranges-apply: [THROW_ID_07] ranges array, second input arg. has ${a}th element, array ${JSON.stringify(e, null, 0)}. Its second element is not an integer, string index, but ${typeof e[1]}, equal to: ${JSON.stringify(e[1], null, 4)}.`);
            i[a][1] = +i[a][1];
        }
        c2 += 1;
    });
    let o = b(i, {
        progressFn: (e)=>{
            r && (t = 10 + Math.floor(e / 10), t !== p2 && (p2 = t, r(t)));
        }
    });
    invariant(o);
    let u2 = o.length;
    if (u2 > 0) {
        let e = s.slice(o[u2 - 1][1]);
        s = o.reduce((a, $3, l, y2)=>{
            r && (t = 20 + Math.floor(l / u2 * 80), t !== p2 && (p2 = t, r(t)));
            let d3 = l === 0 ? 0 : y2[l - 1][1], g2 = y2[l][0];
            return `${a}${s.slice(d3, g2)}${y2[l][2] || ""}`;
        }, ""), s += e;
    }
    return s;
}
// ../string-collapse-leading-whitespace/dist/string-collapse-leading-whitespace.esm.js
function D(n, u2 = 1) {
    let $3 = "\xa0";
    function g2(e) {
        return Array.from(e).reverse().join("");
    }
    function p2(e, s, o) {
        let t = o ? `
` : "\r", i = o ? "\r" : `
`;
        if (!e) return e;
        let m2 = 0, c2 = 0, r = "";
        for(let l = 0, f2 = e.length; l < f2; l++)(e[l] === t || e[l] === i && e[l - 1] !== t) && c2++, `\r
`.includes(e[l]) || e[l] === $3 ? (m2 = 0, e[l] === $3 ? r += e[l] : e[l] === t ? c2 <= s && (r += e[l], e[l + 1] === i && (r += e[l + 1], l++)) : e[l] === i && e?.[l - 1] !== t && c2 <= s && (r += e[l])) : (m2++, !e[l + 1] && !c2 && (r += " "));
        return r;
    }
    if (typeof n == "string" && n.length) {
        let e = 1;
        typeof +u2 == "number" && Number.isInteger(+u2) && +u2 >= 0 && (e = +u2);
        let s = "", o = "";
        if (!n.trim()) s = n;
        else if (!n[0].trim()) {
            for(let t = 0, i = n.length; t < i; t++)if (n[t].trim()) {
                s = n.slice(0, t);
                break;
            }
        }
        if (n.trim() && (n.slice(-1).trim() === "" || n.slice(-1) === $3)) {
            for(let t = n.length; t--;)if (n[t].trim()) {
                o = n.slice(t + 1);
                break;
            }
        }
        return `${p2(s, e, false)}${n.trim()}${g2(p2(g2(o), e, true))}`;
    }
    return n;
}
// ../ranges-push/dist/ranges-push.esm.js
var b2 = {
    strictlyTwoElementsInRangeArrays: false,
    progressFn: null
};
function h(i, r) {
    if (!Array.isArray(i) || !i.length) return i;
    let t = {
        ...b2,
        ...r
    }, e, a;
    if (t.strictlyTwoElementsInRangeArrays && !i.every((o, g2)=>!Array.isArray(o) || o.length !== 2 ? (e = g2, a = o.length, false) : true)) throw new TypeError(`ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ${e}th range (${JSON.stringify(i[e], null, 4)}) has not two but ${a} elements!`);
    if (!i.every((o, g2)=>!Array.isArray(o) || !Number.isInteger(o[0]) || o[0] < 0 || !Number.isInteger(o[1]) || o[1] < 0 ? (e = g2, false) : true)) throw new TypeError(`ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ${e}th range (${JSON.stringify(i[e], null, 4)}) does not consist of only natural numbers!`);
    let n = i.length ** 2, l = 0;
    return Array.from(i).sort((o, g2)=>(t.progressFn && (l += 1, t.progressFn(Math.floor(l * 100 / n))), o[0] === g2[0] ? o[1] < g2[1] ? -1 : o[1] > g2[1] ? 1 : 0 : o[0] < g2[0] ? -1 : 1));
}
var y = {
    mergeType: 1,
    progressFn: null,
    joinRangesThatTouchEdges: true
};
function f(i, r) {
    function t(s) {
        return !!s && typeof s == "object" && !Array.isArray(s);
    }
    if (!Array.isArray(i) || !i.length) return null;
    let e;
    if (r) {
        if (t(r)) {
            if (e = {
                ...y,
                ...r
            }, e.progressFn && t(e.progressFn) && !Object.keys(e.progressFn).length) e.progressFn = null;
            else if (e.progressFn && typeof e.progressFn != "function") throw new Error(`ranges-merge: [THROW_ID_01] resolvedOpts.progressFn must be a function! It was given of a type: "${typeof e.progressFn}", equal to ${JSON.stringify(e.progressFn, null, 4)}`);
            if (![
                1,
                2,
                "1",
                "2"
            ].includes(e.mergeType)) throw new Error(`ranges-merge: [THROW_ID_02] resolvedOpts.mergeType was customised to a wrong thing! It was given of a type: "${typeof e.mergeType}", equal to ${JSON.stringify(e.mergeType, null, 4)}`);
            if (typeof e.joinRangesThatTouchEdges != "boolean") throw new Error(`ranges-merge: [THROW_ID_04] resolvedOpts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "${typeof e.joinRangesThatTouchEdges}", equal to ${JSON.stringify(e.joinRangesThatTouchEdges, null, 4)}`);
        } else throw new Error(`emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:
${JSON.stringify(r, null, 4)} (type ${typeof r})`);
    } else e = {
        ...y
    };
    let a = i.filter((s)=>Array.isArray(s)).map((s)=>[
            ...s
        ]).filter((s)=>s[2] !== void 0 || s[0] !== s[1]), n, l, o;
    e.progressFn ? n = h(a, {
        progressFn: (s)=>{
            o = Math.floor(s / 5), o !== l && (l = o, e.progressFn(o));
        }
    }) : n = h(a);
    let g2 = n.length - 1;
    for(let s = g2; s > 0; s--)e.progressFn && (o = Math.floor((1 - s / g2) * 78) + 21, o !== l && o > l && (l = o, e.progressFn(o))), (n[s][0] <= n[s - 1][0] || !e.joinRangesThatTouchEdges && n[s][0] < n[s - 1][1] || e.joinRangesThatTouchEdges && n[s][0] <= n[s - 1][1]) && (n[s - 1][0] = Math.min(n[s][0], n[s - 1][0]), n[s - 1][1] = Math.max(n[s][1], n[s - 1][1]), n[s][2] !== void 0 && (n[s - 1][0] >= n[s][0] || n[s - 1][1] <= n[s][1]) && n[s - 1][2] !== null && (n[s][2] === null && n[s - 1][2] !== null ? n[s - 1][2] = null : n[s - 1][2] != null ? +e.mergeType == 2 && n[s - 1][0] === n[s][0] ? n[s - 1][2] = n[s][2] : n[s - 1][2] += n[s][2] : n[s - 1][2] = n[s][2]), n.splice(s, 1), s = n.length);
    return n.length ? n : null;
}
function u(i) {
    return i != null;
}
function p(i) {
    return Number.isInteger(i) && i >= 0;
}
function m(i) {
    return typeof i == "string";
}
var T = {
    limitToBeAddedWhitespace: false,
    limitLinebreaksCount: 1,
    mergeType: 1
};
var $ = class {
    constructor(r){
        let t = {
            ...T,
            ...r
        };
        if (t.mergeType && t.mergeType !== 1 && t.mergeType !== 2) {
            if (m(t.mergeType) && t.mergeType.trim() === "1") t.mergeType = 1;
            else if (m(t.mergeType) && t.mergeType.trim() === "2") t.mergeType = 2;
            else throw new Error(`ranges-push: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof t.mergeType}", equal to ${JSON.stringify(t.mergeType, null, 4)}`);
        }
        this.opts = t, this.ranges = [];
    }
    ranges;
    opts;
    add(r, t, e) {
        if (r == null && t == null) return;
        if (u(r) && !u(t)) {
            if (Array.isArray(r)) {
                if (r.length) {
                    if (r.some((l)=>Array.isArray(l))) {
                        r.forEach((l)=>{
                            Array.isArray(l) && this.add(...l);
                        });
                        return;
                    }
                    r.length && p(+r[0]) && p(+r[1]) && this.add(...r);
                }
                return;
            }
            throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_12] the first input argument, "from" is set (${JSON.stringify(r, null, 0)}) but second-one, "to" is not (${JSON.stringify(t, null, 0)})`);
        } else if (!u(r) && u(t)) throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_13] the second input argument, "to" is set (${JSON.stringify(t, null, 0)}) but first-one, "from" is not (${JSON.stringify(r, null, 0)})`);
        let a = +r, n = +t;
        if (p(e) && (e = String(e)), p(a) && p(n)) {
            if (u(e) && !m(e) && !p(e)) throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_08] The third argument, the value to add, was given not as string but ${typeof e}, equal to:
${JSON.stringify(e, null, 4)}`);
            if (u(this.ranges) && Array.isArray(this.last()) && a === this.last()[1]) {
                if (this.last()[1] = n, this.last()[2], this.last()[2] !== null && u(e)) {
                    let l = this.last()[2] && this.last()[2].length && (!this.opts?.mergeType || this.opts.mergeType === 1) ? `${this.last()[2]}${e}` : e;
                    this.opts.limitToBeAddedWhitespace && (l = D(l, this.opts.limitLinebreaksCount)), m(l) && !l.length || (this.last()[2] = l);
                }
            } else {
                this.ranges || (this.ranges = []);
                let l = e !== void 0 && !(m(e) && !e.length) ? [
                    a,
                    n,
                    e && this.opts.limitToBeAddedWhitespace ? D(e, this.opts.limitLinebreaksCount) : e
                ] : [
                    a,
                    n
                ];
                this.ranges.push(l);
            }
        } else throw p(a) && a >= 0 ? new TypeError(`ranges-push/Ranges/add(): [THROW_ID_10] "to" value, the second input argument, must be a natural number or zero! Currently it's of a type "${typeof n}" equal to: ${JSON.stringify(n, null, 4)}`) : new TypeError(`ranges-push/Ranges/add(): [THROW_ID_09] "from" value, the first input argument, must be a natural number or zero! Currently it's of a type "${typeof a}" equal to: ${JSON.stringify(a, null, 4)}`);
    }
    push(r, t, e) {
        this.add(r, t, e);
    }
    current() {
        return Array.isArray(this.ranges) && this.ranges.length ? (this.ranges = f(this.ranges, {
            mergeType: this.opts.mergeType
        }), this.ranges && this.opts.limitToBeAddedWhitespace ? this.ranges.map((r)=>u(r[2]) ? [
                r[0],
                r[1],
                D(r[2], this.opts.limitLinebreaksCount)
            ] : r) : this.ranges) : null;
    }
    wipe() {
        this.ranges = [];
    }
    replace(r) {
        if (Array.isArray(r) && r.length) {
            if (Array.isArray(r[0]) && p(r[0][0])) this.ranges = Array.from(r);
            else throw new Error(`ranges-push/Ranges/replace(): [THROW_ID_11] Single range was given but we expected array of arrays! The first element, ${JSON.stringify(r[0], null, 4)} should be an array and its first element should be an integer, a string index.`);
        } else this.ranges = [];
    }
    last() {
        return Array.isArray(this.ranges) && this.ranges.length ? this.ranges[this.ranges.length - 1] : null;
    }
};
// ../string-left-right/dist/string-left-right.esm.js
var import_lodash = __toESM(require_lodash3(), 1);
var c = "\xa0";
function D2({ str: n , idx: e = 0 , stopAtNewlines: l = false , stopAtRawNbsp: u2 = false  }) {
    if (typeof n != "string" || !n.length || ((!e || typeof e != "number") && (e = 0), !n[e + 1])) return null;
    if (n[e + 1] && (n[e + 1].trim() || l && `
\r`.includes(n[e + 1]) || u2 && n[e + 1] === c)) return e + 1;
    if (n[e + 2] && (n[e + 2].trim() || l && `
\r`.includes(n[e + 2]) || u2 && n[e + 2] === c)) return e + 2;
    for(let t = e + 1, m2 = n.length; t < m2; t++)if (n[t].trim() || l && `
\r`.includes(n[t]) || u2 && n[t] === c) return t;
    return null;
}
function E(n, e = 0) {
    return D2({
        str: n,
        idx: e,
        stopAtNewlines: false,
        stopAtRawNbsp: false
    });
}
// src/util.ts
function characterSuitableForNames(char) {
    return /[-_A-Za-z0-9]/.test(char);
}
function prepHopefullyAnArray(something, name) {
    if (!something) return [];
    if (Array.isArray(something)) return something.filter((val)=>typeof val === "string" && val.trim());
    if (typeof something === "string") return something.trim() ? [
        something
    ] : [];
    throw new TypeError(`string-strip-html/stripHtml(): [THROW_ID_05] ${name} must be array containing zero or more strings or something falsey. Currently it's equal to: ${something}, that a type of ${typeof something}.`);
}
function xBeforeYOnTheRight(str, startingIdx, x, y2) {
    for(let i = startingIdx, len = str.length; i < len; i++){
        if (str.startsWith(x, i)) return true;
        if (str.startsWith(y2, i)) return false;
    }
    return false;
}
function notWithinAttrQuotes(tag, str, i) {
    return !tag || !tag.quotes || !xBeforeYOnTheRight(str, i + 1, tag.quotes.value, ">");
}
var definitelyTagNames = /* @__PURE__ */ new Set([
    "!doctype",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "base",
    "bdi",
    "bdo",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "doctype",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "math",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "param",
    "picture",
    "pre",
    "progress",
    "rb",
    "rp",
    "rt",
    "rtc",
    "ruby",
    "samp",
    "script",
    "section",
    "select",
    "slot",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "svg",
    "table",
    "tbody",
    "td",
    "template",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "ul",
    "var",
    "video",
    "wbr",
    "xml"
]);
var singleLetterTags = /* @__PURE__ */ new Set([
    "a",
    "b",
    "i",
    "p",
    "q",
    "s",
    "u"
]);
var punctuationTrailing = /* @__PURE__ */ new Set([
    `.`,
    `,`,
    `;`,
    `!`,
    `?`
]);
var punctuation = /* @__PURE__ */ new Set([
    ".",
    ",",
    "?",
    ";",
    ")",
    "…",
    '"',
    "\xbb"
]);
var inlineTags = /* @__PURE__ */ new Set([
    "a",
    "abbr",
    "acronym",
    "audio",
    "b",
    "bdi",
    "bdo",
    "big",
    "button",
    "canvas",
    "cite",
    "code",
    "data",
    "datalist",
    "del",
    "dfn",
    "em",
    "embed",
    "i",
    "iframe",
    "input",
    "ins",
    "kbd",
    "label",
    "map",
    "mark",
    "meter",
    "noscript",
    "object",
    "output",
    "picture",
    "progress",
    "q",
    "ruby",
    "s",
    "samp",
    "select",
    "slot",
    "small",
    "span",
    "strong",
    "sub",
    "sup",
    "svg",
    "template",
    "textarea",
    "time",
    "u",
    "tt",
    "var",
    "video",
    "wbr"
]);
// package.json
var version = "8.4.0";
// src/main.ts
var version2 = version;
var defaults = {
    ignoreTags: [],
    ignoreTagsWithTheirContents: [],
    onlyStripTags: [],
    stripTogetherWithTheirContents: [
        "script",
        "style",
        "xml"
    ],
    skipHtmlDecoding: false,
    trimOnlySpaces: false,
    stripRecognisedHTMLOnly: false,
    dumpLinkHrefsNearby: {
        enabled: false,
        putOnNewLine: false,
        wrapHeads: "",
        wrapTails: ""
    },
    cb: null,
    reportProgressFunc: null,
    reportProgressFuncFrom: 0,
    reportProgressFuncTo: 100
};
function stripHtml(str, opts) {
    let start = Date.now();
    let rangedOpeningTagsForDeletion = [];
    let rangedOpeningTagsForIgnoring = [];
    let allTagLocations = [];
    let filteredTagLocations = [];
    let tag = {};
    function resetTag() {
        tag = {
            attributes: []
        };
    }
    resetTag();
    let chunkOfWhitespaceStartsAt = null;
    let chunkOfSpacesStartsAt = null;
    let lastLFCRAt = null;
    let nonWhitespaceCharMetSinceLastLFCR = false;
    let attrObj = {};
    let hrefDump = {
        tagName: "",
        hrefValue: "",
        openingTagEnds: void 0
    };
    let stringToInsertAfter = "";
    let hrefInsertionActive = false;
    let spacesChunkWhichFollowsTheClosingBracketEndsAt = null;
    let strip = true;
    function treatRangedTags(i, resolvedOpts2, rangesToDelete2) {
        if (Array.isArray(resolvedOpts2.stripTogetherWithTheirContents) && (resolvedOpts2.stripTogetherWithTheirContents.includes(tag.name) || resolvedOpts2.stripTogetherWithTheirContents.includes("*"))) {
            if (tag.slashPresent && Array.isArray(rangedOpeningTagsForDeletion) && rangedOpeningTagsForDeletion.some((obj)=>obj.name === tag.name)) {
                for(let y2 = rangedOpeningTagsForDeletion.length; y2--;)if (rangedOpeningTagsForDeletion[y2].name === tag.name) {
                    filteredTagLocations = filteredTagLocations.filter(([from, upto])=>(from < rangedOpeningTagsForDeletion[y2].lastOpeningBracketAt || from >= i + 1) && (upto <= rangedOpeningTagsForDeletion[y2].lastOpeningBracketAt || upto > i + 1));
                    let endingIdx = i + 1;
                    if (tag.lastClosingBracketAt) endingIdx = tag.lastClosingBracketAt + 1;
                    filteredTagLocations.push([
                        rangedOpeningTagsForDeletion[y2].lastOpeningBracketAt,
                        endingIdx
                    ]);
                    if (punctuation.has(str[i]) && resolvedOpts2.cb) resolvedOpts2.cb({
                        tag,
                        deleteFrom: rangedOpeningTagsForDeletion[y2].lastOpeningBracketAt,
                        deleteTo: i + 1,
                        insert: null,
                        rangesArr: rangesToDelete2,
                        proposedReturn: [
                            rangedOpeningTagsForDeletion[y2].lastOpeningBracketAt,
                            i,
                            null
                        ]
                    });
                    else if (resolvedOpts2.cb) resolvedOpts2.cb({
                        tag,
                        deleteFrom: rangedOpeningTagsForDeletion[y2].lastOpeningBracketAt,
                        deleteTo: i,
                        insert: "",
                        rangesArr: rangesToDelete2,
                        proposedReturn: [
                            rangedOpeningTagsForDeletion[y2].lastOpeningBracketAt,
                            i,
                            ""
                        ]
                    });
                    rangedOpeningTagsForDeletion.splice(y2, 1);
                    break;
                }
            } else if (!tag.slashPresent) rangedOpeningTagsForDeletion.push(tag);
        } else if (Array.isArray(resolvedOpts2.ignoreTagsWithTheirContents) && checkIgnoreTagsWithTheirContents(i, resolvedOpts2, tag)) strip = false;
    }
    function calculateWhitespaceToInsert(str2, currCharIdx, fromIdx, toIdx, lastOpeningBracketAt, lastClosingBracketAt) {
        if (Array.isArray(rangesToDelete.current()) && typeof fromIdx === "number" && rangesToDelete.current()[0][0] === 0 && rangesToDelete.current()[0][1] >= fromIdx) return "";
        if (str.length === toIdx && lastClosingBracketAt && (!resolvedOpts.dumpLinkHrefsNearby || !resolvedOpts.dumpLinkHrefsNearby?.enabled)) return null;
        let strToEvaluateForLineBreaks = "";
        if (Number.isInteger(fromIdx) && fromIdx < lastOpeningBracketAt) strToEvaluateForLineBreaks += str2.slice(fromIdx, lastOpeningBracketAt);
        if (Number.isInteger(toIdx) && toIdx > lastClosingBracketAt + 1) {
            let temp = str2.slice(lastClosingBracketAt + 1, toIdx);
            if (toIdx && !E(str, toIdx - 1)) temp = temp.trimEnd();
            if (temp.includes("\n") && isOpeningAt(toIdx, str2)) strToEvaluateForLineBreaks += " ";
            else strToEvaluateForLineBreaks += temp;
        }
        let R0 = !punctuation.has(str2[currCharIdx]);
        let R1 = str2[toIdx - 1] !== ">" || !str2[fromIdx].trim();
        let R2 = ![
            `"`,
            `(`
        ].includes(str2[lastOpeningBracketAt - 1]);
        let R3 = ![
            ";",
            ".",
            ":",
            "!"
        ].includes(str2[currCharIdx]);
        if ((R0 || R1 && R2 && R3) && (R1 || R2) && str2[currCharIdx] !== "!" && (!inlineTags.has(tag.name) || typeof fromIdx === "number" && fromIdx < lastOpeningBracketAt || typeof toIdx === "number" && toIdx > lastClosingBracketAt + 1)) {
            let foundLineBreaks = strToEvaluateForLineBreaks.match(/\n/g);
            if (Array.isArray(foundLineBreaks) && foundLineBreaks.length) {
                if (foundLineBreaks.length === 1) return "\n";
                if (foundLineBreaks.length === 2) return "\n\n";
                return "\n\n\n";
            }
            return " ";
        }
        return "";
    }
    function calculateHrefToBeInserted(resolvedOpts2, toIdx) {
        if (resolvedOpts2.dumpLinkHrefsNearby?.enabled && hrefDump.tagName && hrefDump.tagName === tag.name && tag.lastOpeningBracketAt && (hrefDump.openingTagEnds && tag.lastOpeningBracketAt > hrefDump.openingTagEnds || !hrefDump.openingTagEnds)) hrefInsertionActive = true;
        if (hrefInsertionActive) {
            let lineBreaks = resolvedOpts2.dumpLinkHrefsNearby?.putOnNewLine ? "\n\n" : "";
            stringToInsertAfter = `${lineBreaks}${hrefDump.hrefValue}`;
            if (typeof toIdx !== "number" || E(str, toIdx - 1)) stringToInsertAfter += lineBreaks;
        }
    }
    function isOpeningAt(i, customStr) {
        if (customStr) return customStr[i] === "<" && customStr[i + 1] !== "%";
        return str[i] === "<" && str[i + 1] !== "%";
    }
    function isClosingAt(i) {
        return str[i] === ">" && str[i - 1] !== "%";
    }
    function checkIgnoreTagsWithTheirContents(i, resolvedOpts2, tag2) {
        if (resolvedOpts2.ignoreTagsWithTheirContents.includes("*")) return true;
        let nextOpeningPos = str.indexOf(`<${tag2.name}`, i);
        let nextClosingPos = str.indexOf(`</${tag2.name}`, i);
        if (!tag2.slashPresent && nextClosingPos === -1 || tag2.slashPresent && !rangedOpeningTagsForIgnoring.some((tagObj)=>tagObj.name === tag2.name) || nextClosingPos > -1 && nextOpeningPos > -1 && nextOpeningPos < nextClosingPos) return false;
        return resolvedOpts2.ignoreTagsWithTheirContents.includes(tag2.name);
    }
    if (typeof str !== "string") throw new TypeError(`string-strip-html/stripHtml(): [THROW_ID_01] Input must be string! Currently it's: ${(typeof str).toLowerCase()}, equal to:
${JSON.stringify(str, null, 4)}`);
    if (opts) {
        if (!O(opts)) throw new TypeError(`string-strip-html/stripHtml(): [THROW_ID_02] Optional Options Object must be a plain object! Currently it's: ${(typeof opts).toLowerCase()}, equal to:
${JSON.stringify(opts, null, 4)}`);
        else {
            if (opts.reportProgressFunc && typeof opts.reportProgressFunc !== "function") throw new Error(`string-strip-html/stripHtml(): [THROW_ID_03] The Optional Options Object's key reportProgressFunc, callback function, should be a function but it was given as type ${typeof opts.reportProgressFunc}, equal to ${JSON.stringify(opts.reportProgressFunc, null, 4)}`);
            if (typeof opts.dumpLinkHrefsNearby === "boolean" && opts.dumpLinkHrefsNearby != null) throw new Error(`string-strip-html/stripHtml(): [THROW_ID_04] The Optional Options Object's key should be a plain object but it was given as type ${typeof opts.dumpLinkHrefsNearby}, equal to ${JSON.stringify(opts.dumpLinkHrefsNearby, null, 4)}`);
        }
    }
    function resetHrefMarkers() {
        if (hrefInsertionActive) {
            hrefDump = {
                tagName: "",
                hrefValue: "",
                openingTagEnds: void 0
            };
            hrefInsertionActive = false;
        }
    }
    let resolvedOpts = {
        ...defaults,
        ...opts,
        dumpLinkHrefsNearby: {
            ...defaults.dumpLinkHrefsNearby,
            ...opts?.dumpLinkHrefsNearby
        }
    };
    if (Object.prototype.hasOwnProperty.call(resolvedOpts, "returnRangesOnly")) throw new TypeError(`string-strip-html/stripHtml(): [THROW_ID_05] The Optional Options Object's key returnRangesOnly has been removed from the API since v.5 release.`);
    if (resolvedOpts.reportProgressFunc) {
        if (typeof resolvedOpts.reportProgressFuncFrom !== "number") throw new Error(`string-strip-html/stripHtml(): [THROW_ID_06] The Optional Options Object's key reportProgressFuncFrom, callback function's "from" range, should be a number but it was given as type ${typeof resolvedOpts.reportProgressFuncFrom}, equal to ${JSON.stringify(resolvedOpts.reportProgressFuncFrom, null, 4)}`);
        if (typeof resolvedOpts.reportProgressFuncTo !== "number") throw new Error(`string-strip-html/stripHtml(): [THROW_ID_07] The Optional Options Object's key reportProgressFuncTo, callback function's "to" range, should be a number but it was given as type ${typeof resolvedOpts.reportProgressFuncTo}, equal to ${JSON.stringify(resolvedOpts.reportProgressFuncTo, null, 4)}`);
    }
    resolvedOpts.ignoreTags = prepHopefullyAnArray(resolvedOpts.ignoreTags, "resolvedOpts.ignoreTags");
    resolvedOpts.onlyStripTags = prepHopefullyAnArray(resolvedOpts.onlyStripTags, "resolvedOpts.onlyStripTags");
    let onlyStripTagsMode = !!resolvedOpts.onlyStripTags.length;
    if (resolvedOpts.onlyStripTags.length && resolvedOpts.ignoreTags.length) resolvedOpts.onlyStripTags = (0, import_lodash3.default)(resolvedOpts.onlyStripTags, ...resolvedOpts.ignoreTags);
    if (!resolvedOpts.stripTogetherWithTheirContents) resolvedOpts.stripTogetherWithTheirContents = [];
    else if (typeof resolvedOpts.stripTogetherWithTheirContents === "string" && resolvedOpts.stripTogetherWithTheirContents.length) resolvedOpts.stripTogetherWithTheirContents = [
        resolvedOpts.stripTogetherWithTheirContents
    ];
    let somethingCaught = {};
    if (resolvedOpts.stripTogetherWithTheirContents && Array.isArray(resolvedOpts.stripTogetherWithTheirContents) && resolvedOpts.stripTogetherWithTheirContents.length && !resolvedOpts.stripTogetherWithTheirContents.every((el, i)=>{
        if (!(typeof el === "string")) {
            somethingCaught.el = el;
            somethingCaught.i = i;
            return false;
        }
        return true;
    })) throw new TypeError(`string-strip-html/stripHtml(): [THROW_ID_08] Optional Options Object's key stripTogetherWithTheirContents was set to contain not just string elements! For example, element at index ${somethingCaught.i} has a value ${somethingCaught.el} which is not string but ${(typeof somethingCaught.el).toLowerCase()}.`);
    if (!resolvedOpts.cb) resolvedOpts.cb = ({ rangesArr , proposedReturn  })=>{
        if (proposedReturn) rangesArr.push(...proposedReturn);
    };
    let rangesToDelete = new $({
        limitToBeAddedWhitespace: true,
        limitLinebreaksCount: 2
    });
    if (!resolvedOpts.skipHtmlDecoding) while(str !== (0, import_html_entities.decode)(str, {
        scope: "strict"
    }))str = (0, import_html_entities.decode)(str, {
        scope: "strict"
    });
    let isInsideScript = false;
    let isDoctype = false;
    let currentPercentageDone = 0;
    let lastPercentage = 0;
    let len = str.length;
    let midLen = Math.floor(len / 2);
    for(let i = 0; i < len; i++){
        if (resolvedOpts.reportProgressFunc) {
            if (len > 1e3 && len < 2e3) {
                if (i === midLen) resolvedOpts.reportProgressFunc(Math.floor((resolvedOpts.reportProgressFuncTo - resolvedOpts.reportProgressFuncFrom) / 2));
            } else if (len >= 2e3) {
                currentPercentageDone = resolvedOpts.reportProgressFuncFrom + Math.floor(i / len * (resolvedOpts.reportProgressFuncTo - resolvedOpts.reportProgressFuncFrom));
                if (currentPercentageDone !== lastPercentage) {
                    lastPercentage = currentPercentageDone;
                    resolvedOpts.reportProgressFunc(currentPercentageDone);
                }
            }
        }
        if (Object.keys(tag).length > 1 && tag.lastClosingBracketAt && tag.lastClosingBracketAt < i && str[i] !== " " && spacesChunkWhichFollowsTheClosingBracketEndsAt === null) spacesChunkWhichFollowsTheClosingBracketEndsAt = i;
        if (!isInsideScript && str[i] === "%" && str[i - 1] === "{" && str.includes("%}", i + 1)) {
            lastLFCRAt = null;
            let newPosition = str.indexOf("%}", i) - 1;
            if (newPosition > i) {
                i = newPosition;
                continue;
            }
        }
        if (!isInsideScript && isClosingAt(i)) {
            if ((!tag || Object.keys(tag).length < 2) && i > 1) {
                for(let y2 = i; y2--;)if (str[y2 - 1] === void 0 || isClosingAt(y2)) {
                    let startingPoint = str[y2 - 1] === void 0 ? y2 : y2 + 1;
                    let culprit = str.slice(startingPoint, i + 1);
                    if (str !== `<${(0, import_lodash2.default)(culprit.trim(), "/>")}>` && [
                        ...definitelyTagNames
                    ].some((val)=>(0, import_lodash2.default)(culprit.trim().split(/\s+/).filter((val2)=>val2.trim()).filter((_val3, i3)=>i3 === 0), "/>").toLowerCase() === val) && stripHtml(`<${culprit.trim()}>`, resolvedOpts).result === "") {
                        if (!allTagLocations.length || allTagLocations[allTagLocations.length - 1][0] !== tag.lastOpeningBracketAt) allTagLocations.push([
                            startingPoint,
                            i + 1
                        ]);
                        if (!filteredTagLocations.length || filteredTagLocations[filteredTagLocations.length - 1][0] !== tag.lastOpeningBracketAt) filteredTagLocations.push([
                            startingPoint,
                            i + 1
                        ]);
                        let whiteSpaceCompensation = calculateWhitespaceToInsert(str, i, startingPoint, i + 1, startingPoint, i + 1);
                        let deleteUpTo = i + 1;
                        if (str[deleteUpTo] && !str[deleteUpTo].trim()) {
                            for(let z = deleteUpTo; z < len; z++)if (str[z].trim()) {
                                deleteUpTo = z;
                                break;
                            }
                        }
                        resolvedOpts.cb({
                            tag,
                            deleteFrom: startingPoint,
                            deleteTo: deleteUpTo,
                            insert: whiteSpaceCompensation,
                            rangesArr: rangesToDelete,
                            proposedReturn: [
                                startingPoint,
                                deleteUpTo,
                                whiteSpaceCompensation
                            ]
                        });
                    }
                    break;
                }
            }
        }
        if (!isDoctype && str[i] === "/" && !tag.quotes?.value && Number.isInteger(tag.lastOpeningBracketAt) && !Number.isInteger(tag.lastClosingBracketAt)) tag.slashPresent = i;
        if (str[i] === '"' || str[i] === "'") {
            if (!isDoctype && tag.nameStarts && tag.quotes && tag.quotes.value && tag.quotes.value === str[i]) {
                attrObj.valueEnds = i;
                attrObj.value = str.slice(attrObj.valueStarts, i);
                tag.attributes.push(attrObj);
                attrObj = {};
                delete tag.quotes;
                let hrefVal;
                if (resolvedOpts.dumpLinkHrefsNearby?.enabled && !rangedOpeningTagsForDeletion.length && tag.attributes.some((obj)=>{
                    if (typeof obj.name === "string" && obj.name.toLowerCase() === "href") {
                        hrefVal = `${resolvedOpts.dumpLinkHrefsNearby?.wrapHeads || ""}${obj.value}${resolvedOpts.dumpLinkHrefsNearby?.wrapTails || ""}`;
                        return true;
                    }
                })) hrefDump = {
                    tagName: tag.name,
                    hrefValue: hrefVal,
                    openingTagEnds: void 0
                };
            } else if (!isDoctype && !tag.quotes && tag.nameStarts) {
                tag.quotes = {};
                tag.quotes.value = str[i];
                tag.quotes.start = i;
                if (attrObj.nameStarts && attrObj.nameEnds && attrObj.nameEnds < i && attrObj.nameStarts < i && !attrObj.valueStarts) attrObj.name = str.slice(attrObj.nameStarts, attrObj.nameEnds);
            }
        }
        if (tag.nameStarts !== void 0 && tag.nameEnds === void 0 && (!str[i].trim() || !characterSuitableForNames(str[i]))) {
            tag.nameEnds = i;
            tag.name = str.slice(tag.nameStarts, tag.nameEnds + (!isClosingAt(i) && str[i] !== "/" && str[i + 1] === void 0 ? 1 : 0));
            if (str[tag.nameStarts - 1] !== "!" && !tag.name.replace(/-/g, "").length || /^\d+$/.test(tag.name[0])) {
                tag = {};
                continue;
            }
            if (typeof tag.name === "string" && tag.name.toLowerCase() === "doctype") isDoctype = true;
            if (isOpeningAt(i)) {
                calculateHrefToBeInserted(resolvedOpts);
                let whiteSpaceCompensation = calculateWhitespaceToInsert(str, i, tag.leftOuterWhitespace, i, tag.lastOpeningBracketAt, i);
                if (resolvedOpts.stripTogetherWithTheirContents.includes(tag.name) || resolvedOpts.stripTogetherWithTheirContents.includes("*")) filteredTagLocations = filteredTagLocations.filter(([from, upto])=>!(from === tag.leftOuterWhitespace && upto === i));
                resolvedOpts.cb({
                    tag,
                    deleteFrom: tag.leftOuterWhitespace,
                    deleteTo: i,
                    insert: `${whiteSpaceCompensation}${stringToInsertAfter}${whiteSpaceCompensation}`,
                    rangesArr: rangesToDelete,
                    proposedReturn: [
                        tag.leftOuterWhitespace,
                        i,
                        `${whiteSpaceCompensation}${stringToInsertAfter}${whiteSpaceCompensation}`
                    ]
                });
                resetHrefMarkers();
                treatRangedTags(i, resolvedOpts, rangesToDelete);
            }
        }
        if (tag.quotes?.start && tag.quotes.start < i && !tag.quotes.end && attrObj.nameEnds && attrObj.equalsAt && !attrObj.valueStarts) attrObj.valueStarts = i;
        if (!tag.quotes && attrObj.nameEnds && str[i] === "=" && !attrObj.valueStarts && !attrObj.equalsAt) attrObj.equalsAt = i;
        if (!tag.quotes && attrObj.nameStarts && attrObj.nameEnds && !attrObj.valueStarts && str[i].trim() && str[i] !== "=") {
            tag.attributes.push(attrObj);
            attrObj = {};
        }
        if (!tag.quotes && attrObj.nameStarts && !attrObj.nameEnds) {
            if (isDoctype && `'"`.includes(str[attrObj.nameStarts])) {
                if (attrObj.nameStarts < i && str[i] === str[attrObj.nameStarts]) {
                    attrObj.nameEnds = i + 1;
                    attrObj.name = str.slice(attrObj.nameStarts, attrObj.nameEnds);
                }
            } else if (!str[i].trim()) {
                attrObj.nameEnds = i;
                attrObj.name = str.slice(attrObj.nameStarts, attrObj.nameEnds);
            } else if (str[i] === "=") {
                if (!attrObj.equalsAt) {
                    attrObj.nameEnds = i;
                    attrObj.equalsAt = i;
                    attrObj.name = str.slice(attrObj.nameStarts, attrObj.nameEnds);
                }
            } else if (str[i] === "/" || isClosingAt(i)) {
                attrObj.nameEnds = i;
                attrObj.name = str.slice(attrObj.nameStarts, attrObj.nameEnds);
                tag.attributes.push(attrObj);
                attrObj = {};
            } else if (isOpeningAt(i)) {
                attrObj.nameEnds = i;
                attrObj.name = str.slice(attrObj.nameStarts, attrObj.nameEnds);
                tag.attributes.push(attrObj);
                attrObj = {};
            }
        }
        if (!tag.quotes && tag.nameEnds < i && !str[i - 1].trim() && str[i].trim() && !`<>/!`.includes(str[i]) && !attrObj.nameStarts && !tag.lastClosingBracketAt) attrObj.nameStarts = i;
        if (tag.lastOpeningBracketAt !== null && tag.lastOpeningBracketAt < i && str[i] === "/" && tag.onlyPlausible) tag.onlyPlausible = false;
        if (tag.lastOpeningBracketAt !== null && tag.lastOpeningBracketAt < i && str[i] !== "/") {
            if (tag.onlyPlausible === void 0) {
                if ((!str[i].trim() || isOpeningAt(i)) && !tag.slashPresent) tag.onlyPlausible = true;
                else tag.onlyPlausible = false;
            }
            if (str[i].trim() && tag.nameStarts === void 0 && !isOpeningAt(i) && str[i] !== "/" && !isClosingAt(i) && str[i] !== "!") {
                tag.nameStarts = i;
                tag.nameContainsLetters = false;
            }
        }
        if (tag.nameStarts && !tag.quotes && typeof str[i] === "string" && str[i].toLowerCase() !== str[i].toUpperCase()) tag.nameContainsLetters = true;
        if (isClosingAt(i) && notWithinAttrQuotes(tag, str, i)) {
            let itIsClosing = true;
            if (itIsClosing && tag.lastOpeningBracketAt !== void 0) {
                tag.lastClosingBracketAt = i;
                spacesChunkWhichFollowsTheClosingBracketEndsAt = null;
                if (Object.keys(attrObj).length) {
                    tag.attributes.push(attrObj);
                    attrObj = {};
                }
                if (resolvedOpts.dumpLinkHrefsNearby?.enabled && hrefDump.tagName && !hrefDump.openingTagEnds) hrefDump.openingTagEnds = i;
            }
        }
        if ((!isDoctype || str[i] === ">") && tag.lastOpeningBracketAt !== void 0) {
            if (tag.lastClosingBracketAt === void 0) {
                if (tag.lastOpeningBracketAt < i && !isOpeningAt(i) && (str[i + 1] === void 0 || isOpeningAt(i + 1)) && tag.nameContainsLetters && typeof tag.nameStarts === "number") {
                    tag.name = str.slice(tag.nameStarts, tag.nameEnds || i + 1).toLowerCase();
                    if (!allTagLocations.length || allTagLocations[allTagLocations.length - 1][0] !== tag.lastOpeningBracketAt) allTagLocations.push([
                        tag.lastOpeningBracketAt,
                        i + 1
                    ]);
                    if (resolvedOpts.ignoreTags.includes(tag.name) || checkIgnoreTagsWithTheirContents(i, resolvedOpts, tag) || !definitelyTagNames.has(tag.name) && (tag.onlyPlausible || resolvedOpts.stripRecognisedHTMLOnly)) {
                        tag = {};
                        attrObj = {};
                        continue;
                    }
                    if ((definitelyTagNames.has(tag.name) || singleLetterTags.has(tag.name)) && (tag.onlyPlausible === false || tag.onlyPlausible === true && tag.attributes.length) || str[i + 1] === void 0) {
                        calculateHrefToBeInserted(resolvedOpts);
                        let whiteSpaceCompensation = calculateWhitespaceToInsert(str, i, tag.leftOuterWhitespace, i + 1, tag.lastOpeningBracketAt, tag.lastClosingBracketAt);
                        if (isInsideScript && tag.name === "script" && tag.slashPresent) isInsideScript = false;
                        let insert;
                        if (whiteSpaceCompensation === null || stringToInsertAfter === null) insert = null;
                        else insert = `${whiteSpaceCompensation}${stringToInsertAfter}${whiteSpaceCompensation}`;
                        resolvedOpts.cb({
                            tag,
                            deleteFrom: tag.leftOuterWhitespace,
                            deleteTo: i + 1,
                            insert,
                            rangesArr: rangesToDelete,
                            proposedReturn: [
                                tag.leftOuterWhitespace,
                                i + 1,
                                insert
                            ]
                        });
                        resetHrefMarkers();
                        treatRangedTags(i, resolvedOpts, rangesToDelete);
                    }
                    if (!filteredTagLocations.length || filteredTagLocations[filteredTagLocations.length - 1][0] !== tag.lastOpeningBracketAt && filteredTagLocations[filteredTagLocations.length - 1][1] !== i + 1) {
                        if (resolvedOpts.stripTogetherWithTheirContents.includes(tag.name) || resolvedOpts.stripTogetherWithTheirContents.includes("*")) {
                            let lastRangedOpeningTag;
                            for(let z = rangedOpeningTagsForDeletion.length; z--;)if (rangedOpeningTagsForDeletion[z].name === tag.name) lastRangedOpeningTag = rangedOpeningTagsForDeletion[z];
                            if (lastRangedOpeningTag) {
                                filteredTagLocations = filteredTagLocations.filter(([from])=>from !== lastRangedOpeningTag.lastOpeningBracketAt);
                                filteredTagLocations.push([
                                    lastRangedOpeningTag.lastOpeningBracketAt,
                                    i + 1
                                ]);
                            } else filteredTagLocations.push([
                                tag.lastOpeningBracketAt,
                                i + 1
                            ]);
                        } else filteredTagLocations.push([
                            tag.lastOpeningBracketAt,
                            i + 1
                        ]);
                    }
                }
            } else if (i > tag.lastClosingBracketAt && str[i].trim() || str[i + 1] === void 0) {
                let endingRangeIndex = tag.lastClosingBracketAt === i ? i + 1 : i;
                if (resolvedOpts.trimOnlySpaces && endingRangeIndex === len - 1 && spacesChunkWhichFollowsTheClosingBracketEndsAt !== null && spacesChunkWhichFollowsTheClosingBracketEndsAt < i) endingRangeIndex = spacesChunkWhichFollowsTheClosingBracketEndsAt;
                if (!allTagLocations.length || allTagLocations[allTagLocations.length - 1][0] !== tag.lastOpeningBracketAt) allTagLocations.push([
                    tag.lastOpeningBracketAt,
                    tag.lastClosingBracketAt + 1
                ]);
                let ignoreTags = resolvedOpts.ignoreTags.includes(tag.name);
                let ignoreTagsWithTheirContents = checkIgnoreTagsWithTheirContents(i, resolvedOpts, tag);
                if (!strip || resolvedOpts.stripRecognisedHTMLOnly && typeof tag.name === "string" && !definitelyTagNames.has(tag.name.toLowerCase()) && !singleLetterTags.has(tag.name.toLowerCase()) || !onlyStripTagsMode && (ignoreTags || ignoreTagsWithTheirContents) || onlyStripTagsMode && !resolvedOpts.onlyStripTags.includes(tag.name)) {
                    if (ignoreTagsWithTheirContents) {
                        if (tag.slashPresent) {
                            for(let y2 = rangedOpeningTagsForIgnoring.length; y2--;)if (rangedOpeningTagsForIgnoring[y2].name === tag.name) {
                                rangedOpeningTagsForIgnoring.splice(y2, 1);
                                break;
                            }
                            if (!rangedOpeningTagsForIgnoring.length) strip = true;
                        } else {
                            if (strip) strip = false;
                            rangedOpeningTagsForIgnoring.push(tag);
                        }
                    }
                    resolvedOpts.cb({
                        tag,
                        deleteFrom: null,
                        deleteTo: null,
                        insert: null,
                        rangesArr: rangesToDelete,
                        proposedReturn: null
                    });
                    tag = {};
                    attrObj = {};
                } else if (!tag.onlyPlausible || tag.attributes.length === 0 && tag.name && (definitelyTagNames.has(tag.name.toLowerCase()) || singleLetterTags.has(tag.name.toLowerCase())) || tag.attributes?.some((attrObj2)=>attrObj2.equalsAt)) {
                    if (!filteredTagLocations.length || filteredTagLocations[filteredTagLocations.length - 1][0] !== tag.lastOpeningBracketAt) filteredTagLocations.push([
                        tag.lastOpeningBracketAt,
                        tag.lastClosingBracketAt + 1
                    ]);
                    let whiteSpaceCompensation = calculateWhitespaceToInsert(str, i, tag.leftOuterWhitespace, endingRangeIndex, tag.lastOpeningBracketAt, tag.lastClosingBracketAt);
                    stringToInsertAfter = "";
                    hrefInsertionActive = false;
                    calculateHrefToBeInserted(resolvedOpts, endingRangeIndex);
                    let insert;
                    if (typeof stringToInsertAfter === "string" && stringToInsertAfter.length) {
                        insert = `${whiteSpaceCompensation}${stringToInsertAfter}${whiteSpaceCompensation === "\n\n" ? "\n" : whiteSpaceCompensation}`;
                        if (endingRangeIndex === tag.lastClosingBracketAt + 1 && (!str[endingRangeIndex] || !punctuationTrailing.has(str[endingRangeIndex]))) insert += " ";
                        if (tag.leftOuterWhitespace === tag.lastOpeningBracketAt && rangesToDelete.last() && rangesToDelete.last()[1] < tag.lastOpeningBracketAt && (!resolvedOpts.dumpLinkHrefsNearby || !resolvedOpts.dumpLinkHrefsNearby?.putOnNewLine || !punctuationTrailing.has(str[endingRangeIndex]))) insert = " " + insert;
                    } else insert = whiteSpaceCompensation;
                    if (insert !== null && (tag.leftOuterWhitespace === 0 || !E(str, endingRangeIndex - 1)) && (!resolvedOpts.dumpLinkHrefsNearby?.enabled || tag.name !== "a")) insert = void 0;
                    let punctuationCorrection = 0;
                    if (hrefInsertionActive && punctuationTrailing.has(str[endingRangeIndex])) {
                        if (resolvedOpts.dumpLinkHrefsNearby?.putOnNewLine) insert = `${str[endingRangeIndex]}${insert ? insert : ""}`;
                        let nextCharOnTheRight = E(str, endingRangeIndex);
                        if (nextCharOnTheRight && insert?.endsWith("\n")) punctuationCorrection += nextCharOnTheRight - i;
                        else if (!nextCharOnTheRight || nextCharOnTheRight > i) punctuationCorrection++;
                    }
                    resolvedOpts.cb({
                        tag,
                        deleteFrom: tag.leftOuterWhitespace,
                        deleteTo: endingRangeIndex + punctuationCorrection,
                        insert,
                        rangesArr: rangesToDelete,
                        proposedReturn: [
                            tag.leftOuterWhitespace,
                            endingRangeIndex + punctuationCorrection,
                            insert
                        ]
                    });
                    resetHrefMarkers();
                    treatRangedTags(i, resolvedOpts, rangesToDelete);
                } else tag = {};
                if (!isClosingAt(i)) tag = {};
            }
            if (isDoctype) isDoctype = false;
        }
        if ((!isInsideScript || str[i] === "<" && E(str, E(str, i)) && str[E(str, i)] === "/" && str.startsWith("script", E(str, E(str, i)))) && isOpeningAt(i) && !isOpeningAt(i - 1) && !`'"`.includes(str[i + 1]) && (!`'"`.includes(str[i + 2]) || /\w/.test(str[i + 1])) && !(str[i + 1] === "c" && str[i + 2] === ":") && !(str[i + 1] === "f" && str[i + 2] === "m" && str[i + 3] === "t" && str[i + 4] === ":") && !(str[i + 1] === "s" && str[i + 2] === "q" && str[i + 3] === "l" && str[i + 4] === ":") && !(str[i + 1] === "x" && str[i + 2] === ":") && !(str[i + 1] === "f" && str[i + 2] === "n" && str[i + 3] === ":") && notWithinAttrQuotes(tag, str, i)) {
            if (isClosingAt(E(str, i))) continue;
            else {
                if (tag.nameEnds && tag.nameEnds < i && !tag.lastClosingBracketAt) {
                    if (tag.onlyPlausible === true && tag.attributes && tag.attributes.length || tag.onlyPlausible === false) {
                        let whiteSpaceCompensation = calculateWhitespaceToInsert(str, i, tag.leftOuterWhitespace, i, tag.lastOpeningBracketAt, i);
                        resolvedOpts.cb({
                            tag,
                            deleteFrom: tag.leftOuterWhitespace,
                            deleteTo: i,
                            insert: whiteSpaceCompensation,
                            rangesArr: rangesToDelete,
                            proposedReturn: [
                                tag.leftOuterWhitespace,
                                i,
                                whiteSpaceCompensation
                            ]
                        });
                        treatRangedTags(i, resolvedOpts, rangesToDelete);
                        tag = {};
                        attrObj = {};
                    }
                }
                if (tag.lastOpeningBracketAt !== void 0 && tag.onlyPlausible && tag.name && !tag.quotes) {
                    tag.lastOpeningBracketAt = void 0;
                    tag.name = void 0;
                    tag.onlyPlausible = false;
                }
                if ((tag.lastOpeningBracketAt === void 0 || !tag.onlyPlausible) && !tag.quotes) {
                    tag.lastOpeningBracketAt = i;
                    tag.slashPresent = false;
                    tag.attributes = [];
                    if (chunkOfWhitespaceStartsAt === null) tag.leftOuterWhitespace = i;
                    else if (resolvedOpts.trimOnlySpaces && chunkOfWhitespaceStartsAt === 0) tag.leftOuterWhitespace = chunkOfSpacesStartsAt || i;
                    else tag.leftOuterWhitespace = chunkOfWhitespaceStartsAt;
                    if (`${str[i + 1]}${str[i + 2]}${str[i + 3]}` === "!--" || `${str[i + 1]}${str[i + 2]}${str[i + 3]}${str[i + 4]}${str[i + 5]}${str[i + 6]}${str[i + 7]}${str[i + 8]}` === "![CDATA[") {
                        let cdata = true;
                        if (str[i + 2] === "-") cdata = false;
                        let closingFoundAt;
                        for(let y2 = i; y2 < len; y2++){
                            if (!closingFoundAt && cdata && `${str[y2 - 2]}${str[y2 - 1]}${str[y2]}` === "]]>" || !cdata && `${str[y2 - 2]}${str[y2 - 1]}${str[y2]}` === "-->") closingFoundAt = y2;
                            if (closingFoundAt && (closingFoundAt < y2 && str[y2].trim() || str[y2 + 1] === void 0)) {
                                let rangeEnd = y2;
                                if (str[y2 + 1] === void 0 && !str[y2].trim() || str[y2] === ">") rangeEnd += 1;
                                if (!allTagLocations.length || allTagLocations[allTagLocations.length - 1][0] !== tag.lastOpeningBracketAt) allTagLocations.push([
                                    tag.lastOpeningBracketAt,
                                    closingFoundAt + 1
                                ]);
                                if (!filteredTagLocations.length || filteredTagLocations[filteredTagLocations.length - 1][0] !== tag.lastOpeningBracketAt) filteredTagLocations.push([
                                    tag.lastOpeningBracketAt,
                                    closingFoundAt + 1
                                ]);
                                let whiteSpaceCompensation = calculateWhitespaceToInsert(str, y2, tag.leftOuterWhitespace, rangeEnd, tag.lastOpeningBracketAt, closingFoundAt);
                                resolvedOpts.cb({
                                    tag,
                                    deleteFrom: tag.leftOuterWhitespace,
                                    deleteTo: rangeEnd,
                                    insert: whiteSpaceCompensation,
                                    rangesArr: rangesToDelete,
                                    proposedReturn: [
                                        tag.leftOuterWhitespace,
                                        rangeEnd,
                                        whiteSpaceCompensation
                                    ]
                                });
                                i = y2 - 1;
                                if (str[y2] === ">") i = y2;
                                tag = {};
                                attrObj = {};
                                break;
                            }
                        }
                    }
                }
            }
        }
        if (!str[i].trim() || str[i].charCodeAt(0) === 847) {
            if (chunkOfWhitespaceStartsAt === null) {
                chunkOfWhitespaceStartsAt = i;
                if (tag.lastOpeningBracketAt !== void 0 && tag.lastOpeningBracketAt < i && tag.nameStarts && tag.nameStarts < tag.lastOpeningBracketAt && i === tag.lastOpeningBracketAt + 1 && !rangedOpeningTagsForDeletion.some((rangedTagObj)=>rangedTagObj.name === tag.name)) {
                    tag.onlyPlausible = true;
                    tag.name = void 0;
                    tag.nameStarts = void 0;
                }
            }
            if (str[i] === "\n" || str[i] === "\r") {
                lastLFCRAt = i;
                if (nonWhitespaceCharMetSinceLastLFCR) nonWhitespaceCharMetSinceLastLFCR = false;
            }
        } else {
            if (chunkOfWhitespaceStartsAt !== null) {
                if (!tag.quotes && attrObj.equalsAt > chunkOfWhitespaceStartsAt - 1 && attrObj.nameEnds && attrObj.equalsAt > attrObj.nameEnds && str[i] !== '"' && str[i] !== "'") {
                    if (O(attrObj)) tag.attributes.push(attrObj);
                    attrObj = {};
                    tag.equalsSpottedAt = void 0;
                }
                chunkOfWhitespaceStartsAt = null;
            }
            if (!nonWhitespaceCharMetSinceLastLFCR) {
                nonWhitespaceCharMetSinceLastLFCR = true;
                if (strip && !isInsideScript && typeof lastLFCRAt === "number" && i && lastLFCRAt < i - 1) {
                    if (str.slice(lastLFCRAt + 1, i).trim()) lastLFCRAt = null;
                    else rangesToDelete.push([
                        lastLFCRAt + 1,
                        i
                    ]);
                }
            }
        }
        if (str[i] === " ") {
            if (chunkOfSpacesStartsAt === null) chunkOfSpacesStartsAt = i;
        } else if (chunkOfSpacesStartsAt !== null) chunkOfSpacesStartsAt = null;
        if (tag.name === "script") isInsideScript = !tag.slashPresent;
    }
    if (str && (resolvedOpts.trimOnlySpaces && str[0] === " " || !resolvedOpts.trimOnlySpaces && !str[0].trim())) for(let i2 = 0; i2 < len; i2++){
        if (resolvedOpts.trimOnlySpaces && str[i2] !== " " || !resolvedOpts.trimOnlySpaces && str[i2].trim()) {
            rangesToDelete.push([
                0,
                i2
            ]);
            break;
        } else if (!str[i2 + 1]) rangesToDelete.push([
            0,
            i2 + 1
        ]);
    }
    if (str && (resolvedOpts.trimOnlySpaces && str[~-str.length] === " " || !resolvedOpts.trimOnlySpaces && !str[~-str.length].trim())) {
        for(let i3 = str.length; i3--;)if (resolvedOpts.trimOnlySpaces && str[i3] !== " " || !resolvedOpts.trimOnlySpaces && str[i3].trim()) {
            rangesToDelete.push([
                i3 + 1,
                len
            ]);
            break;
        }
    }
    let curr = rangesToDelete.current();
    if ((!opts || !opts.cb) && curr) {
        if (curr[0] && !curr[0][0]) {
            let startingIdx = curr[0][1];
            rangesToDelete.ranges[0] = [
                rangesToDelete.ranges[0][0],
                rangesToDelete.ranges[0][1]
            ];
        }
        if (curr[curr.length - 1] && curr[curr.length - 1][1] === str.length) {
            let startingIdx = curr[curr.length - 1][0];
            if (rangesToDelete.ranges) {
                let startingIdx2 = rangesToDelete.ranges[rangesToDelete.ranges.length - 1][0];
                if (str[startingIdx2 - 1] && (resolvedOpts.trimOnlySpaces && str[startingIdx2 - 1] === " " || !resolvedOpts.trimOnlySpaces && !str[startingIdx2 - 1].trim())) startingIdx2 -= 1;
                let backupWhatToAdd = rangesToDelete.ranges[rangesToDelete.ranges.length - 1][2];
                rangesToDelete.ranges[rangesToDelete.ranges.length - 1] = [
                    startingIdx2,
                    rangesToDelete.ranges[rangesToDelete.ranges.length - 1][1]
                ];
                if (backupWhatToAdd?.trim()) rangesToDelete.ranges[rangesToDelete.ranges.length - 1].push(backupWhatToAdd.trimEnd());
            }
        }
    }
    return {
        log: {
            timeTakenInMilliseconds: Date.now() - start
        },
        result: _(str, rangesToDelete.current()),
        ranges: rangesToDelete.current(),
        allTagLocations,
        filteredTagLocations
    };
}
module.exports = {
    defaults,
    stripHtml,
    version
};

},{}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["ic4oY","5VnDu"], "5VnDu", "parcelRequire1937")

//# sourceMappingURL=home.js.map
