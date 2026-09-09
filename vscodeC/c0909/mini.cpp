#include <iostream>
#include <vector>
#include <string>
#include <fstream>
using namespace std;

class Student
{
public:
  string name;
  int score;
  Student(string n, int s) : name(n), score(s) {}
  void print() { cout << name << ": " << score << endl; }
};

vector<Student> list;

void addStudent()
{
  string name;
  int score;
  cout << "이름: ";
  cin >> name;
  cout << "점수: ";
  cin >> score;
  list.push_back(Student(name, score));
}

void printAll()
{
  for (auto &s : list)
    s.print();
}

void saveFile()
{
  ofstream fout("students.txt");
  for (auto &s : list)
    fout << s.name << " " << s.score << endl;
  fout.close();
  cout << "저장됨" << endl;
}

int main()
{
  int menu;
  while (true)
  {
    cout << "1.등록 2.목록 3.저장 0.종료: ";
    cin >> menu;
    if (menu == 0)
      break;
    if (menu == 1)
      addStudent();
    else if (menu == 2)
      printAll();
    else if (menu == 3)
      saveFile();
  }
  return 0;
}