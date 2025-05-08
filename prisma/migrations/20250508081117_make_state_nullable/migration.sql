/*
  Warnings:

  - A unique constraint covering the columns `[anzocoCode]` on the table `Occupation` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `occupation` ADD COLUMN `state` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Occupation_anzocoCode_key` ON `Occupation`(`anzocoCode`);
