package hakjum;

public class Student {
  private String name;
  private String studentId;
  private int grade;
  public Student(String name, String studentId) {
    this.name = name;
    this.studentId = studentId;
  }
  public String getName() {
    return name;
  }
  public void setName(String name) {
    this.name = name;
  }
  public String getStudentId() {
    return studentId;
  }
  public void setStudentId(String studentId) {
    this.studentId = studentId;
  }
  public int getGrade() {
    return grade;
  }
  public void setGrade(int grade) {
    this.grade = grade;
  }
  @Override
  public String toString() {
    return "Student [이름=" + name + ", 학생id=" + studentId + ", 점수=" + grade + "]";
  }
  
  
}
