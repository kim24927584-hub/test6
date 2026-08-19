package a0819.movie;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.nio.Buffer;

/**
 * Ticket
 */
public class Ticket {
  private ReservationManager reservationManager;

  public Ticket(ReservationManager reservationManager) {
    this.reservationManager = reservationManager;
  }

  public void printTicket(int reservationNum) {
    try{
      File dir = new File("C:\\minsung3\\java");
      if(!dir.exists()){
        dir.mkdir();
      }
      File file = new File(dir, "ticket_"+reservationNum+".txt");
      boolean isNewFile = file.createNewFile();
      try(BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(file))) {
        if(file.canWrite()){
          if(!isNewFile){
            bufferedWriter.newLine();
          }
          String ticketInfo = reservationManager.getReservationDetails(reservationNum);
          if(ticketInfo == null){
            System.out.println("예매 정보를 찾을 수 없습니다.");
            return;
          }
          bufferedWriter.write(ticketInfo);
          bufferedWriter.flush();
          System.out.println("티켓 출력 성공");
        }else{
          System.out.println("티켓출력실패: 권한 문제");
        }
      } catch (Exception e) {
        
      }
    }catch(Exception e){
      System.out.println("티켓출력실패" + e.getMessage());
    }
  }

  public void updateMovieList() {
    File file = new File("C:\\minsung3\\java");

    if(!file.exists()){
      System.out.println("movieList.txt 파일이 존재하지 않습니다.");
      return;
    }
    try (BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(new FileInputStream(file), "UTF-8"))){
      String line;
      System.out.println("======================================");
      while((line=bufferedReader.readLine())!=null){
        line = line.trim();
        if(line.isEmpty())continue;

        String[] movies = line.split("/");
        if(movies.length != 4){
          System.out.println("잘못된 형식의 영화 정보 : "+line);
        }
        try {
          String title = movies[0];// 영화제목
          String genre = movies[1];// 상영시간
          int rows = Integer.parseInt(movies[2]);// 가격
          int totalSeats = Integer.parseInt(movies[3]);// 총좌석
          // 중복영화확인
          if (reservationManager.getMovie(title) != null) {
            System.out.println("중복된 영화 [" + title + "] 은(는) 추가되지 않습니다.");
            continue;
          }
          Movie movie = new Movie(title, genre, rows, totalSeats);
          reservationManager.addMovie(movie);
          System.out.println("영화 추가됨: " + movie.getTitle()); 
        } catch (NumberFormatException e) {
          System.out.println("좌석 수 또는 행 수가 잘못된 숫자입니다." + line);
        }
      }
    } catch (IOException e) {
      // TODO: handle exception
    }
  }
  
}
