package a0810.movie;

import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class MovieReserve {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    
    HashMap<String, Integer> menu = new HashMap<>();
    menu.put("어벤져스", 15000);
    menu.put("기생충", 30000);

    HashMap<String, Integer> order = new HashMap<>();
    while(true){
      System.out.println("======영화목록=======");
      for(Map.Entry<String,Integer> entry:menu.entrySet()){
        System.out.println("제목: "+entry.getKey() + "| 가격: " + entry.getValue());
      }

      System.out.print("종료: ('종료') 영화제목: ");
      String title = sc.nextLine();
      if (title.equals("종료")){break;}
      if(!menu.containsKey(title)){
        System.out.println("없는 영화 제목입니다 다시 입력해주세요.");
        continue;
      }
      System.out.print("수량: ");
      int quantity = sc.nextInt();
      sc.nextLine();
      if(quantity<= 0){
        System.out.println("수량을 1개 이상 적어주세요.");
        continue;
      }

      if(order.containsKey(title)){
        order.put(title, order.get(title) + quantity);
      
      }else{
        order.put(title, quantity);
      }
      System.out.println(title + "의 영화표 " + order.get(title) + " 장이 예매되었습니다. 금액: ("+(menu.get(title) * order.get(title) + "원)"));

    }
    for(Map.Entry<String, Integer> entry: order.entrySet()){
      System.out.println(entry.getKey() + " x " + entry.getValue() + " = " + (menu.get(entry.getKey()) * entry.getValue()));
    }
  }

  
}
