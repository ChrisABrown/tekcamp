package com.teksystems.bootcamp.Tacos;

public enum Filling {
  BEEF("ground beef"),
  CHICKEN("grilled chicken"),
  STEAK("grilled steak"),
  PORK("shredded pork"),
  BEANS("black beans");

  private final String proteinName;

  Filling(String proteinName) {
    this.proteinName = proteinName;
  }

  public static final Filling[] fillings = Filling.values();

  public String getProteinName(){
    return proteinName;
  }
}
