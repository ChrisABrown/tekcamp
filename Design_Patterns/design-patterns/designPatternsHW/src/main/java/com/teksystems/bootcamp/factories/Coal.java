package com.teksystems.bootcamp.factories;



public class Coal extends Gift {
  private NiceNaughtyList niceNaughtyList;

  private String coal = " got a lump of coal.";


  @Override
  public String getGift() {
  return niceNaughtyList.name() + coal;
  }
}
