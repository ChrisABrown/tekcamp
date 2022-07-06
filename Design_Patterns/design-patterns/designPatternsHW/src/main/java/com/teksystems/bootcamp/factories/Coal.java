package com.teksystems.bootcamp.factories;


import static com.teksystems.bootcamp.factories.NiceNaughtyList.santasList;

public class Coal extends Gift {
  private String coal = " got a lump of coal.";
  private String toy = " got a toy.";

  @Override
  public String getGift() {
    for (NiceNaughtyList niceNaughtyList : santasList) {
      if (!niceNaughtyList.isNice()) {
        return niceNaughtyList.name() + coal;
      }
    }
    return toy;
  }
}
