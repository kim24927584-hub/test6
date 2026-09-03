#include <iostream>
using namespace std;
int main()
{
  int age;
  string name;

  cout<<"나이:";
  cin>>age;
  cin.ignore();
  cout<<"이름(공백 가능):";
  getline(cin, name);
  cout<<name<<"("<<age<<"세)"<<endl;

  
  
   return 0;
}