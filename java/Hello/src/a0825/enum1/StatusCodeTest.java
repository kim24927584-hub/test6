package a0825.enum1;

public class StatusCodeTest {
  public static void main(String[] args) {
    StatusCode status = StatusCode.NOT_FOUND;

    System.out.println("코드번호: "+status.getCode());
    System.out.println("설명 메시지: "+status.getMessage());
    
  }
}
