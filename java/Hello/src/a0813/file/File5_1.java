package a0813.file;

import java.io.FileOutputStream;
import java.io.IOError;
import java.io.IOException;

public class File5_1 {
  public static void main(String[] args) throws IOException{
    FileOutputStream output = new FileOutputStream("c:/Users/tj/out.txt");
    for(int i = 1; i < 11 ; i++){
      String data = i + "번째 줄입니다.\r\n";
      output.write(data.getBytes());
    }
    output.close();
  }
}
