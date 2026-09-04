package test.problem3;

import java.util.ArrayList;

public class NumberManager {
  public static void addNumber(ArrayList<Integer> list, int num){
    list.add(num);
  }
  public static int findMax(ArrayList<Integer> list){
    if(list.isEmpty()){
      return -1;
    }
    int maxVal = list.get(0);

    for(Integer num: list){
      if(maxVal<num){
        maxVal = num;
      }
    }
    return maxVal;


  }
  public static int findMin(ArrayList<Integer> list){
    if(list.isEmpty()){
      return -1;
    }
    int minVal = list.get(0);

    for(Integer num: list){
      if(minVal>num){
        minVal = num;
      }
    }
    return minVal;


  }
  public static int getSum(ArrayList<Integer> list){
    int sum = 0;
    for(Integer num:list){
      sum+=num;
    }
    return sum;
  }
}
