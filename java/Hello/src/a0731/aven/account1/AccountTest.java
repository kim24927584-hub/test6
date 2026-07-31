package a0731.aven.account1;

public class AccountTest {
  public static void main(String[] args) {
    Account a = new Account("123-45", 10000);
    Account b = new Account("555-45", 10000);

    while(a.transfer(b, 3000)){
      ;
    }
    System.out.println(toStr());
  }

  
  
}


