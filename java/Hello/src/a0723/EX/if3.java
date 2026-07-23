package a0723.EX;

import java.util.Scanner;

public class if3 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    System.out.print("숫자입력 : ");
    int score = sc.nextInt(); // 키보드로 숫자를 입력받아 score에 임시저장
    if(score > 0){
      System.out.println("양수");
    }else{
      System.out.println("음수");
    }
    sc.close();
  }
}
