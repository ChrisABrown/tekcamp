package com.teksystems.bootcamp.facade;

import java.util.Date;

public class User {
  private String fullName;

  private Address address;
  protected long ccNumber;
  protected int ccCode;
  protected Date expDate;

  public static class Address{
    int houseNumber;
    String streetName;
    String city;
    String state;
    int zipCode;

    public Address(int houseNumber, String streetName, String city, String state, int zipCode) {
      this.houseNumber = houseNumber;
      this.streetName = streetName;
      this.city = city;
      this.state = state;
      this.zipCode = zipCode;
    }

    public int getHouseNumber() {
      return houseNumber;
    }

    public void setHouseNumber(int houseNumber) {
      this.houseNumber = houseNumber;
    }

    public String getStreetName() {
      return streetName;
    }

    public void setStreetName(String streetName) {
      this.streetName = streetName;
    }

    public String getCity() {
      return city;
    }

    public void setCity(String city) {
      this.city = city;
    }

    public String getState() {
      return state;
    }

    public void setState(String state) {
      this.state = state;
    }

    public int getZipCode() {
      return zipCode;
    }

    public void setZipCode(int zipCode) {
      this.zipCode = zipCode;
    }
  }


  public void setFullName(String firstName, String lastName) {
    this.fullName = firstName + lastName;
  }

  public void setAddress(Address address) {
    this.address = new Address(this.address.getHouseNumber(),
            this.address.getStreetName(),
            this.address.getCity(),
            this.address.getState(),
            this.address.getZipCode());
  }

  public void setCcNumber(long ccNumber) {
    this.ccNumber = ccNumber;
  }

  public void setCcCode(int ccCode) {
    this.ccCode = ccCode;
  }

  public void setExpDate(Date expDate) {
    this.expDate = expDate;
  }
}
