package a0806.student;

import java.util.HashMap;
import java.util.Map;

public class StudentMap1 {
  public static void main(String[] args) {
    Map<String, Student> studentMap = new HashMap<>();
    // 객체 저장
    studentMap.put("2025001", new Student("홍길동", 20, 95));
    studentMap.put("2025002", new Student("이순신", 21, 88));
    studentMap.put("2025003", new Student("강감찬", 22, 91));

    System.out.println("=== 전체 학생 ===");

    for (String key : studentMap.keySet()) {
      System.out.println(key + " : " + studentMap.get(key));
    }

    // 특정 학생을 조회 2025002
    System.out.println("특정학생조회");
    Student student = studentMap.get("2025002");
    System.out.println(student);

    // 특정 학생을 점수수정 2025002
    studentMap.get("2025002").setScore(100);

    System.out.println(studentMap.get("2025002"));

    // 학생 삭제 2025003
    studentMap.remove("2025003");

    System.out.println(studentMap);

    // 향상 for문으로 출력
    for (Map.Entry<String, Student> entry : studentMap.entrySet()) {

      String hakbun = entry.getKey();
      Student student1 = entry.getValue();

      System.out.println(hakbun + " : " + student1);
    }

  }
}
