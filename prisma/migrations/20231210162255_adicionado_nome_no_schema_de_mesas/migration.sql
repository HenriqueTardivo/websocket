/*
  Warnings:

  - Added the required column `nome` to the `Mesa` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Mesa" (
    "id_mesa" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "criadaEm" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Mesa" ("criadaEm", "id_mesa") SELECT "criadaEm", "id_mesa" FROM "Mesa";
DROP TABLE "Mesa";
ALTER TABLE "new_Mesa" RENAME TO "Mesa";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
