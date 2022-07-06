package com.teksystems.bootcamp.factories;


import static com.teksystems.bootcamp.factories.NiceNaughtyList.santasList;

public class Toy extends Gift {

  private String toy = " got a toy.";
  private String coal = " got a lump of coal.";
  @Override
  public String getGift() {
    for (NiceNaughtyList niceNaughtyList: santasList) {
      if (niceNaughtyList.isNice()){
        return niceNaughtyList.name() + toy;
      }

    }
    return null;
  }

}