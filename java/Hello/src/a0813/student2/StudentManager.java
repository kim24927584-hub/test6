package a0813.student2;

import java.util.ArrayList;

public class StudentManager {
     ArrayList<Student> list = new ArrayList<>();

    // 더미 데이터
    public StudentManager() {

        list.add(new Student(1,"홍길동",20,"컴퓨터"));
        list.add(new Student(2,"김철수",21,"AI"));
        list.add(new Student(3,"이영희",22,"전자"));

    }

    //등록
    public void insert(Student student){

        list.add(student);

    }

    //전체조회
    public void select(){

        for(Student s : list){

            System.out.println(s);

        }

    }

    //한명조회
    public Student find(int id){

        for(Student s : list){

            if(s.getId()==id){

                return s;

            }

        }

        return null;

    }

    //수정
    public void update(int id,String name,int age,String major){

        Student s = find(id);

        if(s!=null){

            s.setName(name);
            s.setAge(age);
            s.setMajor(major);

        }

    }

    //삭제
    public void delete(int id){

        Student s = find(id);

        if(s!=null){

            list.remove(s);

        }

    }

    public ArrayList<Student> getList(){

        return list;

    }

}
