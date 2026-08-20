package a0820;

public class Singletone1 {
  private static Singletone1 instance = new Singletone1();

  private Singletone1(){
    System.out.println("객체 생성");
  }

  public static Singletone1 getInstance(){
    return instance;
  }
  public void print(){
    System.out.println("안녕하세요");
  }
}
