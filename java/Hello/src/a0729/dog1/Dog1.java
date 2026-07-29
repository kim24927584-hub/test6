package a0729.dog1;

public class Dog1 {
  String name;
  int age;

  public static void main(String[] args) {
    Dog1 dog = new Dog1();
    dog.name = "초코";
    dog.age = 1;

    System.out.println("강아지 이름: " + dog.name);
    System.out.println("강아지 나이: " + dog.age);
  }
  
}
