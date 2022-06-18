package com.teksystems.bootcamp.CombosSidesAndDrinks;


import com.teksystems.bootcamp.Order.SideOrder;

public class Side implements SideOrder {

  private String sideName;
  private double sidePrice;

  private int sideQuantity;
  public Side(String sideName, double sidePrice, int sideQuantity){
  }

  @Override
  public double getSidePrice(){
    return sidePrice;
  }

  @Override
  public String getSideName() {
    return sideName;
  }

  public static void sideChoices(){
    System.out.println("==============SIDES================");
    System.out.println("1: Chips and Queso\n" + "2: Chips and Salsa\n" + "3: Fries\n");
  }
}
