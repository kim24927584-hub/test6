package a0806.book;

public class Book {
  private String title;
  private String author;
  private int price;
  public int getPrice() {
    return price;
  }
  public void setPrice(int price) {
    this.price = price;
  }
  public Book(String title, String author, int price) {
    this.title = title;
    this.author = author;
    this.price = price;
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
  @Override
  public String toString() {
    return "첵 [제목=" + title + ", 저자=" + author + "]";
  }
  
}
