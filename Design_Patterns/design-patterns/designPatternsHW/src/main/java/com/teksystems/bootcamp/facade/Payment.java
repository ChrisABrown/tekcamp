package com.teksystems.bootcamp.facade;

import java.util.Random;

public class Payment {
  Random r = new Random();
  private double orderNumber = r.nextLong() ;
  private final User.payPalWallet paymentForm = new User.payPalWallet();

  public void receivePayment(){
    System.out.println("Payment has been received for order" + orderNumber);
  }
  public void requestPayment(){
    if(paymentForm.getCcNumber().length() < 16){
      this.paymentDenied();
    }else if(paymentForm.getCcNumber().length() > 16){

    }
//    paymentForm.getCcNumber();
//    paymentForm.getCcCode();
//    paymentForm.getExpDate();
    System.out.println("Please confirm payment details");
  }
  public void paymentDenied(){
    System.out.println("Payment denied");
  }
  public void paymentAccepted(){
    System.out.println("Thanks for shopping with us");
  }
}
