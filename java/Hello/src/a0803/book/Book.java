package a0803.book;

public class Book {
  String title;
  String author;
  String ISBN;
  public Book(String title, String author, String iSBN) {
    this.title = title;
    this.author = author;
    ISBN = iSBN;
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
  public String getISBN() {
    return ISBN;
  }
  public void setISBN(String iSBN) {
    ISBN = iSBN;
  }

  public void DisplayInfo(){
    System.out.println("Title: " + title);
    System.out.println("Author: " + author);
    System.out.println("ISBN: " + ISBN);
  }
  
}
