package com.teksystems.bootcamp.thefinalfight;

import com.teksystems.bootcamp.thefinalfight.fighters.Fighter;
import com.teksystems.bootcamp.thefinalfight.fighters.Naruto;
import com.teksystems.bootcamp.thefinalfight.fighters.Sasuke;
import javafx.scene.image.ImageView;

public class CPU extends Fighter {

  private Naruto naruto;
  private Sasuke sasuke;

  public void setCPU(CPU cpu) {
  }
  public CPU(ImageView sprite){
    super(sprite);
  }
}
