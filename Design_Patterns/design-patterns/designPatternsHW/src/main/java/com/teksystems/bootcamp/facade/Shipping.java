package com.teksystems.bootcamp.facade;

public class Shipping {

  private User name;
  private Address shippingAddress;
  private Address shippingForm = new Address(
          getShippingAddress().getHouseNumber(),
          getShippingAddress().getStreetName(),
          getShippingAddress().getAptNumber(),
          getShippingAddress().getCity(),
          getShippingAddress().getState(),
          getShippingAddress().getZipCode());

  public Address getShippingAddress() {
    return User.getAddress();
  }

  public void setShippingAddress(Address shippingAddress) {
    this.shippingAddress = shippingForm;
  }



  public void getStandardShipping(){
    int shippingTime = 10;
    System.out.println("Standard shipping has been chosen, your product will arrive in approximately" +
            "\n" + shippingTime + "days, to"
            + shippingAddress);
  }
  public void getPriorityShipping(){
    int shippingTime = 5;
    System.out.println("Priority shipping has been chosen, your product will arrive in approximately" +
            "\n" + shippingTime + "days, to"
            + shippingAddress);
  }
  public void getExpressShipping(){
    int shippingTime = 3;
    System.out.println("Express shipping has been chosen, your product will arrive in approximately" +
            "\n" + shippingTime + "days, to"
            + shippingAddress);
  }


}
