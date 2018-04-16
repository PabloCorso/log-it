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

// Here comes the install event!
// This only happens once, when the browser sees this
// version of the ServiceWorker for the first time.
self.addEventListener("install", function(event) {
  // We pass a promise to event.waitUntil to signal how
  // long install takes, and if it failed
  event.waitUntil(
    // We open a cache…
    caches.open("simple-sw-v1").then(function(cache) {
      // And add resources to it
      return cache.addAll(staticAssets);
    })
  );
});

// The fetch event happens for the page request with the
// ServiceWorker's scope, and any request made within that
// page
self.addEventListener("fetch", function(event) {
  // Calling event.respondWith means we're in charge
  // of providing the response. We pass in a promise
  // that resolves with a response object
  event.respondWith(
    // First we look for something in the caches that
    // matches the request
    caches.match(event.request).then(function(response) {
      // If we get something, we return it, otherwise
      // it's null, and we'll pass the request to
      // fetch, which will use the network.
      return response || fetch(event.request);
    })
  );
});
