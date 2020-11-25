importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');

const CACHE_NAME = "football123";
workbox.precaching.precacheAndRoute([
  { url: '/', revision: '1' },
  { url: '/favicon.png', revision: '1' },
  { url: '/maskable_icon_192.png', revision: '1' },
  { url: '/maskable_icon_512.png', revision: '1' },
  { url: '/manifest.json', revision: '1' },
  { url: '/nav.html', revision: '1' },
  { url: '/index.html', revision: '1' },
  { url: '/pages/favorite.html', revision: '1' },
  { url: '/pages/detail.html', revision: '1' },
  { url: '/pages/home.html', revision: '1' },
  { url: '/css/materialize.min.css', revision: '1' },
  { url: '/css/sytle.css', revision: '1' },  
  { url: '/js/db.js', revision: '1' },
  { url: '/js/idb.js', revision: '1' },
  { url: '/js/materialize.min.js', revision: '1' },
  { url: '/js/nav.js', revision: '1' },
  { url: '/js/pushnotif.js', revision: '1' },
  { url: '/js/restfulapi.js', revision: '1' },
  { url: '/js/serviceworker-register.js', revision: '1' },
  { url: 'https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js', revision: '1' },
]);

workbox.routing.registerRoute(
  new RegExp('https://api.football-data.org/v2/'),
  workbox.strategies.staleWhileRevalidate({
      cacheName: CACHE_NAME,
      plugins: [
        new workbox.cacheableResponse.Plugin({
          statuses: [0, 200],
        }),
        new workbox.expiration.Plugin({
          maxEntries: 60,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 hari
        }),
      ],
  })
);

//pushnotif
self.addEventListener('push', function(event) {
  var body;
  if (event.data) {
    body = event.data.text();
  } else {
    body = 'Push message no payload';
  }
  var options = {
    body: body,
    icon: 'maskable_icon_192.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    }
  };
  event.waitUntil(
    self.registration.showNotification('Push Notification', options)
  );
});