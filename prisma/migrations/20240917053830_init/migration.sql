-- CreateTable
CREATE TABLE "Contacts" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "keperluan" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Contacts_pkey" PRIMARY KEY ("id")
);
