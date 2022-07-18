package com.teksystems.bootcamp.springboot.movierental.model;

import lombok.Getter;

import javax.persistence.*;

@Entity
@Table(name = "customer")
public class Customer {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "customer_id")
  @Getter
  private Short customerId;

  @Column(name = "first_name")
  @Getter
  private String firstName;

  @Column(name = "last_name")
  @Getter
  private String lastName;
}
