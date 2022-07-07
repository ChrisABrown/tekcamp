package com.teksystems.bootcamp.factories;

public class ElvesWorkshop extends SantasFactory {
  private Gift gift;
  private NiceNaughtyList niceNaughtyList;

  @Override
  public void checkIfNiceOrNaughty() {
    if(niceNaughtyList.isNice()){
      this.buildGift();
    }
  }

  @Override
  public Gift buildGift() {
    return new Toy();
  }
}
