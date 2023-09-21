USE sakila;
SELECT 
    first_name, last_name, store.store_id, city
FROM
    staff
        LEFT JOIN
    store ON staff.store_id = store.store_id
        LEFT JOIN
    address ON address.address_id = store.store_id
        LEFT JOIN
    city ON city.city_id = address.city_id
WHERE
    city.city LIKE 'W%';

 