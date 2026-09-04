#include<stdio.h>
#include<string.h>

int main(){

  char c;
  char str[100];

  fgets(str,sizeof(str), stdin);
  scanf("%c", &c);

  int cnt = 0;
  for(int i=0;i<sizeof(str);i++){
    if(str[i] == c){cnt++;}
  }
  printf("%c가 나타나는 횟수: %d", c, cnt);
    return 0;
}