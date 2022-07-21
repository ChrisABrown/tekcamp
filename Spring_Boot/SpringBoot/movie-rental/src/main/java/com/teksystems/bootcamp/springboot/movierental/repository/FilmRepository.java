package com.teksystems.bootcamp.springboot.movierental.repository;

import com.teksystems.bootcamp.springboot.movierental.model.Film;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FilmRepository extends JpaRepository<Film, Short> {
}
