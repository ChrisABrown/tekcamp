package com.teksystems.bootcamp.factories;



public class ElvesWorkshop extends SantasFactory {



  @Override
  public Gift buildGift(boolean isNice) {
    if (isNice) {
      return new Toy();
    }else{
      return new Coal();
    }
  }
}


