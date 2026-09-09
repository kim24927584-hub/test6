#include <iostream>
using namespace std;

int maxVal(int a, int b) {return a>b ? a:b;}
double maxVal(double a, double b){return a>b ? a:b;}

int main(){
  cout << maxVal(3, 7) << endl;
  cout << maxVal(3.5, 2.1) << endl;
  return 0;
}