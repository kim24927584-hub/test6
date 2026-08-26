package a0826.exception;

public class BankAccount {
  private int balance = 10000;

  public int getBalance() {
    return balance;
  }

  public void withdraw(int amount){
    if(balance <amount){
      throw new Insufficiente("잔고가 부족합니다. 현재잔고: "+balance+"원 | 출금액: "+amount+"원");
    }
    balance -= amount;
    System.out.println(amount+" 원이 정상 출금| 남은 잔고는: "+balance+"원");
  }
  
  
}
