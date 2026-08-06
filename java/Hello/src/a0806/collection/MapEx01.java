package a0806.collection;

import java.util.HashMap;
import java.util.Map;

public class MapEx01 {
  public static void main(String[] args) {
    Map<String, String> map = new HashMap<>();

    map.put("3", "사과");
    map.put("1", "바나나");
    map.put("2", "포도");

    System.out.println(map);
    
  }
}
