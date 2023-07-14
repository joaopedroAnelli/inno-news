self.addEventListener('push', function (event) {
  console.log('Received a push message', event);

  var title = 'Inno News';
  var body = event.data?.text();
  var icon = '/icon.png';

  event.waitUntil(
    self.registration.showNotification(title, {
      body,
      icon,
    })
  );
});
