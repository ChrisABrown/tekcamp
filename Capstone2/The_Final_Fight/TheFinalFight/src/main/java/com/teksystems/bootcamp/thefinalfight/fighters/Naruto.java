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
            healthPoints,
            defense,
            speed,
            chakraPower,
            primaryAttackPower,
            secondaryAttackPower);
    this.rasenganHitPoints = rasenganHitPoints;
    this.rasenshurikenHitPoints = rasenshurikenHitPoints;
  }

  public void rasengan(Sasuke sasuke){
    animateRasengan();
    if(rasenganHitPoints >= sasuke.getHealthPoints() * sasuke.getDefense() ){
      sasuke.die();
    } else {
      sasuke.setHealthPoints(sasuke.getHealthPoints() * sasuke.getDefense() - rasenganHitPoints );
    }
    setChakraPower(this.getPrimaryAttackPower() - this.getChakraPower());
  }

  public void rasenshuriken(Sasuke sasuke){
    if(rasenshurikenHitPoints >= sasuke.getHealthPoints() * sasuke.getDefense()){
      sasuke.die();
    } else {
      sasuke.setHealthPoints(sasuke.getHealthPoints() - rasenshurikenHitPoints);
    }
    setChakraPower(this.getSecondaryAttackPower() - this.getChakraPower());

  }

  private void animateRasengan() {
    TranslateTransition rasenganAnimation = new TranslateTransition(Duration.millis(100), this.getSprite());
    rasenganAnimation.setByX(80);
    rasenganAnimation.setCycleCount(2);
    rasenganAnimation.setAutoReverse(true);
    rasenganAnimation.play();
  }

  public void setRasenganHitPoints(int rasenganHitPoints) {
    this.rasenganHitPoints = this.getPrimaryAttackPower();
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
      throw new IllegalArgumentException("Hit Points for rasengan cannot be negative or greater than 100");
    }
  }

  @Override
  public void setDefense(int defense) {
    super.setDefense(50);
  }

  @Override
  public void setSpeed(int speed) {
    super.setSpeed(10);
  }

  @Override
  public void setChakraPower(int chakraPower) {
    super.setChakraPower(100);
  }

  @Override
  public int setPrimaryAttackPower(int primaryAttackPower) {
    return super.setPrimaryAttackPower((int) (this.getSpeed() * Skills.CUT.getDamageMultiplier() - this.getChakraPower()));
  }

  @Override
  public int setSecondaryAttackPower(int secondaryAttackPower) {
    return super.setSecondaryAttackPower((int) (this.getSpeed() * Skills.SLASH.getDamageMultiplier() - this.getChakraPower()));
  }
}
