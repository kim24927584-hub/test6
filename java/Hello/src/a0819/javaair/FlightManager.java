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
  private static FileC fc;
  Scanner sc;

  public FlightManager(){
    flights = new ArrayList<>();
    flights.add(new Flight("제주","11:55", 78000, false));
    flights.add(new Flight("이스탄불","17:10",1200000,true));
    flights.add(new Flight("방콕","21:35",280000,true));
    passengers = new ArrayList<>();
    reservationMap = new HashMap<>();
    
  }
  private void displayFlightList(String str){
    for
  }
}
