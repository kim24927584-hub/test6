package a0827.optional;

import java.util.Optional;

public class Optional3 {
  public static void main(String[] args) {
    String userId = null;
    String name = Optional.ofNullable(userId)
      .orElseThrow(()->new IllegalArgumentException("사용자 찾지 못함"));
      System.out.println(name);
  }
  
}
