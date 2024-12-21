/*
  Warnings:

  - A unique constraint covering the columns `[owner]` on the table `Owner` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Owner_owner_key" ON "Owner"("owner");
