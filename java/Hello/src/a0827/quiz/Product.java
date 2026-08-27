package a0827.quiz;

public class Product {
  private String name;
  private int price;
  private int stock;
  public Product(){}
  public Product(String name, int price, int stock) {
    this.name = name;
    this.price = price;
    this.stock = stock;
  }
  @Override
  public String toString() {
    return "Product [name=" + name + ", price=" + price + ", stock=" + stock + "]";
  }
  
  public int getTotalValue(){
    return price * stock;
  }
  public boolean isAvailable(){
    return stock == 0 ? false : true;
  }
}
