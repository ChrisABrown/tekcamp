package com.teksystems.bootcamp.factories;



public class Toy implements Gift {

  private String toy = " got a toy.";


  @Override
  public String getGift() {
   return toy;
  }
}