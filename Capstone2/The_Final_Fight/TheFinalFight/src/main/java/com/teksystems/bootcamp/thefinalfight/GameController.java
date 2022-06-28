package com.teksystems.bootcamp.thefinalfight;

import com.teksystems.bootcamp.thefinalfight.fighters.Fighter;
import com.teksystems.bootcamp.thefinalfight.fighters.Naruto;
import com.teksystems.bootcamp.thefinalfight.fighters.Sasuke;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import javafx.scene.control.ProgressBar;
import javafx.scene.image.ImageView;

import java.net.URL;
import java.util.ResourceBundle;

public class GameController implements Initializable {


  private Player player;
  private CPU cpu;
  private Naruto naruto;
  private Sasuke sasuke;
  @FXML
  private ProgressBar narutoHealthPoints;

  @FXML
  private ImageView cpuSprite;

  @FXML
  private ProgressBar sasukeHealthPoints;

  @FXML
  private ImageView playerSprite;
  double narutoLifeLoss = 1;
  double sasukeLifeLoss = 1;


  @Override
  public void initialize(URL url, ResourceBundle resourceBundle) {
   naruto = new Naruto(playerSprite);
   sasuke = new Sasuke(cpuSprite);
   narutoHealthPoints.setStyle("-fx-accent: #00FF00;");
   sasukeHealthPoints.setStyle("-fx-accent: #00FF00;");
  }

  @FXML
  void Amaterasu() {
    narutoLifeLoss -= 0.1;
    sasuke.amaterasu(naruto);
    narutoHealthPoints.setProgress(narutoLifeLoss);
  }

  @FXML
  void Chidori() {
    narutoLifeLoss -= 0.3;
    sasuke.chidori(naruto);
    narutoHealthPoints.setProgress(narutoLifeLoss);
  }

  @FXML
  void Rasengan(ActionEvent event) {
    sasukeLifeLoss -= 0.25;
    naruto.rasengan(sasuke);
    sasukeHealthPoints.setProgress(sasukeLifeLoss);
  }

  @FXML
  void Rasenshuriken(ActionEvent event) {
    sasukeLifeLoss -= 0.5;
    naruto.rasenshuriken(sasuke);
    sasukeHealthPoints.setProgress(sasukeLifeLoss);
  }
}
