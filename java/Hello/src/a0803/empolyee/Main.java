package a0803.empolyee;

public class Main {
  public static void main(String[] args) {
    Empolyee[] empolyees = new Empolyee[5];

    empolyees[0] = new Empolyee(1001, "홍길동", 1000, 50);
    empolyees[1] = new Empolyee(1002, "조강현", 1000, 50);
    empolyees[2] = new Empolyee(1003, "김철수", 1000, 50);
    empolyees[3] = new Empolyee(1004, "김순자", 1000, 50);
    empolyees[4] = new Empolyee(1005, "강호동", 1000, 50);
    
    System.out.println("======목록 출력=======");
    Read(empolyees);
    System.out.println("======직원 수정=======");
    Update(empolyees,999, "홍길동", 1000, 5000);
    System.out.println("======직원 삭제=======");
    Delete(empolyees, "홍길동");
    System.out.println("======최종목록 출력=======");

    Read(empolyees);
  }
  private static void Delete(Empolyee[] empolyees, String name){
    for(int i=0;i<empolyees.length;i++){
      if(empolyees[i] != null && empolyees[i].name.equals(name)){
        empolyees[i] = null;
        System.out.println("직원 정보를 성공적으로 삭제했습니다.");
        return;
      }
    }
    System.out.println("찾으시는 직원이 없습니다.");

  }

  private static void Update(Empolyee[] empolyees, int empNo, String name, int salary, int bonus) {
    for(Empolyee e: empolyees){
      if(e != null && e.name.equals(name)){
        e.setEmpNo(empNo);
        e.setName(name);
        e.setSalary(salary);
        e.setBonus(bonus);
        System.out.println("직원 정보를 성공적으로 수정했습니다.");
        return;
      }
    }
    System.out.println("찾는 직원이 없습니다.");
    

  }

  private static void Read(Empolyee[] empolyees) {
    System.out.println("======================================");
    System.out.println("사번   이름   기본금   보너스   총급여");
    System.out.println("======================================");
    
    for(int i=0;i<empolyees.length;i++){
      
      if (empolyees[i] == null) {
        System.out.println("비어있음");
        
      }
      else{
        Empolyee e = empolyees[i];

        System.out.printf("%d  %s  %d     %d       %d \n",
            e.empNo, e.name, e.salary, e.bonus, e.totalSalary);
      }
      
    }
  }
  
}
