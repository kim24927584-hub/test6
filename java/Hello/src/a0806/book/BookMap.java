package a0806.book;

import java.util.HashMap;
import java.util.Map;

public class BookMap {
  public static void main(String[] args) {
    Map<String,Book> map = new HashMap<>();

    map.put("B001", new Book("난중일기", "이순신", 100000));
    map.put("B002", new Book("어린왕자", "생택쥐페리", 1));
    map.put("B003", new Book("인간실격", "다자이오사무", 30000));

    System.out.println("----전체도서 출력----");
    for(String key: map.keySet()){
      System.out.println(map.get(key));
    }


    map.get("B002").setAuthor("김민성");

    System.out.println("제목 수정 후 : ");
    System.out.println(map.get("B002"));

    map.remove("B003");
    System.out.println("도서 삭제 후 :");

    for(Map.Entry<String,Book> entry: map.entrySet()){
      System.out.println("도서번호:"+entry.getKey()+"| 책제목:"+entry.getValue().getTitle());

      Book b = entry.getValue();
      if(b.getPrice() > 30000){}
    }


    
  }
}
