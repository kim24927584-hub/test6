import java.io.*;
import java.util.ArrayList;

public class FileManager {

  private File file = new File("C:/abc/student.txt");

  // 저장
  public void save(ArrayList<Student> list) {

    try {

      File folder = new File("C:/abc");

      if (!folder.exists()) {

        folder.mkdir();

      }

      FileWriter fw = new FileWriter(file);

      for (Student s : list) {

        fw.write(s.toString() + "\n");

      }

      fw.close();

      System.out.println("저장 완료");

    } catch (IOException e) {

      System.out.println("저장 실패");

    }

  }

  // 읽기
  public void load() {

    try {

      FileReader fr = new FileReader(file);

      int ch;

      while ((ch = fr.read()) != -1) {

        System.out.print((char) ch);

      }

      fr.close();

    } catch (IOException e) {

      System.out.println("파일 없음");

    }

  }

}