package a0803.book;

public class Ebook extends Book {
  double fileSize;
  String format;
  public Ebook(String title, String author, String iSBN, double fileSize, String format) {
    super(title, author, iSBN);
    this.fileSize = fileSize;
    this.format = format;
  }
  public double getFileSize() {
    return fileSize;
  }
  public void setFileSize(double fileSize) {
    this.fileSize = fileSize;
  }
  public String getFormat() {
    return format;
  }
  public void setFormat(String format) {
    this.format = format;
  }
  @Override
  public void DisplayInfo() {
    // TODO Auto-generated method stub
    super.DisplayInfo();
    System.out.println("File Size: "+fileSize+"MB");
    System.out.println("Format: "+format);
  }
}
