package a0818.movie;

import java.util.ArrayList;

public class User {
  private String name;
  private ArrayList<Integer> reservationNumbers;
  private ArrayList<String> reservedMovies;
  private ArrayList<Integer> reservedSeats;
  private static int reservationCounter = 1;
  private int totalPaid = 0;
  public User(String name) {
    this.name = name;
    this.reservationNumbers = new ArrayList<>();
    this.reservedMovies = new ArrayList<>();
    this.reservedSeats = new ArrayList<>();
  }
  public String getName() {
    return name;
  }
  public ArrayList<Integer> getReservationNumbers() {
    return reservationNumbers;
  }
  public ArrayList<String> getReservedMovies() {
    return reservedMovies;
  }
  public ArrayList<Integer> getReservedSeats() {
    return reservedSeats;
  }
  public static int getReservationCounter() {
    return reservationCounter;
  }
  public int getTotalPaid() {
    return totalPaid;
  }

  public void addReservation(String title, int seatNumber){
    reservedMovies.add(title);
    reservedSeats.add(seatNumber);
    reservationNumbers.add(reservationCounter++);
  }
  
  public void addTotalPaid(int amount){
    totalPaid += amount;
  }
  public void showReservations(){
    System.out.println("\n예약 내역");
    for (int i = 0; i < reservedMovies.size(); i++) {
      System.out.println("예매번호: " + reservationNumbers.get(i) +
          " | 영화: " + reservedMovies.get(i) +
          " | 좌석: " + reservedSeats.get(i));
    }
  }
  public void clearReservations() {
  reservedMovies.clear();
  reservedSeats.clear();
  reservationNumbers.clear();
  }
}
