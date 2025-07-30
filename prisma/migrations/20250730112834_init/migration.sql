-- CreateTable
CREATE TABLE "InventoryItem" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "category" TEXT NOT NULL,
    "details" TEXT,
    "status" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
