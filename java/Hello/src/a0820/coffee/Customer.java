package a0820.coffee;

import java.util.Map;

/**
 * Customer
 */
public class Customer {
  private int orderNum;
  private int money;
  private Map<String, Integer> coffeeOrder;
  public Customer(int orderNum) {
    this.orderNum = orderNum;
    this.money = 20000;
  }
  public int getOrderNum() {
    return orderNum;
  }
  public void setOrderNum(int orderNum) {
    this.orderNum = orderNum;
  }
  public int getMoney() {
    return money;
  }
  public void setMoney(int money) {
    this.money = money;
  }
  public Map<String, Integer> getCoffeeOrder() {
    return coffeeOrder;
  }
  public void setCoffeeOrder(Map<String, Integer> coffeeOrder) {
    this.coffeeOrder = coffeeOrder;
  } 

  public String getOrderName(){
    return "고객" + orderNum;
  }
}
