package a0810.ramda.map;

import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class CoffeeMenu1 {
  public static void main(String[] args) {
    HashMap <String, Integer> menu = new HashMap<>();

    menu.put("아메리카노", 4000);
    menu.put("카페라떼", 4500);
    menu.put("카푸치노", 5000);
    menu.put("에스프레소", 1000);
    menu.put("바닐라라떼", 500);

    System.out.println("====커피메뉴====");
    for(Map.Entry<String,Integer>entry :menu.entrySet()){
      String coffee = entry.getKey();
      int price = entry.getValue();
      System.out.println(coffee+": "+price+"원");
    }
    Scanner sc = new Scanner(System.in);
    //메뉴추가
    
    // System.out.print("추가할 메뉴 이름: ");
    // String newMenu = sc.nextLine();
    // System.out.print("가격: ");
    // int newPrice = sc.nextInt();
    // sc.nextLine();
    // menu.put(newMenu, newPrice);
    // System.out.println(newMenu + "메뉴가 추가되었습니다.");
    // System.out.println("===추가후 메뉴판===");
    // for(Map.Entry<String,Integer> entry : menu.entrySet()){
    //   System.out.println(entry.getKey() + ":" + entry.getValue() + "원");
    // }
    //기존가격 수정
    System.out.print("수정할메뉴이름: ");
    String updateMenu = sc.nextLine();

    if(menu.containsKey(updateMenu)){
      System.out.print("새 가격:");
      int updatePrice = sc.nextInt();
      sc.nextLine();
      menu.put(updateMenu, updatePrice);
      System.out.println(updateMenu+"의 가격이 "+updatePrice+"원으로 변경되었습니다.");

    }else{
      System.out.println("찾는 메뉴가 없습니다.");
    }
  }
  
}
