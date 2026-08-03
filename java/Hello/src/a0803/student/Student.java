package a0803.student;

public class Student {
  String name;
  int kor;
  int eng;
  int math;
  int total;
  double avg;
  public Student(String name, int kor, int eng, int math) {
    this.name = name;
    this.kor = kor;
    this.eng = eng;
    this.math = math;
    calc();
  }
  public void calc(){
    total = kor+eng+math;
    avg = total/3.0;
  }
  public String getName() {
    return name;
  }
  public void setName(String name) {
    this.name = name;
  }
  public int getKor() {
    return kor;
  }
  public void setKor(int kor) {
    this.kor = kor;
  }
  public int getEng() {
    return eng;
  }
  public void setEng(int eng) {
    this.eng = eng;
  }
  public int getMath() {
    return math;
  }
  public void setMath(int math) {
    this.math = math;
  }
  
  public void printInfo(){
    System.out.printf("%-6s %3d %3d %3d %3d %6.2f\n",
      name, kor, eng, math, total, avg
    );
  }
  

}
