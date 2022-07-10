package com.teksystems.bootcamp.facade;


import java.util.ArrayList;
import java.util.Scanner;

public class Cart implements Inventory {
  ArrayList<Product> cart = new ArrayList<Product>();

  public void addToCart(){
    Scanner selection = new Scanner(System.in);
    System.out.println("Enter product name or number to add to cart: ");

    String products = selection.nextLine();
    int numbers = selection.nextInt();

    switch(products, numbers){
      case "shoes":
      case "Shoes":
      case 1:
        cart.add(inventory.get(0));
        inventory.get(0).setStock(inventory.get(0).getStock() - 1);
        System.out.println("added " + inventory.get(0).getProductName() + " to your cart");
        break;
      case "clothes":
      case "Clothes":
      case "cloths":
      case "Cloths":
        cart.add(inventory.get(1));
        inventory.get(1).setStock(inventory.get(1).getStock() - 1);
        System.out.println("added " + inventory.get(1).getProductName() + " to your cart");

        break;
      case "hats":
      case "Hats":
        cart.add(inventory.get(2));
        inventory.get(2).setStock(inventory.get(2).getStock() - 1);
        System.out.println("added " + inventory.get(2).getProductName() + " to your cart");
        break;
      default:
        System.out.println("Please check your spelling here is our list of items available");
        getInventory();
    }
  }

  @Override
  public String toString() {
    return "Your cart contains " + cart.toString();
  }
  static ArrayList<Product> inventory = new ArrayList<Product>();
  public void setInventory() {
    System.out.println("----------------------------------");
    inventory.add(0, new Product("shoes", 49.99, 2, false));
    inventory.add(1, new Product("clothes", 19.99, 2, false));
    inventory.add(2, new Product("hats", 9.99, 2, false));
    System.out.println("--------------Welcome-------------");
  }

  public void getInventory() {
    System.out.println("---------to our OnlineShop--------");
    System.out.println("----------------------------------");

    System.out.println("Items we have in stock include: ");
    for(Product item : inventory){
      System.out.println("- " +item.getProductName() + "  $" + item.getPriceOf() + " current stock: " + item.getStock());
    }
    System.out.println("----------------------------------");
  }

  @Override
  public void checkInventory() {
    if(!inventory.isEmpty()){
      for (Product item: inventory) {
        item.setOutOfStock(false);
      }
    }else{
      System.out.println("Unfortunately, the product you selected is out of stock");
    }
  }

}
