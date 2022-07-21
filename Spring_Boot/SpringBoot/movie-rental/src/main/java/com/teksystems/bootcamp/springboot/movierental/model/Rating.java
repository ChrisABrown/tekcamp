package com.teksystems.bootcamp.springboot.movierental.model;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "ratings")
@AllArgsConstructor
@NoArgsConstructor
public class Rating {



  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id", columnDefinition = "SMALLINT UNSIGNED NOT NULL")
  @Getter @Setter
  private Short ratingId;

  @Column(name = "number_of_stars", columnDefinition = "SMALLINT UNSIGNED NOT NULL")
  @Getter @Setter
  private int numberOfStars;

  @Column(name = "rating")
  @Getter @Setter
  private String ratingComment;

  @OneToMany(mappedBy = "rating")
  private List<Review> reviews;
}
