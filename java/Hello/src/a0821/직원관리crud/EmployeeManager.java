package a0821.직원관리crud;

import java.util.ArrayList;
import java.util.Scanner;

public class EmployeeManager {
  private ArrayList<Employee> list = new ArrayList<>();
  private Scanner sc = new Scanner(System.in);

  public EmployeeManager() {
    list.add(new Employee("E001", "홍길동", "개발팀", 3500));
    list.add(new Employee("E002", "김영희", "인사팀", 3200));
    list.add(new Employee("E003", "이철수", "영업팀", 3000));
    list.add(new Employee("E004", "박민수", "개발팀", 3800));
    list.add(new Employee("E005", "최지우", "기획팀", 3400));
  }

  public void run(){
    while(true){
      System.out.println("====================직원 관리 시스템====================");
      System.out.println("1. 직원 등록 (C)");
      System.out.println("2. 전체 조회 (R)");
      System.out.println("3. 직원 수정 (U)");
      System.out.println("4. 직원 삭제 (D)");
      System.out.println("5. 사번으로 검색");
      System.out.println("0. 종료");
      System.out.print("선택>");

      String menu = sc.nextLine();

      switch(menu){
        case "1":
          addEmployee();
          break;
        case "2":
          printAll();
          break;
        case "3":
          updateEmployee();
          break;
        case "4":
          deleteEmployee();
        case "5":
          search();
        case "0":
          System.out.println("프로그램 종료합니다.");
          return;
        default:
          System.out.println("잘못된 선택");
      }
    }
  }

  private void search() {
    System.out.print("사번: ");
    String id = sc.nextLine();
    Employee e = findById(id);
    if (e == null) {
      System.out.println("없는 사번입니다.");
      return;
    }
    System.out.println(e);
  }

  private void deleteEmployee() {
    System.out.print("사번: ");
    String id = sc.nextLine();
    Employee e = findById(id);
    if (e == null) {
      System.out.println("없는 사번입니다.");
      return;
    }
    list.remove(e);
    System.out.println("삭제되었습니다.");
  }

  private void updateEmployee() {
    System.out.print("사번: ");
    String id = sc.nextLine();
    Employee e = findById(id);
    if (e == null) {
      System.out.println("없는 사번입니다.");
      return;
    }
    System.out.print("새 이름: ");
    String name = sc.nextLine();
    if(!name.isEmpty()){
      e.setName(name);  
    }
    
    System.out.print("새 부서: ");
    String dept = sc.nextLine();
    if (!dept.isEmpty()) {
      e.setDept(dept);
    }

    System.out.print("새 연봉: ");
    String salary = sc.nextLine();
    if (!salary.isEmpty()) {
      e.setSalary(Integer.parseInt(salary));
    }
    
  }

  private void printAll() {
    if(list.isEmpty()){
      System.out.println("사원이 없습니다.");
      return;
    }
    for(int i=0;i<list.size();i++){
      System.out.println("["+(i+1)+"]"+list.get(i));
    }
  }

  private void addEmployee() {
    System.out.print("사번: ");
    String id = sc.nextLine();

    if(findById(id) != null){
      System.out.println("이미 존재하는 사번입니다.");
      return;
    }
    System.out.print("이름: ");
    String name = sc.nextLine();
    System.out.print("부서: ");
    String dept = sc.nextLine();
    System.out.print("연봉: ");
    int salary = Integer.parseInt(sc.nextLine());
    list.add(new Employee(id, name, dept, salary));
    
  }

  private Employee findById(String id) {
    
    for(Employee e: list){
      if(e.getId().equals(id)){
        return e;
      }
    }
    return null;
  }
}
