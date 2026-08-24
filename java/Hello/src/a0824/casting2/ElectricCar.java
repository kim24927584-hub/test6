package a0824.casting2;

public class ElectricCar extends Vehicle {
  private int batteryCare;
  private int seats;
  public ElectricCar(String name, int id, int baseFee, int batteryCare, int seats) {
    super(name, id, baseFee);
    this.batteryCare = batteryCare;
    this.seats = seats;
  }

  @Override
  double calculateFee() {
    // TODO Auto-generated method stub
    return batteryCare + seats + baseFee;
  }

  public void chargeBattery(){
    System.out.println("남은 좌석 수: " + seats + " | 충전량: " + batteryCare);
  }
  
}
