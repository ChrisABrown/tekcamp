package com.teksystems.bootcamp.thefinalfight.Controllers;

import com.teksystems.bootcamp.thefinalfight.fighters.Naruto;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
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


  @FXML
  public void exitGame() {
    System.exit(0);
  }
  public void switchToCharacterSelect(ActionEvent event) throws IOException {
     root = FXMLLoader.load(getClass().getResource("/fxml/select-character-screen.fxml"));
    stage = (Stage) ((Node)event.getSource()).getScene().getWindow();
    scene = new Scene(root);
    stage.setScene(scene);
    stage.show();
  }
  public void switchToMainView(ActionEvent event) throws IOException {
     root = FXMLLoader.load(getClass().getResource("/fxml/main-view.fxml"));
    stage = (Stage) ((Node)event.getSource()).getScene().getWindow();
    scene = new Scene(root);
    stage.setScene(scene);
    stage.show();
  }

  public void switchToExitScene(ActionEvent event) throws IOException {
     Parent root = FXMLLoader.load(getClass().getResource("/fxml/thanks-for-playing.fxml"));
    stage = (Stage) ((Node)event.getSource()).getScene().getWindow();
    scene = new Scene(root);
    stage.setScene(scene);
    stage.show();
  }
}
