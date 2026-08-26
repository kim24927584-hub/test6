package a0826.interfaceshop;

public class CuponDiscount implements Discount{

  private int cuponAmount;
  public CuponDiscount(int cuponAmount) {
    this.cuponAmount = cuponAmount;
  }

  @Override
  public double apply(int price) {
    int result = price - cuponAmount;
    return result < 0 ? 0 : result;
  }

  @Override
  public String getName() {
    // TODO Auto-generated method stub
    return "쿠폰할인(" + cuponAmount+"원";
  }

  
}
