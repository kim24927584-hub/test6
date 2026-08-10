package a0810.ramda.map;

import java.security.KeyStore.Entry;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class CoffeeMenu4 {
  public static void main(String[] args) {
    HashMap <String, Integer> menu = new HashMap<>();

    menu.put("아메리카노", 4000);
    menu.put("카페라떼", 4500);
    menu.put("카푸치노", 5000);
    menu.put("에스프레소", 1000);
    menu.put("바닐라라떼", 500);
    menu.put("카라메르마키아토", 500);

    HashMap<String,Integer> order = new HashMap<>();
    Scanner sc = new Scanner(System.in);
    
    while(true){
      System.out.println("==========커피메뉴============");
      for(Map.Entry<String,Integer> entry: menu.entrySet()){
        System.out.println(entry.getKey()+"가격: "+entry.getValue() +"원");
      }
      System.out.print("\n주문할 메뉴를 입력하세요 (종료: '종료')");
      String coffeeName = sc.nextLine();
      
      if(coffeeName.equals("종료")){
        break;
      }
      if(!menu.containsKey(coffeeName)){
        System.out.println("해당메뉴가 없습니다. 다시 입력해 주세요.");
        continue;
      }

      System.out.print("수량입력: ");
      int quantity = sc.nextInt();
      sc.nextLine();
      

      if (quantity <= 0){
        System.out.println("수량은 1개이상 주문해 주세요");
        continue;
      }

      //추가주문
      if(order.containsKey(coffeeName)){
        order.put(coffeeName,order.get(coffeeName)+quantity);
      }else{
        order.put(coffeeName,quantity);
      }
      int price = menu.get(coffeeName);
      
      System.out.println(coffeeName + " " + order.get(coffeeName) + "개가 주문 되었습니다. (금액: "+(price * order.get(coffeeName))+")입니다.");
    }

    System.out.println("총 주문 금액: " + order.get);

    
  }
  
}
