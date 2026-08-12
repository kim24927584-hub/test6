package a0812.file;

import java.io.File;

public class File2 {
  public static void main(String[] args) {
    File folder = new File("C:/abcd");
    if(!folder.exists()){
      folder.mkdir();
      System.out.println("폴더 생성 완료");

    }else{
      System.out.println("이미 있습니다.");
    }
  }
  
}
