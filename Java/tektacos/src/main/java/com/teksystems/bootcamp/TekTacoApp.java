package com.teksystems.bootcamp;

import com.teksystems.bootcamp.CombosSidesAndDrinks.Combo;
import com.teksystems.bootcamp.CombosSidesAndDrinks.Drink;
import com.teksystems.bootcamp.CombosSidesAndDrinks.Side;
import com.teksystems.bootcamp.Menu.Menu;
import com.teksystems.bootcamp.Order.Order;
import com.teksystems.bootcamp.Tacos.Filling;
import com.teksystems.bootcamp.Tacos.Fixing;
import com.teksystems.bootcamp.Tacos.Taco;
import static com.teksystems.bootcamp.Tacos.Fixing.*;
import static com.teksystems.bootcamp.Tacos.Taco.fixingMax;


public class TekTacoApp {
	static String newLine = System.lineSeparator();

	static Taco deluxeTaco = new Taco("deluxe taco", 7.99, 2, Filling.STEAK, new Fixing[fixingMax]);
	static Taco basicTaco = new Taco("basic taco", 4.99, 2, Filling.BEEF, new Fixing[fixingMax - 1]);
	static Taco veggieTaco = new Taco("veggie taco", 3.99, 2, Filling.BEANS, new Fixing[fixingMax - 1]);
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
			return null;
		}
	};
	static void setOrder(){
		System.out.println("===============MY ORDER==============" + newLine);
		System.out.println("===============MY ENTREES============");
		System.out.print(deluxeTaco.getQuantity() + " x ");
		System.out.print(deluxeTaco.getName() + " with " + Filling.STEAK.getProteinName() + newLine);
		System.out.println("on " + deluxeTaco.getQuantity() + " " + deluxeTaco.getTortilla() + " with " + newLine);
		for (int i = 0; i < fixingMax ; i++) {
			deluxeTaco.setToppings(fixings.clone()[i]);
			System.out.println(fixings.clone()[i].getName());
		}
		System.out.print(newLine);
		System.out.println("Entree total: $" + deluxeTaco.getPrice());
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