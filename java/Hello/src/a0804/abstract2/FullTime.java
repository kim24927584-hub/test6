package a0804.abstract2;

public class FullTime extends Employee{

  public FullTime(String name) {
    super(name);
  }

  @Override
  public int getSalary() {
    return 3000000;
  }
  
}
