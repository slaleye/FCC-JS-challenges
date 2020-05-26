importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js"
);

// Note: Ignore the error that Glitch raises about workbox being undefined.
workbox.setConfig({
  debug: true,
});

workbox.precaching.precacheAndRoute([
    'https://fonts.googleapis.com/css?family=Ubuntu',
]);

workbox.routing.registerRoute(
    new RegExp('https://jsonplaceholder.typicode.com/users'),
    new workbox.strategies.NetworkFirst()
);

workbox.routing.registerRoute(
    new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'),
    new workbox.strategies.CacheFirst({
      cacheName: 'google-fonts',
      plugins: [
        new workbox.expiration.ExpirationPlugin({
          maxEntries: 30,
        }),
        new workbox.cacheableResponse.CacheableResponsePlugin({
          statuses: [0, 200]
        }),
      ],
    }),
  );

// Demonstrates using default cache
workbox.routing.registerRoute(
  new RegExp(".*\\.(?:js)"),
  new workbox.strategies.NetworkFirst()
);

// Demonstrates a custom cache name for a route.
workbox.routing.registerRoute(
  new RegExp(".*\\.(?:png|jpg|jpeg|svg|gif)"),
  new workbox.strategies.CacheFirst({
    cacheName: "image-cache",
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 3,
      }),
    ],
  })
);
