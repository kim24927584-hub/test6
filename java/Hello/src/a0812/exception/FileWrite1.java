package a0812.exception;

import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

public class FileWrite1 {
  public static void main(String[] args) {
    try{
      FileReader fr = new FileReader("C:/abc/test.txt");
      int data;
      while((data=fr.read()) != -1){
        System.out.println((char) data);
      }
      fr.close();
    }catch(IOException e){
      System.out.println("파일을 읽을 수 없습니다.");
      System.out.println(e.getMessage());
    }
  }
}
