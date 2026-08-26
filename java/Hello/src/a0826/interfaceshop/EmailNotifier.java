package a0826.interfaceshop;

public class EmailNotifier implements Notifier
{

  @Override
  public void send(String message) {
    System.out.println("[EMAIL]"+message);
    
  }
  
}
