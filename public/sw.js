self.addEventListener('push', function (event) {
  if (event.data) {
    let data;
    try {
      data = event.data.json();
    } catch (e) {
      data = { title: 'CobbleFun Notification', message: event.data.text() };
    }
    
    event.waitUntil(
      self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function (clientList) {
        let isFocused = false;
        
        // Notify all open client windows immediately
        for (let i = 0; i < clientList.length; i++) {
          const client = clientList[i];
          if (client.focused) {
            isFocused = true;
          }
          client.postMessage({
            type: 'PUSH_NOTIFICATION',
            payload: data
          });
        }
        
        // If no client window is focused, show system OS/mobile notification
        if (!isFocused) {
          return self.registration.showNotification(data.title || 'CobbleFun', {
            body: data.message || '',
            icon: data.icon || '/images/cobblefun_icon_small.png',
            badge: '/images/cobblefun_icon_small.png',
            data: { url: data.url || '/messages' },
            vibrate: [200, 100, 200]
          });
        }
      })
    );
  }
});

self.addEventListener('notificationclick', function (event) {
  event.notification.close();
  const targetUrl = event.notification.data?.url || '/messages';
  const urlToOpen = new URL(targetUrl, self.location.origin).href;

  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function (clientList) {
      for (let i = 0; i < clientList.length; i++) {
        const client = clientList[i];
        if (client.url === urlToOpen && 'focus' in client) {
          return client.focus();
        }
      }
      if (self.clients.openWindow) {
        return self.clients.openWindow(urlToOpen);
      }
    })
  );
});
