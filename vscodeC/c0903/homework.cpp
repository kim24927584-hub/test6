#include<iostream>

using namespace std;

int main(){
  int age;
  string name;

  cout<<"나이:";
  cin>>age;
  cin.ignore();
  cout<<"이름: ";
  getline(cin,name);
  

  cout<< "나이: "<<age<<"이름: "<<name<<endl;
  

  return 0;
}
