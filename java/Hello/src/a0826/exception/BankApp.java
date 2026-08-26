package a0826.exception;

public class BankApp {
  public static void main(String[] args) {
    BankAccount account = new BankAccount();
    try {
      System.out.println("=== 첫 번째 출금 시도 (5,000원) ===");
      account.withdraw(5000);

      System.out.println("\n === 두 번째 출금 시도 (8,000원) ===");
      account.withdraw(8000);

      System.out.println("이 코드는 실행되지 않습니다.");
    } catch (Exception e) {
      System.out.println("[예외 캐치 성공] " + e.getMessage());
    }

    System.out.println("\n=== 프로그램 정상 종료 ===");
  }
  
}
