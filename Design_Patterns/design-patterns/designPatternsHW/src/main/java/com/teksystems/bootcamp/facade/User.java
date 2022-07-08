package com.teksystems.bootcamp.facade;



public class User {
  private String fullName;

  private Address address;


  public User(String fullName) {
    this.fullName = fullName;
  }

  public static class Address{
    private int houseNumber;
    private String streetName;
    private String city;
    private String state;
    private String zipCode;

    public Address(int houseNumber, String streetName, String city, String state, String zipCode) {
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

    public String getZipCode() {
      return zipCode;
    }

    public void setZipCode(String zipCode) {
      this.zipCode = zipCode;
    }
  }


  public void setFullName(String firstName, String lastName) {
    this.fullName = firstName + lastName;
  }



protected static class payPalWallet{
  protected String ccNumber = "2233855609782384";
  protected int ccCode = 789;
  protected int expDate = 1025;

  protected String getCcNumber() {
    return ccNumber;
  }

  protected int getCcCode() {
    return ccCode;
  }

  protected int getExpDate() {
    return expDate;
  }
}
}
