/*
  Warnings:

  - You are about to drop the column `assessingAuthority` on the `occupation` table. All the data in the column will be lost.
  - You are about to drop the column `assessingAuthorityLink` on the `occupation` table. All the data in the column will be lost.
  - You are about to drop the column `visa` on the `occupation` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `occupation` DROP COLUMN `assessingAuthority`,
    DROP COLUMN `assessingAuthorityLink`,
    DROP COLUMN `visa`;

-- CreateTable
CREATE TABLE `Visa` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `visaName` VARCHAR(191) NOT NULL,
    `occupationId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AssessingAuthority` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `occupationId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AssessingAuthorityLink` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `link` VARCHAR(191) NOT NULL,
    `assessingAuthorityId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Visa` ADD CONSTRAINT `Visa_occupationId_fkey` FOREIGN KEY (`occupationId`) REFERENCES `Occupation`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AssessingAuthority` ADD CONSTRAINT `AssessingAuthority_occupationId_fkey` FOREIGN KEY (`occupationId`) REFERENCES `Occupation`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AssessingAuthorityLink` ADD CONSTRAINT `AssessingAuthorityLink_assessingAuthorityId_fkey` FOREIGN KEY (`assessingAuthorityId`) REFERENCES `AssessingAuthority`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
