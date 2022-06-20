package com.teksystems.bootcamp.Tacos;


import com.teksystems.bootcamp.Order.Order;

import static com.teksystems.bootcamp.Tacos.Fixing.fixings;


public class Taco implements Order{
  private final String name;
  private final double price;
  private final int quantity;
  public static int fixingMax = fixings.length - 1;

  public Taco(String name, double price, int quantity, Filling filling, Fixing[] fixing){
  this.name = name;
    this.price = quantity * price ;
  this.quantity = quantity;
  }
  @Override
  public void setToppings(Fixing fixing) {
  }

  public static class Tortilla {
    private static String name;
    private static int quantity;

    public Tortilla(String name, int quantity) {
      Tortilla.name = name;
      Tortilla.quantity = quantity;
    }

  }



  public int getQuantity() {

    return quantity;
  }
  @Override
  public String getTortilla() {
    if (quantity >= 2) {
      Tortilla.name = "flour tortillas";
    }
    return Taco.Tortilla.name;
  }
  @Override
  public double getPrice() {
    return price;
  }
  @Override
  public String getName() {
    return this.name;
  }


}







