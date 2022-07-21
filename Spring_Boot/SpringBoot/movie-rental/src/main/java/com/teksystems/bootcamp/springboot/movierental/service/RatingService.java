package com.teksystems.bootcamp.springboot.movierental.service;


import com.teksystems.bootcamp.springboot.movierental.model.Rating;
import com.teksystems.bootcamp.springboot.movierental.repository.RatingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@Service
public class RatingService {

  @Autowired
  private RatingRepository ratingRepository;
  public Optional<Rating> getRatingById(Short ratingId){
    Optional<Rating> ratingById = ratingRepository.findById(ratingId);
    if(ratingById.isPresent()){
      return ratingById;
    }else {
      throw new ResponseStatusException(HttpStatus.NOT_FOUND,
              "No rating found for the id " + ratingId);
    }
  }
  public List<Rating> getAllRatings(){
    return ratingRepository.findAll();
  }

  public Rating createRating(Rating rating){
    return ratingRepository.save(rating);
  }

  public Rating updateRating(Short ratingId, Rating ratingDetails){
    Optional<Rating> rating = ratingRepository.findById(ratingId);
    //methods for updating how many stars
    if (rating.isPresent()){
      Rating newRating = rating.get();
      newRating.setNumberOfStars(ratingDetails.getNumberOfStars());
      newRating.setRatingComment(ratingDetails.getRatingComment());
    return ratingRepository.save(newRating);
    }
    return ratingDetails;
  }

  public void deleteRating(Short ratingId){
   try{
     ratingRepository.deleteById(ratingId);
   } catch (EmptyResultDataAccessException exception) {
     throw new ResponseStatusException(HttpStatus.NOT_FOUND,
             "No rating found with the id " + ratingId);
    }
  }
}
