package a0730.student1;

public class Student {
  public String name;
  public int age;
  public String major;

  public Student(String name, int age, String major){
    this.name = name;
    this.age = age;
    this.major = major;
  }
  public void displayInfo(){
    System.out.println("학생 이름 : "+ name);
    System.out.println("나이" +  age+"세");
    System.out.println();

  }
  
}
