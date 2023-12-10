-- CreateTable
CREATE TABLE "AtualizacaoMesa" (
    "id_atualizacao_mesa" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_mesa" INTEGER NOT NULL,
    "cor" TEXT NOT NULL,
    "texto" TEXT NOT NULL,
    "atualizadaEm" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Mesa" (
    "id_mesa" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "criadaEm" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE INDEX "AtualizacaoMesa_id_mesa_idx" ON "AtualizacaoMesa"("id_mesa");
