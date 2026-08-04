package a0804.abstract2;

abstract class Employee {
  String name;

  public Employee(String name) {
    this.name = name;
  }

  public void work(){
    System.out.println(name+"이가 근무중입다.");
  }
  public abstract int getSalary();
  
}
