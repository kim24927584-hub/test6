package a0804.interab;

public class Duck extends Animal implements Flyable, Swimmable{
  private String color;

  public Duck(String name, int age, String color) {
    super(name, age);
    this.color = color;
  }

  @Override
  public void makeSound() {
    System.out.println(name+"가 꽥꽥 웁니다.");
  }

  @Override
  public void move() {
    // TODO Auto-generated method stub
    System.out.println(name+"가 걸어다닙니다.");
  }

  @Override
  public void fly() {
    // TODO Auto-generated method stub
    System.out.println( name+"가 날아갑니다");
  }

  @Override
  public void swim() {
    // TODO Auto-generated method stub
    System.out.println(name+"가 수영합니다.");
  }
  
  
}
