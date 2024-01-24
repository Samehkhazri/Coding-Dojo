import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class TestCafeUtil {
    public static void main(String[] args) {
        // Create an instance of CafeUtil
        CafeUtil cafeUtil = new CafeUtil();

        // Test getStreakGoal method
        int streakGoal = 10;
        int daysNeeded = cafeUtil.getStreakGoal(streakGoal);
        System.out.println("Days needed to reach streak goal of " + streakGoal + ": " + daysNeeded);

        // Test printPriceChart method
        List<Double> prices = Arrays.asList(2.5, 3.0, 4.5, 5.0);
        cafeUtil.printPriceChart(prices);

        // Test getOrderTotal method
        List<Double> itemPrices = Arrays.asList(2.0, 3.5, 4.0);
        List<Integer> itemQuantities = Arrays.asList(3, 2, 1);
        double totalCost = cafeUtil.getOrderTotal(itemPrices, itemQuantities);
        System.out.println("Total cost of the order: $" + totalCost);

        // Test displayMenu method
        Map<String, Double> menuItems = new HashMap<>();
        menuItems.put("Coffee", 2.0);
        menuItems.put("Tea", 1.5);
        menuItems.put("Muffin", 3.0);
        cafeUtil.displayMenu(menuItems);

        // Test addCustomer method
        String customerName = "John Doe";
        cafeUtil.addCustomer(customerName);
        System.out.println("Customers: " + cafeUtil.getCustomers());
    }
}
