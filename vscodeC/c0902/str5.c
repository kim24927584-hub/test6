#include <stdio.h>
#include <string.h>
struct Student{
  char name[20];
  int age;
  int score ;
  
};
void printStudent(struct Student s);
void main(){
  struct Student students[3] = {
    {"홍길동", 20, 85},
    {"김길동", 20, 85},
    {"강길동", 20, 85},
  };
  char search[20];
  int i,found = 0;

  printf("검색할이름: ");
  scanf("%s", search);

  for(i=0;i<3;i++){
    if(strcmp(students[i].name, search) == 0){
      printf("찾았습니다");
      printf("나이: %d, 점수: %d\n",
                        students[i].age, students[i].score);
      found = 1;
      break;
    }
  }

  if(!found){
    printf("찾을 수 없습니다.");
  }
  // printf("이름: %s\n", s.name);
  // printf("나이: %d\n", s.age);
  // printf("점수: %d\n", s.score);
}
void printStudent(struct Student s){
  
}