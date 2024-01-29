import java.util.ArrayList;
import java.util.Arrays;

public class CafeUtil{

    public int getStreakGoal(){

        int sum = 0 ;
        for(int i=1 ; i<=10 ; i++){
            sum += i ;
        }
        return sum;
    }



    public double getOrderTotal(double[] prices){
        double sum = 0;
        for(double a : prices){
            sum += a ;
        }
        return sum ;
    }

    void displayMenu(ArrayList<String> menuItems){
        
        for(int i = 0 ; i < menuItems.size() ; i++){
            System.out.println(i + " " + menuItems.get(i));
        }
    }


    // void = ki tabda el methode ma trajja3 7atta chay ( w dima nesta3mloha kif ne5dmou bel println fel method)
    public void addCustomer(ArrayList<String> customers){
        System.out.println("please enter your name : ");

        String username = System.console().readLine();

        System.out.println("Hello , " + username);

        int people = customers.size();

        System.out.printf("There are %s people in front of you \n" , people);

        customers.add(username);

        System.out.println(customers);
    }
}