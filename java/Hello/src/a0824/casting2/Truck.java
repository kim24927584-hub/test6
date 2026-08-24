package a0824.casting2;

public class Truck extends Vehicle{
  private int workHours;
  private int hourlyRate;
  public Truck(String name, int id, int baseFee, int workHours, int hourlyRate) {
    super(name, id, baseFee);
    this.workHours = workHours;
    this.hourlyRate = hourlyRate;
  }

  @Override
  double calculateFee() {
    // TODO Auto-generated method stub
    return baseFee   + (workHours * hourlyRate);
  }
  public void haulCargo() {
    System.out.println("운행시간 안내: " + workHours);
  }
}
