package a0826.homework.폰;

public class Main {
  public static void main(String[] args) {
    
    Camera c = new SmartPhone();

    c.takePhoto();

    MusicPlayer mp = (MusicPlayer)c;

    mp.playMusic();
  }
  
}
