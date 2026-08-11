package a0811.movie;

import java.util.Scanner;

public class Search {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    boolean flag = true;
    MovieManager manager = new MovieManager();

    while(flag){
      System.out.println("1. 대여 가능한 영화 보기");
      System.out.println("2. 영화 대여하기");
      System.out.println("3. 대여한 영화 보기");
      System.out.println("4. 영화 추가하기");
      System.out.println("5. 영화 삭제하기");
      System.out.println("6. 영화 정보 수정하기");
      System.out.println("7. 영화 내용 보기");
      System.out.println("8. 종료");
      System.out.print(">>");
      int menu = sc.nextInt();
      sc.nextLine();

      switch (menu) {
        case 1:
          manager.showMovies();
          break;
        case 2:
          System.out.print("대여할 영화 이름: ");
          String title = sc.nextLine();
          
          if(manager.rent(title)){
            System.out.println("영화 대여 완료");
          }else{
            System.out.println("찾는 영화가 없습니다.");
          }
          break;
        case 3:
          System.out.println("===대여한 영화 목록===");
          manager.showReserved();
          break;
        case 4:
          System.out.print("제목: ");
          String newTitle = sc.nextLine();
          System.out.print("감독: ");
          String newDirector = sc.nextLine();
          System.out.print("장르: ");
          String newGenre = sc.nextLine();
          System.out.print("연령: ");
          String newRathing = sc.nextLine();
          manager.create(new Movie(newTitle, newDirector, newGenre, newRathing));
          System.out.println("영화 추가 완료.");
          break;
        case 5:
          System.out.print("삭제 할 영화 이름: ");
          title = sc.nextLine();
          if(manager.delete(title)){
            System.out.println("영화 삭제 성공.");
          }else{
            System.out.println("찾는 영화가 없습니다.");
          }
          break;
        case 6:
          System.out.print("수정 할 영화 제목: ");
          String utitle = sc.nextLine();
          boolean result = manager.update(utitle);
          if(result){
            System.out.println("수정 완료");
          }else{
            System.out.println("찾는 영화가 없습니다.");
          }
          break;
        case 7:
          System.out.print("찾는 영화 이름: ");
          title = sc.nextLine();
          result = manager.showInfo(title);
          if(!result){
            System.out.println("찾는 영화가 없습니다.");
          }
          break;
        case 8:
          flag = false;
        default:
          break;
      }







    }

    
  }
  
}
