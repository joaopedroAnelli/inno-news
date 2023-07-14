'use client';
import { useEffect } from 'react';

export default function ServiceWorker() {
  function requestNotificationPermission() {
    if (!('Notification' in window)) return;

    if (Notification.permission === 'granted') return;

    return Notification.requestPermission();
  }

  async function prepareServiceWorkerToReceiveNotifications(
    registration: ServiceWorkerRegistration
  ): Promise<ServiceWorkerRegistration> {
    requestNotificationPermission();

    let subscription = await registration.pushManager.getSubscription();

    if (!subscription) {
      const response = await fetch('/api/notifications/public-key');

      const body = await response.json();

      const { publicKey } = body;

      subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: publicKey,
      });

      await fetch('/api/notifications/subscriptions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ subscription }),
      });
    }

    console.log(
      'Service worker pronto para receber notificações',
      subscription
    );

    return registration;
  }

  function registerServiceWorker() {
    if (!navigator) return;

    if (!('serviceWorker' in navigator)) return;

    return navigator.serviceWorker
      .register('/service-worker.js')
      .then(async function (registration) {
        console.log('Service worker  registrado com sucesso');

        return prepareServiceWorkerToReceiveNotifications(registration);
      })
      .catch(function (error) {
        console.log('Falha ao Registrar o Service Worker:', error);
      });
  }

  useEffect(() => {
    registerServiceWorker();
  });

  return null;
}
