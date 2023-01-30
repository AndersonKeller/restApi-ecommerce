CREATE DATABASE demo;

CREATE TABLE IF NOT EXISTS work_orders(
	id BIGSERIAL PRIMARY KEY,
	description VARCHAR(100) NOT NULL,
	mechanical VARCHAR(45) NOT NULL,
	price DECIMAL(10,2) NOT NULL,
	status VARCHAR(22) NOT NULL,
	isWarranty BOOLEAN NOT NULL,
	startDate DATE NOT NULL,
	endDate DATE
);

INSERT INTO
	work_orders(description, mechanical, price, status, iswarranty, startdate, enddate)
VALUES
	('Troca de oleo', 'Joao', 120.00, 'started', TRUE, '2023-01-01', '2023-01-01');

SELECT
	*
FROM
	work_orders;


INSERT INTO
	work_orders(description, mechanical, price, status, iswarranty, startdate, enddate)
VALUES
	('Troca de oleo', 'Joao', 120.00, 'started', TRUE, '2023-01-01', '2023-01-01'),
	('Revisão', 'Jose', 800.00, 'started', FALSE, '2023-01-01', '2023-01-01'),
	('Troca de pneus', 'Joao', 2000.00, 'started', FALSE, '2023-01-01', '2023-01-05'),
	('Pintura', 'Maria', 25000.55, 'started', FALSE, '2023-01-01', NULL)
RETURNING *;

SELECT
	*
FROM
	work_orders
WHERE
	mechanical = 'Joao';

SELECT 
	mechanical, price, description , iswarranty 
FROM 
	work_orders
WHERE 
	iswarranty IS TRUE;

SELECT
	*
FROM 
	work_orders
WHERE 
	mechanical = 'Joao' AND price > 1000;

SELECT 
	*
FROM
	work_orders
WHERE 
	mechanical ILIKE '%a%';
