package com.teksystems.bootcamp.Order;



public interface Order extends BuildTaco  {
  double getPrice();
  String getName();
  int getQuantity();
  String getTortilla();

}
