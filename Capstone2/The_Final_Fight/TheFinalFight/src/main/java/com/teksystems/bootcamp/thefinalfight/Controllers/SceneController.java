package com.teksystems.bootcamp.thefinalfight.Controllers;

import javafx.event.ActionEvent;
import javafx.fxml.FXMLLoader;
import javafx.scene.Node;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.stage.Stage;

import java.io.IOException;

public class SceneController {
  private Stage stage;
  private Scene scene;
  private Parent root;

  public void switchToCharacterSelect(ActionEvent event) throws IOException {
    root = FXMLLoader.load(getClass().getResource("start-screen-view.fxml"));
    stage = ((Node)event.getSource());
  }
}
