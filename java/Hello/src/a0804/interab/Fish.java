package a0804.interab;

public class Fish extends Animal implements Swimmable{
  String habitat;

  public Fish(String name, int age, String habitat) {
    super(name, age);
    this.habitat = habitat;
  }

  @Override
  public void makeSound() {
    // TODO Auto-generated method stub
    System.out.println(name+"는 소리를 내지 않습니다.");
  }

  @Override
  public void move() {
    // TODO Auto-generated method stub
    System.out.println(name+"가 헤엄쳐 다닙니다.");
  }

  @Override
  public void swim() {
    // TODO Auto-generated method stub
    System.out.println(name+"가 수영합니다.");
  }

  
  
}
