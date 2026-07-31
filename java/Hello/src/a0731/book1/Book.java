package a0731.book1;

public class Book {
  int no;
  String title;
  String author;
  int price;
  public int getNo() {
    return no;
  }
  public void setNo(int no) {
    this.no = no;
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
  public Book(int no, String title, String author, int price) {
    this.no = no;
    this.title = title;
    this.author = author;
    this.price = price;
  }
  
}
