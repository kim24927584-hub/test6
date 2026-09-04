import java.util.ArrayList;
import java.util.Scanner;

public class StudentApp {
  public static void main(String[] args) {
    ArrayList<Student> students = new ArrayList<>();
    Scanner sc = new Scanner(System.in);

    students.add(new Student("김민성", 23));
    students.add(new Student("이영희", 23));
    while (true) {
      System.out.println("1. 학생 등록");
      System.out.println("2. 학생 검색");
      System.out.println("3. 학생 수정");
      System.out.println("4. 학생 삭제");
      System.out.println("5. 전체 출력");
      System.out.println("6. 종료");
      System.out.print("선택 >");


      int menu;
      try {
        menu = sc.nextInt();  
      } catch (Exception e) {
        System.out.println("숫자만 입력해주세요");
        continue;
      }
      
      sc.nextLine();


      
      switch (menu) {
        case 1:
          System.out.print("이름: ");
          String name = sc.nextLine();
          System.out.print("나이: ");
          int age;
          try{
            age = Integer.parseInt(sc.nextLine());
          }catch(Exception e){
            System.out.println("숫자만 입력하세요");
            break;
          }
          Student nStudent = new Student(name, age);
          students.add(nStudent);
          
          break;
        case 2:
          System.out.print("찾을 학생 이름: ");
          name = sc.nextLine();
          Student found = findStudent(name, students);
          if(found == null){
            System.out.println("찾는 학생이 없습니다.");
            break;
          }
          System.out.println("찾은 학생 정보: " + found);
          break;
        case 3:
          System.out.print("수정할 학생 이름: ");
          name = sc.nextLine();
          boolean result =  updateStudent(name, students);
          if(result){
            System.out.println("학생 정보 수정이 완료됐습니다.");
          }else{
            System.out.println("찾는 학생이 없습니다.");
          }
          break;
        case 4:
          System.out.print("삭제할 학생 이름: ");
          name = sc.nextLine();
          result = delStudent(sc ,name, students);
          if (result) {
            System.out.println("학생 삭제 완료됐습니다.");
          } else {
            System.out.println("찾는 학생이 없습니다.");
          }
          break;
        case 5:
          if(students.isEmpty()){
            System.out.println("등록된 학생이 없습니다.");
            
          }else{
            for (Student s : students) {
              System.out.println(s);
            }
          }

          
          break;
        case 6:
          System.out.println("프로그램 종료");
          return;
        default:
          System.out.println("잘못된 메뉴 선택");
          return;
      }
    }

  }

  private static boolean delStudent(Scanner sc, String name, ArrayList<Student> students) {
    for(Student student: students){
      if(student.name.equals(name)){
        students.remove(student);
        return true;
      }
    }
    return false;
  }

  private static boolean updateStudent(String name, ArrayList<Student> students) {
    Scanner sc = new Scanner(System.in);
    for(Student student: students){
      if(student.name.equals(name)){
        System.out.print("수정할 이름: ");
        String nName = sc.nextLine();
        if(nName == null){
          nName = student.name;
        }
        System.out.print("수정할 나이: ");
        int nAge;
        try {
          nAge = Integer.parseInt(sc.nextLine());
        } catch (Exception e) {
          System.out.println("숫자만 입력해주세요");
          return true;
        }
        
        student.name = nName;
        student.age = nAge;
        
        return true;
      }
    }
    return false;
  }

  private static Student findStudent(String name, ArrayList<Student> students) {
    
    for (Student student : students) {
      if(student.name.equals(name)){
        return student;
      }
    }
    return null;
  }
}
