-- CreateTable
CREATE TABLE `Depoimento` (
    `id` VARCHAR(191) NOT NULL,
    `depoimento` VARCHAR(191) NOT NULL,
    `autor` VARCHAR(191) NOT NULL,
    `imagem` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Destino` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `preco` DOUBLE NOT NULL,
    `imagem` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
