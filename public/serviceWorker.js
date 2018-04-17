// Chrome's currently missing some useful cache methods,
// this polyfill adds them.
importScripts("serviceworker-cache-polyfill.js");

const staticAssets = [
  "index.html",
  "styles.css",
  "logo.png",
  "app.bundle.js",
  "images/spinner.svg",
  "images/items/coffee.svg",
  "images/items/glass.svg",
  "images/items/pint.svg",
  "images/items/snuggle.svg",
  "https://fonts.googleapis.com/css?family=Roboto",
  "https://unpkg.com/hyperhtml@latest/min.js"
];

self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open("sw-v1").then(function(cache) {
      return cache.addAll(staticAssets);
    })
  );
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
