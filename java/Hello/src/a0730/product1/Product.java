package a0730.product1;

public class Product {
  private String name;
  private int price;
  private int quantity;
  private double discountRate;

  
  public Product(String name, int price, int quantity, double discountRate) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.discountRate = discountRate;
  }
  public String getName() {
    return name;
  }
  public void setName(String name) {
    this.name = name;
  }
  public int getPrice() {
    return price;
  }
  public void setPrice(int price) {
    this.price = price;
  }
  public int getQuantity() {
    return quantity;
  }
  public void setQuantity(int quantity) {
    this.quantity = quantity;
  }
  public double getDiscountRate() {
    return discountRate;
  }
  public void setDiscountRate(double discountRate) {
    this.discountRate = discountRate;
  }
  public void showInfo() {
    System.out.println("===상품정보===");
    System.out.println("상품명: " + name);
    System.out.println("단가: " + String.format("%d",price)+"원");
    System.out.println("수량: " + quantity + "개");
    System.out.println("총금액: " + String.format( "%d", calcTotalPrice())+"원");
    if(discountRate > 0){
      System.out.println("할인율: "+(discountRate*100)+"%");
      System.out.println("할인 금액: " + String.format("%d", calcDiscountAmount())+"원");
      System.out.println("할인 후 금액: " + String.format("%d", calcFinalPrice())+"원");
    }
  }

  private int calcFinalPrice() {
    return calcTotalPrice() - calcDiscountAmount();
  }
  //할인금액
  private int calcDiscountAmount() {
    return (int)(calcTotalPrice() * discountRate);
  }
  //기본금액
  private int calcTotalPrice() {
    return price * quantity;
  }
  public void printReceipt(){
    System.out.println("===영수증===");
    showInfo();
    System.out.println("부가세: " + String.format("%d", calcVAT())+"원");
    System.out.println("최종 결제 금액: " + String.format("%d", calcPriceVAT())+"원");


  }
  private Object calcPriceVAT() {
    return calcFinalPrice() + calcVAT();
  }
  private int calcVAT() {
    return (int)(calcFinalPrice()*0.1);
  }

  
}
