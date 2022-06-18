package com.teksystems.bootcamp.Order;

import com.teksystems.bootcamp.CombosSidesAndDrinks.Drink;
import com.teksystems.bootcamp.CombosSidesAndDrinks.Side;
import com.teksystems.bootcamp.Tacos.Fixing;
import com.teksystems.bootcamp.Tacos.Taco;


import static com.teksystems.bootcamp.Tacos.Fixing.*;

public interface Order extends BuildTaco  {
  double getPrice();
  String getName();
  void getToppings();
  int getQuantity();
  String getTortilla();

  String newLine = System.lineSeparator();

  Taco deluxeTaco = new Taco("deluxe taco", 7.99, 2, Order.steak);
  Taco.Tortilla flourTortilla = new Taco.Tortilla( "flour tortilla", 2);
  Taco.Protein steak = new Taco.Protein("grilled steak");
  Side chipsAndQueso = new Side("chips and queso", 4.99, 2);
  Drink coke = new Drink();

  Order newOrder = new Order() {

    @Override
    public double getPrice() {
      return deluxeTaco.getPrice();

    }
    @Override
    public String getName()
    {
      return deluxeTaco.getName();
    }
    @Override
    public void getToppings() {
      for (Fixing fixing : fixings) {
        System.out.println(fixing.getName());
      }
    }
    @Override
    public int getQuantity() {
      return deluxeTaco.getQuantity();
    }
    public String getTortilla() {
      return flourTortilla.getName();
    }


  };

  static void setOrder(){
    System.out.println("===============MY ORDER==============\n");
    System.out.print(newOrder.getQuantity() + " x ");
    System.out.print(newOrder.getName() + " with ");
    Taco.steak.getProteinName();
    System.out.println("on " + newOrder.getQuantity() + " " + newOrder.getTortilla() + " with " + newLine);
    newOrder.setToppings(CHEESE);
    newOrder.setToppings(LETTUCE);
    newOrder.setToppings(TOMATO);
    newOrder.setToppings(ONION);
    newOrder.setToppings(JALAPENOS);
    newOrder.setToppings(SALSA);
    System.out.println(newLine);

    System.out.println(newOrder.getPrice());
    System.out.println("=========================================\n");
  }

}
