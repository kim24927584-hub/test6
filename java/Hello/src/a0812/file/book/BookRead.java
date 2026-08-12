package a0812.file.book;

import java.io.File;
import java.io.FileReader;

public class BookRead {
  public static void main(String[] args) {
    File file = new File("C:/lib/info.txt");
    try {
      FileReader fr = new FileReader(file);  
      int ch;
      
      while( true){
        ch = fr.read();
        if (ch!=-1){
          System.out.print((char)ch);
        }else{
          break;
        }
        
      }
      
    } catch (Exception e) {
      System.out.println(e);
    }
    
  }
  
}
