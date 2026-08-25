package a0821.차량관리crud;

import java.util.ArrayList;
import java.util.Scanner;

public class CarManager {
  private ArrayList<Car> list = new ArrayList<>();
  private Scanner sc = new Scanner(System.in);

  public CarManager() {
    list.add(new Car("12가3456", "소나타", "흰색", 2022, 2500));
    list.add(new Car("34나7890", "아반떼", "검정", 2021, 1800));
    list.add(new Car("56다1234", "그랜저", "은색", 2023, 4200));
    list.add(new Car("78라5678", "쏘렌토", "파랑", 2020, 3100));
    list.add(new Car("90마9012", "소나타", "회색", 2024, 2800));
  }

  public void run(){
    while (true) {
      System.out.println("========== 차량 관리 시스템 ==========");
      System.out.println("1. 차량 등록 (C)");
      System.out.println("2. 전체 조회 (R)");
      System.out.println("3. 차량 수정 (U)");
      System.out.println("4. 차량 삭제 (D)");
      System.out.println("5. 차량번호 검색");
      System.out.println("6. 차종으로 검색");
      System.out.println("0. 종료");
      System.out.print("선택>");
      int choice = sc.nextInt();
      sc.nextLine();

      switch (choice) {
        case 1:
          addCar();
          break;
        case 2:
          printCar();
          break;
        case 3:
          updateCar();
          break;
        case 4:
          deleteCar();
          break;
        case 5:
          search();
          break;
        case 6:
          searchByModel();
          break;
        case 0:
          System.out.println("프로그램을 종료합니다.");
          return;
        default:
          System.out.println("잘못된 선택입니다");
          break;
      }
    }
    
  }

  private void searchByModel() {
    System.out.print("차종 입력: ");
    String keyword = sc.nextLine();
    boolean found = false;

    for(Car c: list){
      if(c.getModel().contains(keyword)){
        System.out.println(c);
        found = true;
      }
    }
    if(!found){
      System.out.println("검색 결과가 없습니다.");
    }
  }

  private void search() {
    System.out.print("차량번호 입력: ");
    String carNum = sc.nextLine();
    Car c = findCar(carNum);
    if (c == null) {
      System.out.println("없는 차량번호입니다.");
      return;
    }
    System.out.println(c);
  }

  private void deleteCar() {
    System.out.print("차량번호 입력: ");
    String carNum = sc.nextLine();
    Car c = findCar(carNum);
    if (c == null) {
      System.out.println("없는 차량번호입니다.");
      return;
    }

    list.remove(c);
    System.out.println("차량이 삭제되었습니다.");
  }

  private void updateCar() {
    System.out.print("차량번호 입력: ");
    String carNum = sc.nextLine();
    Car c =  findCar(carNum);
    if ( c == null) {
      System.out.println("없는 차량번호입니다.");
      return;
    }
    System.out.print("모델명: ");
    String model = sc.nextLine();
    if(model != null){
      c.setModel(model);
    }
    System.out.print("색상: ");
    String color = sc.nextLine();
    if(color != null){
      c.setColor(color);
    }
    System.out.print("연식: ");
    String year = sc.nextLine();
    if(year != null){
      c.setYear(Integer.parseInt(year));
    }
    System.out.print("가격: ");
    String price = sc.nextLine();
    if(price != null){
      c.setPrice(Integer.parseInt(price));
    }

    
    System.out.println("차량수정이 성공적으로 완료되었습니다.");
  }

  private void printCar() {
    if(list.isEmpty()){
      System.out.println("등록된 차량이 없습니다.");
      return;
    }
    System.out.println("===========차량 목록===========");
    for(int i=0;i<list.size();i++){
      Car c = list.get(i);
      System.out.println("["+(i+1)+"] " + c);
    }
  }

  private void addCar() {
    System.out.print("차량번호 입력: ");
    String carNum = sc.nextLine();
    if(findCar(carNum) != null){
      System.out.println("이미 있는 차량번호입니다.");
      return;
    }
    System.out.print("모델명: ");
    String model = sc.nextLine();
    System.out.print("색상: ");
    String color = sc.nextLine();
    System.out.print("연식: ");
    int year = Integer.parseInt(sc.nextLine());
    System.out.print("가격: ");
    int price = Integer.parseInt(sc.nextLine());

    list.add(new Car(carNum, model, color, year, price));
    System.out.println("차량등록이 성공적으로 완료되었습니다.");
  }

  private Car findCar(String carNum) {
    for(Car c: list){
      if(c.getCarNumber().equals(carNum)){
        return c;
      }
    }
    return null;
  }
}
