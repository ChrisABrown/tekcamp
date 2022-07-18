package com.teksystems.bootcamp.facade;

 class Shipping {
  protected final User user = new User();
  @Override
  public String toString() {
    return user.toString();
  }

  public void getStandardShipping(){
    double shippingCost = 1.99;
    int shippingTime = 10;
    System.out.println("Standard shipping has been chosen for $" + shippingCost + " dollars, " + "\n" + "your product will arrive in approximately" +
            "\n" + shippingTime + " days, for"
            + this);
  }

}
