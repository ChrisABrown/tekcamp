package com.teksystems.bootcamp.template;

public class EnchantedForest {
  public static void main(String[] args) {
    MadlibOriginal madlibOriginal = new MadlibOriginal();
    MadlibSwitch madlibSwitch = new MadlibSwitch();

    System.out.println(madlibSwitch.enchantedForestStory());
    System.out.println(madlibOriginal.enchantedForestStory());

  }
}
