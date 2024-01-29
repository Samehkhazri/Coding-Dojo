import java.util.ArrayList;

class Item {
    String name;
    double price;

    // Constructor for Item class
    public Item(String name, double price) {
        this.name = name;
        this.price = price;
    }
}

class Order {
    String name;
    ArrayList<Item> items = new ArrayList<>();
    double total;
    boolean ready;

    // Constructor for Order class
    public Order(String name) {
        this.name = name;
        this.total = 0;
        this.ready = false;
    }
}

public class TestOrders {
    public static void main(String[] args) {

        // Create 4 item variables
        Item item1 = new Item("mocha", 3.5);
        Item item2 = new Item("latte", 4.0);
        Item item3 = new Item("drip coffee", 2.0);
        Item item4 = new Item("cappuccino", 4.5);

        // Create 4 order variables
        Order order1 = new Order("Cindhuri");
        Order order2 = new Order("Jimmy");
        Order order3 = new Order("Noah");
        Order order4 = new Order("Sam");

        // Print order1 variable
        System.out.println("Order 1: " + order1);

        // Predict what will happen if you print 'order1.total'
        // It will print the initial total value, which is 0.0
        System.out.println("Order 1 Total: " + order1.total);

        // Add item1 to order2's item list and increment the order's total
        order2.items.add(item1);
        order2.total += item1.price;

        // Noah ordered a cappuccino. Add the cappuccino to their order list and to their tab.
        order3.items.add(item4);
        order3.total += item4.price;

        // Sam added a latte. Update the order accordingly.
        order4.items.add(item2);
        order4.total += item2.price;

        // Cindhuri’s order is now ready. Update her status.
        order1.ready = true;

        // Sam ordered more drinks - 2 lattes. Update their order as well.
        for (int i = 0; i < 2; i++) {
            order4.items.add(item2);
            order4.total += item2.price;
        }

        // Jimmy’s order is now ready. Update his status.
        order2.ready = true;

        // Print order1 after all the updates
        System.out.println("Updated Order 1: " + order1);
    }
}
