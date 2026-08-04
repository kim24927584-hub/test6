package a0804.homework;

 abstract class Shape {
  String color;
  
  public Shape(String color) {
    this.color = color;
  }
  public void info(){
    System.out.println("색상: "+color);
  }
  abstract void area();
}
