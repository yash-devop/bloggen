/*
  Warnings:

  - You are about to drop the column `userId` on the `Owner` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Owner" DROP CONSTRAINT "Owner_userId_fkey";

-- AlterTable
ALTER TABLE "Owner" DROP COLUMN "userId";

-- CreateTable
CREATE TABLE "Blog" (
    "id" TEXT NOT NULL,
    "repoName" TEXT NOT NULL,
    "blogName" TEXT NOT NULL,

    CONSTRAINT "Blog_pkey" PRIMARY KEY ("id")
);
