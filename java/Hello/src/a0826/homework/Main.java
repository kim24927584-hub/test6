package a0826.homework;

public class Main {
  public static void main(String[] args) {
    
    Payable p1 = new CardPayment();
    Payable p2 = new CashPayment();

    p1.pay(500);
    p2.pay(500);
  }
}
