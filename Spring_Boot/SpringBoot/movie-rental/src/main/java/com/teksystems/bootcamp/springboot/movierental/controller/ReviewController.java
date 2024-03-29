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

  @GetMapping("/{page}/{limit}")
  public List<Review> getAllReviews(@RequestParam int page,
                                    @RequestParam int limit){
    return reviewService.getAllReviews(page, limit);
  }

  @GetMapping("/{reviewId}")
  public Optional<Review> getReviewById(@PathVariable Long reviewId){
    return reviewService.getReviewById(reviewId);
  }

  @PostMapping("/")
  public List<Review> createReviews(@Valid @RequestBody List<Review> reviews){
    return reviewService.createReview(reviews);
  }

  @PutMapping("/{reviewId}")
  public Review updateReview(@PathVariable Long reviewId,
                             @RequestBody Review reviewDetails){
    return reviewService.updateReview(reviewId, reviewDetails);
  }

  @DeleteMapping("/{reviewId}")
  public void deleteReview(@PathVariable Long reviewId){
    reviewService.deleteReview(reviewId);
  }
}
