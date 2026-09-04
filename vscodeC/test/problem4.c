#include<stdio.h>
#include<string.h>

int main(){

  int arr[8];
  
  for (int i = 0; i < 8; i++)
  {
    scanf("%d", &arr[i]);
  }
  int jjak[8] = {0,0,0,0,0,0,0,0};
  int hol[8] = {0, 0, 0, 0, 0, 0, 0, 0};

  for(int i=0;i<8;i++){
    if(arr[i]%2==0){
      jjak[i] = arr[i];
    }else{
      hol[i] = arr[i];
    }
  }
  printf("짝수: ");
  if(sizeof(jjak) == 0){
    printf("없음");
  }else{
    for(int i=0;i<8;i++){
      if(jjak[i] != 0){
        printf("%d ", jjak[i]);
      }
    }
  }
  printf("\n홀수: ");
  if (sizeof(hol) == 0)
  {
    printf("없음");
  }
  else
  {
    for (int i = 0; i < 8; i++)
    {
      if (hol[i] != 0)
      {
        printf("%d ", hol[i]);
      }
    }
  }
}