package a0820.coffee;

import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Map.Entry;

public class Coffee {
  private static Coffee instance;
  private Coffee(){};
  public static Coffee getInstance(){
    if(instance != null){
      return instance;
    }
    instance = new Coffee();
    return instance;
  }

  ArrayList<String> coffeeList;
  ArrayList<Integer> coffeePrice;
  Map<String, Integer> menu;

  public void getMenu(){
    menu = new LinkedHashMap<String, Integer>();
    coffeeList = new ArrayList<>();
    coffeePrice = new ArrayList<>();

    coffeeList.add("카푸치노");
    coffeeList.add("아이스 아메리카노");
    coffeeList.add("카라멜 마끼아또");
    coffeeList.add("카페라떼");
    coffeeList.add("카페모카");
    coffeePrice.add(2000);
    coffeePrice.add(4500);
    coffeePrice.add(2500);
    coffeePrice.add(4000);
    coffeePrice.add(3000);

    for(int i=0;i<coffeeList.size();i++){
      menu.put(coffeeList.get(i), coffeePrice.get(i));
    }

    StringBuffer st = new StringBuffer();
    DecimalFormat f = new DecimalFormat("0,000원");
    st.append("\n\n")
        .append("+---------------------------------------------------+\n")
        .append("+------------------------메뉴판----------------------+\n")
        .append("|            Menu                   price           |\n");
    System.out.println(st.toString());

    int s = 1;
    for (Entry<String, Integer> get : menu.entrySet()) {

      System.out.printf(": [%d] %-20s\t %s          :\n", s, get.getKey(), f.format(get.getValue()));
      s++;
    }
  }
  // public void printMenu(){
  //   for(String coffee: menu.keySet()){
  //     System.out.println(coffee + " : " + menu.get(coffee));
  //   }
    
  // }
  
}
