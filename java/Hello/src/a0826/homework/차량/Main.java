package a0826.homework.차량;

public class Main {
  public static void main(String[] args) {
    DriveAble[] li = {
      new Sedan(),
      new Truck()
    };

    for(DriveAble e: li){
      if(e instanceof Truck){
        System.out.println("화물차 입니다.");
      }
      e.drive();
    }
  }
  
}
