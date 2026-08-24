package a0824.Employee;

public class PartTimeEmployee extends Employee {
  private int workHours;
  private double hourlyRate;
  public PartTimeEmployee(String name, int id, double baseSalary, int workHours, double hourlyRate) {
    super(name, id, baseSalary);
    this.workHours = workHours;
    this.hourlyRate = hourlyRate;
  }
  
  @Override
  double calculateSalary(){
    return baseSalary + (workHours*hourlyRate);
  }

  void workPartTime(){
    System.out.println(name+"이가 시간제로"+workHours+"시간 일합니다");
  }
}
