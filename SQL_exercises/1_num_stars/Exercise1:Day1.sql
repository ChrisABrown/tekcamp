USE sakila;
DROP TABLE IF EXISTS ratings;
SHOW TABLES;
CREATE TABLE ratings (
    rating_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    num_of_stars INT UNIQUE NOT NULL,
    rating_comment VARCHAR(40) NOT NULL
);
    
INSERT INTO 
	ratings(num_of_stars, rating_comment) 
VALUES	  
	(0, "Worst movie I've ever seen"),
	(1, "Horrible movie"),
	(2, "Dont waste your time"),
	(3, "Not bad, not that good either"),
	(4, "Good movie"),
	(5, "Best movie I've ever seen");
SELECT 
	rating_id AS 'rating ID', 
	num_of_stars AS stars,
	rating_comment AS rating
FROM ratings;
