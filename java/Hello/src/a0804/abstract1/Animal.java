package a0804.abstract1;

abstract class Animal {
  String name;

  public Animal(String name) {
    this.name = name;
  }
  public void eat(){
    System.out.println(name + "이 먹습니다.");
  }

  // 추상 메서드 - 몸체가 없는 메서드
  // 선언만 있고 구현 x
  // 자식클래스에서 오버라이딩 해야함
  abstract void makeSound();
  
}
