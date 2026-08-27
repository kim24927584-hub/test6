package a0827.quiz;



public class Main {
  public static void main(String[] args) {
    Product p1 = new Product("노트북", 1200000, 5);
    Product p2 = new Product("마우스", 25000, 0);

    System.out.println(p1);
    System.out.println("총 가치: " + p1.getTotalValue() + "원");
    System.out.println("판매 가능: " + p1.isAvailable());

    System.out.println();

    System.out.println(p2);
    System.out.println("총 가치: " + p2.getTotalValue() + "원");
    System.out.println("판매 가능: " + p2.isAvailable());
  }
}
