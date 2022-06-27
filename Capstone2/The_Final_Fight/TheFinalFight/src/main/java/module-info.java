module com.teksystems.bootcamp.thefinalfight {
  requires javafx.controls;
  requires javafx.fxml;

  requires org.controlsfx.controls;
  requires com.almasb.fxgl.all;

  opens com.teksystems.bootcamp.thefinalfight to javafx.fxml;
  exports com.teksystems.bootcamp.thefinalfight;
  exports com.teksystems.bootcamp.thefinalfight.fighters;
  opens com.teksystems.bootcamp.thefinalfight.fighters to javafx.fxml;
}