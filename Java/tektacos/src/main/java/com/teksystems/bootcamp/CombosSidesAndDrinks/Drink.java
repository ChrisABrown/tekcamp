package com.teksystems.bootcamp.CombosSidesAndDrinks;

import com.teksystems.bootcamp.Order.DrinkOrder;

public class Drink implements DrinkOrder {

  public Drink(String drinkName, double drinkPrice, int drinkQuantity) {
  }
  public void getDrink(String drinkName, int drinkQuantity) {
    DrinkOrder.super.getDrink(drinkName, drinkQuantity);
    System.out.println(drinkQuantity + " x " + drinkName + "\n" );
  }
   public double getDrinkPrice(double drinkPrice, int drinkQuantity) {
  double drinkTotal = drinkPrice * drinkQuantity;
  System.out.println("Drinks total: $" + String.format("%.2f", drinkTotal));
  return drinkTotal;
 }
}
