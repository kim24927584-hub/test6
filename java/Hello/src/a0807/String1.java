public class String1 {
  public static void main(String[] args) {
    String str = "Hello Java";
    System.out.println(str.length());
    System.out.println(str.charAt(6));

    String str4 = "HelloWorld";
    System.out.println(str4.substring(5));
    System.out.println(str4.substring(0,5));

    String str5 = "   Hello Java   ";

    System.out.println(str5.replace("Java", "World"));
    System.out.println(str5.toLowerCase());
    System.out.println(str5.toUpperCase());
    System.out.println(str5.trim());

    String fruits = "사과,바나나,포도";
    String[] arr = fruits.split(",");
    System.out.println(arr[1]);

    String joined = String.join("-","2026","08","07");
    System.out.println(joined);
  }
}
