package com.teksystems.bootcamp.facade;

 class OnlinePurchaseFacade {
  protected final User.payPalWallet payPalWallet = new User.payPalWallet();
  protected final Cart cart = new Cart();
  protected final Billing billing = new Billing();
  protected final Payment payment = new Payment();
  protected final Shipping shipping = new Shipping();
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
