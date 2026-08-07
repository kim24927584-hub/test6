public class StringBuffer1 {
  public static void main(String[] args) {
    StringBuffer sb2 = new StringBuffer("Hello, Java World");
    sb2.replace(7,11, "Python");

    System.out.println(sb2);

    StringBuffer sb3 = new StringBuffer("Hello, Python World");
    sb3.delete(5, 13);

    System.out.println(sb3);
    
  }
}
