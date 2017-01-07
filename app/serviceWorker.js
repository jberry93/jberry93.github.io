'use strict';

(function () {
  const CACHENAME = 'jberry-cache';
  const things2Cache = [
    '/',
    '/style.css'
  ];

  /* Cache all the things! */
  self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open(CACHENAME).then(function(cache) {
        console.info('Opened Cache :P');
        return cache.addAll(things2Cache);
      });
    );
  });

  /* Fetch all the things! */
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      });
    );
  });

})();
