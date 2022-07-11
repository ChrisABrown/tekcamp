package com.teksystems.bootcamp.facade;

public class OnlineStore {
  public static void main(String[] args) throws Exception {
    OnlinePurchaseFacade purchaseFacade = new OnlinePurchaseFacade();
    purchaseFacade.buyProduct();
  }
}
