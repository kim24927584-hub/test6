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

  if(fp == NULL){
    printf("파일을 열 수 없습니다.\n");
  }

  printf("값 입력: \n");
  for(int i=0;i<3;i++){
    int val;

    scanf("%d", &val);
    fprintf(fp, "%d\n", val);
  }
  
  printf("값 저장 완료\n");


  fclose(fp);
  fp = fopen("data.txt", "r");
  if (fp == NULL)
  {
    printf("파일을 열 수 없습니다.\n");
  }

  int num, sum = 0;
  while(fscanf(fp, "%d", &num) != EOF){
    sum +=num;
  }

  printf("평균: %.2f", ((double)sum/3));

  return 0;
}