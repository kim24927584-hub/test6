package a0826.interfaceshop;

public class NoDiscount implements Discount{

  @Override
  public double apply(int price) {
    // TODO Auto-generated method stub
    return price;
  }

  @Override
  public String getName() {
    // TODO Auto-generated method stub
    return "할인 없음";
  }

  
}
