package a0826.interfaceshop;

public class SmsNotifier implements Notifier{

  @Override
  public void send(String message) {
    System.out.println("[SMS]" + message);
    
  }
  
  
}
