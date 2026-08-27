package a0827.optional;

import java.util.Optional;

public class Optional4 {
  public static void main(String[] args) {
    Optional<String> opt = Optional.ofNullable("홍길동");
    opt.ifPresent(name -> System.out.println("환영합니다 " + name + "님"));
  }
}
