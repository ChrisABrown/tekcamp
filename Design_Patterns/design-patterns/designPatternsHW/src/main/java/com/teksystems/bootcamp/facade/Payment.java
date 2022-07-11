package com.teksystems.bootcamp.facade;

import java.util.Random;

 class Payment {
  private final Random r = new Random();
  protected final long orderNumber = r.nextLong() ;

  protected void receivePayment(){
    System.out.println("Payment has been received for order " + orderNumber);
  }
  protected void requestPayment(String creditCardNumber) throws Exception{
    if(creditCardNumber.length() < 16){
      this.paymentDenied();
      throw new Exception("credit card number must be 16 characters long");
    }
    if(creditCardNumber.length() > 16){
        this.paymentDenied();
        throw new Exception("cannot exceed 16 numbers");
    }
    if (creditCardNumber.length() == 16) {
      this.paymentAccepted();
      System.out.println("Thanks for Shopping with us");
    }

  }
   void paymentDenied(){
    System.out.println("Payment denied");
  }
   void paymentAccepted(){
    System.out.println("Payment has been accepted");
  }
}
