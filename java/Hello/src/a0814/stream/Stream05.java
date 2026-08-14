package a0814.stream;

import java.util.Arrays;
import java.util.List;

public class Stream05 {
  public static void main(String[] args) {
    List<Integer> numbers = Arrays.asList(1,2,3,4,5);
    int max = numbers.stream()
    .reduce(Integer.MIN_VALUE,Integer::max);
    System.out.println(max);

    List<String> words = Arrays.asList("Hello","World","Java");
    String combined = words.stream()
    .reduce("",(a,b)->a + " "+b);
    System.out.println(combined);
  }
  
}
