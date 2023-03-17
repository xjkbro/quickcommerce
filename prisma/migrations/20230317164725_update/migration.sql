/*
  Warnings:

  - You are about to drop the `ProductCategories` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Products` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ProductCategoriesToProducts` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_ProductCategoriesToProducts` DROP FOREIGN KEY `_ProductCategoriesToProducts_A_fkey`;

-- DropForeignKey
ALTER TABLE `_ProductCategoriesToProducts` DROP FOREIGN KEY `_ProductCategoriesToProducts_B_fkey`;

-- DropTable
DROP TABLE `ProductCategories`;

-- DropTable
DROP TABLE `Products`;

-- DropTable
DROP TABLE `_ProductCategoriesToProducts`;

-- CreateTable
CREATE TABLE `Category` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Category_name_key`(`name`),
    UNIQUE INDEX `Category_slug_key`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Product` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `short_description` VARCHAR(191) NULL,
    `price` DOUBLE NOT NULL,
    `quantity` INTEGER NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `specifications` VARCHAR(191) NOT NULL,
    `visible` BOOLEAN NOT NULL,
    `available` BOOLEAN NOT NULL,
    `sale_price` DOUBLE NULL,
    `weight` DOUBLE NOT NULL,
    `averageRating` DOUBLE NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `categoryId` VARCHAR(191) NULL,

    UNIQUE INDEX `Product_title_key`(`title`),
    UNIQUE INDEX `Product_slug_key`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
