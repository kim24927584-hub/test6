package a0826.homework.도형;

public class Main {
  public static void main(String[] args) {
    Shape[] li = {new Circle(3), new Rectangle(3, 3)};
    for(Shape e: li){
      System.out.println(e.area());
    }
  }
  
}
