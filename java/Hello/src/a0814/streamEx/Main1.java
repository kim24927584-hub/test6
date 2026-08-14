package a0814.streamEx;

import java.util.Arrays;
import java.util.Comparator;
import java.util.List;

public class Main1 {
  public static void main(String[] args) {
    Trader raoul = new Trader("Raoul", "Cambridge");
    Trader mario = new Trader("Mario", "Milan");
    Trader alan =  new Trader("Alan", "Cambridge");
    Trader brian = new Trader("Brian", "Cambridge");
    List<Transaction> transactions = Arrays.asList(
            new Transaction(brian, 2011, 300),
            new Transaction(raoul, 2012, 1000),
            new Transaction(raoul, 2011, 400),
            new Transaction(mario, 2012, 700),
            new Transaction(mario, 2012, 700),
            new Transaction(alan, 2012, 950)
        );
    // System.out.println(transactions);

    practice1(transactions);

    practice2(transactions);

    practice3(transactions);
    
    practice4(transactions);
    practice5(transactions);
    practice6(transactions);
    practice7(transactions);
  }

  private static void practice7(List<Transaction> transactions) {
    
  }

  private static void practice6(List<Transaction> transactions) {
    List<String> result = transactions.stream()
      .map(t->t.getTrader().getName())
      .distinct()
      .sorted()
      .toList();

    System.out.println(result);

  }

  private static void practice5(List<Transaction> transactions) {
    List<Transaction> result = transactions.stream()
      .filter(t -> t.getTrader().getCity().equals("Cambridge"))
      .toList();

    System.out.println(result);
  }

  private static void practice4(List<Transaction> transactions) {
    boolean result = transactions.stream()
      .anyMatch(tran -> "Milan".equals(tran.getTrader().getCity()));
    System.out.println(result);
  }

  private static void practice3(List<Transaction> transactions) {
    List<Trader> result = transactions.stream()
      .map(Transaction::getTrader)
      .filter(t -> t.getCity().equals("Cambridge"))
      .distinct()
      .sorted(Comparator.comparing(Trader::getName))
      .toList();
    System.out.println(result);
  }

  private static void practice2(List<Transaction> transactions) {
    List<String> result = transactions.stream()
      .map((t)->t.getTrader().getCity())
      .distinct()
      .toList();
    System.out.println(result);
  }

  private static void practice1(List<Transaction> transactions) {
    List<Transaction> result = transactions.stream()
          .filter(t -> 2011 == t.getYear())
          .sorted(Comparator.comparing(Transaction::getValue))
          .toList();
    System.out.println(result);  
  }

  
}
