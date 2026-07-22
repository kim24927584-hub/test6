package a0722;

public class Logical {
  public static void main(String[] args) {
    int year = 2026;

    boolean if1 = year % 4 == 0;
    boolean if2 = year % 100 != 0;
    boolean if3 = year % 400 == 0;
    if (if1 && if2){
      System.out.println("윤년입니다");

    }
    else if (if3){
      System.out.println("윤년입니다");
    }
    else{
      System.out.println("윤년이 아닙니다.");
    }
  }
}
