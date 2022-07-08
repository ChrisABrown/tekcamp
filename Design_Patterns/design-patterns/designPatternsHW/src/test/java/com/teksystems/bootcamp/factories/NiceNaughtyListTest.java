package com.teksystems.bootcamp.factories;

import org.junit.Test;

import java.util.Arrays;

import static org.junit.Assert.*;

public class NiceNaughtyListTest {

  NiceNaughtyList[] santasList = NiceNaughtyList.values();

  @Test
  public void getIsNice() {
    for (NiceNaughtyList kid: santasList) {
      assertNotNull(santasList);
      System.out.println(kid.name() + " " +  kid.getIsNice());
    }

  }

  @Test
  public void values() {
    if(Arrays.equals(santasList, NiceNaughtyList.values())){
      assertNotNull(santasList);
    }
  }


}