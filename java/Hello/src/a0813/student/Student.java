package a0813.student;

public class Student {
  private String id;
  private String name;
  private int age;
  public Student(String id, String name, int age) {
    this.id = id;
    this.name = name;
    this.age = age;
  }
  public String getId() {
    return id;
  }
  public void setId(String id) {
    this.id = id;
  }
  public String getName() {
    return name;
  }
  public void setName(String name) {
    this.name = name;
  }
  public int getAge() {
    return age;
  }
  public void setAge(int age) {
    this.age = age;
  }
  @Override
  public String toString() {
    return "" + id + "," + name + "," + age + "";
  }
  public static Student fromStirng(String line) {
    String[] parts = line.split(",");
    if (parts.length == 3) {
      return new Student(parts[0], parts[1], Integer.parseInt(parts[2]));
    }
    return null;
  }

  
}
