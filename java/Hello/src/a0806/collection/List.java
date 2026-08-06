package a0806.collection;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.Iterator;

//컬렉션 프레임워크(collection) - 다수의 데이터를 쉽고 효과적으로 처리 클래스의 집합
// List
// Set
// Map

public class List {
  public static void main(String[] args) {
    ArrayList<Integer> arrList = new ArrayList<>();
    arrList.add(40);
    arrList.add(20);

    Collections.sort(arrList) ;// 정렬 지원

    arrList.set(0,20);
    for(int e : arrList){
      System.out.print(e+" ");;
    }

  }
}
