package a0826.homework.계산기;

interface Calculator {
  int add(int a, int b);

  default void printAdd(int a, int b) {
    System.out.println(add(a, b));
  }

  static int multiply(int a, int b) {
    return a * b;
  }
}