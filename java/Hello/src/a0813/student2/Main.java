package a0813.student2;

import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        StudentManager manager = new StudentManager();

        FileManager file = new FileManager();

        while(true){

            System.out.println("\n===== 학생관리 =====");
            System.out.println("1.전체조회");
            System.out.println("2.등록");
            System.out.println("3.수정");
            System.out.println("4.삭제");
            System.out.println("5.파일저장");
            System.out.println("6.파일읽기");
            System.out.println("0.종료");

            System.out.print("선택 : ");

            int menu = Integer.parseInt(sc.nextLine());

            switch(menu){

                case 1:

                    manager.select();

                    break;

                case 2:

                    System.out.print("번호 : ");
                    int id = Integer.parseInt(sc.nextLine());

                    System.out.print("이름 : ");
                    String name = sc.nextLine();

                    System.out.print("나이 : ");
                    int age = Integer.parseInt(sc.nextLine());

                    System.out.print("전공 : ");
                    String major = sc.nextLine();

                    manager.insert(new Student(id,name,age,major));

                    break;

                case 3:

                    System.out.print("수정할 번호 : ");
                    id = Integer.parseInt(sc.nextLine());

                    System.out.print("이름 : ");
                    name = sc.nextLine();

                    System.out.print("나이 : ");
                    age = Integer.parseInt(sc.nextLine());

                    System.out.print("전공 : ");
                    major = sc.nextLine();

                    manager.update(id,name,age,major);

                    break;

                case 4:

                    System.out.print("삭제 번호 : ");

                    id = Integer.parseInt(sc.nextLine());

                    manager.delete(id);

                    break;

                case 5:

                    file.save(manager.getList());

                    break;

                case 6:

                    file.load();

                    break;

                case 0:

                    System.exit(0);

            }

        }
  }
}
