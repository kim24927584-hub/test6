package a0824.casting;

public class Main1 {
  public static void main(String[] args) {
    Parent p = new Child();
    p.show();
    System.out.println(p.x);  
    p.hello
  }
  

}
class Parent{
  int x = 100;
  void show(){
    System.out.println("Parent: " + x);
  }
}
class Child extends Parent{
  int x = 200;
  
  void show() {
    System.out.println("Child: " + x);
  }
  void hello(){
    System.out.println("안녕");
  }
}