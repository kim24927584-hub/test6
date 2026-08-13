package a0813.file;

import java.io.FileOutputStream;
import java.io.IOError;
import java.io.IOException;

public class File5 {
  public static void main(String[] args) throws IOException{
    FileOutputStream output = new FileOutputStream("c:/Users/tj/out.txt");
    output.close();
  }
}
