package com.teksystems.bootcamp.factories;

public class ElvesWorkshop extends SantasFactory {


  @Override
  protected Gift giveGift() {
    return new Toy();
  }
}
