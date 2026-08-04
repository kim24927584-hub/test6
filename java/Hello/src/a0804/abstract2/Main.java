package a0804.abstract2;

public class Main {
  public static void main(String[] args) {
    Employee e1 = new FullTime("홍길동");
    Employee e2 = new PartTime("이순신");

    e1.work();
    System.out.println("급여"+e1.getSalary());
    e2.work();
    System.out.println("급여"+e2.getSalary());


  }
  
}
