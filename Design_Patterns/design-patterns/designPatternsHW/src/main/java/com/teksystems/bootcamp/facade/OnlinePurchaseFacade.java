package com.teksystems.bootcamp.facade;

public class OnlinePurchaseFacade {
  private User user = new User("Chris Brown");

  private Address address = new Address(187,
          "Pitt street",
          345,
          "Bridgeport",
          "CT",
          "06606");

  private Cart cart = new Cart();
  private Billing billing;
  private Payment payment = new Payment();
  private Shipping shipping = new Shipping();
  public Address getAddress() {
    return address;
  }

  public void buyProduct(Product product){
    cart.checkInventory();
    cart.addToCart();
    cart.viewCart();
    cart.checkInventory();
    shipping.getStandardShipping();
    shipping.setShippingAddress(address);
    billing.matchBillingAddressToShippingAddress(billing.getBillingAddress(), shipping.getShippingAddress());
    payment.requestPayment();
    payment.receivePayment();
    payment.paymentAccepted();
  }
}
