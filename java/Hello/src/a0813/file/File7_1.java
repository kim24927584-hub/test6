package a0813.file;

import java.io.FileWriter;
import java.io.PrintWriter;

public class File7_1 {
  public static void main(String[] args) throws Exception{
    PrintWriter pw  = new PrintWriter("c:/Users/tj/out1.txt","UTF-8");
    for(int i = 1; i < 11; i++){
        String data = i + " 번째 줄입니다.";
        pw.println(data);
    }
    pw.close();
    PrintWriter pw2 = new PrintWriter(new FileWriter("c:/Users/tj/out1.txt",true));
    for(int i=1;i<21;i++){
      String data = i+"번째 줄입니다.";
      pw2.print(data);
    }
    pw2.close();
  }
}
