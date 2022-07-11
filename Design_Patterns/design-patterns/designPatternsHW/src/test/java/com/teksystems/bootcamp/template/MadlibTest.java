package com.teksystems.bootcamp.template;

import org.junit.Test;

import static org.junit.Assert.*;

public class MadlibTest {

  @Test
  public void enchantedForestStory() {
    Madlib madlib = new Madlib() {

      @Override
      public String getProperNoun() {
        return null;
      }

      @Override
      public String getAdjective(String[] x, int index) {
        return null;
      }

      @Override
      public String getColor() {
        return null;
      }

      @Override
      public String getAnimal() {
        return null;
      }

      @Override
      public String getPlace() {
        return null;
      }

      @Override
      public String getPluralMagicalCreature(String[] x, int index) {
        return null;
      }

      @Override
      public String getRoomInAHouse() {
        return null;
      }

      @Override
      public String getNoun(String[] x, int index) {
        return null;
      }

      @Override
      public String getPluralNoun() {
        return null;
      }

      @Override
      public int getNumber() {
        return 0;
      }

      @Override
      public String getMeasureOfTime() {
        return null;
      }

      @Override
      public String getVerbEndingInIng() {
        return null;
      }
    };
  assertNotNull(madlib.enchantedForestStory());
  }
}