importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/3.1.0/workbox-sw.js"
);

workbox.routing.registerRoute(
  new RegExp(".*.js"),
  workbox.strategies.networkFirst()
);

const stylesCacheName = "css-cache";

workbox.routing.registerRoute(
  /.*\.css/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: stylesCacheName
  })
);

const oneWeek = 7 * 24 * 60 * 60;
const imageFilesRegExp = /.*\.(?:png|jpg|jpeg|svg|gif)/;
const imageCacheName = "image-cache";

workbox.routing.registerRoute(
  imageFilesRegExp,
  workbox.strategies.cacheFirst({
    cacheName: imageCacheName,
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 20,
        maxAgeSeconds: oneWeek
      })
    ]
  })
);
