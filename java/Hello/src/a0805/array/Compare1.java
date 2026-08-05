package a0805.array;

import java.util.ArrayList;

public class Compare1 {
  public static void main(String[] args) {
    ArrayList<Student> students = new ArrayList<>();

    students.add(new Student("홍길동", 90, 80, 70));
    students.add(new Student("이순신", 100, 95, 90));
    students.add(new Student("김유신", 85, 88, 91));

    for (Student s : students) {
      System.out.println(s);
    }

    students.remove(1);
    System.out.println("===삭제후===");
    for (Student s : students) {
      System.out.println(s);
    }

  }
}
