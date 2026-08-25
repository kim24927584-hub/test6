package a0825.enum1;

public enum StatusCode {
  SUCCESS(200, "요청이 성공했습니다."),
  BAD_REQUEST(400, "잘못된 요청입니다."),
  NOT_FOUND(404, "페이지를 찾을 수 없습니다."),
  SERVER_ERROR(500, "서버 내부 오류입니다.");

  private final int code;
  private final String message;
  public int getCode() {
    return code;
  }
  public String getMessage() {
    return message;
  }
  private StatusCode(int code, String message){
    this.code = code;
    this.message = message;
  }
}
