package a0821.차량관리crud;

public class Car {
  private String carNumber;
  private String model;
  private String color;
  private int year;
  private int price;
  public Car(String carNumber, String model, String color, int year, int price) {
    this.carNumber = carNumber;
    this.model = model;
    this.color = color;
    this.year = year;
    this.price = price;
  }
  public String getCarNumber() {
    return carNumber;
  }
  
  public String getModel() {
    return model;
  }
  public void setModel(String model) {
    this.model = model;
  }
  public String getColor() {
    return color;
  }
  public void setColor(String color) {
    this.color = color;
  }
  public int getYear() {
    return year;
  }
  public void setYear(int year) {
    this.year = year;
  }
  public int getPrice() {
    return price;
  }
  public void setPrice(int price) {
    this.price = price;
  }
  @Override
  public String toString() {
    return "번호: " + carNumber + "| 차종: " + model + "| 색상: " + color + "| 연식: " + year + "| 가격: "
        + price + "만원";
  }
  
}
