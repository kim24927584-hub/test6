package a0806.collection;

import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.TreeMap;

public class MapEx {
  public static void main(String[] args) {
    System.out.println("==HashMap 예제==");

    // HashMap 생성
    HashMap<String, Integer> scores = new HashMap<>();

    scores.put("홍길동", 85);
    scores.put("김철수", 90);
    scores.put("이영희", 82);
    scores.put("박민수", 83);

    int score = scores.get("홍길동");
    System.out.println("홍길동점수: " + score);
    scores.put("민성",1);
    System.out.print("점수목록:"+scores);

    System.out.println("===맵 순회 방법===");
    // keySet 사용
    System.out.println("---keySet()으로 순회---");
    for(String name: scores.keySet()){
      System.out.println(name + ":" + scores.get(name)+"점");
    }
    
    System.out.println("---values()로 순회----");
    for(Integer scoreValue: scores.values()){
      System.out.println("점수:" + scoreValue);
    }

    System.out.println("---entrySet()으로 순회---");
    for(Map.Entry<String,Integer>entry:scores.entrySet()){
      System.out.println(entry.getKey()+":"+entry.getValue()+"점");
    }

    Map<String, String> map = new LinkedHashMap<>();

    map.put("3", "사과");
    map.put("1", "바나나");
    map.put("2", "포도");

    System.out.println(map);

    // key를 기준으로 자동 정렬
    Map<String, String> map1 = new TreeMap<>();

    map1.put("3", "사과");
    map1.put("1", "사과");
    map1.put("2", "사과");
    
    System.out.println(map1);


//     HashMap
// 가장 많이 사용
// 빠른 검색이 목적
// 순서가 필요 없을 때
// LinkedHashMap
// 입력한 순서대로 출력해야 할 때
// 게시글 목록, 최근 검색어 등
// TreeMap
// 키를 자동으로 정렬해야 할 때
// 학생 번호순, 이름순, 날짜순 출력 등
  }
  
}
