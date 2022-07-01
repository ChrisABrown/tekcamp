package com.teksystems.bootcamp.thefinalfight.fighters;

import com.teksystems.bootcamp.thefinalfight.Skills;
import javafx.animation.TranslateTransition;
import javafx.scene.image.ImageView;
import javafx.util.Duration;

public class Naruto extends Fighter {

  private int rasenganHitPoints;
  private int rasenshurikenHitPoints;

  public Naruto(ImageView sprite) {
    super(sprite);
  }


  public void rasengan(Sasuke sasuke){
    animateRasengan();
    if(getRasenganHitPoints() >= sasuke.getHealthPoints() * sasuke.getDefense() ){
      sasuke.die();
    } else {
      sasuke.setHealthPoints(sasuke.getHealthPoints() * sasuke.getDefense() - getRasenganHitPoints() );
    }
    setChakraPower(this.getPrimaryAttackPower() - this.getChakraPower());
  }


  private void animateRasengan() {
    TranslateTransition rasenganAnimation = new TranslateTransition(Duration.millis(100), this.getSprite());
    rasenganAnimation.setByX(80);
    rasenganAnimation.setCycleCount(2);
    rasenganAnimation.setAutoReverse(true);
    rasenganAnimation.play();
  }
  public void setRasenganHitPoints() {
    this.rasenganHitPoints = this.getPrimaryAttackPower();
  }

  public int getRasenganHitPoints() {
    return this.getPrimaryAttackPower();
  }

  public int getRasenshurikenHitPoints() {
    return this.getSecondaryAttackPower();
  }

  public void setRasenshurikenHitPoints() {
    this.rasenshurikenHitPoints = this.getSecondaryAttackPower();
  }

  public void rasenshuriken(Sasuke sasuke){
    if(rasenshurikenHitPoints >= sasuke.getHealthPoints() * sasuke.getDefense()){
      sasuke.die();
    } else {
      sasuke.setHealthPoints(sasuke.getHealthPoints() - rasenshurikenHitPoints);
    }
    setChakraPower(this.getSecondaryAttackPower() - this.getChakraPower());

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
