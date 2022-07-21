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

//  @Column(name = "ratingId", columnDefinition = "SMALLINT UNSIGNED NOT NULL", insertable = false )
//  @Setter
//  @JsonIgnore
//  private Short ratingId;
//
//  @Column(name = "film_id", columnDefinition = "SMALLINT UNSIGNED NOT NULL", insertable = false)
//  @Setter
//  @JsonIgnore
//  private Short filmId;
//
//  @Column(name = "customer_id", columnDefinition = "SMALLINT UNSIGNED NOT NULL", insertable = false)
//  @Setter
//  @JsonIgnore
//  private Short customerId;

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

//  public Short getRating() {
//    return rating.getRatingId();
//  }
//
//  public Short getFilm() {
//    return film.getId();
//  }
//
//  public Short getCustomer() {
//    return customer.getId();
//  }
}
