package com.teksystems.bootcamp;

import com.teksystems.bootcamp.CombosSidesAndDrinks.Combo;
import com.teksystems.bootcamp.CombosSidesAndDrinks.Side;
import com.teksystems.bootcamp.Menu.Menu;
import com.teksystems.bootcamp.Order.Order;


public class TekTacoApp {
	public static void main(String[] args) {
		System.out.println("========WELCOME TO TEK TACOS!=========\n");
		Menu.displayMenu();
		Menu.entreeChoices();
		Side.sideChoices();
		Combo.chooseCombo();
		Order.setOrder();

	}
}