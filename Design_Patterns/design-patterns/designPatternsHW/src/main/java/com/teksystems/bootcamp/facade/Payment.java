package com.teksystems.bootcamp.facade;

import java.util.Random;

public class Payment {
  Random r = new Random();
  private final long orderNumber = r.nextLong() ;

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
  public void paymentDenied(){
    System.out.println("Payment denied");
  }
  public void paymentAccepted(){
    System.out.println("Payment has been accepted");
  }
}
