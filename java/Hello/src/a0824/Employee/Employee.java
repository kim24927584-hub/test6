package a0824.Employee;

abstract class Employee {
  protected String name;
  protected int id;
  protected double baseSalary;
  public Employee(String name, int id, double baseSalary){
    this.name = name;
    this.id = id;
    this.baseSalary = baseSalary;
  }

  abstract double calculateSalary();

  public String getName(){
    return name;
  }
  void printInfo(){
    System.out.println("ID: " + id + ", 이름: " + name + 
                        ", 기본급: " + baseSalary + 
                        ", 실급여: " + calculateSalary()
    );
  }
}
