package a0826.homework.폰;

public class SmartPhone implements Camera, MusicPlayer{

  @Override
  public void takePhoto() {
    // TODO Auto-generated method stub
    System.out.println("사진을 찍습니다.");
  }

  @Override
  public void playMusic() {
    // TODO Auto-generated method stub
    System.out.println("음악을 재생합니다.");
  }
  
}
