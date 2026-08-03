package a0803.book;

public class PrintBook extends Book{
  int pageCount;
  double weight;
  public PrintBook(String title, String author, String iSBN, int pageCount, double weight) {
    super(title, author, iSBN);
    this.pageCount = pageCount;
    this.weight = weight;
  }
  public int getPageCount() {
    return pageCount;
  }
  public void setPageCount(int pageCount) {
    this.pageCount = pageCount;
  }
  public double getWeight() {
    return weight;
  }
  public void setWeight(double weight) {
    this.weight = weight;
  }
  @Override
  public void DisplayInfo() {
    super.DisplayInfo();
    System.out.println("Page Count: " + pageCount);
    System.out.println("Weight: "+weight+"kg");
  }
  
  
}
