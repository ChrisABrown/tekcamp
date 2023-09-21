package com.teksystems.bootcamp.template;

import org.junit.Test;

import static org.junit.Assert.*;

public class EnchantedForestTest {

  @Test
  public void mainReturnsTheSameStoryForOriginalAndRandomStoryForSwitch() {
    MadlibOriginal madlibOriginal = new MadlibOriginal();
    MadlibSwitch madlibSwitch = new MadlibSwitch();
    String expResult1 = madlibOriginal.enchantedForestStory();
    String expResult2 = madlibSwitch.enchantedForestStory();
    assertEquals(expResult1, madlibOriginal.enchantedForestStory());
    assertNotEquals(expResult2, madlibSwitch.enchantedForestStory());


  }
}