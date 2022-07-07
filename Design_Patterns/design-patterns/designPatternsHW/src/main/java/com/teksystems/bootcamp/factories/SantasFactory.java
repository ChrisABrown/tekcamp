package com.teksystems.bootcamp.factories;


public abstract class SantasFactory {
  private Gift gift;
  private NiceNaughtyList niceNaughtyList;


  public void checkIfNiceOrNaughty(){}



  public abstract Gift buildGift();
}
