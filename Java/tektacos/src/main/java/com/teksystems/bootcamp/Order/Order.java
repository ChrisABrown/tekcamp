package com.teksystems.bootcamp.Order;

import java.lang.reflect.Array;

public interface Order {
  double getPrice();
  String getName();
  void getToppings();

  void setTortilla(String name);
  Array[] setProtein();
  void addToOrder();
}
