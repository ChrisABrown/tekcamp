package com.teksystems.bootcamp.CombosSidesAndDrinks;


import com.teksystems.bootcamp.Order.SideOrder;

public class Side implements SideOrder {

  private final String sideName;
  private final double sidePrice;

  private int sideQuantity;
  public Side(String sideName, double sidePrice, int sideQuantity){
    this.sideName = sideName;
    this.sidePrice = sidePrice;
    this.sideQuantity = sideQuantity;
  }

  @Override
  public double getSidePrice(){
    return sideQuantity * sidePrice;
  }

  @Override
  public String getSideName() {
    return sideName;
  }

  public static void sideChoices(){
    System.out.println("==============SIDES================");
    System.out.println("1: Chips and Queso\n" + "2: Chips and Salsa\n" + "3: Fries\n");
  }

  public int getSideQuantity() {
    return sideQuantity;
  }
}
