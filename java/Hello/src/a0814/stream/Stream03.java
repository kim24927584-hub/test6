package a0814.stream;

import java.util.Arrays;
import java.util.List;

public class Stream03 {
  public static void main(String[] args) {
    List<Student> students = Arrays.asList(
      new Student("alice", 0),
      new Student("Bob", 0)
    );

    List<String> studentNames = students.stream()
    .map(Student::getName)
    .toList();

    System.out.println(studentNames);
  }
}

class Student {
  private String name;
  private int age;

  public Student(String name, int age) {
    this.name = name;
    this.age = age;
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

  @Override
  public String toString() {
    return "Student [name=" + name + ", age=" + age + "]";
  }

}