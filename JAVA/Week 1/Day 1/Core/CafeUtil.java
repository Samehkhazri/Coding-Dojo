import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class CafeUtil {
    private List<String> customers;

    public CafeUtil() {
        this.customers = new ArrayList<>();
    }

    public int getStreakGoal(int streak) {
        // Assuming a streak of 1 per day, the days needed is the same as the streak goal
        return streak;
    }

    public void printPriceChart(List<Double> prices) {
        System.out.println("Price Chart:");
        for (int i = 0; i < prices.size(); i++) {
            System.out.println("Item " + (i + 1) + prices.get(i) + ": dt");
        }
    }

    public double getOrderTotal(List<Double> prices, List<Integer> quantities) {
        double totalCost = 0.0;
        for (int i = 0; i < prices.size(); i++) {
            totalCost += prices.get(i) * quantities.get(i);
        }
        return totalCost;
    }

    // public void displayMenu(Map<String, Double> menu) {
    //     System.out.println("Menu:");
    //     for (Map.Entry<String, Double> entry : menu.entrySet()) {
    //         System.out.println(entry.getKey() + entry.getValue() + ": dt");
    //     }
    // }

    // public void addCustomer(String customerName) {
    //     customers.add(customerName);
    // }
}
