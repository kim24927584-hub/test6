package a0812.file.student1;

import java.io.File;
import java.io.FileWriter;

public class StudentSave {
  public static void main(String[] args) {
    Student[] students = {
      new Student("홍길동", 20, "컴공"),
      new Student("김철수", 20, "전자"),
      new Student("이영희", 20, "AI")
    };

    File folder = new File("C:/abcdf");

    if(!folder.exists()){
      folder.mkdir();
    }

    File file = new File("C:/abcdf/student.txt");

    try{
      FileWriter fw = new FileWriter(file);
      for(Student student: students){
        fw.write("========학생정보==========");
        fw.write("이름: " + student.getName()+"\n");
        fw.write("나이: " + student.getAge()+"\n");
        fw.write("전공: " + student.getMajor()+"\n");
      }
      
      fw.close();

      System.out.println("학생 정보 저장 완료");
    }catch(Exception e){
      System.out.println("저장실패");
    }
  }
  
}
