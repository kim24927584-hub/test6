package a0811.library;

import java.util.Scanner;

public class Search {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    LibraryManager manager = new LibraryManager();
    boolean flag = true;
    while (flag) {
      
    
    
    System.out.println("\n 도서검색 시스템에 오신 것을 환영합니다.");
    System.out.println("1.대출 가능한 도서 보기");
    System.out.println("2.도서 대출하기");
    System.out.println("3.대출한 도서 보기");
    System.out.println("4.도서 추가하기");
    System.out.println("5.도서 삭제하기");
    System.out.println("6.도서 정보 수정하기");
    System.out.println("7.도서 내용 보기");
    System.out.println("8.종료");
    System.out.print("원하는 작업을 선택하세요 >>");

    int choice = sc.nextInt();
    sc.nextLine();

    switch (choice) {
      case 1:
        System.out.println("대출가능한도서");
        manager.allLibrary();
        
        break;
      case 2:
        System.out.println("도서 대출 하기");
        System.out.print("대출 하려는 도서 이름 입력 : ");
        String libraryName = sc.nextLine();
        if(manager.bookLocations(libraryName)){
          System.out.println("도서가 성공적으로 대출되었습니다.");
        }else{
          System.out.println("찾는 도서가 없습니다.");
        }
        break;
      case 3:
        System.out.println("대출한 도서 보기");
        manager.bookLocations();
        break;
      case 4:
        System.out.println("도서 추가하기");
        System.out.print("추가 도서 이름: ");
        String newTitle = sc.nextLine();
        System.out.print("저자 이름: ");
        String newAuthor = sc.nextLine();
        System.out.print("도서 위치: ");
        String newLocation = sc.nextLine();
        System.out.print("ISBN: ");
        String newISBN = sc.nextLine();
        manager.addLibrary(newTitle, newAuthor, newLocation, newISBN);
        System.out.println("도서 추가 완료");
        break;
      case 5:
        System.out.println("삭제 시작");
        System.out.print("이름 입력: ");
        String dName = sc.nextLine();
        String title = sc.nextLine();
        if(dName.equals("")){
          System.out.println(  "삭제하려는 도서 입력");
          dName = sc.nextLine();
        };
        manager.delLibrary(dName);
        
        
        break;
      case 6:
        System.out.println("수정 시작");
        System.out.print("이름 입력: ");
        String uName = sc.nextLine();
        if(uName.equals("")){
          System.out.println("수정 하려는 도서 다시 입력");
          uName = sc.nextLine();
        }
        manager.updateLibrary(uName);
        System.out.println("수정 완료");
        break;
      case 7:
        System.out.println("조회시작 \n 도서이름입력");
        String sname = sc.nextLine();
        if(sname.equals("")){
          System.out.println("조회하려는 도서 다시 입력.");
          sname = sc.nextLine();
        }
        manager.showLibrary(sname);
        System.out.println("조회완료");
      case 8:
        System.out.println("프로그램을 종료합니다.");
        flag = false;
      default:
        break;
    }
    }
  }
}
