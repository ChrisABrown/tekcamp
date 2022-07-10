package com.teksystems.bootcamp.facade;

public class Shipping {

  private User name;

  @Override
  public String toString() {
    return "To: " + name +
            "Address: " + User.address;
  }

  private final Address shippingForm = new Address(
          User.getAddress().getHouseNumber(),
          User.getAddress().getStreetName(),
          User.getAddress().getAptNumber(),
          User.getAddress().getCity(),
          User.getAddress().getState(),
          User.getAddress().getZipCode()
  );
  public Address getShippingAddress() {
    return shippingForm;
  }





  public void getStandardShipping(){
    int shippingTime = 10;
    System.out.println("Standard shipping has been chosen, your product will arrive in approximately" +
            "\n" + shippingTime + " days, to "
            + this);
  }
  public void getPriorityShipping(){
    int shippingTime = 5;
    System.out.println("Priority shipping has been chosen, your product will arrive in approximately" +
            "\n" + shippingTime + " days, to"
            + getShippingAddress());
  }
  public void getExpressShipping(){
    int shippingTime = 3;
    System.out.println("Express shipping has been chosen, your product will arrive in approximately" +
            "\n" + shippingTime + " days, to"
            + getShippingAddress());
  }


}
