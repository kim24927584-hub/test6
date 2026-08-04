package a0804.homework;

public class Main {
  public static void main(String[] args) {
    Shape circle = new Circle("빨강",3);
    Shape rectangle = new Rectangle("파랑",3, 3);
    Shape[] shapes = {circle, rectangle};
    for(Shape shape: shapes){
      System.out.println("색상: "+ shape.color);
      shape.area();
    }
  }
  
}
