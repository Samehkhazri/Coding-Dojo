public class CafeJava{
    public static void main(String[] args) {
    
        String generalGreeting = "Welcome to Cafe Java, ";
        String pendingMessage = ", your order will be ready shortly";
        String readyMessage = ", your order is ready";
        String displayTotalMessage = "Your total is $";
        
    
        double mochaPrice = 3.5;
        double dripCoffeePrice = 5.0;
        double lattePrice = 7.0;
        double cappuccinoPrice = 8.5;
    
        String customer1 = "Cindhuri";
        String customer2 = "Sam";
        String customer3 = "Jimmy";
        String customer4 = "Noah";
    
        boolean isReadyOrder1 = false;
        boolean isReadyOrder2 = false;
        boolean isReadyOrder3 = true; 
        boolean isReadyOrder4 = false;
    
    
        System.out.println(generalGreeting + customer1); 
        if (isReadyOrder1) {
            System.out.println(customer1 + readyMessage);
        } else {
            System.out.println(customer1 + pendingMessage);
        }
    
    
        if (isReadyOrder4) {
            System.out.println(customer4 + readyMessage);
            System.out.println(displayTotalMessage + cappuccinoPrice);
        } else {
            System.out.println(customer4 + pendingMessage);
        }
    

        int numberOfLattes = 2;
        double totalSam = numberOfLattes * lattePrice;
        System.out.println(displayTotalMessage + totalSam);
        if (isReadyOrder2) {
            System.out.println(customer2 + readyMessage);
        } else {
            System.out.println(customer2 + pendingMessage);
        }
    

        double correctedTotalJimmy = mochaPrice; 
        System.out.println(displayTotalMessage + correctedTotalJimmy);
    }
}
