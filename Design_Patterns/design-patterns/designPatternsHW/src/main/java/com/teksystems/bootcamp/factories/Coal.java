package com.teksystems.bootcamp.factories;

public class Coal extends Gift {
  private String coal;
  private NiceNaughtyList niceNaughtyList;


  @Override
  public String getGift(Gift gift) {
    if(niceNaughtyList.equals(NiceNaughtyList.valueOf(toString()))){

    }
    return coal;
  }
}
