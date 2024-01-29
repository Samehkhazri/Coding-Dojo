public class BankAccount {
    // MEMBER VARIABLES
    private double checkingBalance;
    private double savingsBalance;

    private static int accounts = 0;
    private static double totalMoney = 0;

    // CONSTRUCTOR
    public BankAccount() {
        accounts++;
    }

    // GETTERS
    public double getCheckingBalance() {
        return checkingBalance;
    }

    public double getSavingsBalance() {
        return savingsBalance;
    }

    public static int getAccounts() {
        return accounts;
    }

    public static double getTotalMoney() {
        return totalMoney;
    }

    // METHODS
    public void deposit(double amount, String accountType) {
        if ("checking".equalsIgnoreCase(accountType)) {
            checkingBalance += amount;
        } else if ("savings".equalsIgnoreCase(accountType)) {
            savingsBalance += amount;
        }
        totalMoney += amount;
    }

    public void withdraw(double amount, String accountType) {
        if ("checking".equalsIgnoreCase(accountType) && checkingBalance >= amount) {
            checkingBalance -= amount;
            totalMoney -= amount;
        } else if ("savings".equalsIgnoreCase(accountType) && savingsBalance >= amount) {
            savingsBalance -= amount;
            totalMoney -= amount;
        } else {
            System.out.println("Insufficient funds!");
        }
    }

    public void getBalance() {
        System.out.println("Checking Balance: $" + checkingBalance);
        System.out.println("Savings Balance: $" + savingsBalance);
    }
}
