#include<stdio.h>
#include<string.h>

int main(){


  
    int arr[5];

    for (int i = 0; i < 5; i++)
    {
      scanf("%d", &arr[i]);
    }

    

  
  int minVal = arr[0];
  int maxVal = arr[0];
  for(int i=1;i<5;i++){
    if(arr[i] > maxVal){
      maxVal = arr[i];
    }
    if(arr[i] < minVal){
      minVal = arr[i];
    }

  }

  printf("최대값: %d", maxVal);
  printf("최솟값: %d", minVal);
  return 0;
}