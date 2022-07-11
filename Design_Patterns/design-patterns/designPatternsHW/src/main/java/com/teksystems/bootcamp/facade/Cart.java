package com.teksystems.bootcamp.facade;


import java.util.ArrayList;
import java.util.Scanner;

public class Cart  {
  static ArrayList<Product> cart = new ArrayList<Product>();
  protected void addToCart(){
    Scanner selection = new Scanner(System.in);
    System.out.println("Enter product name to add to cart: ");

    String products = selection.nextLine();
    switch(products){
      case "shoes":
      case "Shoes":
      case "Shoe":
      case "shoe":
        if(inventory.get(0).getStock() < 1){
          System.out.println("This item is out of stock, sorry");
        }else{
          cart.add(inventory.get(0));
          inventory.get(0).setStock(inventory.get(0).getStock() - 1);
          System.out.println("added " + inventory.get(0).getProductName() + " to your cart");
        }
        break;
      case "clothes":
      case "Clothes":
      case "cloths":
      case "Cloths":
      case "Cloth":
      case "cloth":
      case "clothe":
      case "Clothe":
        if(inventory.get(1).getStock() < 1){
          System.out.println("This item is out of stock, sorry");
        }else{
          cart.add(inventory.get(1));
          inventory.get(1).setStock(inventory.get(1).getStock() - 1);
          System.out.println("added " + inventory.get(1).getProductName() + " to your cart");
        }
        break;
      case "hats":
      case "Hats":
      case "Hat":
      case "hat":
        if (inventory.get(2).getStock() < 1){
          System.out.println("This item is out of stock, sorry");
        }else{
          cart.add(inventory.get(2));
          inventory.get(2).setStock(inventory.get(2).getStock() - 1);
          System.out.println("added " + inventory.get(2).getProductName() + " to your cart");
        }
        break;
      default:
        System.out.println("Please check your spelling here is our list of items available");
        System.out.println("Enter PRODUCT NAME to add to cart: ");
        getInventory();
        addToCart();
    }
  }
  protected static void viewCart(){
    for (Product product : cart) {
      System.out.println("----------------------------------");
      System.out.println("Product: " + product.getProductName());
      System.out.println("Price: $ " + product.getPriceOf());
    }

  }
  static ArrayList<Product> inventory = new ArrayList<Product>();
  void setInventory() {
    System.out.println("----------------------------------");
    inventory.add(0, new Product("shoes", 49.99, 2));
    inventory.add(1, new Product("clothes", 19.99, 2));
    inventory.add(2, new Product("hats", 9.99, 2));
    System.out.println("--------------Welcome-------------");
    System.out.println("---------to our OnlineShop--------");
    System.out.println("----------------------------------");
  }
  void getInventory() {
    System.out.println("Items we have in stock include: ");
    for(Product item : inventory){
      System.out.println("- " + item.getProductName() + "  $" + item.getPriceOf() + " current stock: " + item.getStock());
    }
    System.out.println("----------------------------------");
  }
}
