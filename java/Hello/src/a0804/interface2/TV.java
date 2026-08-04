package a0804.interface2;

public class TV implements RemoteControl{

  @Override
  public void powerOff() {
    System.out.println("TV off");
  }

  @Override
  public void powerOn() {
    System.out.println("TV on");
    
  }
  
}
