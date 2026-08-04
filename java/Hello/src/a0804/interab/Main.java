package a0804.interab;



public class Main {
  public static void main(String[] args) {
    Brid bird = new Brid("짹", 0, "짹짹");
    Fish fish = new Fish("물고", 0, null);
    Duck duck = new Duck(null, 0, null);
    System.out.println("\n=====다형성=====");
    Animal[] animals = {bird, fish, duck};//부모 타입으로 자식 객체를 관리하는 다형성
    for(Animal animal: animals){
      animal.makeSound();
      animal.move();
    }

    // 서로 다른 클래스들이 공통으로 가져야 하는 행동을 강제
    Flyable[] flyables = {bird, duck}; // 같은 기능을 가진 객체를 하나로 관리
    for(Flyable flyable:flyables){
      flyable.fly();
    }

  }
  
}
