package com.teksystems.bootcamp.facade;

 class Billing {
  private Address billingAddress;
  private Address shippingAddress;
  private final Payment denial = new Payment();
   Address getShippingAddress() {
    return shippingAddress;
  }

  protected void setShippingAddress() {
    this.shippingAddress = User.getAddress();
  }

   Address getBillingAddress() {
    return billingAddress;
  }
  protected void setBillingAddress() {
    this.billingAddress = User.getAddress();
  }



  protected void matchBillingAddressToShippingAddress(Address billingAddress, Address shippingAddress){
      if (this.billingAddress == this.shippingAddress){
        System.out.println("The address is correct");
      }else{
        denial.paymentDenied();
        System.out.println("The address is incorrect");
      }
  }

   void printOrderSummary(){
    System.out.println("Here is your order summary: " );
    Cart.viewCart();
  }


}
