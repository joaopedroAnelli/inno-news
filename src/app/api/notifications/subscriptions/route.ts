import prismaClient from '@/scripts/prismaClient';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { subscription } = await req.json();

  const { endpoint, keys } = subscription;

  const subscriptionCreated = await prismaClient((prisma) => {
    return prisma.notificationSubscription.create({
      data: {
        endpoint,
        keys: {
          create: {
            p256dh: keys.p256dh,
            auth: keys.auth,
          },
        },
      },
    });
  });

  return NextResponse.json(subscriptionCreated);
}
