package com.teksystems.bootcamp.thefinalfight;

import com.teksystems.bootcamp.thefinalfight.fighters.Naruto;
import com.teksystems.bootcamp.thefinalfight.fighters.Sasuke;

public class GameScreen {
  private Naruto naruto;
  private Sasuke sasuke;

  public void GameScreen(){}
  public void GameOver(){}

  public Naruto getNaruto() {
    return naruto;
  }

  public void setNaruto(Naruto naruto) {
    this.naruto = naruto;
  }

  public Sasuke getSasuke() {
    return sasuke;
  }

  public void setSasuke(Sasuke sasuke) {
    this.sasuke = sasuke;
  }
}
