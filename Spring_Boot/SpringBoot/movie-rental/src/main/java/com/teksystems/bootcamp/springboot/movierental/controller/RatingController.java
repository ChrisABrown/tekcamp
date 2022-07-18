package com.teksystems.bootcamp.springboot.movierental.controller;


import com.teksystems.bootcamp.springboot.movierental.model.Rating;
import com.teksystems.bootcamp.springboot.movierental.service.RatingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/move-rental/films/reviews/ratings")
public class RatingController {

  @Autowired
  private RatingService ratingService;

  @PostMapping("/")
  public Rating createRating(@RequestBody Rating rating){
    return ratingService.createRating(rating);
  }

  @PutMapping("/{id}")
  public Rating updateRating(@PathVariable(name = "id") Integer ratingId,
                             @RequestBody Rating numberOfStars){
    return ratingService.updateRating(ratingId, numberOfStars);
  }

  @DeleteMapping("/ratingId")
  public void deleteRating(@PathVariable Integer ratingId){
    ratingService.deleteRating(ratingId);
  }
}
