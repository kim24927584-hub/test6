#include <stdio.h>

struct Student{
  char name[20];
  int age;
  int score ;
  
};
void printStudent(struct Student s);
void main(){
  struct Student s1 = {"홍길동", 20, 85};
  printStudent(s1);
  
}
void printStudent(struct Student s){
  printf("이름: %s\n", s.name);
  printf("나이: %d\n", s.age);
  printf("점수: %d\n", s.score);
}