package com.teksystems.bootcamp.thefinalfight.fighters;

import com.teksystems.bootcamp.thefinalfight.Skills;
import javafx.animation.TranslateTransition;
import javafx.scene.image.ImageView;
import javafx.util.Duration;

public class Sasuke extends Fighter {
  private int chidoriHitPoints;
  private int amaterasuHitPoints;

  public Sasuke(ImageView sprite,
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
            8,
            100,
            28,
            58);
  }

  public int getChidoriHitPoints() {
    return this.getPrimaryAttackPower();
  }

  public void setChidoriHitPoints() {
    if(chidoriHitPoints > 0 && chidoriHitPoints < 100) {
      this.chidoriHitPoints = this.getPrimaryAttackPower();
    }
    else{
      throw new IllegalArgumentException("Hit Points for chidori cannot be negative or greater than 100");
    }
  }

  public int getAmaterasuHitPoints() {
    return this.getSecondaryAttackPower();
  }

  public void setAmaterasuHitPoints() {
    if(amaterasuHitPoints > 0 && amaterasuHitPoints < 100) {
      this.amaterasuHitPoints = this.getPrimaryAttackPower();
    }
    else{
      throw new IllegalArgumentException("Hit Points for amaterasu cannot be negative or greater than 100");
    }
  }



  public void chidori(Naruto naruto){
    animateChidori();
    if(getChidoriHitPoints() >= naruto.getHealthPoints() * naruto.getDefense()){
      naruto.die();
    } else {
      naruto.setHealthPoints(naruto.getHealthPoints() - getChidoriHitPoints());
    }
  }

  public void amaterasu(Naruto naruto){
    animateAmaterasu();
    if(getAmaterasuHitPoints() >= naruto.getHealthPoints()){
      naruto.die();
    } else {
      naruto.setHealthPoints(naruto.getHealthPoints() - getAmaterasuHitPoints());
    }
  }

  private void animateChidori() {
    TranslateTransition chidoriAnimation = new TranslateTransition(Duration.millis(100), this.getSprite());
    chidoriAnimation.setByX(-80);
    chidoriAnimation.setCycleCount(2);
    chidoriAnimation.setAutoReverse(true);
    chidoriAnimation.play();
  }
  private void animateAmaterasu() {
    TranslateTransition amaterasuAnimation = new TranslateTransition(Duration.millis(100), this.getSprite());
    amaterasuAnimation.setByX(-80);
    amaterasuAnimation.setCycleCount(2);
    amaterasuAnimation.setAutoReverse(true);
    amaterasuAnimation.play();
  }


  @Override
  public void setDefense(int defense) {
    if(defense < 100 && defense > 0){
      this.setDefense(this.getDefense());
    }
    else{
      throw new IllegalArgumentException("Defense cannot be more than 100 or negative");
    }
  }

  @Override
  public void setSpeed(int speed) {
    if(speed <= 10 && speed > 0){
      this.setSpeed(this.getSpeed());
    }
    else {
      throw new IllegalArgumentException("speed cannot be more than 10 or negative");
    }
  }

  @Override
  public void setChakraPower(int chakraPower) {
    if(chakraPower <= 101 && chakraPower > 0){
      this.setChakraPower(this.getChakraPower());
    }else{
      throw new IllegalArgumentException("chakraPower cannot be more than 100 or negative");
    }
  }

  @Override
  public int setPrimaryAttackPower(int primaryAttackPower) {
    return super.setPrimaryAttackPower((int) (this.getChakraPower() * Skills.STUN.getDamageMultiplier() + this.getSpeed()));
  }

  @Override
  public int setSecondaryAttackPower(int secondaryAttackPower) {
    return super.setSecondaryAttackPower((int) (this.getChakraPower() * Skills.FLAME.getDamageMultiplier() + this.getSpeed()));
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
