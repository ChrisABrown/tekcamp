USE sakila;
SELECT 
    *, DATE(rental_date) AS 'date returned'
FROM
    rental
WHERE
    TIME(rental_date) < '10:00:00'
ORDER BY rental_date DESC
LIMIT 10;
