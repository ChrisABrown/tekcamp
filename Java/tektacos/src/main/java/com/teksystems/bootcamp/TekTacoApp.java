package com.teksystems.bootcamp;

import com.teksystems.bootcamp.CombosSidesAndDrinks.Side;
import com.teksystems.bootcamp.Menu.Menu;
import com.teksystems.bootcamp.Tacos.Taco;
import com.teksystems.bootcamp.Order.Order;
import com.teksystems.bootcamp.Tacos.Topping;
import com.teksystems.bootcamp.Tacos.Tortilla;
import com.teksystems.bootcamp.Tacos.Fixing;
import java.lang.reflect.Array;
import java.util.Arrays;


public class TekTacoApp {
	public static void main(String[] args) {
		Taco deluxeTaco = new Taco("deluxe taco", 7.99 );
		Side chipsAndQueso = new Side("chips and queso", 4.50);
		Tortilla flourTortilla = new Tortilla( "flour tortilla");
		Tortilla cornTortilla = new Tortilla("corn tortilla");


		Order newOrder = new Order() {
			@Override
			public double getPrice() {
				return deluxeTaco.getPrice();
			}
			@Override
			public String getName() {
				return deluxeTaco.getName();
			}
			@Override
			public void getToppings() {

			}
			@Override
			public void setTortilla(String name) {
			}
			@Override
			public Array[] setProtein() {
				return new Array[1];
			}

			@Override
			public void addToOrder() {

			}
		};
		System.out.println("========WELCOME TO TEK TACOS!=========\n");
		Menu.displayMenu();
		System.out.println("=========================================\n");
		System.out.println(newOrder.getName());
		System.out.println(newOrder.getPrice());
		System.out.println("=========================================\n");
	}
}