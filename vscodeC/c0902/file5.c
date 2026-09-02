#include <stdio.h>

struct Student
{
  char name[20];
  int age;
  int score;
};

int main()
{
  FILE *fp = fopen("data.txt", "w");

  struct Student students[3] = {
      {"홍길동", 20, 85},
      {"김철수", 22, 95},
      {"이영희", 21, 75}};
  

  int i;

  if (fp == NULL)
  {
    printf("파일을 열 수 없습니다.\n");
    return 1;
  }

  for (int i = 0; i < 3; i++)
  {
    fprintf(fp, "%s %d %d\n",
      students[i].name, students[i].age, students[i].score);
  }

  fclose(fp);
  printf("학생 정보 저장 완료!\n");
  return 0;
}