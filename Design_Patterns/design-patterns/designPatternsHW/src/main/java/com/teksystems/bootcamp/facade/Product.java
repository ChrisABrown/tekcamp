package com.teksystems.bootcamp.facade;

public class Product implements Inventory{
  private static Product product;
  private String productName;

  private final double priceOf;

  private int stock;

  public static Product getProduct() {
    return product;
  }

  public static void setProduct(Product product) {
    Product.product = product;
  }

  public void setProductName(String productName) {
    this.productName = productName;
  }

  public void setStock(int stock) {
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

  public boolean isOutOfStock() {
    return isOutOfStock;
  }

  public void setOutOfStock(boolean outOfStock) {
    isOutOfStock = outOfStock;
  }

  private boolean isOutOfStock;

  public Product(String productName, double priceOf, int stock, boolean isOutOfStock) {
    this.productName = productName;
    this.priceOf = priceOf;
    this.stock = stock;
    this.isOutOfStock = isOutOfStock;
  }

  @Override
  public void checkInventory() {

  }
}
