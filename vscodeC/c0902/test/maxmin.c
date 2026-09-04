#include <stdio.h>


void main(){
  int arr[5]={1,2,3,4,5};

  int maxVal = arr[0];
  int minVal = arr[0];
  for(int i=0;i<5;i++){
    if (maxVal < arr[i]){
      maxVal = arr[i];
    }
    if(minVal > arr[i]){
      minVal = arr[i];
    }
  }
  
}