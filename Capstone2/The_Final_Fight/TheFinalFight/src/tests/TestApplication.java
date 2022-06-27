import javafx.application.Application;
import javafx.stage.Stage;
public class TestApplication extends Application {
  public static void stopRunning() {
    keepRunning = false;
  }
  private static void startRunningInternal() {
    keepRunning=true;
    launch();
  }
  public static void startRunning(){
    keepRunning = true;
    Thread thread = new Thread(new Runnable() {
      @Override
      public void run() {
        TestApplication.startRunningInternal(); while(keepRunning) { // wait until user cancels
          try {
            Thread.sleep(100);
          } catch (InterruptedException e) {
            e.printStackTrace();
          } }
      } });
    thread.start();// Initialize the thread
  }
  static boolean keepRunning= true;
  @Override
  public void start(Stage stage) {
  }
}