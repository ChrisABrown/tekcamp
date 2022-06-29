package com.teksystems.bootcamp.thefinalfight;

import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.scene.Scene;
import javafx.stage.Stage;

import java.io.IOException;

public class GameApplication extends Application {
  @Override
  public void start(Stage stage) throws IOException {
    FXMLLoader fxmlLoader = new FXMLLoader(GameApplication.class.getResource("start-screen-view.fxml"));
    Scene scene = new Scene(fxmlLoader.load());
    stage.setTitle("The Final Fight Begins");
    stage.setScene(scene);
    stage.show();
//    TODO build scene for start screen and connect to main view, build out tests for app, and add animations and modifiers to methods
  }

  public static void main(String[] args) {

    launch();
  }
}