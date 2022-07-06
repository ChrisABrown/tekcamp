package com.teksystems.bootcamp.factories;


public abstract class SantasFactory {


  public Gift createGift(){
    Gift gft = giveGift();

    gft.getGift();

    return gft;
  }

  protected abstract Gift giveGift();
}
