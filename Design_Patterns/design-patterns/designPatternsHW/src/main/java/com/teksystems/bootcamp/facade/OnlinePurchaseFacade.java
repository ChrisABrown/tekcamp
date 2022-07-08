package com.teksystems.bootcamp.facade;

public class OnlinePurchaseFacade {
  private User user = new User("Chris Brown");
  private User.Address address = new User.Address(187,
          "Pitt street",
          "Bridgeport",
          "CT",
          "06606");
  private Inventory inventory = new Inventory();
  private Billing billing = new Billing();
  private Payment payment = new Payment();
  private Shipping shipping = new Shipping();
  private Product product = new Product();

  public void buyProduct(Product product){
    inventory.checkInventory();
    inventory.addToCart();
    shipping.getStandardShipping();
    payment.requestPayment();
    payment.receivePayment();
    payment.paymentAccepted();

  }
}
