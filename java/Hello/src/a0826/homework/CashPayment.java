package a0826.homework;

public class CashPayment implements Payable{
  

    @Override
    public void pay(int amount) {
      System.out.println("현금으로 " + amount + "원 결제");

    }

  
}
