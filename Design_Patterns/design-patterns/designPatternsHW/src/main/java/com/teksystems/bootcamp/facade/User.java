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

  public static Address getAddress() {
    return address;
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
  protected String failureCCNumber ="234";



}
}
