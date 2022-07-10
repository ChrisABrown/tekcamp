package com.teksystems.bootcamp.facade;

public class Address {
    private Address address;
    private int houseNumber;
    private String streetName;
    private int aptNumber;
    private String city;
    private String state;
    private String zipCode;

  public int getHouseNumber() {
    return houseNumber;
  }

  public String getStreetName() {
    return streetName;
  }

  public int getAptNumber() {
    return aptNumber;
  }

  public String getState() {
    return state;
  }

  public String getCity() {
    return city;
  }

  public String getZipCode() {
    return zipCode;
  }

  public Address( int houseNumber, String streetName, int aptNumber, String city, String state, String zipCode) {
    this.houseNumber = houseNumber;
    this.streetName = streetName;
    this.aptNumber = aptNumber;
    this.city = city;
    this.state = state;
    this.zipCode = zipCode;
  }


  public void setAddress(Address address) {
    this.address = address;
  }

  public Address getAddress() {
    return this.address;
  }
}


