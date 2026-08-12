package a0812.file.student1;

import java.io.FileReader;
import java.io.IOException;

public class StudentRead {
  public static void main(String[] args) {
    try{
      FileReader fr = new FileReader("C:/abcdf/student.txt");
      int ch;
      while((ch=fr.read())!= -1){
        System.out.print((char)ch);
      }
      fr.close();
    }catch(IOException e){
      System.out.println("파일을 읽을 수 없습니다.");
    }
  }
  
}
