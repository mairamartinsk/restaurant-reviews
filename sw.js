const cacheName = "cache-v1";

let urlsToCache = [
  "/",
  "/css/styles.css",
  "/js/main.js",
  "/js/restaurant_info.js",
  "/js/dbhelper.js",
  "/img/1.jpg",
  "/img/2.jpg",
  "/img/3.jpg",
  "/img/4.jpg",
  "/img/5.jpg",
  "/img/6.jpg",
  "/img/7.jpg",
  "/img/8.jpg",
  "/img/9.jpg",
  "/img/10.jpg",
  "https://fonts.googleapis.com/css?family=Abril+Fatface",
  "https://fonts.googleapis.com/css?family=Muli:300,800",
  "https://unpkg.com/leaflet@1.3.1/dist/leaflet.css"
];

self.addEventListener("install", function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      // Add all urls above to latest cache version
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      // Output response only if requested url matches one in cache
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});
