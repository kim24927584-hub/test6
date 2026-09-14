package a0914.test;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;


public class Test3 {
  public static void main(String[] args) {
    Scanner s = new Scanner(System.in);

    ArrayList<String> names = new ArrayList<>();

    while(true){
      System.out.println("1.추가");
      System.out.println("2.목록");
      System.out.println("3.삭제");
      System.out.println("4.종료");
      String choice = s.nextLine();

      switch (choice) {
        case "1": 
          String newName = s.nextLine();
          names.add(newName);
          break;
        case "2":
          for(String e: names){
            System.out.println("이름: "+e);
          }
          break;
        case "3":
          System.out.print("삭제할 이름: ");
          String delName = s.nextLine();
          boolean deleted = false;
          for(String e: names){
            if(e.equals(delName)){
              names.remove(e);
              deleted = true;
              break;
            }
          }
          if(!deleted){
            System.out.println("찾는 이름이 없습니다.");
          }
          break;
        case "4":
          return ;
        default:
          break;
      }
    }
    
  }
  
}
