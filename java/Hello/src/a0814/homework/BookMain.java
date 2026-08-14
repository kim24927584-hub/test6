package a0814.homework;

import java.util.Arrays;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;

public class BookMain {
  public static void main(String[] args) {
    Author jkRowling = new Author("J.K. Rowling", "UK");
    Author georgeOrwell = new Author("George Orwell", "UK");
    Author harukiMurakami = new Author("Haruki Murakami", "Japan");
    Author stephenKing = new Author("Stephen King", "USA");
    Author leoTolstoy = new Author("Leo Tolstoy", "Russia");

    List<Book> books = Arrays.asList(
        new Book(jkRowling, 1997, 15000, "Harry Potter"),
        new Book(georgeOrwell, 1949, 12000, "1984"),
        new Book(harukiMurakami, 2002, 18000, "Kafka on the Shore"),
        new Book(stephenKing, 1977, 20000, "The Shining"),
        new Book(jkRowling, 1998, 15000, "Harry Potter 2"),
        new Book(georgeOrwell, 1945, 11000, "Animal Farm"),
        new Book(harukiMurakami, 2013, 19000, "Colorless Tsukuru"),
        new Book(stephenKing, 1986, 22000, "It"),
        new Book(leoTolstoy, 1869, 25000, "War and Peace"));

    // 아래 메서드들을 구현하세요
    practice1(books); // 문제 1
    practice2(books); // 문제 2
    practice3(books); // 문제 3
    practice4(books); // 문제 4
    practice5(books); // 문제 5
    practice6(books); // 문제 6
    practice7(books); // 문제 7
    practice8(books); // 문제 8
  }

  private static void practice8(List<Book> books) {
    Integer result = books.stream()
      .min(Comparator.comparing(Book::getPrice))
      .orElse(null)
      .getPrice();
    System.out.println(result);
  }

  private static void practice7(List<Book> books) {
    Book result = books.stream()
      
      .max(Comparator.comparing(Book::getPrice))
      .orElse(null);

      System.out.println(result);
  }

  private static void practice6(List<Book> books) {
    List<String> result = books.stream()
      .map(b->b.getAuthor().getName())
      .distinct()
      .sorted()
      .toList();
    System.out.println(result);
  }

  private static void practice5(List<Book> books) {
    List<Integer> result = books.stream()
      .filter(b->b.getAuthor().getCountry().equals("USA"))
      .map(b->b.getPrice())
      .toList();

    System.out.println(result);
  }

  private static void practice4(List<Book> books) {
    boolean result = books.stream()
      .anyMatch(b->b.getAuthor().getCountry().equals("Japan"));
    System.out.println(result);
  }

  private static void practice3(List<Book> books) {
    List<Book> result = books.stream()
      .filter(b->b.getAuthor().getCountry().equals("UK"))
      .sorted(Comparator.comparing(Book::getTitle))
      .toList();

      System.out.println(result);
  }

  private static void practice2(List<Book> books) {
    List<String> result = books.stream()
      .map(b -> b.getAuthor().getCountry())
      .distinct()
      .toList();
    System.out.println(result);
  }

  private static void practice1(List<Book> books) {
    List<Book> result = books.stream()
      .filter(b->b.getYear() >= 2000)
      .sorted(Comparator.comparing(Book::getPrice))
      .toList();
    System.out.println(result);
      
  }

  // 각 practice 메서드를 구현하세요
}
