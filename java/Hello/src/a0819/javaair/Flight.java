package a0819.javaair;

import java.text.DecimalFormat;
import java.util.ArrayList;

public class Flight {
  private String destination;
  private String time;
  private int price;
  private DecimalFormat priceFormat = new DecimalFormat("#,###원");
  private Boolean internationalFlight;
  private ArrayList<String> seats;
  public Flight(String destination, String time, int price, Boolean internationalFlight) {
    this.destination = destination;
    this.time = time;
    this.price = price;
    this.internationalFlight = internationalFlight;
    this.seats = new ArrayList();
    for(int i=0;i<20;i++){
      seats.add(String.valueOf(i + 1));
    }
  }
  public String getDestination() {
    return destination;
  }
  public void setDestination(String destination) {
    this.destination = destination;
  }
  public String getTime() {
    return time;
  }
  public void setTime(String time) {
    this.time = time;
  }
  public int getPrice() {
    return price;
  }
  public void setPrice(int price) {
    this.price = price;
  }
  public DecimalFormat getPriceFormat() {
    return priceFormat;
  }
  public void setPriceFormat(DecimalFormat priceFormat) {
    this.priceFormat = priceFormat;
  }
  public Boolean getInternationalFlight() {
    return internationalFlight;
  }
  public void setInternationalFlight(Boolean internationalFlight) {
    this.internationalFlight = internationalFlight;
  }
  public ArrayList<String> getSeats() {
    return seats;
  }
  public void setSeats(ArrayList<String> seats) {
    this.seats = seats;
  }
  @Override
  public String toString() {
    return "목적지 : [" + destination + "], 출발시간 : [" + time + "], 가격 : [" + priceFormat + "]";
  }
  public void seatToString(){
    for(int i=0;i<seats.size();i+=4){
      System.out.print("|");
      for(int j=i;j<(i+4);j++){
        System.out.print("[ 좌석"+(j+1)+" ]");
      }
      System.out.println("|");
    }
  }

  
}
