package com.teksystems.bootcamp.thefinalfight.fighters;

import com.teksystems.bootcamp.thefinalfight.Skills;
import javafx.animation.TranslateTransition;
import javafx.scene.image.ImageView;
import javafx.util.Duration;

public class Naruto extends Fighter {

  private int rasenganHitPoints;
  private int rasenshurikenHitPoints;

  public Naruto(ImageView sprite,
                int healthPoints,
                int defense,
                int speed,
                int chakraPower,
                int primaryAttackPower,
                int secondaryAttackPower
                ) {
    super(sprite,
            100,
            50,
            10,
            100,
            30,
            40);
  }

  public void rasengan(Sasuke sasuke){
    animateRasengan();
    if(rasenganHitPoints >= sasuke.getHealthPoints() * sasuke.getDefense() ){
      sasuke.die();
    } else {
      sasuke.setHealthPoints(sasuke.getHealthPoints() * sasuke.getDefense() - rasenganHitPoints );
    }
  }

  public void rasenshuriken(Sasuke sasuke){
    animateRasenshuriken();
    if(rasenshurikenHitPoints >= sasuke.getHealthPoints() * sasuke.getDefense()){
      sasuke.die();
    } else {
      sasuke.setHealthPoints(sasuke.getHealthPoints() - rasenshurikenHitPoints);
    }
  }

  private void animateRasengan() {
    TranslateTransition rasenganAnimation = new TranslateTransition(Duration.millis(100), this.getSprite());
    rasenganAnimation.setByX(80);
    rasenganAnimation.setCycleCount(2);
    rasenganAnimation.setAutoReverse(true);
    rasenganAnimation.play();
  }
  private void animateRasenshuriken() {
    TranslateTransition rasenshurikenAnimation = new TranslateTransition(Duration.millis(100), this.getSprite());
    rasenshurikenAnimation.setByX(80);
    rasenshurikenAnimation.setCycleCount(2);
    rasenshurikenAnimation.setAutoReverse(true);
    rasenshurikenAnimation.play();
  }



  public void setRasenganHitPoints(int rasenganHitPoints) {
    if(rasenganHitPoints > 0 && rasenganHitPoints < 100) {
      this.rasenganHitPoints = this.getPrimaryAttackPower();
    }
    else{
      throw new IllegalArgumentException("Hit Points for rasengan cannot be negative or greater than 100");
    }
  }

  public int getRasenganHitPoints() {
    return this.getPrimaryAttackPower();
  }

  public int getRasenshurikenHitPoints() {
    return this.getSecondaryAttackPower();
  }

  public void setRasenshurikenHitPoints(int rasenshurikenHitPoints) {
    if(rasenshurikenHitPoints > 0 && rasenshurikenHitPoints < 100) {
      this.rasenshurikenHitPoints = this.getSecondaryAttackPower();
    }
    else{
      throw new IllegalArgumentException("Hit Points for Rasenshuriken cannot be negative or greater than 100");
    }
  }

  @Override
  public void setDefense(int defense) {
    if(defense < 100 && defense > 0){
      this.setDefense(getDefense());
    }
    else{
      throw new IllegalArgumentException("Defense cannot be more than 100 or negative");
    }
  }

  @Override
  public void setSpeed(int speed) {
    if(speed <= 10 && speed > 0){
    this.setSpeed(getSpeed());
    }
    else {
      throw new IllegalArgumentException("speed cannot be more than 10 or negative");
    }
  }

  @Override
  public void setChakraPower(int chakraPower) {
    if(chakraPower <= 101 && chakraPower > 0){
    this.setChakraPower(getChakraPower());
    }else{
      throw new IllegalArgumentException("chakraPower cannot be more than 100 or negative");
    }
  }

  @Override
  public int setPrimaryAttackPower(int primaryAttackPower) {
    return super.setPrimaryAttackPower((int) (this.getChakraPower() * Skills.CUT.getDamageMultiplier() + this.getSpeed()));
  }

  @Override
  public int setSecondaryAttackPower(int secondaryAttackPower) {
    return super.setSecondaryAttackPower((int) (this.getChakraPower() * Skills.SLASH.getDamageMultiplier() + this.getSpeed()));
  }
}
