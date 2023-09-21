package com.teksystems.bootcamp.thefinalfight.fighters;

import javafx.scene.image.ImageView;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class NarutoTest {
  private Naruto naruto;
  private ImageView sprite;

  @BeforeEach
  void setUp() {
    naruto = new Naruto(sprite,
            100,
            50,
            5,
            100,
            225,
            300);
  }



  @Test
  void setRasenganHitPointsInvalid() {
    try{
      naruto.setRasenshurikenHitPoints(-30);
      fail("negative value in setRasenganHitPoints should throw an exception");
    }
    catch(IllegalArgumentException e){
      System.out.println("caught negative argument in setRasenganHitPoints: "+ e.getMessage());
    }
    catch(Exception e){
      fail("wrong exception thrown for setRasenganHitPoints with negative argument");
    }
  }

  @Test
  void getRasenganHitPoints() {
    naruto.getRasenganHitPoints();
    int expResult = 225;
    assertEquals(expResult, naruto.getRasenganHitPoints());
  }

  @Test
  void getRasenshurikenHitPoints() {
    naruto.getRasenshurikenHitPoints();
    int expResult = 300;
    assertEquals(expResult, naruto.getRasenshurikenHitPoints());
  }

  @Test
  void setRasenshurikenHitPointsInvalid() {
    naruto.setRasenshurikenHitPoints(40000);
    int expResult = 40000;
    assertEquals(expResult, naruto.getRasenshurikenHitPoints());

  }

  @Test
  void setDefense() {
    naruto.setDefense(-55);
    int expResult = -55;
    assertEquals(expResult, naruto.getDefense());
  }

}