package com.teksystems.bootcamp.thefinalfight.fighters;

import javafx.scene.image.ImageView;

public class Naruto extends Fighter {
  private int rasenganHitPoints = 25 ;
  private int rasenshurikenHitPoints = 50;

  public Naruto(ImageView sprite) {
    super(sprite);
  }


  public void rasengan(Sasuke sasuke){
    if(rasenganHitPoints >= sasuke.getHealthPoints() ){
      sasuke.die();
    } else {
      sasuke.setHealthPoints(sasuke.getHealthPoints() - rasenganHitPoints );
    }
  }

  public void rasenshuriken(Sasuke sasuke){
    if(rasenshurikenHitPoints >= sasuke.getHealthPoints()){
      sasuke.die();
    } else {
      sasuke.setHealthPoints(sasuke.getHealthPoints() - rasenshurikenHitPoints);
    }
  }

}
