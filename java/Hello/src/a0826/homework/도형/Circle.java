package a0826.homework.도형;

public class Circle implements Shape{

  private double radius;
  
  public Circle(double radius) {
    this.radius = radius;
  }

  @Override
  public double area() {
    
    return (radius*radius) * 3.14;
  }
  
}
