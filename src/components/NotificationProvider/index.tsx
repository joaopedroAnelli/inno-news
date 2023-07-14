'use client';

import registerServiceWorker from '@/scripts/registerServiceWorker';
import setupNotification from '@/scripts/setupNotification';

registerServiceWorker();

setupNotification();

export default function NotificationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
