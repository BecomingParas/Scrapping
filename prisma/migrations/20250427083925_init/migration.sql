-- CreateTable
CREATE TABLE `Occupation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `occupation` VARCHAR(191) NOT NULL,
    `anzocoCode` VARCHAR(191) NOT NULL,
    `anzocoLink` VARCHAR(191) NOT NULL,
    `visa` JSON NOT NULL,
    `list` VARCHAR(191) NOT NULL,
    `assessingAuthority` JSON NOT NULL,
    `assessingAuthorityLink` JSON NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
