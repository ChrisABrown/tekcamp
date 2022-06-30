package com.teksystems.bootcamp.thefinalfight;

import com.teksystems.bootcamp.thefinalfight.fighters.Fighter;
import com.teksystems.bootcamp.thefinalfight.fighters.Naruto;
import com.teksystems.bootcamp.thefinalfight.fighters.Sasuke;
import javafx.scene.image.ImageView;

public class Player extends Fighter {
  private static Player player;
  private CPU cpu;


  public Player(ImageView sprite) {
    super(sprite);
  }


}