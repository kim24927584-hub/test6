package a0826.interfaceshop;

public class ShopMain {
  public static void main(String[] args) {
    System.out.println("=====주문1=====");
    OrderService order1 = new OrderService(new MemberDiscount(),new CardPay(200000), new SmsNotifier());
    order1.checkout("무선이어폰", 10000);

    System.out.println("\n===== 주문 2 =====");
    OrderService order2 = new OrderService(
        new CuponDiscount(5000),
        new KakaoPay(30000), // 45000 결제 시도 → 실패
        new EmailNotifier());
    order2.checkout("키보드", 50000);

    System.out.println("\n===== 주문 3 =====");
    OrderService order3 = new OrderService(
        new NoDiscount(),
        new BankTransfer(),
        new SmsNotifier());
    order3.checkout("마우스", 20000);
  }
}
