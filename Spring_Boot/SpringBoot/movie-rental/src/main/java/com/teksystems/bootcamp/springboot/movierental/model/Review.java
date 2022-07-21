package com.teksystems.bootcamp.springboot.movierental.model;


import lombok.*;
import javax.persistence.*;

@Entity
@Table(name = "reviews")
@AllArgsConstructor
@NoArgsConstructor
public class Review {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id")
  @Getter
  private Long reviewId;

  @ManyToOne
  @Getter @Setter
  @JoinColumn(name = "film_id" , columnDefinition = "SMALLINT UNSIGNED NOT NULL",insertable = false, updatable = true)
  private Film film;

  @ManyToOne
  @Getter @Setter
  @JoinColumn(name = "customer_id", columnDefinition = "SMALLINT UNSIGNED NOT NULL",insertable = false, updatable = true)
  private Customer customer;

  @ManyToOne
  @Getter @Setter
  private Rating rating;

}
