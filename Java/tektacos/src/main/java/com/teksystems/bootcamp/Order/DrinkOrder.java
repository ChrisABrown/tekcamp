package com.teksystems.bootcamp.Order;

public interface DrinkOrder {
 default void getDrink(String drinkName, double drinkQuantity){}
}
