USE sakila;
SELECT
  store_id,
  film_id,
  COUNT(film_id) AS 'number_of_copies'
FROM inventory
GROUP BY store_id,
         film_id;