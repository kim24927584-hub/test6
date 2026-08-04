package a0804.homework;

public class Circle extends Shape{
  int radius;

  

  public Circle(String color, int radius) {
    super(color);
    this.radius = radius;
  }



  @Override
  void area() {
    // TODO Auto-generated method stub
    System.out.println("원 넓이 : "+(radius * 2 * Math.PI ));
  }
  
}
