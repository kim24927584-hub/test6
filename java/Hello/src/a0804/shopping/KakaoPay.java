package a0804.shopping;

public class KakaoPay implements Payment{

  @Override
  public void pay(int amount) {
    // TODO Auto-generated method stub
    System.out.println("카카오페이로"+amount+"원을 결제합니다.");  
  }
  
}
