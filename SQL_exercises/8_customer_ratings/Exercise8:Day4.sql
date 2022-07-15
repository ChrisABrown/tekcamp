USE sakila;
DROP TABLE IF EXISTS customer_ratings;
CREATE TABLE customer_ratings (
	id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    rating_id INT UNSIGNED NOT NULL,
    customer_id SMALLINT UNSIGNED NOT NULL,
    FOREIGN KEY (customer_id) REFERENCES customer(customer_id), 
    film_id SMALLINT UNSIGNED NOT NULL,
    FOREIGN KEY (film_id) REFERENCES film(film_id),
	FOREIGN KEY (rating_id) REFERENCES ratings(rating_id)
);

INSERT INTO customer_ratings (customer_id, rating_id, film_id)
VALUES(25, 1, 65),
(2, 2, 759),
(35, 4, 666),
(15, 3, 75),
(65, 3, 26),
(75, 1, 33),
(2, 6, 64),
(5, 5, 75),
(2, 3, 320),
(7, 3, 351),
(9, 4, 358),
(10, 3, 65),
(2, 6, 30),
(3, 3, 666),
(22, 6, 75),
(42, 6, 30),
(27, 3, 35),
(32, 4, 35),
(25, 5, 35), 
(20, 2, 35);
SELECT 
    film.film_id,
    title,
    COUNT(rating_id) AS num_of_reviews,
    MAX(rating_id) AS highest_rating,
    MIN(rating_id) AS lowest_rating,
    AVG(rating_id) AS average_rating
FROM
    customer_ratings
        LEFT JOIN
    film ON film.film_id = customer_ratings.film_id
GROUP BY film.film_id;
  
  




        