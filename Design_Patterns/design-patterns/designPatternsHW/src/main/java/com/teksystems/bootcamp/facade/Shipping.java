package com.teksystems.bootcamp.facade;

public class Shipping {
  private String name;
  private Address shippingAddress;
  private int shipppingTime;

  public static class Address{
    private int houseNumber;
    private String streetName;
    private int aptNumber;
    private String state;
    private String zipCode;

    public Address(int houseNumber, String streetName, int aptNumber, String state, String zipCode) {
      this.houseNumber = houseNumber;
      this.streetName = streetName;
      this.aptNumber = aptNumber;
      this.state = state;
      this.zipCode = zipCode;
    }
  }

  public void getStandardShipping(){}
  public void getPriorityShipping(){}
  public void getExpressShipping(){}


}
