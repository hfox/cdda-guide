if(!self.define){let e,n={};const s=(s,i)=>(s=new URL(s+".js",i).href,n[s]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=n,document.head.appendChild(e)}else e=s,importScripts(s),n()})).then((()=>{let e=n[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,t)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(n[o])return;let r={};const c=e=>s(e,o),l={module:{uri:o},exports:r,require:c};n[o]=Promise.all(i.map((e=>l[e]||c(e)))).then((e=>(t(...e),r)))}}define(["./workbox-9524646d"],(function(e){"use strict";self.skipWaiting(),e.precacheAndRoute([{url:"assets/index.0c86d879.js",revision:null},{url:"assets/index.47fa254c.css",revision:null},{url:"global.css",revision:"48a242ee920598989a1733b2356cbd31"},{url:"index.html",revision:"619b461aa6c9d15387638a355bd61882"},{url:"favicon.png",revision:"a9f33639a8462cb7299f08c5cb1f3628"},{url:"global.css",revision:"48a242ee920598989a1733b2356cbd31"},{url:"icon-192.png",revision:"5160a2c7b69e85b6621e3e01af05ffc9"},{url:"icon-512.png",revision:"3c525e66297027aa1168dcf24730023d"},{url:"manifest.webmanifest",revision:"18f7bcb56346ec810be59e50f1809e37"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/^https:\/\/raw\.githubusercontent\.com\/.*\/latest\/all\.json$/,new e.NetworkFirst,"GET"),e.registerRoute(/^https:\/\/raw\.githubusercontent\.com\/.*\/all\.json$/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=sw.js.map
