CREATE TYPE "USER_ROLE" AS ENUM ('student', 'instructor');

CREATE TABLE IF NOT EXISTS users(
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(45) NOT NULL,
	"email" VARCHAR(45) NOT NULL UNIQUE,
	"password" VARCHAR(120) NOT NULL,
	"role" "USER_ROLE" NOT NULL
);

CREATE TABLE IF NOT EXISTS tasks(
	"id" SERIAL PRIMARY KEY,
	"description" TEXT NOT NULL,
	"scoreTotal" INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS user_tasks(
	"id" SERIAL PRIMARY KEY,
	"userId" INTEGER NOT NULL,
	FOREIGN KEY ("userId") REFERENCES users("id")
	ON DELETE RESTRICT,
	"taskId" INTEGER NOT NULL,
	FOREIGN KEY ("taskId") REFERENCES tasks("id")
	ON DELETE CASCADE,
	repository VARCHAR(100) NOT NULL,
	feedback VARCHAR(360) NOT NULL,
	score NUMERIC(4,2)
);

ALTER TABLE "users" ADD COLUMN "isActive" BOOLEAN NOT NULL DEFAULT TRUE;
