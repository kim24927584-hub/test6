package a0819.javaair;

import java.time.LocalDate;
import java.time.Period;

public class Passenger {
  private String name;
  private int birthDate;
  private String pw ;
  private String seat;
  public Passenger(String name, int birthDate) {
    this.name = name;
    this.birthDate = birthDate;
  }
  public Passenger(String name, int birthDate, String pw) {
    this.name = name;
    this.birthDate = birthDate;
    this.pw = pw;
  }
  public String getName() {
    return name;
  }
  public void setName(String name) {
    this.name = name;
  }
  public int getBirthDate() {
    return birthDate;
  }
  public void setBirthDate(int birthDate) {
    this.birthDate = birthDate;
  }
  public String getPw() {
    return pw;
  }
  public void setPw(String pw) {
    this.pw = pw;
  }
  public String getSeat() {
    return seat;
  }
  public void setSeat(String seat) {
    this.seat = seat;
  }

  public boolean man15(Passenger p){
    int birthDay = p.birthDate;
    String birth = String.format("%06d", birthDay);
    int year =Integer.parseInt(birth.substring(0,2));
    int mm = Integer.parseInt(birth.substring(2,4))  ;
    int dd = Integer.parseInt(birth.substring(4,6))  ;
    String yy = String.format("%02d", year);
    if(year >= 0 && year <= 25){
      yy = "20" + yy;
    }
    else{
      yy = "19" + yy;
    }

    LocalDate myBirth = LocalDate.of(Integer.parseInt(yy), mm, dd);
    LocalDate today = LocalDate.now();



    int age = Period.between(myBirth, today).getYears();

    if(age>=15){
      return true;
    }else{
      return false;
    }
    
  }
}
