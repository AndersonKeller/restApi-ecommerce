SELECT * FROM mechanics;
SELECT * FROM addresses;

SELECT 
	*
FROM 
	mechanics me
JOIN
	addresses ad ON me."addressId" = ad.id;

SELECT
	*
FROM 
	mechanics me
LEFT JOIN
	addresses ad ON me."addressId" = ad.id;

SELECT
	*
FROM
	mechanics me
RIGHT JOIN
	addresses ad ON ad.id = me."addressId";

SELECT 
	*
FROM 
	mechanics me
FULL JOIN
	addresses ad ON ad.id = me."addressId";

SELECT
	*
FROM 
	addresses ad
LEFT JOIN
	mechanics me ON ad.id = me."addressId";

SELECT
	*
FROM
	mechanics me
LEFT JOIN
	addresses ad ON ad.id = me."addressId" 
JOIN 
	work_orders wo ON me.id = wo."mechanicalId"
WHERE 
	me.id = 8;

SELECT 
	*
FROM 
	work_orders wo 
JOIN
	work_order_parts wop ON wop."workOrderId" = wo.id
JOIN
	parts pa ON pa.id = wop."partId" 
JOIN 
	mechanics me ON me.id = wo."mechanicalId";
