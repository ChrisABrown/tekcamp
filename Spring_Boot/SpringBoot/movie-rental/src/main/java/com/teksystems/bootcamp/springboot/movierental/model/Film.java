package com.teksystems.bootcamp.springboot.movierental.model;

import lombok.Getter;

import javax.persistence.*;

@Entity
@Table(name = "film")
public class Film {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "film_id")
  @Getter
  private Short filmId;

  @Column(name = "title")
  @Getter
  private String title;
}
