package com.teksystems.bootcamp.Order;

import com.teksystems.bootcamp.CombosSidesAndDrinks.Drink;
import com.teksystems.bootcamp.CombosSidesAndDrinks.Side;
import com.teksystems.bootcamp.Tacos.Filling;
import com.teksystems.bootcamp.Tacos.Taco;


import static com.teksystems.bootcamp.Tacos.Fixing.*;

public interface Order extends BuildTaco  {
  double getPrice();
  String getName();
  int getQuantity();
  String getTortilla();

//  String newLine = System.lineSeparator();
//
//  Taco deluxeTaco = new Taco("deluxe taco", 7.99, 2);
//  Taco.Tortilla flourTortilla = new Taco.Tortilla( "flour tortilla", 2);
//  Side chipsAndQueso = new Side("chips and queso", 4.99, 2);
//  Drink soda = new Drink("coke", 2.50, 2);
//
//  Order newOrder = new Order() {
//
//    @Override
//    public double getPrice() {
//      return deluxeTaco.getPrice();
//
//    }
//    @Override
//    public String getName()
//    {
//      return deluxeTaco.getName();
//    }
//
//    @Override
//    public int getQuantity() {
//      return deluxeTaco.getQuantity();
//    }
//    public String getTortilla() {
//      return flourTortilla.getName();
//    }
//
//
//  };
//
//  static void setOrder(){
//    System.out.println("===============MY ORDER==============");
//    System.out.println("===============MY ENTREES============");
//    System.out.print(newOrder.getQuantity() + " x ");
//    System.out.print(newOrder.getName() + " with " + Filling.STEAK.getProteinName() + newLine);
//    System.out.println("on " + newOrder.getQuantity() + " " + newOrder.getTortilla() + " with " + newLine);
//    newOrder.setToppings(CHEESE);
//    newOrder.setToppings(LETTUCE);
//    newOrder.setToppings(TOMATO);
//    newOrder.setToppings(ONION);
//    newOrder.setToppings(JALAPENOS);
//    newOrder.setToppings(SALSA);
//    System.out.print(newLine);
//    System.out.println("Entree total: $" + newOrder.getPrice());
//    System.out.println("===============MY SIDES============");
//    System.out.println(chipsAndQueso.getSideQuantity() + " x " + chipsAndQueso.getSideName());
//    System.out.print(newLine);
//    System.out.println("Sides total: $" + chipsAndQueso.getSidePrice());
//    System.out.println("===============MY DRINKS============");
////    System.out.println(soda.);
//    System.out.println("=========================================\n");
//  }

}
