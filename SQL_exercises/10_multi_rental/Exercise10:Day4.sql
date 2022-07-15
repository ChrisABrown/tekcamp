USE sakila;
SELECT 
    customer.customer_id,
    CONCAT(customer.first_name,
            ' ',
            customer.last_name) AS customer_name,
rental.rental_id,
    DATE(rental.rental_date) AS 'rental date',
    SUM(amount)
FROM
    rental
        INNER JOIN
    payment ON rental.customer_id = payment.customer_id
        RIGHT JOIN
    customer ON payment.customer_id = customer.customer_id
GROUP BY  customer_id , rental.rental_id;