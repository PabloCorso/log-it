const staticAssets = ["./", "./index.html", "./styles.css", "./app.js"];

self.addEventListener("install", async event => {
  const cache = await caches.open("log-it-static");
  cache.addAll(staticAssets);
});

self.addEventListener("fetch", event => {
  const req = event.request;
  const url = new URL(req.url);

  if (url.origin === location.origin) {
    event.respondWith(cacheFirst(req));
  } else {
    event.respondWith(fetch(req));
  }
});

async function cacheFirst(req) {
  const cachedResponse = await caches.match(req);
  return cachedResponse || fetch(req).catch();
}
