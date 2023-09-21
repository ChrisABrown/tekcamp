package com.teksystems.bootcamp.springboot.movierental.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "film")
public class Film {

  public Film(Short id){
    this.id = id;
  }

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "film_id")
  @Getter
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
