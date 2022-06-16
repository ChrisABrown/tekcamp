package com.teksystems.bootcamp.Menu;
import com.teksystems.bootcamp.CombosSidesAndDrinks.Side;
import com.teksystems.bootcamp.Tacos.Taco;


public class Menu {
  public static void displayMenu(){

    System.out.println("========MENU=======\n" + "Entrees\n" + "Sides\n" + "Drinks\n" + "Combos\n");
        Menu.chooseEntree();
        Taco.customizeTaco();
    System.out.println("============COMBOS=============");
        System.out.println("1: A basic taco w/ fries and choice of drink\n" + "2: A deluxe taco w/ chips and queso and choice of drink\n" + "3: A veggie taco w/ fries and choice of drink\n");
    System.out.println("===============================");
    System.out.println("==============SIDES================");
    System.out.println("1: Chips and Queso\n" + "2: Chips and Salsa\n" + "3: Fries\n");
}
  public static void chooseEntree(){
    System.out.println("============ENTREES=============");
    System.out.println("Basic taco: Ground beef in a flour tortilla and your choice of 4 toppings\n" + "Deluxe taco: Steak in a flour tortilla with Shredded lettuce, Tomato, Onion, and Cheese and two additional toppings\n" + "Veggie Taco: Black beans in a corn tortilla with up to 4 toppings\n");

  }

}
