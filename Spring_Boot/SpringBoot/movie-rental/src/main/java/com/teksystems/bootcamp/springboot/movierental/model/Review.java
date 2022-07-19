package com.teksystems.bootcamp.springboot.movierental.model;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "review")
@AllArgsConstructor
@NoArgsConstructor
public class Review {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id")
  @Getter
  private Long reviewId;

  @Column(name = "description")
  @Getter @Setter
  private String reviewDetails;

  @Column(name = "rating_ID")
  @Getter
  private Integer ratingId;

  @Column(name = "film_ID")
  @Getter
  private Integer filmId;

  @Column(name = "customer_id")
  @Getter
  private String customerId;

  @ManyToOne
  private Film film;

  @ManyToOne
  private Customer customer;
}
