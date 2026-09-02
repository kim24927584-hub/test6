#include <stdio.h>

int main(){
  FILE *fp = fopen("data.txt", "r");
  char buffer[100];

  if(fp == NULL){
    printf("파일을 열 수 없습니다.\n");
    return 1;
  }
  while(fgets(buffer, 100, fp)!=NULL){
    printf("%s", buffer);
  }
  

  fclose(fp);
  
  return 0;
}