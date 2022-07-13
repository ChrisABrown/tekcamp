USE sakila;
SELECT 
  customer_id, 
  first_name, 
  last_name 
FROM 
  customer 
WHERE 
  (
    (
      first_name LIKE '%c%' 
      OR '%cb%'
    ) 
    AND (
      last_name LIKE '%c%' 
      OR '%cb%'
    )
  );



