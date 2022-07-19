package com.teksystems.bootcamp.springboot.movierental.repository;

import com.teksystems.bootcamp.springboot.movierental.model.Rating;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RatingRepository extends JpaRepository<Rating, Integer> {
}
