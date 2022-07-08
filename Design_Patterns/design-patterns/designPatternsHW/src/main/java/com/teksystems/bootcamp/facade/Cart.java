package com.teksystems.bootcamp.facade;

import java.util.ArrayList;

public class Cart {
  private Product product = new Product("Hoodie",
          104.99,
          10,
          false);
  ArrayList<Product> cart = new ArrayList<Product>();


  public void checkInventory(){
    System.out.println(Product.getInventory());  }
  public boolean isOutOfStock(){
    return Product.getInventory().isEmpty();
  }
  public void addToCart(){
    cart.add(new Product(product.getProduct(),
            product.getPriceOf(),
            product.getStock(),
            product.isOutOfStock()));
    System.out.println("added a product to the cart");
  }

  public String viewCart(){
    return this.toString();
  }

  @Override
  public String toString() {

    return "Your cart contains " + product.getProduct() +
            "for " + product.getPriceOf();
  }
}
