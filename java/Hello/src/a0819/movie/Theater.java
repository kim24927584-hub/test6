package a0819.movie;

import java.util.ArrayList;

/**
 * Theater
 */
public class Theater {
  private ArrayList<String> seats;

  public Theater(int seatCount) {
    seats = new ArrayList<>();
    for(int i=0;i<seatCount;i++){
      seats.add((i+1)+"");
    }
  }
  
  public void displaySeats(){
    System.out.println("\n 좌석배치 (예약된좌석: X)");
    for(int i=0;i<seats.size();i++){
      System.out.printf("%2s ",seats.get(i));
      if((i+1)%10==0)System.out.println();
    }
  }

  public boolean reserveSeat(int seatNumber){
    if(seatNumber > 0 && seatNumber <= seats.size() && !seats.get(seatNumber-1).equals("X")){
      seats.set(seatNumber-1, "X");
      return true;
    }else{
      return false;
    }
  }

  public int getAvailableSeats(){
    int count = 0;
    for(String seat: seats){
      if(!seat.equals("X"))count++;
      
    }
    return count;
  }

  public void cancelSeat(int seatNumber) {
    if(seatNumber > 0 && seatNumber <= seats.size() && seats.get(seatNumber - 1).equals("X")){
      seats.set(seatNumber-1, String.valueOf(seatNumber));
      System.out.println("예약 취소를 완료했습니다.");
      
    }
    System.out.println("찾는 좌석이 없습니다.");
    
  }
}
