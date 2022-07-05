package com.teksystems.bootcamp.factories;

public enum NaughtyNiceList {


  BUBBA(true),
  CHRIS(false),
  CRYSTAL(true),
  JOHNATHAN(true),
  LUCAS(true),
  VANESSA(false);

  private boolean isNice;

  NaughtyNiceList(boolean isNice) {
    this.isNice = isNice;
  }




}
