package com.teksystems.bootcamp.thefinalfight.Controllers;

import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import javafx.scene.control.Button;

import java.net.URL;
import java.util.ResourceBundle;

public class StartScreenController implements Initializable {

  @Override
  public void initialize(URL url, ResourceBundle resourceBundle) {
    exitGame = new Button();
    startGame = new Button();
  }

  @FXML
  private Button exitGame;

  @FXML
  private Button startGame;

  @FXML
  void exitOutOfGame() {
  System.exit(0);
  }

  @FXML
  void switchToCharacterSelect(ActionEvent event) {

  }

}
