
// прослушка события fetch для отображения кастомной offline страницы
// self.addEventListener('fetch', function (event) {
//   const request = event.request;
//   // проверка, что запрашивается страница, а не json
//   if (request.method === "GET" && request.destination === "document") {
//
//     event.respondWith(
//       fetch(request).catch(function (error) {
//         console.error("[onfetch] Failed. Serving cached offline fallback", error);
//
//         // return offline page from cache instead
//         return caches.match("/assets/error.html");
//       }));
//   }
// });


// прослушка события sync для фоновой синхронизации отправки данных
self.addEventListener('sync', function(event) {
  if (event.tag == 'post-data') {
    event.waitUntil(getFakeData())
  }
});


// дублирование запроса на отправку данных
// (лучше использовать IndexDB, чтобы не дублировать запрос, а брать его оттуда)
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

// use all the magic of the Angular Service Worker
importScripts('./ngsw-worker.js');
