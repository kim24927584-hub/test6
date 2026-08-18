package a0818.movie;

import java.util.ArrayList;
import java.util.Scanner;

public class ReservationManager {
  private ArrayList<Movie> movies;
  private ArrayList<User> users;
  private Scanner sc;
  private static Ticket ticket;
  private int discountRate = 0;
  public ReservationManager() {
    movies = new ArrayList<>();
    users = new ArrayList<>();
    sc = new Scanner(System.in);
  }

  public void addMovie(Movie movie){
    movies.add(movie);
  }
  
  public User getUser(String userName){
    for(User user : users){
      if(user.getName().equals(userName)){
        return user;
      }
    }
    return null;
  }
  public Movie getMovie(String title){
    for(Movie movie : movies){
      if(movie.getTitle().equals(title)){
        return movie;
      }
    }
    return null;
  }

  public void showMovies() {
    System.out.println("\n 현재 상영 중인 영화 목록");
    for(Movie movie: movies){
      System.out.println(movie);
    }
  }
  public void movieReservation(){
    System.out.print("영화 제목 입력: ");
    String title = sc.nextLine();
    System.out.print("사용자 이름 입력: ");
    String userName = sc.nextLine();
    Movie movie = getMovie(title);

    if(movie == null){
      System.out.println("해당 영화가 없습니다.");
    }
    movie.getTheater().displaySeats();
    System.out.println("좌석 번호 선택 :");
    int seatNumber = Integer.parseInt(sc.nextLine());
    if(bookSeat(userName, title, seatNumber)){
      int price = movie.getPrice();
      int discount = (price * discountRate) / 100;
      int finalprice = price - discount;
      System.out.println("예매가 완료되었습니다.");
      System.out.println("원가 : " + price + "원");
      System.out.println("할인율 : " + discountRate + "%");
      System.out.println("할인된 금액 : " + discount + "원");
      System.out.println("결제 금액 : " + finalprice + "원");

      User user = getUser(userName);
      if(user != null){
        user.addTotalPaid(finalprice);
      }
    }
  }

  private boolean bookSeat(String userName, String title, int seatNumber) {
    Movie movie = getMovie(title);
    if(!movie.getTheater().reserveSeat(seatNumber)){
      System.out.println("이미 예약된 좌석입니다.");
      return false;
    }
    User user = getUser(userName);
    if(user == null){
      user = new User(userName);
    }

    user.addReservation(title, seatNumber);
    return true;
  }

  public void checkReservation() {
    System.out.print("사용자 이름 입력: ");
    String userName = sc.nextLine();
    User user = getUser(userName);
    if(user != null && !user.getReservedMovies().isEmpty()){
      for (int i = 0; i < user.getReservedMovies().size(); i++) {
        System.out.println("예매번호: " + user.getReservationNumbers().get(i) +
            " | 영화: " + user.getReservedMovies().get(i) +
            " | 좌석: " + user.getReservedSeats().get(i));
      }
      System.out.println("총 결재 금액 : " + user.getTotalPaid() + "원");

    }else{
      System.out.println("예약내역이 없습니다.");
    }

  }

  public void cancelReservation() {
    System.out.print("사용자 이름 입력: ");
    String userName = sc.nextLine();
    User user = getUser(userName);

    if (user == null || user.getReservedMovies().isEmpty()) {
      System.out.println(userName + "님은 예약된 내역이 없습니다.");
      return;
    }
    user.showReservations();
    // 예약목록출력

    System.out.print("취소할 예매 번호를 입력하세요: ");
    int reservationNumber = sc.nextInt();
    sc.nextLine();
    int index = user.getReservationNumbers().indexOf(reservationNumber);
    if(index == -1){
      System.out.println("해당 예매번호의 예약이 없습니다.");
      return;
    }
    String movieTitle = user.getReservedMovies().get(index);
    int seatNumber = user.getReservedSeats().get(index);
    Movie movie = getMovie(movieTitle);
    if(movie != null){
      movie.getTheater().cancelSeat(seatNumber);
    }
  }

  public void cancelAllReservation() {
    System.out.print("사용자 이름 입력: ");
    String userName = sc.nextLine();
    User user = getUser(userName);

    if (user == null || user.getReservedMovies().isEmpty()) {
      System.out.println(userName + "님은 예약된 내역이 없습니다.");
      return;
    }

    ArrayList<String> movies = user.getReservedMovies();
    ArrayList<Integer> seats = user.getReservedSeats();
    ArrayList<Integer> numbers = user.getReservationNumbers();

    for(int i=0;i<movies.size();i++){
      String movieTitle = movies.get(i);
      int seatNumber = seats.get(i);
      int reservationNumber = numbers.get(i);
      Movie movie = getMovie(movieTitle);
      if(movie != null){
        movie.getTheater().cancelSeat(seatNumber);
        System.out.println("[" + reservationNumber + "] 영화 [" + movieTitle + "] 좌석 [" + seatNumber + "] 취소됨.");
      }
    }
    user.clearReservations();
    System.out.println("\n"+userName+"님의 모든 예약이 취소되었습니다.");



  }
  
}
