package a0804.interface1;

public class Main {
  public static void main(String[] args) {
    Flayable f1 = new bird();
    Flayable f2 = new AirPlane();

    f1.fly();
    f2.fly();
  }
}
