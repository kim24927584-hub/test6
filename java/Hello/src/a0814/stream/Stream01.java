package a0814.stream;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class Stream01 {
  public static void main(String[] args) {
    List<Integer> numbers = Arrays.asList(1,2,3,4,5,6);
    List<Integer> evens = numbers.stream()
    .filter(n -> n % 2 == 0)
    .collect(Collectors.toList());
    System.out.println(evens);

    numbers.stream()
    .filter(n -> n%2 == 0)
    .forEach(System.out::println);

    List<Integer> even = numbers.stream()
    .filter(n->n%2 == 0)
    .toList();
    System.out.println(even);
  }
}
