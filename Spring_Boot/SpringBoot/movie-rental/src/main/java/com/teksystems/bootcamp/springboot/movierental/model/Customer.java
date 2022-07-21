package com.teksystems.bootcamp.springboot.movierental.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "customer")
public class Customer{


  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "customer_id")
  @Getter @Setter
  private Short id;

  @Column(name = "first_name")
  @Getter @Setter
  private String firstName;

  @Column(name = "last_name")
  @Getter @Setter
  private String lastName;

  @OneToMany(mappedBy = "customer")
  private List<Review> reviews;

}
