USE sakila;
SELECT 
  CONCAT (last_name, ", ", first_name) AS "full name" 
FROM 
  staff 
LIMIT 
  20;

