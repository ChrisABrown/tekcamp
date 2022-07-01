package com.teksystems.bootcamp.thefinalfight.fighters;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class FighterTest {
  private Fighter fighter;

  @BeforeEach
  void setUp() throws Exception{
    fighter = new Fighter() {
      @Override
      public int getHealthPoints() {
        return super.getHealthPoints();
      }

      @Override
      public void setHealthPoints(int healthPoints) {
        super.setHealthPoints(healthPoints);
      }

      @Override
      public void die() {
        super.die();
      }
    };
  }

  @Test
  void getSprite() {
  }

  @Test
  void getHealthPoints() {
  }

  @Test
  void setHealthPoints() {
  }

  @Test
  void die() {
  }
}