package a0804.interab;

public class Brid extends Animal implements Flyable{

  String species;
  
  public Brid(String name, int age, String species) {
    super(name, age);
    this.species = species;
  }

  @Override
  public void makeSound() {
    System.out.println(name+"가 짹짹 웁니다.");
    
  }

  @Override
  public void move() {
    // TODO Auto-generated method stub
    System.out.println(name+"가 이동합니다.");
  }

  @Override
  public void fly() {
    // TODO Auto-generated method stub
    System.out.println(name+"가 날아갑니다.");
  }
  
  
}
