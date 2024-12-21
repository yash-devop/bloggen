/*
  Warnings:

  - You are about to drop the column `userName` on the `Owner` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Owner_userName_key";

-- AlterTable
ALTER TABLE "Owner" DROP COLUMN "userName";
