package com.teksystems.bootcamp.template;

import java.util.Random;

public class MadlibSwitch extends Madlib {
  @Override
  public String getProperNoun() {
    String[] properNouns = {"Chris", "Suzie", "Abby"};
    Random r = new Random();
    int randomProperNoun = r.nextInt(properNouns.length);
    return properNouns[randomProperNoun];
  }

  @Override
  public String getAdjective(String[] x, int index) {
    String[] adjectives1 = {
            "calming",
            "flirtatious",
            "gigantic",
            "tight",
            "translucent",
            "hot",
            "warm",
            "clean",
            "illuminating",
            "rusty",
            "old",
            "stormy",
            "wet",
            "heavy"
    };
    Random r = new Random();
    int randomAdjective = r.nextInt(adjectives1.length);
    return adjectives1[randomAdjective];
  }

  @Override
  public String getColor() {
    String[] colors = {"green", "brown", "metallic purple"};
    Random r = new Random();
    int randomColors = r.nextInt(colors.length);
    return colors[randomColors];
  }

  @Override
  public String getAnimal() {
    String[] animals = {"dog", "cow", "gerbil"};
    Random r = new Random();
    int randomAnimals = r.nextInt(animals.length);
    return animals[randomAnimals];
  }

  @Override
  public String getPlace() {
    String[] places = {"Wal-mart", "YMCA", "Supermarket"};
    Random r = new Random();
    int randomPlaces = r.nextInt(places.length);
    return places[randomPlaces];
  }

  @Override
  public String getPluralMagicalCreature(String[] x, int index) {
    String[] pluralMagicCreatures1 = {
            "dragons",
            "oompa-loompas",
            "leprechauns",
            "cyclopes",
            "hyrdas",
            "centaurs"};
    Random r = new Random();
    int randomMagicalCreatures1 = r.nextInt(pluralMagicCreatures1.length);
    return pluralMagicCreatures1[randomMagicalCreatures1];
  }

  @Override
  public String getRoomInAHouse() {
    String[] rooms = {"kitchen", "restroom", "crawlspace"};
    Random r = new Random();
    int randomRoom = r.nextInt(rooms.length);
    return rooms[randomRoom];
  }

  @Override
  public String getNoun(String[] x, int index) {
    String[] nouns1 = {
            "tennis",
            "lamp",
            "cup",
            "door",
            "shoe",
            "laptop",
            "convertible",
            "wallet",
            "chicken",
            "nail clipper",
            "UFO",
            "credit card"
    };
    Random r = new Random();
    int randomNouns1 = r.nextInt(nouns1.length);
    return nouns1[randomNouns1];
  }

  @Override
  public String getPluralNoun() {
    String[] pluralNouns = {"cats", "dogs", "oxtails"};
    Random r = new Random();
    int randomPluralNouns = r.nextInt(pluralNouns.length);
    return pluralNouns[randomPluralNouns];
  }

  @Override
  public int getNumber() {
    Integer[] numbers = {13, 9, 45, 23};
    Random r = new Random();
    int randomNumbers = r.nextInt(numbers.length);
    return numbers[randomNumbers];
  }

  @Override
  public String getMeasureOfTime() {
    String[] timeMeasurements = {"days", "seconds", "decades"};
    Random r = new Random();
    int randomTime = r.nextInt(timeMeasurements.length);
    return timeMeasurements[randomTime];
  }

  @Override
  public String getVerbEndingInIng() {
    String[] verbs = {"growing", "showing", "mowing"};
    Random r = new Random();
    int randomVerbs = r.nextInt(verbs.length);
    return verbs[randomVerbs];
  }

}
