CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY,
  "first_name" TEXT NOT NULL,
  "last_name" TEXT NOT NULL,
  "email" TEXT UNIQUE NOT NULL,
  "city" TEXT,
  "zipcode" TEXT
);

CREATE TABLE "animals" (
  "id" SERIAL PRIMARY KEY,
  "name" TEXT NOT NULL,
  "type" TEXT NOT NULL,
  "breed" TEXT,
  "age_text" TEXT,
  "city" TEXT,
  "zipcode" TEXT,
  "description" TEXT,
  "image_url" TEXT,
  "is_available" BOOLEAN DEFAULT true
);

CREATE TABLE "adoptions" (
  "id" SERIAL PRIMARY KEY,
  "utilisateur_id" INTEGER NOT NULL,
  "animal_id" INTEGER NOT NULL,
  "status" TEXT NOT NULL DEFAULT 'pending',
  "requested_at" TIMESTAMP NOT NULL DEFAULT (NOW())
);

CREATE TABLE "dons" (
  "id" SERIAL PRIMARY KEY,
  "utilisateur_id" INTEGER NOT NULL,
  "montant" "NUMERIC(10,2)" NOT NULL,
  "date_don" TIMESTAMP NOT NULL DEFAULT (NOW())
);

ALTER TABLE "adoptions" ADD FOREIGN KEY ("utilisateur_id") REFERENCES "users" ("id") ON DELETE CASCADE;

ALTER TABLE "adoptions" ADD FOREIGN KEY ("animal_id") REFERENCES "animals" ("id") ON DELETE CASCADE;

ALTER TABLE "dons" ADD FOREIGN KEY ("utilisateur_id") REFERENCES "users" ("id") ON DELETE CASCADE;
