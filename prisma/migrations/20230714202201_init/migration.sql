-- CreateTable
CREATE TABLE "NotificationSubscriptionKey" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "p256dh" TEXT NOT NULL,
    "auth" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "NotificationSubscription" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "endpoint" TEXT NOT NULL,
    "expirationTime" TEXT,
    "keyId" INTEGER NOT NULL,
    CONSTRAINT "NotificationSubscription_keyId_fkey" FOREIGN KEY ("keyId") REFERENCES "NotificationSubscriptionKey" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "NotificationSubscription_keyId_key" ON "NotificationSubscription"("keyId");
