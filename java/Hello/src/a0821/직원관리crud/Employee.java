package a0821.직원관리crud;

public class Employee {
  private String id;
  private String name;
  private String dept;
  private int salary;
  public Employee(String id, String name, String dept, int salary) {
    this.id = id;
    this.name = name;
    this.dept = dept;
    this.salary = salary;
  }
  public String getId() {
    return id;
  }
  // public void setId(String id) {
  //   this.id = id;
  // }
  public String getName() {
    return name;
  }
  public void setName(String name) {
    this.name = name;
  }
  public String getDept() {
    return dept;
  }
  public void setDept(String dept) {
    this.dept = dept;
  }
  public int getSalary() {
    return salary;
  }
  public void setSalary(int salary) {
    this.salary = salary;
  }
  @Override
  public String toString() {
    return "사번: " + id + "| 이름: " + name + "| 부서: " + dept + "| 연봉: " + salary + "만원";
  }
  
}
