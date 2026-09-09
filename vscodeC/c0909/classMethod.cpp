#include <iostream>
#include <string>
using namespace std;

class Student{
  public:
    string name;
    int score;
    void print(){
      cout << name << " - " << score << "점" << endl;
    }

    string getGrade(){
      if (score >= 90) return "A";
      if (score >= 80) return "B";
      return "F";
    }
};
int main(){
  Student s;
  s.name = "이영희";
  s.score = 88;
  s.print();
}