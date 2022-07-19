package com.teksystems.bootcamp.springboot.movierental.model;

import lombok.Getter;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "customer")
public class Customer {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "customer_id")
  @Getter
  private Short id;

  @Column(name = "first_name")
  @Getter
  private String firstName;

  @Column(name = "last_name")
  @Getter
  private String lastName;

  @OneToMany(mappedBy = "reviews")
  private List<Review> reviews;
}
