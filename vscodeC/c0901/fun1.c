#include <stdio.h>

int findMax(int *arr, int size){
  printf("정수 5개 입력: ");
  for(int i=0;i<size;i++){
    scanf("%d", &arr[i]);
  }
  int m = arr[0];
  for (int i=1;i<size;i++){
    if(m<arr[i]){
      m=arr[i];
    }
  }
  printf("최대값 : %d", m);
}
int main(){
  int arr[5];

  findMax(arr, 5);
  
}

