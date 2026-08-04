package a0804.homework;

public class Rectangle extends Shape{
  int width;
  int height;
  
  public Rectangle(String color, int width, int height) {
    super(color);
    this.width = width;
    this.height = height;
  }

  @Override
  void area() {
    // TODO Auto-generated method stub
    System.out.println("사각형의 넓이: "+(width*height));
  }
  
}
