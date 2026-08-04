package a0804.shopping;

public class Main {
  public static void main(String[] args) {
    CreditCard creditCard = new CreditCard();
    NaverPay naverPay = new NaverPay();
    KakaoPay kakaoPay = new KakaoPay();

    Payment[] payments = {creditCard, naverPay, kakaoPay};

    for(Payment payment:payments){
      payment.pay(500000);
    }
  } 
}
