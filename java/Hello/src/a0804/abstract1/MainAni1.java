package a0804.abstract1;

import a0729.static1;

public class MainAni1 {
  public static void main(String[] args) {
    // Animal animal = new Animal("동물") - 객체 생성 불가
    Animal dog = new Dog("뽀비");
    Animal cat = new Cat("나비");
  dog.eat();
  dog.makeSound();

  cat.eat();
  cat.makeSound();
  }
  
}
