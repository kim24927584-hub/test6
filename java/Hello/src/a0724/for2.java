package a0724;


import java.util.Scanner;

public class for2 {
  public static void main(String[] args) {
     // 학생 5명의 국어, 영어, 수학 점수
    // int[] kor = {90, 85, 70, 100, 95};
    // int[] eng = {80, 90, 75, 95, 88};
    // int[] math = {85, 95, 80, 90, 92};

    int[] kor = new int[5];
    int[] eng = new int[5];
    int[] math= new int[5];

    Scanner sc = new Scanner(System.in);

    for(int i=0;i<5;i++){
      System.out.println((i+1)+"번째 학생");
      System.out.print("국어: ");
      kor[i] = sc.nextInt();
      System.out.print("영어: ");
      eng[i] = sc.nextInt();
      System.out.print("수학: ");
      math[i] = sc.nextInt();

      
    }

    System.out.println("번호\t국어\t영어\t수학\t총점\t평균");
    System.out.println("---------------------------------------------");
    for(int i=0;i<5;i++){
      
      int sum = kor[i] + eng[i] + math[i];
      System.out.println((i+1)+"\t"+kor[i]+"\t"+eng[i]+"\t"+math[i]+"\t"+sum+"\t"+((double)sum)/3);
      
    }
  }
}
