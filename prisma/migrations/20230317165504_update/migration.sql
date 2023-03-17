-- AlterTable
ALTER TABLE `Product` MODIFY `specifications` VARCHAR(191) NULL,
    MODIFY `visible` BOOLEAN NOT NULL DEFAULT true,
    MODIFY `available` BOOLEAN NOT NULL DEFAULT true,
    MODIFY `weight` DOUBLE NOT NULL DEFAULT 1,
    MODIFY `averageRating` DOUBLE NULL;
