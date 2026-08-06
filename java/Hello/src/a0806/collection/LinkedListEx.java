package a0806.collection;

import java.util.LinkedList;

public class LinkedListEx {
  public static void main(String[] args) {
    java.util.LinkedList<String> linkedList = new LinkedList<>();
    linkedList.add("첫 번째");
    linkedList.add("두 번째");
    linkedList.add("세 번째");
    System.out.println("초기 리스트:"+linkedList);

    linkedList.addLast("맨 앞");
  }
  
}
