
// listen to every fetch event
// self.addEventListener('fetch', function (event) {
//   const request = event.request;
//
//   // filter for html document fetches (should only result in one single fetch) --> index.html
//   if (request.method === "GET" && request.destination === "document") {
//
//     // only intercept if there was a problem fetching index.html
//     event.respondWith(
//       fetch(request).catch(function (error) {
//         console.error("[onfetch] Failed. Serving cached offline fallback", error);
//
//         // return offline page from cache instead
//         return caches.match("/assets/error.html");
//       }));
//   }
// });


self.addEventListener('push', function(event) {
  let data = '';

  if (event.data) {
    data = event.data.json();
  }
  console.log('push', data)
})

// use all the magic of the Angular Service Worker
importScripts('./ngsw-worker.js');
