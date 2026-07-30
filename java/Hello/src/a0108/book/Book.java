package a0108.book;

public class Book {
  private String title;
  private String author;
  private int price;
  private int stock;
  private double discountRate;
  public Book(String title, String author, int price, int stock) {
    this.title = title;
    this.author = author;
    this.price = price;
    this.stock = stock;
    this.discountRate = 0.0;
  }
  public String getTitle() {
    return title;
  }
  public void setTitle(String title) {
    this.title = title;
  }
  public String getAuthor() {
    return author;
  }
  public void setAuthor(String author) {
    this.author = author;
  }
  public int getPrice() {
    return price;
  }
  public void setPrice(int price) {
    this.price = price;
  }
  public int getStock() {
    return stock;
  }
  public void setStock(int stock) {
    this.stock = stock;
  }
  public double getDiscountRate() {
    return discountRate;
  }
  public void setDiscountRate(double discountRate) {
    if(discountRate <0.0 || discountRate > 0.1){
      System.out.println("할인율은 0.0 ~ 0.1 사이여야 합니다.");
    }
    else{
      this.discountRate = discountRate;
    }
  }
  
  // 기본금액
  private int calcTotalPrice(){
    return price * stock;
  }
  //총 할인금액
  private int calcDiscountAmount(){
    return (int)(calcTotalPrice() * discountRate);
  }
  // 할인 적용된 최종금액
  private int calcFinalPrice(){
    return calcTotalPrice() - calcDiscountAmount();
  }
  // 배송비 반환
  private int calShippingFee(){
    if (calcFinalPrice() > 30000){
      return 0;
    }
    return 3000;
  }
  // 책 정보 출력
  public void printBookInfo(){
    System.out.println("===책 정보===");
    System.out.println("제목: "+this.title);
    System.out.println("저자: "+this.author);
    System.out.println("정가: "+this.price);
    System.out.println("재고: "+this.stock);
    if(this.discountRate!=0){
      System.out.println("할인율: "+String.format("%.0f", discountRate)+"%");
      System.out.println("할인금액: "+String.format("%,d", calcDiscountAmount())+"원");
      System.out.println("할인후 금액: "+String.format("%,d", calcFinalPrice())+"원");
    }

  }
  //배송비와 최종 결제 금액
  public void printOrderSheet(){
    printBookInfo();
    System.out.println("===영수증===");
    System.out.println("할인 후 금액: "+String.format("%,d", calcFinalPrice())+"원");
    System.out.println("배송비: "+String.format("%,d", calShippingFee())+"원");
    System.out.println("최종 결제 금액: "+String.format("%,d", (calcFinalPrice()+calShippingFee()))+"원");
  }
}
