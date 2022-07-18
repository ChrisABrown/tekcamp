package com.teksystems.bootcamp.springboot.movierental.controller;


import com.teksystems.bootcamp.springboot.movierental.model.Review;
import com.teksystems.bootcamp.springboot.movierental.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/movie-rental/films/reviews")
public class ReviewController {

  @Autowired
  private ReviewService reviewService;

  @GetMapping("/")
  public List<Review> getAllReviews(){
    return reviewService.getAllReviews();
  }

  @PostMapping("/")
  public Review createReview(@RequestBody Review review){
    return reviewService.createReview(review);
  }

  @PutMapping("/{id}")
  public Review updateReview(@PathVariable(name = "id") Long reviewId,
                             @RequestBody Review reviewDetails){
    return reviewService.updateReview(reviewId, reviewDetails);
  }

  @DeleteMapping("/reviewId")
  public void deleteReview(@PathVariable Long reviewId){
    reviewService.deleteReview(reviewId);
  }
}
