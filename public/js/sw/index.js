self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).then(function(response) { // network request
      if (response.status === 404) { // if the page is unknown,
        return fetch('/imgs/dr-evil.gif'); // fetch and return gif
      }
      return response;
    }).catch(function() {
      return new Response("Uh oh, that totally failed!");
    })
  );
});
