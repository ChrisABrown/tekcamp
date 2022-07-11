package com.teksystems.bootcamp.template;

public class MadlibOriginal extends Madlib{
//  Blame my family for the actual words I just asked them for words and wrote them down
   static String[] adjectives = {"plentiful", "huge", "cold", "filthy", "creamy"};
   static String[] magicalCreatures = {"unicorns", "fairies"};
   static String[] nouns = {"house", "water", "phone", "doorknob"};
  @Override
  public String getProperNoun() {
    return "Bob";
  }

  @Override
  public String getAdjective(String[] x, int index) {
    for (int i = 0; i < x.length; i++) {
      if (i == index)
        return x[i];
    }
    return null;
  }

  @Override
  public String getColor() {
    return "red";
  }

  @Override
  public String getAnimal() {
    return "cat";
  }

  @Override
  public String getPlace() {
    return "Mcdonald's";
  }



  @Override
  public String getPluralMagicalCreature(String[]x, int index) {
    for (int i = 0; i < x.length ; i++) {
      if(i == index)
        return x[i];
    }
    return null;
  }


  @Override
  public String getRoomInAHouse() {
    return "foyer";
  }

  @Override
  public String getNoun(String[] x, int index) {
    for (int i = 0; i < x.length ; i++) {
      if(i == index)
        return x[i];
    }
    return null;
  }

  @Override
  public String getPluralNoun() {
    return "people";
  }

  @Override
  public int getNumber() {
    return 4;
  }

  @Override
  public String getMeasureOfTime() {
    return "minutes";
  }

  @Override
  public String getVerbEndingInIng() {
    return "going";
  }


}
