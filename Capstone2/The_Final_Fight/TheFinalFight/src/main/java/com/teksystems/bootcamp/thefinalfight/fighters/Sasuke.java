package com.teksystems.bootcamp.thefinalfight.fighters;

import javafx.scene.image.ImageView;

public class Sasuke extends Fighter {
  private int chidoriHitPoints = 30;
  private int amaterasuHitPoints = 10;

  public Sasuke(ImageView sprite) {
    super(sprite);
  }


  public void chidori(Naruto naruto){
    if(chidoriHitPoints >= naruto.getHealthPoints()){
      naruto.die();
    } else {
      naruto.setHealthPoints(naruto.getHealthPoints() - chidoriHitPoints);
    }
  }

  public void amaterasu(Naruto naruto){
    if(amaterasuHitPoints >= naruto.getHealthPoints()){
      naruto.die();
    } else {
      naruto.setHealthPoints(naruto.getHealthPoints() - amaterasuHitPoints);
    }
  }
}
