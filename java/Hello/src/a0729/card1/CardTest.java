package a0729.card1;

public class CardTest {
  public static void main(String[] args) {
    Card c1 = new Card();
    c1.kind = "Heart";
    c1.number = 7;

    System.out.println("==카드1==");
    System.out.println("무늬 : " + c1.kind);
    System.out.println("숫자 : " + c1.number);
    System.out.println("크기 : " + Card.width + " x " + Card.height);
    System.out.println("크기 : " + c1.width + " x " + c1.height);

    Card.width = 120;
    Card.height = 300;
    System.out.println("== 카드 크기 변경 후 ==");
    System.out.println("카드1 : " + Card.width + " x " + Card.height);
  }
  
}
