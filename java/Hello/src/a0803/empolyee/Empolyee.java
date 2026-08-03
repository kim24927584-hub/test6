package a0803.empolyee;

public class Empolyee {
  int empNo;
  String name;
  int salary;
  int bonus;
  int totalSalary;
  public Empolyee(int empNo, String name, int salary, int bonus) {
    this.empNo = empNo;
    this.name = name;
    this.salary = salary;
    this.bonus = bonus;

    CalcSalary();
  }
  private void CalcSalary() {
    this.totalSalary = this.salary + this.bonus;
  }
  public void PrintInfo(){
    System.out.printf("%d %s %d %d %d", this.empNo, this.name, this.salary, this.bonus, this.totalSalary );
  }
  public int getEmpNo() {
    return empNo;
  }
  public void setEmpNo(int empNo) {
    this.empNo = empNo;
  }
  public String getName() {
    return name;
  }
  public void setName(String name) {
    this.name = name;
  }
  public int getSalary() {
    return salary;
  }
  public void setSalary(int salary) {
    this.salary = salary;
    CalcSalary();
  }
  public int getBonus() {
    return bonus;
  }
  public void setBonus(int bonus) {
    this.bonus = bonus;
    CalcSalary();
  }
  
  
}
