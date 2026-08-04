package a0804.interab;

abstract class Animal {
  protected String name;
  protected int age;
  public Animal(String name, int age) {
    this.name = name;
    this.age = age;
  }
  public void ear(){
    System.out.println(name+"가 먹습니다.");
  }
  public void sleep(){
    System.out.println(name+"가 잡니다.");
  }
  public abstract void makeSound();
  public abstract void move();
}
