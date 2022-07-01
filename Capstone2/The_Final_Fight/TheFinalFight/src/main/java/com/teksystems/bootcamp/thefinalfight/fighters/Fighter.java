package com.teksystems.bootcamp.thefinalfight.fighters;

import javafx.scene.image.ImageView;

public abstract class Fighter {
  private final ImageView sprite;
  private int healthPoints = 100;

  public Fighter(ImageView sprite, int healthPoints, int defense, int speed, int chakraPower, int primaryAttackPower, int secondaryAttackPower) {
    this.sprite = sprite;
    this.healthPoints = healthPoints;
    this.defense = defense;
    this.speed = speed;
    this.chakraPower = chakraPower;
    this.primaryAttackPower = primaryAttackPower;
    this.secondaryAttackPower = secondaryAttackPower;
  }

  private int defense;
  private int speed;
  private int chakraPower;

  private int primaryAttackPower;
  private int secondaryAttackPower;



  public int getDefense() {
    return defense;
  }

  public void setDefense(int defense) {
    this.defense = defense;
  }

  public int getSpeed() {
    return speed;
  }

  public void setSpeed(int speed) {
    this.speed = speed;
  }

  public int getChakraPower() {
    return chakraPower;
  }

  public void setChakraPower(int chakraPower) {
    this.chakraPower = chakraPower;
  }




  public int getPrimaryAttackPower() {
    return primaryAttackPower;
  }

  public int setPrimaryAttackPower(int primaryAttackPower) {
    return primaryAttackPower;
  }

  public int getSecondaryAttackPower() {
    return secondaryAttackPower;
  }

  public int setSecondaryAttackPower(int secondaryAttackPower) {
    return this.secondaryAttackPower;
  }

  public ImageView getSprite() {
    return sprite;
  }

  public int getHealthPoints() {
     return this.healthPoints;
  }

  public void setHealthPoints(int healthPoints) {
    this.healthPoints = healthPoints;
  }
  public void die(){
    setHealthPoints(0);
  }

}
