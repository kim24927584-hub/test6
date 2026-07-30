package a0730.student2;

public class Student {
  // public 누구나 접근이 가능 - 패키지 (폴더가 달라도 접근가능
  // default 에는 같은 폴더만 접근 가능)
  // private 같은 클래스에서만 접근가능
  // private 정보의 캡슐화 , 은닉화
  private String name; // 이름
  private int age; // 나이
  private String major; // 전공

  // 변수에 값을 입력하려면 setter 매서드

  // public void setName(String name) {
  // this.name = name;
  // }

  // 값을 입력하는 메서드
  public void setName(String name) {
    this.name = name;
  }

  public void setAge(int age) {
    this.age = age;
  }

  public void setMajor(String major) {
    this.major = major;
  }

  public String getName() {
    return name;
  }

  public int getAge() {
    return age;
  }

  public String getMajor() {
    return major;
  }
  
}
