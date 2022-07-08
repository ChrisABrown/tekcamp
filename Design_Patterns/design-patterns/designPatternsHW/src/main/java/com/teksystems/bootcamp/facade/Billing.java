package com.teksystems.bootcamp.facade;

public class Billing {
  private OnlinePurchaseFacade billingForm;
  private Shipping shippingAddress = new Shipping();
  private Payment payment = new Payment();
  private String name;
  private Address billingAddress;

  public Address getBillingAddress() {
    return billingAddress;
  }

  public void setBillingAddress(Address billingAddress) {
    this.billingAddress = billingForm.getAddress();
  }



  public void matchBillingAddressToShippingAddress(Address billingAddress, Address shippingAddress){
      if (billingAddress == shippingAddress.getAddress()){
        System.out.println("The address is correct");
      }else{
        payment.paymentDenied();
        System.out.println("The address is incorrect");
      }
  }


}
