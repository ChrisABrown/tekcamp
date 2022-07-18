package com.teksystems.bootcamp.springboot.movierental.service;


import com.teksystems.bootcamp.springboot.movierental.model.Rating;
import com.teksystems.bootcamp.springboot.movierental.model.Review;
import com.teksystems.bootcamp.springboot.movierental.repository.RatingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RatingService {

  @Autowired
  private RatingRepository ratingRepository;

  public List<Rating> getAllRatings(){
    return ratingRepository.findAll();
  }

  public Rating createRating(Rating rating){
    return ratingRepository.save(rating);
  }

  public Rating updateRating(Integer ratingId, Rating numberOfStars){
    Rating rating = ratingRepository.getReferenceById(ratingId);
    //methods for updating how many stars
    return ratingRepository.save(rating);
  }

  public void deleteRating(Integer ratingId){
    ratingRepository.deleteById(ratingId);
  }
}
