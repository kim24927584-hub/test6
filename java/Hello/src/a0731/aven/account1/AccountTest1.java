package a0731.aven.account1;

import a0731.account2.Account;

public class AccountTest1 {
  public static void main(String[] args) {
    Account a = new Account("철수",10000);
    Account b = new Account("영희", 10000);

    while (a.transfer(b, 3000)){
      ;
    }
  }
}
