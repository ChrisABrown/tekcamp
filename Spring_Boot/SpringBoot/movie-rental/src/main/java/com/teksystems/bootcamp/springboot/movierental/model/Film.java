package com.teksystems.bootcamp.springboot.movierental.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "film")
public class Film {


  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "film_id")
  @Getter @Setter
  private Short id;

  @Column(name = "title")
  @Getter @Setter
  private String title;

  @Column(name = "description")
  @Getter @Setter
  private String description;

  @OneToMany(mappedBy = "film")
  private List<Review> reviews;
}
