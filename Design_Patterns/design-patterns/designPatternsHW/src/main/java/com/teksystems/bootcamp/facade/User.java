package com.teksystems.bootcamp.facade;



 class User {
   final String name = "Chris Brown";
  protected static final Address address = new Address(
          187,
          "Pitt Street",
          456,
          "Bridgeport",
          "CT",
          "06606");

  protected static Address getAddress() {
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
