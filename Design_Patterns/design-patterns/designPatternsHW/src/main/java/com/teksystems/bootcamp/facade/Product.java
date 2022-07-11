package com.teksystems.bootcamp.facade;

class Product {
   final String productName;
   final double priceOf;
   int stock;
  protected void setStock(int stock) {
    this.stock = stock;
  }

  public String getProductName() {
    return productName;
  }

  public double getPriceOf() {
    return priceOf;
  }

  public int getStock() {
    return this.stock;
  }

  public Product(String productName, double priceOf, int stock) {
    this.productName = productName;
    this.priceOf = priceOf;
    this.stock = stock;
  }


}
