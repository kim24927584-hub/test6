package a0803.student;



public class Main1 {
  

  public static void main(String[] args) {
    Student[] students = new Student[5];

    students[0] = new Student("홍길동", 90, 80, 70);
    students[1] = new Student("이순신", 100, 95, 90);
    students[2] = new Student("김유신", 85, 88, 91);
    students[3] = new Student("강감찬", 77, 80, 83);
    students[4] = new Student("신사임당", 95, 98, 100);
    
    System.out.println("===학생목록 ====");
    printStudents(students);

    System.out.println("===학생수정 ====");
    updateStudent(students, "홍길동", 0, 0, 0);

    System.out.println("===학생삭제 ====");
    
  }

  private static void printStudents(Student[] students) {
    System.out.println("-----------------------------------");
    System.out.println("이름     국어 영어 수학 총점 평균");
    System.out.println("-----------------------------------");
    for(Student s: students){
      if(s!=null){
        s.printInfo();
      }
    }
  }
  private static void updateStudent(Student[] students, String name, int kor, int eng, int math){
    for(Student s: students){
      if (s != null && s.getName().equals(name)){
        s.setKor(kor);
        s.setEng(eng);
        s.setMath(math);
        s.calc();
        System.out.println(name+"학생 정보 수정 완료");
        return;
      }
    }
    System.out.println("학생을 찾을 수 없습니다");

  }
  
}
