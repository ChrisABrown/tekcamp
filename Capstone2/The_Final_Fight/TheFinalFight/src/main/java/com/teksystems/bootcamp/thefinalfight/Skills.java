package com.teksystems.bootcamp.thefinalfight;

public enum Skills {
  STUN('S', .2),
  FLAME('F', .5),
  CUT('C', .2),
  SLASH('L', .3);
private Double damageMultiplier;
private char attribute;


  Skills(char attribute, double damageMultiplier) {
  }

  public Double getDamageMultiplier() {
    return damageMultiplier;
  }
}
