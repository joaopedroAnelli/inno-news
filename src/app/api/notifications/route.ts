import prismaClient from '@/scripts/prismaClient';
import { NextRequest, NextResponse } from 'next/server';
import WebPush from 'web-push';

WebPush.setVapidDetails(
  'https://localhost:3000',
  process.env.VAPID_PUBLIC_KEY || '',
  process.env.VAPID_PRIVATE_KEY || ''
);

export async function POST(req: NextRequest) {
  const { text } = await req.json();

  const subscriptions = await prismaClient((prisma) => {
    return prisma.notificationSubscription.findMany({
      include: {
        keys: true,
      },
    });
  });

  await Promise.all(
    subscriptions.map((subscription) => {
      console.log('subscription', subscription);

      return WebPush.sendNotification(
        {
          endpoint: subscription.endpoint,
          keys: {
            auth: subscription.keys.auth,
            p256dh: subscription.keys.p256dh,
          },
        },
        text
      );
    })
  );

  return NextResponse.json(subscriptions);
}
