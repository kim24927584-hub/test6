package a0803.over;
//오버라이딩
//부모클래스의 메서드를 자식 클래스에서 다시 작성하는 것을 오버라이딩

public class Main5 {
  public static void main(String[] args) {
    Dog dog = new Dog();
    dog.sound();
    Animal ani = new Animal();
    ani.sound();
  }
}
