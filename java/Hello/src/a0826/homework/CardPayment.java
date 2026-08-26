package a0826.homework;

public class CardPayment implements Payable{

  @Override
  public void pay(int amount) {
    System.out.println("카드로 "+amount+"원 결제");
    
  }
  
}