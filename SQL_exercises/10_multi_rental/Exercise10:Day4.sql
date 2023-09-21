USE sakila;
SELECT 
    CONCAT(customer.first_name,
            ' ',
            customer.last_name) AS 'customer name',
    rental.customer_id,
    COUNT(rental.rental_id) AS 'number of rentals',
    SUM(payment.amount) AS 'total paid',
    DATE(rental.rental_date) AS 'rental date'
FROM
    rental
        LEFT JOIN
    payment ON rental.rental_id = payment.rental_id
        LEFT JOIN
    customer ON rental.customer_id = customer.customer_id
GROUP BY rental.rental_date , rental.customer_id
HAVING COUNT(payment.rental_id) >= 2; 