#include<stdio.h>
#include<string.h>

void main(){
  int arr[5] = {1,2,3,4,5};
  int search;
  int found = 0;
  printf("찾을 수를 입력해주세요: ");
  scanf("%d", search);

  for(int i=0;i<5;i++){
    if(search == arr[i]){
      found = 1;
      break;
    }
  }

  if(!found){
    printf("찾는 수가 없습니다.");
  }
}