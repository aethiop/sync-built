if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,i,c)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const f={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return r;case"module":return f;default:return e(s)}}))).then((e=>{const s=c(...e);return r.default||(r.default=s),r}))})))}}define("./sw.js",["./workbox-afb9f189"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index.0f5ff758.css",revision:"572ad51d80ec8d25d738df87b237c499"},{url:"assets/index.c286ec71.js",revision:"7bd7a600e2eadef6a294e58363a6c660"},{url:"assets/vendor.2634b1a9.css",revision:"9744f316e9d641bae00a53d78c86529a"},{url:"assets/vendor.514cac8a.js",revision:"84335da4b59521593ebd8f134ff4ebbf"},{url:"index.html",revision:"3e0869715e27cf7637a6765f33708bbe"},{url:"sync.js",revision:"4fd764f1c0881c7a09c233b6fb6ce4e8"},{url:"favicon.svg",revision:"e658abed6ff35a593f2dd379db7226dc"},{url:"favicon.ico",revision:"eae9a929d6c96919e34af1eee9e14c5c"},{url:"robots.txt",revision:"f77c87f977e0fcce05a6df46c885a129"},{url:"apple-touch-icon.png",revision:"4276308fc26f3a4820582ba39b11b68f"},{url:"pwa-192x192.png",revision:"22806caaadd184a90ada4204dce9cfe3"},{url:"pwa-512x512.png",revision:"1ef350b18ff56e320530d35d8ee8a35b"},{url:"manifest.webmanifest",revision:"53fde4ca28b23fe6ffdba18ecfdeba1c"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
