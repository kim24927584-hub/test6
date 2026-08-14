package a0810.ramda;

import java.util.Arrays;
import java.util.List;

public class Ramda5 {
  public static void main(String[] args) {
    List<String> names1 = Arrays.asList("a","b","d","z");
    System.out.println(names1);
    names1.sort((s1, s2) -> s2.compareTo(s1));
    System.out.println("내림차순 : " + names1);

    names1.sort(String::compareTo);
    System.out.println("오름차순 : " + names1 );
  }
  
}
