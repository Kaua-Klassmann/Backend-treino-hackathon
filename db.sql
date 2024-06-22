CREATE TABLE "Cargo" (
    "id" SERIAL PRIMARY KEY,
    "nome" VARCHAR NOT NULL,
    "createdAt" DATE NOT NULL DEFAULT CURRENT_DATE,
    "updatedAt" DATE NOT NULL DEFAULT CURRENT_DATE
);

INSERT INTO "Cargo" VALUES 
(1, 'Admin'),
(2, 'Funcionário');

CREATE TABLE "Usuario" (
    "id" SERIAL PRIMARY KEY,
    "nome" VARCHAR NOT NULL,
    "email" VARCHAR NOT NULL,
    "idCargo" INTEGER NOT NULL REFERENCES "Cargo"("id"),
    "imagem" BYTEA,
    "createdAt" DATE NOT NULL DEFAULT CURRENT_DATE,
    "updatedAt" DATE NOT NULL DEFAULT CURRENT_DATE
);

INSERT INTO "Usuario" VALUES 
(1, 'Carlos', 'carlos@gmail.com', 1),
(2, 'cleiton', 'cleiton@gmail.com', 2);

CREATE TABLE "Categoria" (
    "id" SERIAL PRIMARY KEY,
    "nome" VARCHAR NOT NULL,
    "createdAt" DATE NOT NULL DEFAULT CURRENT_DATE,
    "updatedAt" DATE NOT NULL DEFAULT CURRENT_DATE
);

INSERT INTO "Categoria" VALUES
(1, 'Móvel'),
(2, 'Eletrônico'),
(3, 'Brinquedo');

CREATE TABLE "Produto" (
    "id" SERIAL PRIMARY KEY,
    "nome" VARCHAR NOT NULL,
    "idCategoria" INTEGER NOT NULL REFERENCES "Categoria"("id"),
    "createdAt" DATE NOT NULL DEFAULT CURRENT_DATE,
    "updatedAt" DATE NOT NULL DEFAULT CURRENT_DATE
);

INSERT INTO "Produto" VALUES
(1, 'Cadeira', 1),
(2, 'Mesa', 2),
(3, 'Poltrona', 1),
(4, 'Geladeira', 2),
(5, 'PC', 2),
(6, 'Celular', 2),
(7, 'Spinner', 3),
(8, 'Nerf', 3);