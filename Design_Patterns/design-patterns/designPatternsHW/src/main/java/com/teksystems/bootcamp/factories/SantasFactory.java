package com.teksystems.bootcamp.factories;

import java.util.ArrayList;

public abstract class SantasFactory {

ArrayList<Gift> santasSack = new ArrayList<>();

  public SantasFactory() {
    Gift toy1 = giveGift();
    Gift coal1 = giveGift();
    this.santasSack.add(toy1);
    this.santasSack.add(coal1);
  }

  protected abstract Gift giveGift();
}
