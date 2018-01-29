self.addEventListener('fetch', function(event) {
  // tells the browser we're going to handle it ourselves
  event.respondWith(
    new Response('Hello <b>World</b>', {// first param -
      headers: {'foo': 'bar'} // second param - object
    })
  );

});
