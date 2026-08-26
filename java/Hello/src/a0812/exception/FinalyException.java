package a0812.exception;

public class FinalyException {
  public static void main(String[] args) {
    System.out.println("=== 프로그램 시작 ===");

    try {
      System.out.println("1. 데이터베이스에 연결합니다.");

      // 0으로 나누기 시도 -> ArithmeticException (예외) 발생!
      int result = 10 / 0;

      System.out.println("2. 연산 성공: " + result); // 예외가 발생하므로 이 코드는 실행되지 않음

    } catch (ArithmeticException e) {
      System.out.println("3. [예외 처리] 0으로 나눌 수 없습니다! 사유: " + e.getMessage());

    } finally {
      // 예외가 발생하든 안 하든, 심지어 return을 만나도 무조건 실행됨!
      System.out.println("4. [무조건 실행] 데이터베이스 연결을 안전하게 종료합니다.");
    }

    System.out.println("=== 프로그램 정상 종료 ===");
    
  }
}
