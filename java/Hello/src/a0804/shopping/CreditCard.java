package a0804.shopping;

public class CreditCard implements Payment{

  @Override
  public void pay(int amount) {
    // TODO Auto-generated method stub
    System.out.println("신용카드로 "+amount+"원을 결제합니다.");
  }
  
}
