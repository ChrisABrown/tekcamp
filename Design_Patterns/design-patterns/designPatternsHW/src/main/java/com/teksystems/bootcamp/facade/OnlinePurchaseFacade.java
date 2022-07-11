package com.teksystems.bootcamp.facade;

 class OnlinePurchaseFacade {
  User.payPalWallet payPalWallet = new User.payPalWallet();
  private Cart cart = new Cart();
  private Billing billing= new Billing();
  private Payment payment = new Payment();
  private Shipping shipping = new Shipping();
  void buyProduct() throws Exception {

    cart.setInventory();
    cart.getInventory();
    cart.addToCart();
    Cart.viewCart();
//    second getInventory call to show removed from stock
    cart.getInventory();
    cart.addToCart();
    Cart.viewCart();
    cart.addToCart();
    billing.setShippingAddress();
    shipping.getStandardShipping();
    billing.setBillingAddress();
    billing.matchBillingAddressToShippingAddress(billing.getBillingAddress(), billing.getShippingAddress());
//    payment.requestPayment(payPalWallet.failureCCNumber);
    payment.requestPayment(payPalWallet.ccNumber);
    payment.receivePayment();
    billing.printOrderSummary();
  }
}
