package com.teksystems.bootcamp.Menu;
import com.teksystems.bootcamp.CombosSidesAndDrinks.Side;
import com.teksystems.bootcamp.Tacos.Taco;


public class Menu {
  public static void displayMenu(){
    System.out.println("========MENU=======\n" + "Entrees\n" + "Sides\n" + "Drinks\n" + "Combos\n");
}
  public static void chooseEntree(){
    System.out.println("============ENTREES=============");
    System.out.println("Basic taco: Ground beef in a flour tortilla and your choice of 4 toppings\n" + "Deluxe taco: Steak in a flour tortilla with Shredded lettuce, Tomato, Onion, and Cheese and two additional toppings\n" + "Veggie Taco: Black beans in a corn tortilla with up to 4 toppings\n");

  }

}
