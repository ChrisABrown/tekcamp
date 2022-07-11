package com.teksystems.bootcamp.facade;

public class Billing {

  private Address billingAddress;
  private Address shippingAddress;
  private final Payment denial = new Payment();
  private final Cart order = new Cart();
  public Address getShippingAddress() {
    return shippingAddress;
  }

  public void setShippingAddress() {
    this.shippingAddress = User.getAddress();
  }

  public Address getBillingAddress() {
    return billingAddress;
  }
  public void setBillingAddress() {
    this.billingAddress = User.getAddress();
  }



  public void matchBillingAddressToShippingAddress(Address billingAddress, Address shippingAddress){
      if (this.billingAddress == this.shippingAddress){
        System.out.println("The address is correct");
      }else{
        denial.paymentDenied();
        System.out.println("The address is incorrect");
      }
  }

  public void printOrderSummary(){
    System.out.println("Here is your order summary: " );
    Cart.viewCart();
  }


}
