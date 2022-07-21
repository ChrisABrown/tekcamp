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
  @Getter @Setter
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
  @JoinColumn(name = "film_id" , columnDefinition = "SMALLINT UNSIGNED NOT NULL",insertable = false, updatable = false)
  private Film film;

  @ManyToOne
  @JoinColumn(name = "customer_id", columnDefinition = "SMALLINT UNSIGNED NOT NULL",insertable = false, updatable = false)
  private Customer customer;

  public void setFilm(Short film) {
    if(film == null){
      throw new NullPointerException();
    }else{
      getFilm();
    }
  }

  public void setCustomer(Short customer) {
    if(customer == null){
      throw new NullPointerException();
    }else{
      getCustomer();
    }
  }

  public void setRating(Short rating) {
    if(rating == null){
      throw new NullPointerException();
    }else{
      getRating();
    }
  }

  @ManyToOne
  private Rating rating;

  public Short getRating() {
    return rating.getRatingId();
  }

  public Short getFilm() {
    return film.getId();
  }

  public Short getCustomer() {
    return customer.getId();
  }
}
