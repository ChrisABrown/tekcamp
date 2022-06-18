package com.teksystems.bootcamp.CombosSidesAndDrinks;


import com.teksystems.bootcamp.Order.SideOrder;
import com.teksystems.bootcamp.Tacos.Taco;

public class Side extends Taco implements SideOrder {

  private String name;
  private double price;
  public Side(String name, double price, int quantity){
    super(name, price, quantity);
  }

  @Override
  public double getPrice(){
    return price;
  }

  @Override
  public String getName() {
    return name;
  }
}
