package bank;

import java.util.ArrayList;
import java.util.Scanner;

public class BankApplication {
  public static void main(String[] args) {
    boolean run = true;

    Scanner sc = new Scanner(System.in);
    ArrayList<Account> accounts = new ArrayList<>();
    accounts.add(new Account("111-111", "홍길동", 10000));
    accounts.add(new Account("111-222", "강자바", 20000));
    accounts.add(new Account("111-333", "이코딩", 30000));
    while (run) {
      System.out.println("-------------------------------------------------");
      
      System.out.println("1.계좌생성 | 2.계좌목록 | 3.예금 | 4.출금 | 5.종료");
      System.out.println("-------------------------------------------------");
      System.out.print("선택>");
      int choice = Integer.parseInt(sc.nextLine());
      switch (choice) {
        case 1:
          System.out.print("계좌번호:");
          String number = sc.nextLine();
          
          System.out.print("계좌주:");
          String holder = sc.nextLine();
          System.out.print("초기금액:");
          String amount = sc.nextLine();
          accounts.add(new Account(number, holder, choice));
          System.out.println("결과: 계좌가 생성되었습니다.");
          break;
        case 2:
          for(Account account:accounts){
            System.out.println(account);
          }
          break;
        case 3:
          System.out.print("계좌번호:");
          number = sc.nextLine();
          System.out.print("예금액:");
          int credit = Integer.parseInt(sc.nextLine());
          Account foundAcount = findAccount(number,accounts);
          if(foundAcount != null){
            foundAcount.setAmount(foundAcount.getAmount() + credit);

          }else{
            System.out.println("결과: 찾는 계좌가 없습니다.");
          }
          break;
        case 4:
          System.out.print("계좌번호:");
          number = sc.nextLine();
          System.out.print("출금액:");
          int withdrawal = Integer.parseInt(sc.nextLine());
          foundAcount = findAccount(number, accounts);
          if (foundAcount != null && foundAcount.getAmount() >= withdrawal) {
            foundAcount.setAmount(foundAcount.getAmount() - withdrawal);
            System.out.println("결과: 출금이 성공되었습니다");
          } else {
            System.out.println("결과: 찾는 계좌가 없습니다.");
          }
          break;
          
        default:
          break;
      }
      
    }
  }

  private static Account findAccount(String number,ArrayList<Account>accounts) {
    for(Account account:accounts){
      if(account.getNumber().equals(number)){
        return account;
      }
    }
    return null;
  }
  
}
