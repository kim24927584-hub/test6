package a0805.student;

import java.util.ArrayList;
import java.util.Scanner;

public class StudentApp {
  public static void main(String[] args) {
    ArrayList<Student> list = new ArrayList<>();

    list.add(new Student("홍길동",55));
    list.add(new Student("김철수",53));
    list.add(new Student("김영희",51));

    boolean run = true;
    Scanner sc = new Scanner(System.in);
    int menu = 0;
    while (run) {
      
    
      System.out.println("--------------------");
      System.out.println("1. 학생등록");
      System.out.println("2. 학생검색");
      System.out.println("3. 학생수정");
      System.out.println("4. 학생삭제");
      System.out.println("5. 전체출력");
      System.out.println("6. 종료");
      System.out.print("선택 >");

      try {
        menu = Integer.parseInt(sc.nextLine());
      } catch (Exception e) {
        System.out.println("숫자만 입력해주세요.");
      }
      switch (menu) {
        case 1:

          System.out.print("학생이름: ");
          String name = sc.nextLine();
          System.out.print("학생점수: ");
          int score = Integer.parseInt(sc.nextLine());
          regist(list, name, score);
          break;
        case 2:
          System.out.print("학생이름:");
          name = sc.nextLine();
          Student s = findStudent(list, name);
          if (s != null) {
            System.out.println(s);
          }
          break;
        case 3:
          System.out.print("학생이름:");
          name = sc.nextLine();
          System.out.print("수정할 점수: ");
          score = Integer.parseInt(sc.nextLine());
          if (update(list, name, score) != null) {
            System.out.println("수정 완료.");
          }
          break;
        case 4:
          System.out.print("학생이름:");
          name = sc.nextLine();
          if (delete(list, name)) {
            System.out.println("삭제 완료");
          } else {
            System.out.println("찾는 학생이 없습니다.");
          }
          break;
        case 5:
          printStudents(list);
        case 6:
          run = false;
        default:
          break;
      }
    }
    

  }

  private static void printStudents(ArrayList<Student> list) {
    for(Student s:list){
      System.out.println(s);
    }
  }

  private static boolean delete(ArrayList<Student> list, String name) {
    for(int i=0;i<list.size();i++){
      if(list.get(i).getName().equals(name)){
        list.remove(i);
        return true;
      }
    }
    return false;
  }

  private static Object update(ArrayList<Student> list, String name, int score) {
    Student s = findStudent(list, name);
    if (s!=null){
      s.setName(name);
      s.setScore(score);
      return true;
    }
    return false;
  }

  private static Student findStudent(ArrayList<Student> list, String name) {
    for(Student s: list)    {
      if(s.getName().equals(name)){
        return s;
      }
    }
    System.out.println("찾는 학생이 없습니다.");
    return null;
  }

  private static void regist(ArrayList<Student> list, String name, int score) {
    list.add(new Student(name, score));
    System.out.println("학생 등록 완료.");
  }
}
