package com.teksystems.bootcamp.facade;

public class Billing {
  private User orderOwner;
  private Address billingAddress;
  private Address shippingAddress;

  public Address getShippingAddress() {
    return shippingAddress;
  }

  public void setShippingAddress() {
    this.shippingAddress = orderOwner.getAddress();
  }

  public Address getBillingAddress() {
    return billingAddress;
  }
  public void setBillingAddress() {
    this.billingAddress = orderOwner.getAddress();
  }



  public void matchBillingAddressToShippingAddress(Address billingAddress, Address shippingAddress){
      if (billingAddress == shippingAddress){
        System.out.println("The address is correct");
      }else{
        System.out.println("The address is incorrect");
      }
  }


}
