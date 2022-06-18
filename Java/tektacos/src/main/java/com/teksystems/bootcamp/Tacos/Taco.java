package com.teksystems.bootcamp.Tacos;


import com.teksystems.bootcamp.Order.Order;

import java.util.Arrays;


public class Taco implements Order {
  protected final String name;
  protected final double price;
  private final int quantity;
public Taco(String name, double price, int quantity){
  this.name = name;
  this.price = quantity * price;
  this.quantity = quantity;
}
  public static class Tortilla {
    private static String name;
    private static int quantity;

    public Tortilla(String name, int quantity) {
      Tortilla.name = name;
      Tortilla.quantity = quantity;
    }
    public String getName() {
      if (quantity >= 2) {
        name = "flour tortillas";
      }
      return name;
    }
  }
  public static class Topping {
    public static Fixing[] fixings = Fixing.values();

  }
  public static class Protein {
    private String name;

    public void setChoices(String[] choices) {

    }
  }
  public int getQuantity() {
    return quantity;
  }
  @Override
  public String getTortilla() {
    return Taco.Tortilla.name;
  }
  public static void customizeTaco() {
    System.out.println("==============CHOOSE UP TO 4 TOPPINGS===============");
    for (Fixing fixing: Topping.fixings) {
      System.out.println(fixing.getName() + "\n");
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
  public void setTortilla() {

  }
  @Override
  public void setToppings() {

  }
}







