package a0824.casting;

public class Main2 {
  public static void main(String[] args) {
    Vehicle v = new Car();

    if (v instanceof Car) {
      ((Car) v).drive();
    }
  }

}
class Vehicle{
  void start(){
    System.out.println("차량 시작");
  }
  void stop(){
    System.out.println( "차량 정지");
  }
}
class Car extends Vehicle{
  void start(){
    System.out.println("시동");
  }
  void drive(){
    System.out.println("주행");
  }
}
