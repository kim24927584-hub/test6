#include <iostream>
#include <vector>
using namespace std;

int main()
{
  string str1 = "helleh";
  

  int harf = str1.length() / 2;

  for(int i=0;i<harf;i++){
    if(str1[i] == str1[str1.length() -i -1]){
      continue;
    }
    cout << "회문 아님" << endl;
    break;
  }


  

  
  
  
  
  return 0;
}