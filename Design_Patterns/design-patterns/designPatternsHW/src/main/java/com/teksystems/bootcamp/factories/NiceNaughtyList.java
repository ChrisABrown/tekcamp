package com.teksystems.bootcamp.factories;


public enum NiceNaughtyList {
  LUCAS(true),
  CHRIS(false),
  BILLY(true),
  MICHELLE(false),
  JOHNNY(true),
  MICHAEL(false),
  SUZIE(true),
  BETH(true),
  TRISHA(true)
  ;
  private boolean isNice;

  NiceNaughtyList(boolean isNice) {
    this.isNice = isNice;
  }



  public boolean getIsNice() {
    return this.isNice;
  }
}
