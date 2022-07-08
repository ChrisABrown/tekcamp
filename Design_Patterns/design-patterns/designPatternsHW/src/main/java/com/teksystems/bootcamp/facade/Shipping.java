package com.teksystems.bootcamp.facade;

public class Shipping {

  private String name;
  private Address shippingAddress;
  private Address shippingForm = new Address(User);

  public Address getShippingAddress() {
    return shippingForm.getAddress();
  }

  public void setShippingAddress(Address shippingAddress) {
    this.shippingAddress = shippingForm.getAddress();
  }



  public void getStandardShipping(){
    int shippingTime = 5-10;
    System.out.println("Standard shipping has been chosen, your product will arrive in " +
            "\n" + shippingTime + "days, to"
            + shippingAddress);
  }
  public void getPriorityShipping(){
    int shippingTime = 3-5;
    System.out.println("Priority shipping has been chosen, your product will arrive in " +
            "\n" + shippingTime + "days, to"
            + shippingAddress);
  }
  public void getExpressShipping(){
    int shippingTime = 1-3;
    System.out.println("Express shipping has been chosen, your product will arrive in " +
            "\n" + shippingTime + "days, to"
            + shippingAddress);
  }


}
