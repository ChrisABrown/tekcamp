package com.teksystems.bootcamp.Tacos;

public enum Fixing {
  LETTUCE("shredded lettuce"),
  TOMATO("sliced tomatoes"),
  ONION("chopped white onion"),
  CHEESE("cheddar jack cheese"),
  SALSA("salsa verde"),
  CILANTRO("chopped cilantro"),
  JALAPENOS("pickled jalapenos");

  private String name;
  Fixing(String name){
    this.name = name;
  }

  public String getName() {
    return name;
  }
}

