package com.teksystems.bootcamp.facade;

public class Billing {
  private String name;
  private Address billingAddress;
  public static class Address{
    public Address(int houseNumber, String streetName, int aptNumber, String state, int zipCode) {

    }
  }

  public void matchBillingAddressToShippingAddress(){}
  public void incorrectBillingAddress(){}
}
