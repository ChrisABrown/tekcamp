package com.teksystems.bootcamp.thefinalfight.fighters;

import com.teksystems.bootcamp.thefinalfight.Skills;
import javafx.animation.RotateTransition;
import javafx.animation.TranslateTransition;
import javafx.scene.image.ImageView;
import javafx.util.Duration;

public class Sasuke extends Fighter {
  private int chidoriHitPoints;
  private int amaterasuHitPoints;


  public int getChidoriHitPoints() {
    return this.getPrimaryAttackPower();
  }

  public void setChidoriHitPoints() {
    this.chidoriHitPoints = this.getPrimaryAttackPower();
  }

  public int getAmaterasuHitPoints() {
    return this.getSecondaryAttackPower();
  }

  public void setAmaterasuHitPoints() {
    this.amaterasuHitPoints = this.getSecondaryAttackPower();
  }

  public Sasuke(ImageView sprite) {
    super(sprite);
  }


  public void chidori(Naruto naruto){
    animateChidori();
    if(chidoriHitPoints >= naruto.getHealthPoints() * naruto.getDefense()){
      naruto.die();
    } else {
      naruto.setHealthPoints(naruto.getHealthPoints() - chidoriHitPoints);
    }
    setChakraPower(this.getPrimaryAttackPower() - this.getChakraPower());
  }

  public void amaterasu(Naruto naruto){
    if(amaterasuHitPoints >= naruto.getHealthPoints()){
      naruto.die();
    } else {
      naruto.setHealthPoints(naruto.getHealthPoints() - amaterasuHitPoints);
    }
    setChakraPower(this.getSecondaryAttackPower() - this.getChakraPower());
  }

  private void animateChidori() {
    TranslateTransition chidoriAnimation = new TranslateTransition(Duration.millis(100), this.getSprite());
    chidoriAnimation.setByX(-80);
    chidoriAnimation.setCycleCount(2);
    chidoriAnimation.setAutoReverse(true);
    chidoriAnimation.play();
  }




  @Override
  public void setDefense(int defense) {
    super.setDefense(50);
  }

  @Override
  public void setSpeed(int speed) {
    super.setSpeed(8);
  }

  @Override
  public void setChakraPower(int chakraPower) {
    super.setChakraPower(100);
  }

  @Override
  public int setPrimaryAttackPower(int primaryAttackPower) {
    return super.setPrimaryAttackPower((int) (this.getSpeed() * Skills.STUN.getDamageMultiplier() - this.getChakraPower()));
  }

  @Override
  public int setSecondaryAttackPower(int secondaryAttackPower) {
    return super.setSecondaryAttackPower((int) (this.getSpeed() * Skills.FLAME.getDamageMultiplier() - this.getChakraPower()));
  }

  @Override
  public int getPrimaryAttackPower() {
    return super.getPrimaryAttackPower();
  }

  @Override
  public int getSecondaryAttackPower() {
    return super.getSecondaryAttackPower();
  }
}
