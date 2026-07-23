package a0723;

import java.util.Scanner;

public class IfScanner2Array2 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    int arr[] = new int[3];

    for(int i = 0; i < 3; i++){
      System.out.print("숫자 입력: ");
      arr[i] = sc.nextInt();
    }

    for(int i = 0; i<3;i++){
      System.out.println(arr[i]);
    }
    
  }
}
