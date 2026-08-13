package a0813.file;

import java.io.FileOutputStream;
import java.io.IOError;
import java.io.IOException;

public class File6 {
  public static void main(String[] args){
    

    try{
      FileOutputStream output = new FileOutputStream("c:/Users/tj/out.txt");
      output.close();
    }catch(IOException e){
      System.out.println("파일처리");
    }
  }
}
