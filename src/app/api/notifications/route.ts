import prismaClient from '@/scripts/prismaClient';
import { NextRequest, NextResponse } from 'next/server';
import WebPush from 'web-push';

WebPush.setVapidDetails(
  process.env.APP_DOMAIN || '',
  process.env.VAPID_PUBLIC_KEY || '',
  process.env.VAPID_PRIVATE_KEY || ''
);

export async function POST(req: NextRequest) {
  const { data } = await req.json();

  const text = data?.title || 'Novo Post no Blog';

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

export async function GET() {
  const subscriptions = await prismaClient((prisma) => {
    return prisma.notificationSubscription.findMany({
      include: {
        keys: true,
      },
    });
  });

  return NextResponse.json(subscriptions);
}
