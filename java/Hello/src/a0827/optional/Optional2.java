package a0827.optional;

import java.util.Optional;

public class Optional2 {
  public static void main(String[] args) {
    String input = null;
    Optional<String> opt = Optional.ofNullable(input);
    String result = opt.orElse((" 기본 사용자"));

    System.out.println(result);
  }
  
}
