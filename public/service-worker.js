self.addEventListener('push', function (event) {
  console.log('Received a push message', event);

  var title = 'Inno News';
  var body = event.data?.json();

  var { text } = body;

  var icon = '/icon.png';

  event.waitUntil(
    self.registration.showNotification(title, {
      text,
      icon,
      actions: [
        {
          action: 'open',
          title: 'Ver Artigo',
          icon: '/artivle.svg',
        },
      ],
    })
  );
});

self.addEventListener('notificationclick', function (event) {
  console.log('On notification click: ', event.notification);
  event.notification.close();

  var body = event.notification.data?.json();

  console.log('body', body);

  var { link } = body;

  console.log('link', link);

  if (event.action === 'open') {
    clients.openWindow(link);
  }
});
