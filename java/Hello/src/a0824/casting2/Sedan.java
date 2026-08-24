package a0824.casting2;

public class Sedan extends Vehicle{
  private int insurance;

  public Sedan(String name, int id, int baseFee, int insurance) {
    super(name, id, baseFee);
    this.insurance = insurance;
  }

  @Override
  double calculateFee() {
    // TODO Auto-generated method stub
    return baseFee + insurance;
  }

  public void driveSedan(){
    System.out.println(name+"이(가) 세단을 운행합니다.");
  }
  
}
