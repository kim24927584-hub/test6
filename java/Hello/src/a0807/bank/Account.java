package bank;

public class Account {
  private String number;
  private String holder;  
  private int amount;
  public Account(String number, String holder, int amount) {
    this.number = number;
    this.holder = holder;
    this.amount = amount;
  }
  public String getNumber() {
    return number;
  }
  public void setNumber(String number) {
    this.number = number;
  }
  public String getHolder() {
    return holder;
  }
  public void setHolder(String holder) {
    this.holder = holder;
  }
  public int getAmount() {
    return amount;
  }
  public void setAmount(int amount) {
    this.amount = amount;
  }
  @Override
  public String toString() {
    return " [" + number + "   " + holder + "     " + amount + "]";
  }
  
  
}
