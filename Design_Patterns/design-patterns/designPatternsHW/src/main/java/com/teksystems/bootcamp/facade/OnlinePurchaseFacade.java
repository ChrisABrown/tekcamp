package com.teksystems.bootcamp.facade;

public class OnlinePurchaseFacade {
  User user = new User();

  User.payPalWallet payPalWallet = new User.payPalWallet();


  private Cart cart = new Cart();
  private Billing billing;
  private Product product;

  private Payment payment = new Payment();
  private Shipping shipping = new Shipping();

  public void buyProduct() throws Exception {

    cart.setInventory();
    cart.getInventory();
    cart.checkInventory();
    cart.addToCart();
    cart.getInventory();
//    shipping.getStandardShipping();
    payment.requestPayment(payPalWallet.ccNumber);
  }
}
