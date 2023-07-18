-- CreateTable
CREATE TABLE "NotificationSubscriptionKey" (
    "id" SERIAL NOT NULL,
    "p256dh" TEXT NOT NULL,
    "auth" TEXT NOT NULL,

    CONSTRAINT "NotificationSubscriptionKey_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NotificationSubscription" (
    "id" SERIAL NOT NULL,
    "endpoint" TEXT NOT NULL,
    "expirationTime" TEXT,
    "keyId" INTEGER NOT NULL,

    CONSTRAINT "NotificationSubscription_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "NotificationSubscription_keyId_key" ON "NotificationSubscription"("keyId");

-- AddForeignKey
ALTER TABLE "NotificationSubscription" ADD CONSTRAINT "NotificationSubscription_keyId_fkey" FOREIGN KEY ("keyId") REFERENCES "NotificationSubscriptionKey"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
