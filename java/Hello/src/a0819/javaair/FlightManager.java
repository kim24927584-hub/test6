package a0819.javaair;

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class FlightManager {
  private static ArrayList<Flight> flights;
  private static ArrayList<Passenger> passengers;
  private static Map<String, Flight> reservationMap;
  // private static FileC fc;
  Scanner sc;

  public FlightManager(){
    flights = new ArrayList<>();
    flights.add(new Flight("제주","11:55", 78000, false));
    flights.add(new Flight("이스탄불","17:10",1200000,true));
    flights.add(new Flight("방콕","21:35",280000,true));
    passengers = new ArrayList<>();
    reservationMap = new HashMap<>();
    
  }
  public void displayFlightList(String str){
    for(int i=0;i<flights.size();i++){
      System.out.println("["+(i+1)+"] "+flights.get(i));
    }
  }
  public void bookFlight(){
    while (true) {
      displayFlightList(null);
      System.out.print("항공편 선택(번호): ");
      int num = sc.nextInt();
      sc.nextLine();
      if(num < 1 && flights.size() < num) {
        System.out.println("잘못된 접근");
        continue;
      }
      Flight flight = flights.get(num-1);

      passengerInfo(flight);
      
      if(flight.getInternationalFlight()){
        
      }

    }
  }
  private boolean passengerInfo(Flight flight) {
    System.out.print("이름 입력: ");
    String name = sc.nextLine();
    System.out.print("생일 입력: ");
    String birthDay = sc.nextLine();
    
  }
}
