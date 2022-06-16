package com.teksystems.bootcamp.Tacos;


import com.teksystems.bootcamp.Order.Order;

import java.lang.reflect.Array;
import java.util.Arrays;


public class Taco extends Protein implements Order {

  private String name;
  private final double price;
public Taco(String name, double price){
  this.name = name;
  this.price = price;
}

  static Topping choice = new Topping();



  public static void customizeTaco() {
    System.out.println("==============CHOOSE UP TO 4 TOPPINGS===============");
    for (Fixing fixing: choice.fixings) {
      System.out.println(fixing.getName());
    }
    }


  @Override
  public double getPrice() {
    return price;
  }

  @Override
  public String getName() {
    return this.name;
  }

  @Override
  public void getToppings() {
  }

  @Override
  public void setTortilla(String name) {
  }
  public Array[] setProtein() {
    return new Array[0];
  }

  @Override
  public void addToOrder() {

  }
}







