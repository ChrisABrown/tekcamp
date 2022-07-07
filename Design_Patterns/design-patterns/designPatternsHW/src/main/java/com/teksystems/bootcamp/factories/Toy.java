package com.teksystems.bootcamp.factories;



public class Toy extends Gift {
  private NiceNaughtyList niceNaughtyList;

  private String toy = " got a toy.";


  @Override
  public String getGift() {
   return niceNaughtyList.name() + toy;
  }
}