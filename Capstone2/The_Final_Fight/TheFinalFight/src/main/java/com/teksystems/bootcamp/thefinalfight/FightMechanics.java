package com.teksystems.bootcamp.thefinalfight;

import javafx.scene.control.Label;
import javafx.scene.shape.Rectangle;

public class FightMechanics {
  private GameScreen gameScreen;
  private FightStage fightStage;
  private Rectangle playerHealth;
  private Rectangle cpuHealth;
  private Label playerName;
  private Label cpuName;

  public FightMechanics(){}
  public void NoWalkThrough(){}
  public GameScreen getGameScreen() {
    return gameScreen;
  }

  public void setGameScreen(GameScreen gameScreen) {
    this.gameScreen = gameScreen;
  }

  public FightStage getFightStage() {
    return fightStage;
  }

  public void setFightStage(FightStage fightStage) {
    this.fightStage = fightStage;
  }

  public Rectangle getPlayerHealth() {
    return playerHealth;
  }

  public void setPlayerHealth(Rectangle playerHealth) {
    this.playerHealth = playerHealth;
  }

  public Rectangle getCpuHealth() {
    return cpuHealth;
  }

  public void setCpuHealth(Rectangle cpuHealth) {
    this.cpuHealth = cpuHealth;
  }

  public Label getPlayerName() {
    return playerName;
  }

  public void setPlayerName(Label playerName) {
    this.playerName = playerName;
  }

  public Label getCpuName() {
    return cpuName;
  }

  public void setCpuName(Label cpuName) {
    this.cpuName = cpuName;
  }
}
