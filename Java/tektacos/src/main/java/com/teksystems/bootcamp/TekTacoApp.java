package com.teksystems.bootcamp;

import com.teksystems.bootcamp.CombosSidesAndDrinks.Side;
import com.teksystems.bootcamp.Menu.Menu;
import com.teksystems.bootcamp.Tacos.Taco;
import com.teksystems.bootcamp.Order.Order;



public class TekTacoApp {
	public static void main(String[] args) {
		Taco deluxeTaco = new Taco("deluxe taco", 7.99, 2);
		Side chipsAndQueso = new Side("chips and queso", 4.99, 2);
		Taco.Tortilla flourTortilla = new Taco.Tortilla( "flour tortilla", 2);
		Taco.Topping choice = new Taco.Topping();


		Order newOrder = new Order() {
			@Override
			public void setTortilla() {

			}

			@Override
			public void setToppings() {

			}

			@Override
			public double getPrice() {
				return deluxeTaco.getPrice();

			}
			@Override
			public String getName() {
				return (deluxeTaco.getName());
			}
			@Override
			public void getToppings() {
				System.out.println(Taco.Topping.fixings[0].getName());
				System.out.println(Taco.Topping.fixings[1].getName());
				System.out.println(Taco.Topping.fixings[2].getName());
				System.out.println(Taco.Topping.fixings[3].getName());
			}
			@Override
			public int getQuantity() {
				return deluxeTaco.getQuantity();
			}
			public String getTortilla() {
				return flourTortilla.getName();
			}
		};
		System.out.println("========WELCOME TO TEK TACOS!=========\n");
		Menu.displayMenu();
		System.out.println("=====================MY ORDER====================\n");
		System.out.print(newOrder.getQuantity() + "x ");
		System.out.print(newOrder.getName() + "\n");
		System.out.println();
		System.out.println("on " + newOrder.getQuantity() + " " + newOrder.getTortilla() + " with \n ");
		newOrder.getToppings();
		System.out.println(newOrder.getPrice());
		System.out.println("=========================================\n");
	}
}