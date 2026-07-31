package a0731.aven;

public class Avenger {
  String name;
  int hp;
  public Avenger(String name, int hp) {
    this.name = name;
    this.hp = hp;
  }
  public void punch(Avenger enemy){
    this.hp -= enemy.hp;
  }
}
