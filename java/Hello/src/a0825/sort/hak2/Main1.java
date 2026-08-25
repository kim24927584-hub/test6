package a0825.sort.hak2;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;

public class Main1 {
  public static void main(String[] args) {
    ArrayList<Student> students = new ArrayList<>();

    

    students.add(new Student("홍길동", 20, 2023001));
    students.add(new Student("김철수", 22, 2023002));
    students.add(new Student("이영희", 21, 2023003));
    students.add(new Student("박민수", 23, 2023004));
    students.add(new Student("최지훈", 19, 2023005));
    students.add(new Student("강다은", 20, 2023006));

    Collections.sort(students);

    System.out.println("정렬된 학생 목록");

    for(Student student: students){
      System.out.println(student);
    }
  }
}
class Student implements Comparable<Student>{
  private String name;
  private int age;
  private int studentId;
  public Student(String name, int age, int studentId) {
    this.name = name;
    this.age = age;
    this.studentId = studentId;
  }
  public String getName() {
    return name;
  }
  public void setName(String name) {
    this.name = name;
  }
  public int getAge() {
    return age;
  }
  public void setAge(int age) {
    this.age = age;
  }
  public int getStudentId() {
    return studentId;
  }
  public void setStudentId(int studentId) {
    this.studentId = studentId;
  }
  @Override
  public String toString() {
    return "Student [name=" + name + ", age=" + age + ", studentId=" + studentId + "]";
  }
  @Override
  public int compareTo(Student o) {
    return Integer.compare(o.age, this.age);
  } 
}