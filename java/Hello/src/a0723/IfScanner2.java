package a0723;

import java.util.Scanner;

public class IfScanner2 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    System.out.print("국어점수 : ");
    int kor = sc.nextInt();

    System.out.println("영어점수 : ");
    int eng = sc.nextInt();

    System.out.println("수학점수 : ");
    int math = sc.nextInt();

    int sum = kor + eng + math;
    double evg = (double)sum / 3;

    System.out.println("총점 : " + sum);
    System.out.println("평균 : " + evg);
  }
}
