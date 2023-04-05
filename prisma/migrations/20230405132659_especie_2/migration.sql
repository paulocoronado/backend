/*
  Warnings:

  - Added the required column `fuente` to the `Especie` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Especie` ADD COLUMN `fuente` INTEGER NOT NULL;
