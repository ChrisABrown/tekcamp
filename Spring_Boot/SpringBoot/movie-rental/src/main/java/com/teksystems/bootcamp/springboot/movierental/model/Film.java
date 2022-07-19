package com.teksystems.bootcamp.springboot.movierental.model;

import lombok.Getter;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "film")
public class Film {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "film_id")
  @Getter
  private Short id;

  @Column(name = "title")
  @Getter
  private String title;

  @OneToMany
  private List<Review> reviews;
}
