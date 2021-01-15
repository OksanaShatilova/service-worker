// use all the magic of the Angular Service Worker
importScripts('./ngsw-worker.js');

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

self.addEventListener('sync', function(event) {
  if (event.tag == 'post-data') {
    event.waitUntil(getFakeData())
  }
});


function getFakeData() {
  const obj = {
    name: 'oksana',
    job: 'frontend'
  }
  fetch('https://reqres.in/api/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj)
  })
    .then((resp) =>{
      resp.json().then(r => {
        console.log(r)
        return Promise.resolve();
      })
    })
    .catch(() => Promise.reject())
}



