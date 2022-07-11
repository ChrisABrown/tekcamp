package com.teksystems.bootcamp.template;

import org.junit.Test;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotEquals;

public class MadlibOriginalTest {

  @Test
  public void getAdjectiveOnlyReturnsAString() {
    MadlibOriginal ogMadLib = new MadlibOriginal();
    String[] adjectives = {"happy", "sad", "angry"};
    String expResult = adjectives[0];
    assertEquals(expResult, ogMadLib.getAdjective(adjectives, 0));
  }

  @Test
  public void getNounShouldNotReturnANumber() {
    MadlibOriginal ogMadLib = new MadlibOriginal();
    String[] nouns = {"person", "place", "thing"};
    Integer[] numbers = {1, 3, 4};
    int failResult = numbers[2];
    assertNotEquals(failResult, ogMadLib.getNoun(nouns, 2));
  }

  @Test
  public void getNumberReturnsANumber() {
    MadlibOriginal ogMadLib = new MadlibOriginal();
    Integer[] numbers = {1, 3, 4};
    int expResult = numbers[2];
    assertEquals(expResult, ogMadLib.getNumber());
  }
}