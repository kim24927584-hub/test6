#include <stdio.h>

struct Student{
  char name[20];
  int age;
  int score ;
  
};
void main(){
  struct Student students[3];

  for (int i=0;i<3;i++){
    printf("%d번 학생 정보 입력: \n ", i+1);
    printf("이름: ");
    scanf("%s", students[i].name);
    printf("s나이: ");
    scanf("%d", &students[i].age);
    printf("점수: ");
    scanf("%d", &students[i].score);
  }

  for(int i=0;i<3;i++){
    printf("%s: 나이 %d, 점수 %d \n",
                  students[i].name, students[i].age, students[i].score);
  }
  
}