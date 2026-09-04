#include<stdio.h>
#include<string.h>

int main(){


  
    int arr[10];
    int sum =0;
    for (int i = 0; i < 10; i++)
    {
      scanf("%d", &arr[i]);
      
    }
    for (int i = 0; i < 10; i++)
    {
      sum+=arr[i];
      
    }

    double avg=((double)sum/10);

    printf("평균: %.2f\n", avg);

    int cnt = 0;
    for(int i=0;i<10;i++){
      if(arr[i]>avg){cnt++;}
    }
    printf("평균 이상인 값의 개수: %d", cnt);
    

  return 0;
}