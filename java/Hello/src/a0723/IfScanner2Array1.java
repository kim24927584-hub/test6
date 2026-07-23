package a0723;

import java.util.Scanner;

public class IfScanner2Array1 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    int[] score = new int[3];

    System.out.print("국어점수 : ");
    score[0] = sc.nextInt();

    System.out.println("영어점수 : ");
    score[1] = sc.nextInt();

    System.out.println("수학점수 : ");
    score[2] = sc.nextInt();

    int sum = 0;

    for (int i = 0; i < score.length; i++){
      sum += score[i];
    }
    
    double evg = (double)sum / 3;

    System.out.println("총점 : " + sum);
    System.out.println("평균 : " + evg);
  }
}
