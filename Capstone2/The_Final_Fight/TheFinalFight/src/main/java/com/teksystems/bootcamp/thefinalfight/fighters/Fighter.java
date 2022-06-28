package com.teksystems.bootcamp.thefinalfight.fighters;

import javafx.scene.image.ImageView;

public abstract class Fighter {
  private final ImageView sprite;

  public Fighter(ImageView sprite) {
    this.sprite = sprite;
  }

  public ImageView getSprite() {
    return sprite;
  }

  public int getHealthPoints() {
    int healthPoints = 1000;
    return healthPoints;
  }
}
