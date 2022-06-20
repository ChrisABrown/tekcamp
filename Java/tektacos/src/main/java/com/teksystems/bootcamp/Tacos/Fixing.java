package com.teksystems.bootcamp.Tacos;


public enum Fixing {
  LETTUCE("shredded lettuce"),
  TOMATO("sliced tomatoes"),
  ONION("chopped white onion"),
  CHEESE("cheddar jack cheese"),
  SALSA("salsa verde"),
  CILANTRO("chopped cilantro"),
  JALAPENOS("pickled jalapenos");

  private final String name;
  Fixing(String name){
    this.name = name;
  }
  public static final Fixing[] fixings = Fixing.values();


  public String getName() {
    return name;
  }


}


