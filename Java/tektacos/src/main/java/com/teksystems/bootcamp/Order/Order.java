package com.teksystems.bootcamp.Order;

public interface Order extends BuildTaco {
  double getPrice();
  String getName();
  void getToppings();
  int getQuantity();
  String getTortilla();
}
