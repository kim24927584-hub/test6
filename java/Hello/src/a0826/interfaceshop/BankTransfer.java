package a0826.interfaceshop;

public class BankTransfer implements Payable{

  @Override
  public String getMethodName() {
    // TODO Auto-generated method stub
    return "계좌이체";
  }

  @Override
  public boolean pay(int amount) {
    System.out.println("계좌이체 완료: "+amount+"원");
    return false;
  }
  
  
}
