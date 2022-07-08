package com.teksystems.bootcamp.facade;

public class Payment {
  private double orderNumber =  Math.random();
  private User.payPalWallet paymentForm = new User.payPalWallet();

  public void receivePayment(){
    System.out.println("Payment has been received for order" + orderNumber);
  }
  public void requestPayment(){
    paymentForm.getCcNumber();
    paymentForm.getCcCode();
    paymentForm.getExpDate();
    System.out.println("Please confirm payment details");
  }
  public void paymentDenied(){
    System.out.println("Payment denied");
  }
  public void paymentAccepted(){
    System.out.println("Thanks for shopping with us");
  }
}
