package com.teksystems.bootcamp.springboot.movierental.model;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "reviews")
@AllArgsConstructor
@NoArgsConstructor
public class Review {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id")
  @Getter @Setter
  private Long reviewId;

  @Column(name = "description")
  private String reviewDescription;

  @Column(name = "rating ID")
  @Getter @Setter
  private int ratingId;

  @Column(name = "film ID")
  @Getter @Setter
  private int filmId;
}
