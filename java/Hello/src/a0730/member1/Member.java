package a0730.member1;

public class Member {
  public String name;
  public int age;
  public String email;

  public Member(String name, int age,String eamil){
    this.name = name;
    this.age = age;
    this.email = email;
  }

  public void ShowInfo() {
    System.out.println("회원이름: " + name);
    System.out.println("나이: " + age);
    System.out.println("이메일: " + email);
  }

  
  
}
