package com.teksystems.bootcamp.facade;



public class User {
  private static User user;
  private static String name;
  private static final Address address = new Address(
          187,
          "Pitt Street",
          456,
          "Bridgeport",
          "CT",
          "06606");


  public User(String name) {
    User.name = name;
  }

  public static Address getAddress() {
    return address;
  }

  public static User getInstance() {
    return user;
  }

  @Override
  public String toString() {
    return name + "\n" + getAddress();
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
