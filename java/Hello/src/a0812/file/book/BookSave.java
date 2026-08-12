package a0812.file.book;

import java.io.File;
import java.io.FileWriter;

public class BookSave {
  public static void main(String[] args) {
    Book[] books = {
      new Book("차라투스트라", "니체",3000),
      new Book("채식주의자", "한강", 3100)
    };

    File folder = new File("C:/lib");
    if(!folder.exists()){
      folder.mkdir();
      System.out.println("폴더 생성 성공임");
    }

    File file = new File("C:/lib/info.txt");

    try {
      
    
      FileWriter fw = new FileWriter(file);
      
      for(Book b: books){
        fw.write("===========책 정보========== \n");
        fw.write("책이름: " + b.getTitle() + " | 저자: " + b.getAuthor() + "\n");
      }
      System.out.println("책 정보 작성 완료");
      fw.close();
    } catch (Exception e) {
      System.out.println(e);
    }

  }
}
