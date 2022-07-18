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
  @Getter @Setter
  private Long reviewId;

  @Column(name = "description")
  @Getter @Setter
  private String reviewDetails;

  @Column(name = "rating_ID")
  @Getter @Setter
  private Integer ratingId;

  @Column(name = "film_ID")
  @Getter @Setter
  private Integer filmId;
}
