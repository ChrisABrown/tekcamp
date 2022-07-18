package com.teksystems.bootcamp.factories;

import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;

public class SantasFactoryTest {



  @Test
  public void niceKidsGetAToyNaughtyKidsGetCoal() {
    NiceNaughtyList[] santasList = NiceNaughtyList.values();
    for (NiceNaughtyList kid: santasList){
      if (kid.getIsNice()){
        assertTrue("kid gets a toy", true);
      }else{
        assertFalse("kid gets coal", false);
      }

    }
  }
}