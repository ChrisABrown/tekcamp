USE sakila;
SELECT 
    title, length
FROM
    film
WHERE
    length > 120
        AND (title LIKE '%c%' OR '%f%');