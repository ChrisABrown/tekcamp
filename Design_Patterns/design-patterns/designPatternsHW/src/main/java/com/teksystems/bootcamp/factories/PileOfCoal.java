package com.teksystems.bootcamp.factories;

public class PileOfCoal extends SantasFactory{
  @Override
  protected Gift giveGift() {
    return new Coal();
  }
}
