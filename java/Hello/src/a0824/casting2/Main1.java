package a0824.casting2;

public class Main1 {
  public static void main(String[] args) {
    Vehicle[] list = new Vehicle[5];

    list[0] = new Sedan("아반떼", 1, 50000, 20000);
    list[1] = new Truck("포터", 2, 0, 8, 15000);
    list[2] = new ElectricCar("아이오닉", 3, 80000,10000, 5);
    list[3] = new Sedan("소나타", 4, 60000, 25000);
    list[4] = new Truck("마이티", 5, 0 ,6, 18000);

    for(Vehicle e: list){
      e.printInfo();
    }
    System.out.println("=== 전체 요금 합계 출력 ===");
    
    double sum = 0;
    for(Vehicle e: list){
      sum += e.calculateFee();
    }
    System.out.println(sum+ "원");

    System.out.println("=== 타입별 전용 메서드 ===");
    for(Vehicle e : list){
      if(e instanceof ElectricCar){
        ElectricCar ec = (ElectricCar)e;
        ec.chargeBattery();
      }
      else if(e instanceof Sedan){
        Sedan s = (Sedan)e;
        s.driveSedan();
      }
      else if(e instanceof Truck){
        Truck t = (Truck)e;
        t.haulCargo();
      }
    }
    

    String search = "아반떼";
    Vehicle found = findByName(search, list);

    if(found != null){
      found.printInfo();
    }else{
      System.out.println("찾는 차의 정보가 없습니다");
    }
  }

  private static Vehicle findByName(String search, Vehicle[] list) {
    for (Vehicle e : list) {
      if (e.name.equals(search)) {
        return e;
      }
    }
    return null;
  }

  
  
}
