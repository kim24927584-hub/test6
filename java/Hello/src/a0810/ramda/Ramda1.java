package a0810.ramda;

interface Calculator{
  int sum (int a, int b);
}

public class Ramda1 {
  public static void main(String[] args) {
    Calculator mc = Integer::sum;
    int result = mc.sum(3, 4);
    System.out.println(result);
  }
}
