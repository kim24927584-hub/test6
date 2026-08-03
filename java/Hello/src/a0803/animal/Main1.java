package a0803.animal;

public class Main1 {
  public static void main(String[] args) {
    Dog dog = new Dog();
    dog.name = "초코";
    System.out.println(dog.name);
    dog.eat();
    dog.bark();
    Cat cat = new Cat();
    cat.name = "나비";
    cat.yang();
  }
}
