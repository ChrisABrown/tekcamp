USE sakila;
DROP TABLE IF EXISTS customer_ratings ;
CREATE TABLE customer_ratings ( 
(SELECT customer_id,
    CONCAT(first_name, ' ', last_name) AS 'full name' FROM
    customer))
    ;
SELECT * FROM customer_ratings
;
        