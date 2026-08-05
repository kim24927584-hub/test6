package a0805.array;

public class Compare {
  public static void main(String[] args) {
    Student[] students = new Student[5];
    students[0] = new Student("홍길동", 90, 80, 70);
    students[1] = new Student("이순신", 100, 95, 90);
    students[2] = new Student("김유신", 90, 95, 90);
    students[3] = new Student("정유미", 90, 90, 90);
    students[1] = null;

    // System.out.println(students[0].getName());
    System.out.println();

    for (Student s : students) {
      System.out.println(s);
    }

    // 뒤의 데이터를 앞으로 이동
    for (int i = 1; i<students.length-1;i++){
      students[i] = students[i+1];
    }
    students[students.length -1] = null;
    System.out.println();
    for (Student student : students) {
      System.out.println(student);
    }
  }
}
