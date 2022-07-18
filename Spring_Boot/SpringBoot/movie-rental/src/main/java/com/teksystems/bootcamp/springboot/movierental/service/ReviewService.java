package com.teksystems.bootcamp.springboot.movierental.service;

import com.teksystems.bootcamp.springboot.movierental.model.Review;
import com.teksystems.bootcamp.springboot.movierental.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewService {

  @Autowired
  private ReviewRepository reviewRepository;


  public List<Review> getAllReviews(){
    return reviewRepository.findAll();
  }

  public Review createReview(Review review){
    return reviewRepository.save(review);
  }

  public Review updateReview (Long reviewId, Review reviewDetails){
    Review review = reviewRepository.getReferenceById(reviewId);
    //methods for updating review comments
    return reviewRepository.save(review);
  }

  public void deleteReview(Long reviewId){
    reviewRepository.deleteById(reviewId);
  }
}
