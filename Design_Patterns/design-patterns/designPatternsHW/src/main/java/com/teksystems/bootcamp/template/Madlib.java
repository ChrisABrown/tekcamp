package com.teksystems.bootcamp.template;

public abstract class Madlib {
  public abstract String getProperNoun();
  public abstract String getAdjective(String[] x, int index);
  public abstract String getColor();
  public abstract String getAnimal();
  public abstract String getPlace();
  public abstract String getPluralMagicalCreature(String[]x, int index);
  public abstract String getRoomInAHouse();
  public abstract String getNoun(String[] x, int index);
  public abstract String getPluralNoun();
  public abstract int getNumber();
  public abstract String getMeasureOfTime();
  public abstract String getVerbEndingInIng();


  public String enchantedForestStory(){
    return "Dear " + getProperNoun() + ", \n" + "I am writing to you from a " + getAdjective(MadlibOriginal.adjectives, 0)
            + " castle in an enchanted forest. \n" + "I found myself here one day after going for a ride on a "
            + getColor() + " " + getAnimal() + " in " + getPlace() + ".\nThere are " + getAdjective(MadlibOriginal.adjectives, 1)
            + " " + getPluralMagicalCreature(MadlibOriginal.magicalCreatures, 0)
            + " and " + getAdjective(MadlibOriginal.adjectives, 2) + " " + getPluralMagicalCreature(MadlibOriginal.magicalCreatures, 1) +
            " here!\nIn the " + getRoomInAHouse() + " there is a pool full of " + getNoun(MadlibOriginal.nouns, 0) + ".\n" +
            "I fall asleep each night on a " + getNoun(MadlibOriginal.nouns, 1) + " of " + getNoun(MadlibOriginal.nouns,2 )
            + " and dream of " + getAdjective(MadlibOriginal.adjectives, 3) + " " + getPluralNoun() + ".\n" +
            "It feels as though I have lived here for " + getNumber() + " " + getMeasureOfTime() + "." +
            " \nI hope one day you can visit, although the only way to get here now is " +
            getVerbEndingInIng() + " on a " + getAdjective(MadlibOriginal.adjectives, 4) + " " + getNoun(MadlibOriginal.nouns, 3) + "!!";

  }
}
