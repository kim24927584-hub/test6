package a0806.collection;

import java.util.ArrayList;

public class LIst1 {
  public static void main(String[] args) {
    System.out.println("=== ArrayList 예제 ===\n");

    // ArrayList 생성
    ArrayList<String> arrayList = new ArrayList<>();

    // 요소 추가
    arrayList.add("사과");
    arrayList.add("바나나");
    arrayList.add("오렌지");
    System.out.println("초기 리스트: " + arrayList);

    // 특정 위치에 추가
    arrayList.add(1, "포도");
    System.out.println("인덱스 1에 포도 추가: " + arrayList);

    // 요소 접근
    System.out.println("인덱스 0: " + arrayList.get(0));
    System.out.println("인덱스 2: " + arrayList.get(2));

    // 요소 변경
    arrayList.set(0, "딸기");
    System.out.println("인덱스 0을 딸기로 변경: " + arrayList);

    // 요소 삭제 (인덱스)
    arrayList.remove(1);
    System.out.println("인덱스 1 삭제: " + arrayList);

    // 요소 삭제 (요소)
    arrayList.remove("바나나");
    System.out.println("바나나 삭제: " + arrayList);

    // 크기 확인
    System.out.println("리스트 크기: " + arrayList.size());
  }
}
