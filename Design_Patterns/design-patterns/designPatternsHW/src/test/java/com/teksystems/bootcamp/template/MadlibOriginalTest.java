package com.teksystems.bootcamp.template;

import org.junit.Test;

import static org.junit.Assert.*;

public class MadlibOriginalTest {

  @Test
  public void getAdjective(String[] x, int index) {
    String str = "";
    String expResult = "";
    for (int i = 0; i < x.length; i++) {
      if (i == index){
        x[i] == expResult;
      }
    }
  }

  @Test
  public void getNoun() {
  }

  @Test
  public void getNumber() {
  }
}