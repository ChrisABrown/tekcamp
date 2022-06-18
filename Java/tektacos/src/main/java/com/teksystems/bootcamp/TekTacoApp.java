package com.teksystems.bootcamp;

import com.teksystems.bootcamp.CombosSidesAndDrinks.Combo;
import com.teksystems.bootcamp.CombosSidesAndDrinks.Side;
import com.teksystems.bootcamp.Menu.Menu;
import com.teksystems.bootcamp.Order.Order;
import com.teksystems.bootcamp.Tacos.Fixing;
import com.teksystems.bootcamp.Tacos.Taco;

import java.util.Arrays;

import static com.teksystems.bootcamp.Tacos.Fixing.fixings;


public class TekTacoApp {
	public static void main(String[] args) {
		Taco deluxeTaco = new Taco("deluxe taco", 7.99, 2);
		Side chipsAndQueso = new Side("chips and queso", 4.99, 2);
		Taco.Tortilla flourTortilla = new Taco.Tortilla( "flour tortilla", 2);

		Order newOrder = new Order() {
			@Override
			public void setTortilla() {

			}

			@Override
			public void setToppings() {
				System.out.println(Arrays.toString(Arrays.copyOfRange(fixings, 3, 7)) + "\n");
			}
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
			public void getToppings() {
						 for (Fixing fixing : fixings) {
							 System.out.println(fixing.getName());
						 }
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
		Menu.chooseEntree();
		Side.chooseSide();
		Combo.chooseCombo();
		System.out.println("=====================MY ORDER====================\n");
		System.out.print(newOrder.getQuantity() + "x ");
		System.out.print(newOrder.getName() + "\n");
		System.out.println();
		System.out.println("on " + newOrder.getQuantity() + " " + newOrder.getTortilla() + " with \n ");
		System.out.println(newOrder.getPrice());
		System.out.println("=========================================\n");
	}
}