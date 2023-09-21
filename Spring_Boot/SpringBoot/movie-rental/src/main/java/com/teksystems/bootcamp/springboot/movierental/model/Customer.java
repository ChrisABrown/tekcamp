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
@Table(name = "customer")
public class Customer{

  public Customer(Short id){
    this.id = id;
  }

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "customer_id")
  @Getter
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
