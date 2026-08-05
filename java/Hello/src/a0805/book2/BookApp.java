package a0805.book2;

import java.util.ArrayList;
import java.util.Scanner;

public class BookApp {
  public static void main(String[] args) {
    ArrayList<Book> list = new ArrayList<>();
    Scanner sc = new Scanner(System.in);
    boolean run = true;

    // 더미 데이터
    list.add(new Book("자바의 정석", "남궁성"));
    list.add(new Book("혼자 공부하는 자바", "신용권"));
    list.add(new Book("이것이 자바다", "신용권"));

    while (run) {
      System.out.println("------------------------");
      System.out.println("1. 도서 등록");
      System.out.println("2. 도서 검색");
      System.out.println("3. 도서 수정");
      System.out.println("4. 도서 삭제");
      System.out.println("5. 전체 출력");
      System.out.println("6. 종료");
      System.out.print("선택 > ");

      int menu;
      try {
        menu = Integer.parseInt(sc.nextLine()); // 문자 1,2,3등을 입력받아 숫자로 변환해줌
      } catch (Exception e) { // 예외발생 (a라는 문자입력)
        System.out.println("숫자만 입력하세요");
        continue;
      }
      switch (menu) {
        case 1:
          System.out.print("제목 입력: ");
          String title = sc.nextLine();
          System.out.print("저자입력: ");
          String author = sc.nextLine();
          list.add(new Book(title, author));
          break;
        case 2: //검색
          System.out.print("검색할 제목:");
          title = sc.nextLine();
          Book b = findBook(list, title);
          if (b != null){
            System.out.println(b);
          }
          else{
            System.out.println("찾는 도서가 없습니다.");
          }
          break;
        case 3: //도서 수정
          System.out.print("수정할 제목:");
          title = sc.nextLine();
          System.out.print("새 저자 입력: ");
          author = sc.nextLine();
          if(updateBook(list, title, author)){
            System.out.println("수정완료");
          }else{
            System.out.println("해당 도서가 없습니다.");
          }
          break;
        case 4://삭제
          System.out.print("삭제할 제목:");
          title = sc.nextLine();
          if(deleteBook(list,title)){
            System.out.println("삭제완료");
          }else{
            System.out.println("찾는 도서가 없습니다.");
          }
          break;
        case 5:
          if(list.isEmpty()){System.out.println("등록된 도서가 없습니다.");}
          else{
            for(Book a:list){
              System.out.println(a);
            }
          }
          break;
        case 6:
          run = false;
          break;
        default:
          break;
      }
    }
  }

  private static boolean deleteBook(ArrayList<Book> list, String title) {
    for(int i=0;i<list.size();i++){
      if(list.get(i).getTitle().equals(title)){
        list.remove(i);
        return true;
      }
    }
    return false;
  }

  private static boolean updateBook(ArrayList<Book> list, String title, String author) {
    Book b = findBook(list, title);
    if (b != null){
      b.setAuthor(author);
      b.setTitle(title);
      return true;
    }
    else{
      return false;
    }
  }

  private static Book findBook(ArrayList<Book> list, String title) {
    for(Book b:list){
      if(b.getTitle().equals(title)){
        return b;
      }
    }
    
    return null;
  }
}
