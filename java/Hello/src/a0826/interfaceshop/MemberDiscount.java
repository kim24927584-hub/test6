package a0826.interfaceshop;

public class MemberDiscount implements Discount{

  @Override
  public double apply(int price) {
    // TODO Auto-generated method stub
    return (int)(price * 0.9);
  }

  @Override
  public String getName() {
    // TODO Auto-generated method stub
    return "회원할인";
  }
  
}
