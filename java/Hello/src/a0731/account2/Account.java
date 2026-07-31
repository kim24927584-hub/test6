package a0731.account2;

public class Account {

  String owner;
  int balance;

  public Account(String owner, int balace) {
    this.owner = owner;
    this.balance = balace;
  }

  public void deposit(int money){
    balance += money;
    System.out.println(String.format("[%s] %d 원 입금 -> 잔액: %d 원", owner, money, balance));
  }
  public boolean withdraw(int money){
    if (balance >= money){
      balance -= money;
      System.out.println(String.format("[%s] %d원 출금 -> 잔액: %d",owner, money, balance));
      return true;
    }
    else{
      System.out.println(String.format("[%s]", owner)+"출금 실패 (잔액부족)");
      return false;
    }
  }
  public boolean transfer(Account target, int money) {
    if (balance < money) {
      System.out.println("("+owner+"=>"+target.owner+")"+money+"원 송금 실패(잔액 부족)");
      return false;
    }
    balance = balance - money;
    target.balance = target.balance + money;
    System.out.println("(" + owner + "=>" + target.owner + ")" + money + "원 송금 완료");
    System.out.println(String.format("[%s,잔액: %d원]", owner, balance));
    System.out.println(String.format("[%s,잔액: %d원]", target.owner, target.balance));
    return true;
  }

  public String toStr() {
    return String.format("num : %s, balance: %d", owner, balance);
  }

}
