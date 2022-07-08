package com.teksystems.bootcamp.facade;

import java.util.ArrayList;

public class Product {
  private Product product;
  private Inventory stock = new Inventory();
  private Payment pay = new Payment();
  private ArrayList<Product> inventory = new ArrayList<>();

  public void setInventory(ArrayList<Product> inventory) {
    if (stock.isOutOfStock()){
      pay.paymentDenied();
      System.out.println("Sorry, there is 0 stock of this product");
    }else{
      inventory.add(product);
    }
  }

  public void selectProduct(){}
}
