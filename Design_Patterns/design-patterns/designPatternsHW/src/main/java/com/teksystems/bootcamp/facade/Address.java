package com.teksystems.bootcamp.facade;

class Address {
    protected int houseNumber;
    protected String streetName;
    protected int aptNumber;
    protected String city;
    protected String state;
    protected String zipCode;

  protected int getHouseNumber() {
    return houseNumber;
  }

  protected String getStreetName() {
    return streetName;
  }

  protected int getAptNumber() {
    return aptNumber;
  }

  protected String getState() {
    return state;
  }

  protected String getCity() {
    return city;
  }

  protected String getZipCode() {
    return zipCode;
  }

  Address(int houseNumber, String streetName, int aptNumber, String city, String state, String zipCode) {
    this.houseNumber = houseNumber;
    this.streetName = streetName;
    this.aptNumber = aptNumber;
    this.city = city;
    this.state = state;
    this.zipCode = zipCode;
  }

}


