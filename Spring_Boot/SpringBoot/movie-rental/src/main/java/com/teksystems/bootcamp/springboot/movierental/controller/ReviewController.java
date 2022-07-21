package com.teksystems.bootcamp.springboot.movierental.controller;


import com.teksystems.bootcamp.springboot.movierental.model.Review;
import com.teksystems.bootcamp.springboot.movierental.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/movie-rental/films/reviews")
public class ReviewController {

  @Autowired
  private ReviewService reviewService;

  @GetMapping("/")
  public List<Review> getAllReviews(){
    return reviewService.getAllReviews();
  }

  @GetMapping("/{id}")
  public Optional<Review> getReviewById(@PathVariable(name = "id") Long reviewId){
    return reviewService.getReviewById(reviewId);
  }

  @GetMapping("/{page}/{limit}")
  public List<Review> getPaginatedReviews( @RequestParam int page,
                                           @RequestParam int limit){
    return reviewService.getPaginatedReviews(page, limit);
  }

  @PostMapping("/")
  public List<Review> createReviews(@Valid @RequestBody List<Review> reviews){
    return reviewService.createReview(reviews);
  }

  @PutMapping("/{id}")
  public Review updateReview(@PathVariable(name = "id") Long reviewId,
                             @RequestBody Review reviewDetails){
    return reviewService.updateReview(reviewId, reviewDetails);
  }

  @DeleteMapping("/{id}")
  public void deleteReview(@PathVariable(name = "id") Long reviewId){
    reviewService.deleteReview(reviewId);
  }
}
