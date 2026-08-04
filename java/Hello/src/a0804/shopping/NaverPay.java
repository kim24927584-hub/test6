package a0804.shopping;

public class NaverPay implements Payment{

  @Override
  public void pay(int amount) {
    // TODO Auto-generated method stub
    System.out.println("네이버페이로"+amount+"원을 결제합니다.");  
  }
  
  
}
