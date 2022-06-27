package com.teksystems.bootcamp.thefinalfight.fighters;

import com.teksystems.bootcamp.thefinalfight.Fight;

public abstract class Fighter implements Fight {
  private String name;
  private int speed;
  private int direction;
  private int power;

  public Fighter(String name, int speed, int direction, int power) {
    this.name = name;
    this.speed = speed;
    this.direction = direction;
    this.power = power;
  }


  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public int getHealthPoints() {
    return 1000;
  }

  public int getSpeed() {
    return speed;
  }

  public void setSpeed(int speed) {
    this.speed = speed;
  }

  public int getDirection() {
    return direction;
  }

  public void setDirection(int direction) {
    this.direction = direction;
  }

  public int getPower() {
    return power;
  }

  public void setPower(int power) {
    this.power = power;
  }

  public int getGrabHitPoints() {
    return 130;
  }

  public int getSpecialMoveHitPoints() {
    return 150;
  }

  public int getSuperSpecialHitPoints() {
    return 300;
  }
}
