'use strict';

(function () {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('./serviceWorker.js').then(function(registration) {
        console.info('Service Worker Registration Success:', registration.scope);
      }).catch(function(error) {
        console.error('Service Worker Registration Failed:', error);
      });
    });
  }
})();
