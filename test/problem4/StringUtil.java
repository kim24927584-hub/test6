package test.problem4;

public class StringUtil {
  
  public static int countChar(String text, char ch){
    int cnt = 0;
    for (int i = 0; i < text.length(); i++) {

      if(text.charAt(i) == ch)cnt++;

    }
    return cnt;
  }
  public static String reverseString(String text){
    

    String reversed = "";
    for(int i=text.length()-1;i>=0;i--){
      reversed += text.charAt(i);
    }

    return reversed;
    
  }
  public static String toUpperCase(String text){
    
    return text.toUpperCase();
  }
  public static String removeSpaces(String text){
    String nString = "";
    for(int i=0;i<text.length();i++){
      if(text.charAt(i) != ' '){
        nString+=text.charAt(i);
      }
    }
    return nString;
  }
}
