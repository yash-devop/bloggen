/*
  Warnings:

  - A unique constraint covering the columns `[userName]` on the table `Owner` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Owner" ADD COLUMN     "userName" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Owner_userName_key" ON "Owner"("userName");
