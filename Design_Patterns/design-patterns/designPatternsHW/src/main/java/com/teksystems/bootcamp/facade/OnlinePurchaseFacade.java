package com.teksystems.bootcamp.facade;

public class OnlinePurchaseFacade {
  private User user = new User("Chris Brown");


  private Cart cart = new Cart();
  private Billing billing;
  private Payment payment = new Payment();
  private Shipping shipping = new Shipping();

  public void buyProduct(Product product){
    cart.checkInventory();
    cart.addToCart();
    cart.viewCart();
    cart.checkInventory();
    shipping.getStandardShipping();
    shipping.setShippingAddress(User.getAddress());
    shipping.getShippingAddress();
    payment.requestPayment();
    payment.receivePayment();
    payment.paymentAccepted();
  }
}
