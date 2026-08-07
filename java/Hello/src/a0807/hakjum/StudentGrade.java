package hakjum;

import java.util.ArrayList;
import java.util.Scanner;

public class StudentGrade {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    ArrayList<Student> students = new ArrayList<>();

    // 더미데이터
    students.add(new Student("홍길동", "20260001"));
    students.add(new Student("김철수", "20260002"));


    boolean condition = true;
    while (condition) {
      System.out.println("1.학생 등록");
      System.out.println("2.성적 입력");
      System.out.println("3.성적 출력");
      System.out.println("4.점수 수정");
      System.out.println("5.점수 삭제");
      System.out.println("6.종료");
      System.out.print("선택:");
      int choice = sc.nextInt();
      sc.nextLine();
      switch (choice) {
        case 1:
          System.out.print("이름 입력: ");
          String name = sc.nextLine();
          System.out.print("학번 입력: ");
          String studentId = sc.nextLine();
          Student student = new Student(name, studentId);
          students.add(student);
          System.out.println("학생 등록 완료!");
          
          break;
        case 2:
          System.out.println("==== 성적 입력 ====");
          System.out.print("학번 입력: ");
          String id = sc.nextLine();
          Student foundStudent = findStudentById(students, id);
          if(foundStudent != null){
            System.out.print("성적 입력: ");
            int grade = sc.nextInt();
            foundStudent.setGrade(grade);
            System.out.println("성적 입력 완료");
          }else{
            System.out.println("해당 학번을 가진 학생이 없습니다.");
          }
          break;
        case 3:
          System.out.println("성적 출력");
          for(Student s: students){
            System.out.println(s);
          }
          break;
        case 4:
          System.out.println("=== 점수 수정 ===");
          System.out.print("학번 입력: ");
          String updateId = sc.nextLine();
          Student updateStudent = findStudentById(students, updateId);
          if(updateStudent != null){
            System.out.println("현재 성적: " + updateStudent.getGrade());
            System.out.print("새 성적 입력: ");
            int newGrade = sc.nextInt();
            sc.nextLine();
            updateStudent.setGrade(newGrade);
            System.out.println("성적 수정 완료");
          }else{
            System.out.println("해당 학번을 가진 학생이 없습니다.");
          }
          break;
        case 5:
          System.out.println("=== 학생 삭제 ===");
          System.out.print("학번 입력: ");
          String deleteId = sc.nextLine();
          Student delStudent = findStudentById(students, deleteId);
          if (delStudent != null) {
            students.remove(delStudent);
            System.out.println("학생 삭제 완료");
          } else {
            System.out.println("해당 학번을 가진 학생이 없습니다.");
          }
          break;
        default:
          break;
      }
      
    }
  }

  private static Student findStudentById(ArrayList<Student> students, String id) {
    for(Student s: students){
      if(s.getStudentId().equals(id)){
        return s;
      }
    }
    return null;
  }
  
}
