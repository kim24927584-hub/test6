#include <iostream>
using namespace std;
int main()
{
  string id="user01";
  int score = 85;
  bool pass = score>=60;

  cout << "아이디: " << id <<  endl;
  cout << "점수: " << score << "점" << endl;
  cout << "합격: " << (pass ? "예": "아니오") << endl;
  
  
   return 0;
}