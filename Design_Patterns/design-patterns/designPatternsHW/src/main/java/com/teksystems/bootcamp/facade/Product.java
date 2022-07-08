package com.teksystems.bootcamp.facade;

import java.util.ArrayList;

public class Product {
  private String product;
  private final double priceOf;
  private int stock;

  public String getProduct() {
    return product;
  }

  public double getPriceOf() {
    return priceOf;
  }

  public int getStock() {
    return stock;
  }

  public boolean isOutOfStock() {
    return isOutOfStock;
  }

  private final boolean isOutOfStock;

  public Product(String product, double priceOf, int stock, boolean isOutOfStock) {
    this.product = product;
    this.priceOf = priceOf;
    this.stock = 10;
    this.isOutOfStock = isOutOfStock;
  }
  private static final ArrayList<Product> inventory = new ArrayList<Product>();

  public void setInventory(ArrayList<Product> inventory) {
      inventory.add(new Product("Shoes",
              54.99,
              stock--,
              this.isOutOfStock));
      inventory.add(new Product("Hoodie",
              104.99,
              stock--,
              this.isOutOfStock));

    }


  public void selectProduct(){
    System.out.println("selected" + product);
  }

  public static String getInventory() {
    return inventory.toString();
  }

  public void setProduct(String product) {
    this.product = "product";
  }

  @Override
  public String toString() {
    return "Our current inventory holds " + inventory;
  }
}
