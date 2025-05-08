/*
  Warnings:

  - You are about to drop the column `anzocoCode` on the `occupation` table. All the data in the column will be lost.
  - You are about to drop the column `anzocoLink` on the `occupation` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[anzscoCode]` on the table `Occupation` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `anzscoCode` to the `Occupation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `anzscoLink` to the `Occupation` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Occupation_anzocoCode_key` ON `occupation`;

-- AlterTable
ALTER TABLE `occupation` DROP COLUMN `anzocoCode`,
    DROP COLUMN `anzocoLink`,
    ADD COLUMN `anzscoCode` VARCHAR(191) NOT NULL,
    ADD COLUMN `anzscoLink` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Occupation_anzscoCode_key` ON `Occupation`(`anzscoCode`);
