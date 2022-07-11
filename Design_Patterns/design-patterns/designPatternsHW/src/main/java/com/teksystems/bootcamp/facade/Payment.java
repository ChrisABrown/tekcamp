package com.teksystems.bootcamp.facade;

import java.util.Random;

 class Payment {
  private final Random r = new Random();
  protected final long orderNumber = r.nextLong() ;

  protected void receivePayment(){
    System.out.println("Payment has been received for order " + orderNumber);
  }
  protected void requestPayment(String cCNumber) throws Exception{
    if(cCNumber.length() < 16){
      this.paymentDenied();
    }else if(cCNumber.length() > 16){
        throw new Exception("cannot exceed 16 numbers");
    }else {
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
