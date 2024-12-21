/*
  Warnings:

  - Added the required column `owner` to the `Blog` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Blog" ADD COLUMN     "owner" TEXT NOT NULL;
