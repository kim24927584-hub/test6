package a0811.library;

import java.util.ArrayList;
import java.util.Scanner;

public class LibraryManager {
  private  ArrayList<Library> librarys; 
  private  ArrayList<Library> bookLocation;

  public LibraryManager(){
    librarys = new ArrayList<>();
    bookLocation = new ArrayList<>();
    Library library1 = new Library("가", "shin", "SectionA", "979-11-691-229-8");
    librarys.add(library1);
    librarys.add(new Library("나", "Lee Inje", "Section B", "979-11-6921-169-7"));
    librarys.add(new Library("다", "Ko Kyunghee", "Section C", "979-11-6303-622-7"));
  }
  public void allLibrary(){
    for(int i=0;i<librarys.size();i++){
      Library library = librarys.get(i);
      if(library.isAvailable()){
        System.out.println(library);
      }
    }
  }
  public boolean bookLocations(String libraryName) {
    for(Library lib:librarys){
      if (lib.getTitle().equals(libraryName) && lib.isAvailable()){
        lib.book();
        bookLocation.add(lib);
        return true;
      }
    }
    return false;
  }
  public void bookLocations(){
    for(Library lib: bookLocation){
      System.out.println(lib);
    }
  }
  public void addLibrary(String newTitle, String newAuthor, String newLocation, String newISBN) {
    Library newlib = new Library(newTitle, newAuthor, newLocation, newISBN);
    librarys.add(newlib);
  }
  public void delLibrary(String dName) {
    for(Library lib: librarys){
      if(lib.getTitle().equals(dName) && lib.isAvailable()){
        librarys.remove(lib);
        System.out.println("삭제됨");
        return;
      }
    }
    System.out.println("찾을 수 없음");
    return;
  }
  public void updateLibrary(String uName) {
    Scanner sc = new Scanner(System.in);
    boolean found = false;
    for(Library lib: librarys){
      if(lib.getTitle().equals(uName)){
        System.out.print("뭘 수정할건데? \n" + "1. 도서이름 \t 2. 도서저자 \t 3. 도서위치 \t 4. 도서ISBN \n >>");
        int choice = sc.nextInt();
        sc.nextLine();
        switch (choice) {
          case 1:
            System.out.print("수정 할 이름: ");
            lib.setTitle(sc.nextLine());
            break;
          case 2:
            System.out.print("수정 할 이름: ");
            lib.setAuthor(sc.nextLine());
            break;
          case 3:
            System.out.print("수정 할 위치: ");
            lib.setLocation(sc.nextLine());
            break;
          case 4:
            System.out.print("new ISBN: ");
            lib.setIsbn(sc.nextLine());
            break;
          default:
            System.out.println("1~4번 중에 입력하세요");
            break;
        }
      }
      found = true;
      break;

    }
    if (!found){
      System.out.println("찾는 도서가 없어서 업데이트 할 수 없습니다.");
    }
  }
  public void showLibrary(String sname) {
    for(Library library:librarys){
      if(library.getTitle().equals(sname)){
        System.out.println(library);
      }
    }
  }
}
