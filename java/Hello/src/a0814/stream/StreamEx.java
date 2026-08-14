package a0814.stream;

import java.util.Arrays;
import java.util.List;

public class StreamEx {
  public static void main(String[] args) {
    List<Integer> scores = Arrays.asList(90,80,70,100,95);

    for(Integer score : scores){
      System.out.println(score);
    }
    System.out.println();
    scores.stream().forEach(score -> System.out.println(score));
  }
}
