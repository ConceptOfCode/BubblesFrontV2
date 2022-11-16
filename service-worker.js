if (!self.define) {
    let e, i = {};
    const r = (r, n) => (r = new URL(r + ".js", n).href, i[r] || new Promise((i => {
        if ("document" in self) {
            const e = document.createElement("script");
            e.src = r, e.onload = i, document.head.appendChild(e)
        } else e = r, importScripts(r), i()
    })).then((() => {
        let e = i[r];
        if (!e) throw new Error(`Module ${r} didn’t register its module`);
        return e
    })));
    self.define = (n, s) => {
        const t = e || ("document" in self ? document.currentScript.src : "") || location.href;
        if (i[t]) return;
        let o = {};
        const d = e => r(e, t),
            l = {
                module: {
                    uri: t
                },
                exports: o,
                require: d
            };
        i[t] = Promise.all(n.map((e => l[e] || d(e)))).then((e => (s(...e), o)))
    }
}
define(["./workbox-6716fad7"], (function(e) {
    "use strict";
    self.skipWaiting(), e.clientsClaim(), e.precacheAndRoute([{
        url: "67.a2f35b3c4e0fd003d5b7.js",
        revision: null
    }, {
        url: "67.a2f35b3c4e0fd003d5b7.js.LICENSE.txt",
        revision: "b114cc85da504a772f040e3f40f8e46a"
    }, {
        url: "android.html",
        revision: "2ced3fe89ac8747297465d17d56dc78e"
    }, {
        url: "app.06a3c8636d5fe2add108.js",
        revision: null
    }, {
        url: "index.html",
        revision: "bfe26471283397a91612fcaba3712643"
    }, {
        url: "style.d5feec1e31b4055c7159.css",
        revision: null
    }], {})
}));