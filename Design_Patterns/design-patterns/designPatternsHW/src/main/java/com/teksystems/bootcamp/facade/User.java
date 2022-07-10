package com.teksystems.bootcamp.facade;



public class User {
  private static final String name = "Chris Brown";
  private static User user;
  public static String getName() {
    return name;
  }
  private static final Address address = new Address(
          187,
          "Pitt Street",
          456,
          "Bridgeport",
          "CT",
          "06606");


  public User() {
  }

  public Address getAddress() {
    return address;
  }

  public static User getInstance() {
    return user;
  }

  @Override
  public String toString() {
    return "\n" + name + " at " + "\n" +
            getAddress().getHouseNumber() + " " +
            getAddress().getStreetName() + " Apt# " +
            getAddress().getAptNumber() + ", " + "\n" +
            getAddress().getCity() + ", " +
            getAddress().getState() + "\n" +
            getAddress().getZipCode();
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
