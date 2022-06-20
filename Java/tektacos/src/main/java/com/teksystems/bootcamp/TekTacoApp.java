package com.teksystems.bootcamp;

import com.teksystems.bootcamp.CombosSidesAndDrinks.Combo;
import com.teksystems.bootcamp.CombosSidesAndDrinks.Drink;
import com.teksystems.bootcamp.CombosSidesAndDrinks.Side;
import com.teksystems.bootcamp.Menu.Menu;
import com.teksystems.bootcamp.Order.Order;
import com.teksystems.bootcamp.Tacos.Filling;
import com.teksystems.bootcamp.Tacos.Taco;

import static com.teksystems.bootcamp.Tacos.Fixing.*;
import static com.teksystems.bootcamp.Tacos.Fixing.SALSA;


public class TekTacoApp {

	static String newLine = System.lineSeparator();

	static Taco deluxeTaco = new Taco("deluxe taco", 7.99, 2, Filling.STEAK);
	static Taco.Tortilla flourTortilla = new Taco.Tortilla( "flour tortilla", 2);
	static Side chipsAndQueso = new Side("chips and queso", 4.99, 2);
	static Drink soda = new Drink("coke", 2.50, 2);

	static Order newOrder = new Order() {

		@Override
		public double getPrice() {
			return deluxeTaco.getPrice();

		}
		@Override
		public String getName()
		{
			return deluxeTaco.getName();
		}

		@Override
		public int getQuantity() {
			return deluxeTaco.getQuantity();
		}
		public String getTortilla() {
			return flourTortilla.getName();
		}
	};

	static void setOrder(){
		System.out.println("===============MY ORDER==============" + newLine);
		System.out.println("===============MY ENTREES============");
		System.out.print(newOrder.getQuantity() + " x ");
		System.out.print(newOrder.getName() + " with " + Filling.STEAK.getProteinName() + newLine);
		System.out.println("on " + newOrder.getQuantity() + " " + newOrder.getTortilla() + " with " + newLine);
		newOrder.setToppings(CHEESE);
		newOrder.setToppings(LETTUCE);
		newOrder.setToppings(TOMATO);
		newOrder.setToppings(ONION);
		newOrder.setToppings(JALAPENOS);
		newOrder.setToppings(SALSA);
		System.out.print(newLine);
		System.out.println("Entree total: $" + newOrder.getPrice());
		System.out.println("===============MY SIDES============");
		System.out.println(chipsAndQueso.getSideQuantity() + " x " + chipsAndQueso.getSideName());
		System.out.print(newLine);
		System.out.println("Sides total: $" + chipsAndQueso.getSidePrice());
		System.out.println("===============MY DRINKS============");
		soda.getDrink("coke", 2);
		soda.getDrinkPrice(2.55, 2);
		System.out.println("=========================================\n");
	}
	public static void main(String[] args) {
		System.out.println("========WELCOME TO TEK TACOS!=========\n");
		Menu.displayMenu();
		Menu.entreeChoices();
		Side.sideChoices();
		Combo.chooseCombo();
		TekTacoApp.setOrder();

	}
}