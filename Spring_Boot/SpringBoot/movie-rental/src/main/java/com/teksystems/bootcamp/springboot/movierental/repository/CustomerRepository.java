package com.teksystems.bootcamp.springboot.movierental.repository;

import com.teksystems.bootcamp.springboot.movierental.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer, Short> {
}
