package com.teksystems.bootcamp.springboot.movierental.controller;


import com.teksystems.bootcamp.springboot.movierental.model.Rating;
import com.teksystems.bootcamp.springboot.movierental.service.RatingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/movie-rental/films/reviews/ratings")
public class RatingController {

  @Autowired
  private RatingService ratingService;
  @GetMapping("/")
  public List<Rating> getAllRatings(){
    return ratingService.getAllRatings();
  }
  @GetMapping("/{id}")
  public Optional<Rating> getRatingById(@PathVariable(name = "id") Short ratingId){
   return ratingService.getRatingById(ratingId);
  }

  @PostMapping("/")
  public Rating createRating(@RequestBody Rating rating){
    return ratingService.createRating(rating);
  }

  @PutMapping("/{id}")
  public Rating updateRating(@PathVariable(name = "id") Short ratingId,
                             @RequestBody Rating numberOfStars){
    return ratingService.updateRating(ratingId, numberOfStars);
  }

  @DeleteMapping("/{id}")
  public void deleteRating(@PathVariable(name = "id") Short ratingId){
    ratingService.deleteRating(ratingId);
  }
}
