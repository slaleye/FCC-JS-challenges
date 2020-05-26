## Installing Workbox

[Workbox Google|https://developers.google.com/web/tools/workbox/guides/get-started]

\$ npm install workbox-cli -g

Run the wizard

\$ workbox wizard --injectManifest

( press enter for default)

At the end the workbox-config.js should be generated in your project shource

## Generate Service Workers

\$ workbox generateSW

## register Service worker in html file

```js
if ("serviceWorker" in navigator) {
  window.addEventListener("load", registerServiceWorker);
}

function registerServiceWorker() {
  navigator.serviceWorker.register("/sw.js");
  console.log("Service Worker Registered!");
}
```

### Importing Workbox To Store fonts and API requests

https://developers.google.com/web/tools/workbox/modules/workbox-sw

Add a sw-src.js file and register this file in the workbox-config.js

```js
// build/sw-src.js
importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js"
);
if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
  // Custom  settings so it our changes don't get overwritten every time, also needs to be saved in the config  "swSrc": "build/sw-src.js"
  workbox.precaching.precacheAndRoute(self.__WB_MANIFEST); // URLs to precache injected by workbox build
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}
```
Demonstrates using default cache

````js
workbox.routing.registerRoute(
  new RegExp(".*\\.(?:js)"),
  new workbox.strategies.NetworkFirst()
);
````
