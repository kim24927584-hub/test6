package a0819.test;

import java.time.LocalDate;
import java.time.Period;

public class Test {
  public static void main(String[] args) {
    
    int birthDay = 305;
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
    System.out.println();
  }
  
}
