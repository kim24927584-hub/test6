package a0813.file;

import java.io.PrintWriter;

public class File7 {
  public static void main(String[] args) throws Exception{
    PrintWriter pw  = new PrintWriter("c:/Users/tj/out1.txt","UTF-8");
        for(int i = 1; i < 11; i++){
            String data = i + " 번째 줄입니다.";
            pw.println(data);
        }
        pw.close();
  }
}
