package com.teksystems.bootcamp.CombosSidesAndDrinks;


import com.teksystems.bootcamp.Order.DrinkOrder;
import com.teksystems.bootcamp.Order.Order;
import com.teksystems.bootcamp.Order.SideOrder;
import com.teksystems.bootcamp.Tacos.Filling;
import com.teksystems.bootcamp.Tacos.Fixing;

public class Combo implements DrinkOrder, SideOrder, Order {



  public static void chooseCombo(){
    System.out.println("============COMBOS=============");
    System.out.println("1: A basic taco w/ fries and choice of drink\n" + "2: A deluxe taco w/ chips and queso and choice of drink\n" + "3: A veggie taco w/ fries and choice of drink\n");
    System.out.println("===============================");
  }

  @Override
  public void setToppings(Fixing fixing) {
    Order.super.setToppings(fixing);
  }

  @Override
  public void setProtein(Filling filling) {
    Order.super.setProtein(filling);
  }

  @Override
  public void getDrink(String drinkName, double drinkQuantity) {
    DrinkOrder.super.getDrink(drinkName, drinkQuantity);
  }

  @Override
  public double getPrice() {
    return 0;
  }

  @Override
  public String getName() {
    return null;
  }

  @Override
  public int getQuantity() {
    return 0;
  }

  @Override
  public String getTortilla() {
    return null;
  }

  @Override
  public double getSidePrice() {
    return 0;
  }

  @Override
  public String getSideName() {
    return null;
  }
}

