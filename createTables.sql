CREATE TABLE IF NOT EXISTS addresses (
	"id" SERIAL PRIMARY KEY,
	"street" VARCHAR(25) NOT NULL,
	"number" VARCHAR(8) NOT NULL,
	"postalCode" VARCHAR(10) NOT NULL,
	"complement" VARCHAR(30) NOT NULL
);

CREATE TABLE IF NOT EXISTS mechanics (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(62) NOT NULL,
	"registrationNumber" VARCHAR(4) NOT NULL UNIQUE,
	"addressId" INTEGER UNIQUE,
	FOREIGN KEY ("addressId") REFERENCES addresses("id")
);

ALTER TABLE
	addresses 
ALTER COLUMN
	complement
DROP NOT NULL;

CREATE TABLE IF NOT EXISTS work_orders(
	"id" SERIAL PRIMARY KEY,
	"description" VARCHAR(100) NOT NULL,
	"price" DECIMAL(10,2) NOT NULL,
	"status" VARCHAR(22) NOT NULL,
	"isWarranty" BOOLEAN NOT NULL,
	"startDate" DATE NOT NULL,
	"endDate" DATE
);

ALTER TABLE
	work_orders 
ADD COLUMN
	"mechanicalId" INTEGER NOT NULL;
	
ALTER TABLE
	work_orders
ADD FOREIGN KEY ("mechanicalId") REFERENCES mechanics("id");

CREATE TABLE IF NOT EXISTS parts(
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(30) NOT NULL UNIQUE,
	"fabricationDate" DATE NOT NULL,
	"expirationDate" DATE NOT NULL,
	"quantityInStock" INTEGER NOT NULL,
	"price" DECIMAL(10,2) NOT NULL
);

CREATE TABLE IF NOT EXISTS work_order_parts (
	"id" SERIAL PRIMARY KEY,
	"workOrderId" INTEGER NOT NULL,
	FOREIGN KEY ("workOrderId") REFERENCES work_orders("id")
	ON DELETE CASCADE,
	"partId" INTEGER NOT NULL,
	FOREIGN KEY ("partId") REFERENCES parts("id")
	ON DELETE RESTRICT,
	"quantity" INTEGER NOT NULL
);

INSERT INTO
	parts ("name", "fabricationDate", "expirationDate", "quantityInStock", "price")
VALUES
	('Oleo 1 litro', '2023-01-01', '2025-01-01', 5, 80.00),
	('Oleo 2 litro', '2023-01-01', '2025-01-01', 5, 130.00),
	('Pneus aro 17', '2023-01-01', '2025-01-01', 12, 400.00),
	('Pneus aro 15', '2023-01-01', '2025-01-01', 12, 350.00),
	('Pinça de freio', '2023-01-01', '2025-01-01', 6, 80.00),
	('Disco de freio', '2023-01-01', '2025-01-01', 5, 150.00);