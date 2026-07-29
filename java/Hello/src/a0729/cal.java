package a0729;

import java.util.Scanner;

public class cal {
  static Scanner sc = new Scanner(System.in);
  public static void main(String[] args) {
    
    while (true){
      menu();

      int choice = sc.nextInt();

      switch (choice) {
        case 1:
          add();
          break;
        case 2:
          sub();
          break;
        case 3:
          mul();
          break;
        case 4:
          div();
          break;
        case 5:
          return;
        default:
          break;
      }
    }

  }
  private static void sub() {
    System.out.print("첫번째 수: ");
    int num1 = sc.nextInt();
    System.out.print("두번째 수: ");
    int num2 = sc.nextInt();

    System.out.println("결과 : " + (num1 - num2));
  }
  private static void add() {
    System.out.print("첫번째 수: ");
    int num1 = sc.nextInt();
    System.out.print("두번째 수: ");
    int num2 = sc.nextInt();

    System.out.println("결과 : " + (num1 + num2));
    
  }
  private static void mul() {
    System.out.print("첫번째 수: ");
    int num1 = sc.nextInt();
    System.out.print("두번째 수: ");
    int num2 = sc.nextInt();

    System.out.println("결과 : " + (num1 * num2));
    
  }
  private static void div() {
    System.out.print("첫번째 수: ");
    int num1 = sc.nextInt();
    System.out.print("두번째 수: ");
    int num2 = sc.nextInt();

    if (num2 == 0) {
      System.out.println("0으로 나눌 수 없습니다");
      return;
    }
    System.out.println("결과 : " + (num1 / num2));
    
  }
  public static void menu() {
    System.out.println("\n==============================");
    System.out.print("            계산기");
    System.out.println("\n==============================");
    System.out.println("1.더하기");
    System.out.println("2.빼기");
    System.out.println("3.곱하기");
    System.out.println("4.나누기");
    System.out.println("5.종료");
    System.out.println("\n==============================");
    System.out.print("메뉴 선택: ");

  }
}
