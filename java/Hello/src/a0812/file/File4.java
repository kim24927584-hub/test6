package a0812.file;

import java.io.File;

public class File4 {
  public static void main(String[] args) {
    File folder = new File("C:/abcd");
    if(folder.delete()){
      
      System.out.println("삭제 완료");

    }else{
      System.out.println("삭제 실패");
    }
  }
  
}
