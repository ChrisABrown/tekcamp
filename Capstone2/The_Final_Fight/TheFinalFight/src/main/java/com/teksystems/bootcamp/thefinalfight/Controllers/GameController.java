package com.teksystems.bootcamp.thefinalfight.Controllers;

import com.teksystems.bootcamp.thefinalfight.fighters.Naruto;
import com.teksystems.bootcamp.thefinalfight.fighters.Sasuke;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.fxml.Initializable;
import javafx.scene.Node;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.control.ProgressBar;
import javafx.scene.image.ImageView;
import javafx.stage.Stage;

import java.io.IOException;
import java.net.URL;
import java.util.ResourceBundle;

public class GameController implements Initializable {



  private Naruto naruto;
  private Sasuke sasuke;
  private Stage stage;
  private Scene scene;
  private  Parent root;
  @FXML
  private ProgressBar narutoHealthPoints;

  @FXML
  private ImageView rightSprite;

  @FXML
  private ProgressBar sasukeHealthPoints;

  @FXML
  private ImageView leftSprite;

  @FXML
  private ProgressBar narutoChakraBar;

  @FXML
  private ProgressBar sasukeChakraBar;

  double narutoLifeLoss = 1;
  double sasukeLifeLoss = 1;
  double narutoChakraLoss = 1;
  double sasukeChakraLoss = 1;




  @Override
  public void initialize(URL url, ResourceBundle resourceBundle) {
   narutoHealthPoints.setStyle("-fx-accent: #00FF00;");
   sasukeHealthPoints.setStyle("-fx-accent: #00FF00;");
   narutoChakraBar.setStyle("-fx-accent: #2782ff");
   sasukeChakraBar.setStyle("-fx-accent: #2782ff");
   naruto = new Naruto(leftSprite);
   sasuke = new Sasuke(rightSprite);

  }

  @FXML
  void Amaterasu() {
    narutoLifeLoss -= 0.3;
    sasukeChakraLoss -= .5;
    sasuke.amaterasu(naruto);
    narutoHealthPoints.setProgress(narutoLifeLoss);
    sasukeChakraBar.setProgress(sasukeChakraLoss);
  }

  @FXML
  void Chidori(ActionEvent event)  {
    narutoLifeLoss -= 0.25;
    sasukeChakraLoss -= .1;
    sasuke.chidori(naruto);
    narutoHealthPoints.setProgress(narutoLifeLoss);
    sasukeChakraBar.setProgress(sasukeChakraLoss);

  }

  @FXML
  void Rasengan(ActionEvent event) {
    sasukeLifeLoss -= 0.25;
    narutoChakraLoss -= .1;
    naruto.rasengan(sasuke);
    sasukeHealthPoints.setProgress(sasukeLifeLoss);
    narutoChakraBar.setProgress(narutoChakraLoss);
  }

  @FXML
  void Rasenshuriken(ActionEvent event) {
    sasukeLifeLoss -= 0.3;
    narutoChakraLoss -= 0.5;
    naruto.rasenshuriken(sasuke);
    sasukeHealthPoints.setProgress(sasukeLifeLoss);
    narutoChakraBar.setProgress(narutoChakraLoss);
  }

  @FXML
  public void switchToExitScene(ActionEvent event) throws IOException {
    FXMLLoader loader = new FXMLLoader(getClass().getResource("/fxml/thanks-for-playing.fxml"));
    root = loader.load();
    stage = (Stage) ((Node)event.getSource()).getScene().getWindow();
    scene = new Scene(root);
    stage.setScene(scene);
    stage.show();
  }
}
