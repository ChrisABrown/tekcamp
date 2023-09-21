package com.teksystems.bootcamp.template;

import org.junit.Test;

import java.util.Random;

import static com.teksystems.bootcamp.template.MadlibOriginal.adjectives;
import static org.junit.Assert.*;

public class MadlibSwitchTest {

  @Test
  public void getAdjectiveReturnsARandomAdjective() {
    MadlibSwitch madlibSwitch = new MadlibSwitch();
    String expResult = madlibSwitch.getAdjective(adjectives, 0);
//    same method should produce different results
    assertNotEquals(expResult, madlibSwitch.getAdjective(adjectives, 0));
  }
}



