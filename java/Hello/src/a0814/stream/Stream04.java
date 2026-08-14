package a0814.stream;

import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

public class Stream04 {
  public static void main(String[] args) {
            // 중첩 리스트를 평탄화
    List<List<Integer>> nestedList = Arrays.asList(
    Arrays.asList(1, 2, 3),
    Arrays.asList(4, 5, 6),
    Arrays.asList(7, 8, 9)
);
List<Integer> flatList = nestedList.stream()
    .flatMap(List::stream)
    .collect(Collectors.toList());
// 결과: [1, 2, 3, 4, 5, 6, 7, 8, 9]

// 문자열을 문자로 분리
List<String> words = Arrays.asList("Hello", "World");
List<String> letters = words.stream()
    .flatMap(word -> Arrays.stream(word.split("")))
    .collect(Collectors.toList());
// 결과: ["H", "e", "l", "l", "o", "W", "o", "r", "l", "d"]

    List<Integer> numbers = Arrays.asList(4,2,2,3,3);
    List<Integer> unique = numbers.stream()
    .distinct()
    .sorted()
    .toList();
    System.out.println(unique);
    // 문자열 중복 제거
    List<String> names2 = Arrays.asList("Alice", "Bob", "Alice", "Charlie");
    
    // 결과: ["Alice", "Bob", "Charlie"]

    List<Integer> numbers1 = Arrays.asList(1,2,3,4,5);
    List<Integer> firstThree1 = numbers1.stream()
    .limit(3)
    .collect(Collectors.toList());

    System.out.println(firstThree1);

    long longNames = names2.stream()
    .filter(name->name.length()> 4) 
    .count();
    System.out.println(longNames);
    
  }

  
}
