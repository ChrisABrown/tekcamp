package com.teksystems.bootcamp.facade;

public class Shipping {

  private final User user = new User();


  @Override
  public String toString() {
    return user.toString();
  }

  private final Address shippingForm = new Address(
          user.getAddress().getHouseNumber(),
          user.getAddress().getStreetName(),
          user.getAddress().getAptNumber(),
          user.getAddress().getCity(),
          user.getAddress().getState(),
          user.getAddress().getZipCode()
  );
  public void getShippingAddress() {
    System.out.println(this);
  }

  public void getStandardShipping(){
    double shippingCost = 1.99;
    int shippingTime = 10;
    System.out.println("Standard shipping has been chosen for $" + shippingCost + " dollars, " + "\n" + "your product will arrive in approximately" +
            "\n" + shippingTime + " days, for"
            + this);
  }
  public void getPriorityShipping(){
    double shippingCost = 5.99;
    int shippingTime = 5;
    System.out.println("Priority shipping has been chosen $ " + shippingCost + " dollars, " + "\n" + "your product will arrive in approximately" +
            "\n" + shippingTime + " days, for"
            + this);
  }
  public void getExpressShipping(){
    double shippingCost = 10.99;
    int shippingTime = 3;
    System.out.println("Express shipping has been chosen $ " + shippingCost + " dollars, " + "\n" + "your product will arrive in approximately" +
            "\n" + shippingTime + " days, for"
            + this);
  }


}
