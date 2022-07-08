package com.teksystems.bootcamp.facade;

public class OnlineStore {
  public static void main(String[] args) {
    OnlinePurchaseFacade purchaseFacade = new OnlinePurchaseFacade();
    Product product = new Product(
            "shoes",
            45.99,
            10,
            false);

    purchaseFacade.buyProduct(new Product(
            product.getProduct(),
            product.getPriceOf(),
            product.getStock(),
            product.isOutOfStock()
    ));
  }
}
