package a0811;

import java.util.HashSet;
import java.util.LinkedHashMap;
import java.util.LinkedHashSet;

public class Set1 {
  public static void main(String[] args) {
    HashSet<String> set = new HashSet<>();

    set.add("aaa");
    set.add("aaa");

    for(String item: set){
      System.out.println(item);
    }

    boolean hasApple = set.contains("aaa");
    System.out.println(hasApple);

    set.remove("aaa");
    for(String item:set){
      System.out.println(item);
    }

    LinkedHashSet<String> set1 = new LinkedHashSet<>();
    set1.add("사과");
    set1.add("바나나");
    set1.add("오렌지");
    for(String item: set1){
      System.out.println(item);
    }

  }
}
