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
    stage = (Stage) ((Node)event.getSource()).getScene().getWindow();
    scene = new Scene(root);
    stage.setScene(scene);
    stage.show();
  }
  public void switchToMainView(ActionEvent event) throws IOException {
    root = FXMLLoader.load(getClass().getResource("main-view.fxml"));
    stage = (Stage) ((Node)event.getSource()).getScene().getWindow();
    scene = new Scene(root);
    stage.setScene(scene);
    stage.show();
  }
  public void switchToExitScene(ActionEvent event) throws IOException {
    root = FXMLLoader.load(getClass().getResource("thanks-for-playing.fxml"));
    stage = (Stage) ((Node)event.getSource()).getScene().getWindow();
    scene = new Scene(root);
    stage.setScene(scene);
    stage.show();
  }
}
