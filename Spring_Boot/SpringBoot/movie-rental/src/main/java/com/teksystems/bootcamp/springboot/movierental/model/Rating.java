package com.teksystems.bootcamp.springboot.movierental.model;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Rating {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id")
  @Getter @Setter
  private Long ratingId;

  @Column(name = "number of stars")
  @Getter @Setter
  private int numberOfStars;

  @Column(name = "rating")
  @Getter @Setter
  private int ratingComment;
}
