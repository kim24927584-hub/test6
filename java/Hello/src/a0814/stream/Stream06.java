package a0814.stream;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

public class Stream06 {
  public static void main(String[] args) {
    List<Integer> numbers = Arrays.asList(3,1,4,1,5,9);

    Optional<Integer> min1 = numbers.stream()
    .min(Integer::compareTo);

    System.out.println(min1.get());

    // 최소값
    numbers.stream().min(Integer::compareTo);

    // 최대값
    numbers.stream().max(Integer::compareTo);

    // 합계
    numbers.stream().mapToInt(Integer::intValue).sum();

    // 평균
    numbers.stream().mapToInt(Integer::intValue).average();

    // 개수
    numbers.stream().count();
  }
}
