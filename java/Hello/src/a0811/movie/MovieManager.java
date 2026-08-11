package a0811.movie;

import java.util.ArrayList;
import java.util.Scanner;

public class MovieManager {
  ArrayList<Movie> movies = new ArrayList<>();
  ArrayList<Movie> reserved = new ArrayList<>();
  public MovieManager() {
    movies.add(new Movie("인셉션", "놀란","SF", "12"));
    movies.add(new Movie("패러사이트", "봉","Drama", "15"));
  }
  public void showMovies() {
    System.out.println("=====영화 리스트======");
    for(Movie m : movies){
      if(m.isAvailable())
      System.out.println(m);
    }
  }
  public boolean rent(String title) {
    for(Movie m : movies){
      if(m.getTitle().equals(title) && m.isAvailable()){
        reserved.add(m);
        m.movie();
        
        return true;
      }
    }
    return false;
    
  }
  public void showReserved() {
    for(Movie m : reserved){
      System.out.println(m);
    }
  }
  public void create(Movie movie) {
    movies.add(movie);
    
  }
  public boolean delete(String title) {
    for(Movie movie : movies){
      if(movie.getTitle().equals(title)){
        movies.remove(movie);
        return true;
      }
    }
    return false;
  }
  public boolean update(String utitle) {
    Scanner sc = new Scanner(System.in);
    for(Movie m: movies){
      if(m.getTitle().equals(utitle)){
        System.out.println("===수정 하고 싶은 항목===");
        System.out.println("1.제목");
        System.out.println("2.감독");
        System.out.println("3.장르");
        System.out.println("4.연령");
        System.out.print(">>");
        int choice = sc.nextInt();

        sc.nextLine();
        switch (choice) {
          case 1:
            System.out.print("새로운 제목: "); 
            m.setTitle(sc.nextLine());
            break;
          case 2:
            System.out.print("새로운 감독이름: ");
            m.setDirector(sc.nextLine());
            break;
          case 3:
            System.out.print("새로운 장르: ");
            m.setGenre(sc.nextLine());
            break;
          case 4:
            System.out.println("새로운 연령: ");
            m.setRathing(sc.nextLine());

            break;

          default:
            break;
        }
    
        return true;
      }
    }
    
    return false;
    
  }
  public boolean showInfo(String title) {
    for(Movie m:movies){
      System.out.println(m);
      return true;
    }
    return false;
  }

  
  // Inception|Nolan|SF|12|
  // |Parasite|Bong|Drama|15||
  // Toy Story|Lasseter|Animation|All|
  
}
