package com.teksystems.bootcamp.springboot.movierental.model;


import lombok.*;
import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.PositiveOrZero;

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

  @Column(name = "description")
  @Getter @Setter
  private String reviewDetails;

  @Column(name = "rating_ID", columnDefinition = "SMALLINT UNSIGNED NOT NULL", insertable = false, updatable = false )
  @Getter
  private Short ratingId;

  @Column(name = "film_ID", columnDefinition = "SMALLINT UNSIGNED NOT NULL", insertable = false, updatable = false)
  @Getter
  private Short filmId;

  @Column(name = "customer_ID", columnDefinition = "SMALLINT UNSIGNED NOT NULL", insertable = false, updatable = false)
  @Getter
  private Short customerId;

  @ManyToOne
  @JoinColumn(name = "film_id", columnDefinition = "SMALLINT UNSIGNED NOT NULL")
  private Film film;

  @ManyToOne
  @JoinColumn(name = "customer_id", columnDefinition = "SMALLINT UNSIGNED NOT NULL")
  private Customer customer;

  @ManyToOne
  private Rating rating;
}
