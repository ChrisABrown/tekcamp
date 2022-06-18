package com.teksystems.bootcamp.Tacos;


import com.teksystems.bootcamp.Order.Order;



public class Taco implements Order{
  protected final String name;
  protected final double price;
  private final int quantity;
public Taco(String name, double price, int quantity, Protein protein){
  this.name = name;
  this.price = quantity * price;
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
    public String getName() {
      if (quantity >= 2) {
        name = "flour tortillas";
      }
      return name;
    }
  }
  public static class Protein {
    private String proteinName;
    public Protein(String proteinName) {
      this.proteinName = proteinName;
    }

    public void getProteinName() {
      System.out.println(proteinName);
    }
  }
  public int getQuantity() {
    return quantity;
  }
  @Override
  public String getTortilla() {
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

  @Override
  public void getToppings() {}



}







