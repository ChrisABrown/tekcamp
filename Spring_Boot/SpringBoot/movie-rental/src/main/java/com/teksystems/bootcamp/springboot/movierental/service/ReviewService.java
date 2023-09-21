package com.teksystems.bootcamp.springboot.movierental.service;

import com.teksystems.bootcamp.springboot.movierental.model.Review;
import com.teksystems.bootcamp.springboot.movierental.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@Service
public class ReviewService {

  @Autowired
  private ReviewRepository reviewRepository;

  public Optional<Review> getReviewById(Long reviewId){
    Optional<Review> review = reviewRepository.findById(reviewId);
    if(review.isPresent()){
      return review;
    }else {
      throw new ResponseStatusException(HttpStatus.NOT_FOUND,
              "No review found for the id " + reviewId);
    }
  }
  public List<Review> getAllReviews(int page, int limit){
    Pageable paging = PageRequest.of(page, limit);
    Page<Review> pagedResults = reviewRepository.findAll(paging);
    return pagedResults.toList();
  }

  public List<Review> createReview(List<Review> reviews){
    return reviewRepository.saveAll(reviews);
  }

  public Review updateReview (Long reviewId, Review reviewDetails){
    //method for updating review description and ids for film, customer, etc
    Optional<Review> review = reviewRepository.findById(reviewId);
    try{
      Review newReview = review.get();
//   Suggestion from Office hours to pull just the id instead of the whole object
//      newReview.setFilm(filmRepository.findById(reviewDetails.getFilm()));
//      newReview.setCustomer(customerRepository.findById(newReview.getCustomer().getId()));
//      newReview.setRating(ratingRepository.findById(reviewDetails.getRating()));
      newReview.setFilm(reviewDetails.getFilm());
      newReview.setRating(reviewDetails.getRating());
      newReview.setCustomer(reviewDetails.getCustomer());
      return reviewRepository.save(newReview);
    } catch(EmptyResultDataAccessException exception){
      throw new ResponseStatusException(HttpStatus.NOT_FOUND,
              "No review found for the id " + reviewId);
    }
  }

  public void deleteReview(Long reviewId){
    try{
    reviewRepository.deleteById(reviewId);
    } catch (EmptyResultDataAccessException exception){
      throw new ResponseStatusException(HttpStatus.NOT_FOUND,
              "No review found for the id " + reviewId);
    }
  }
}
