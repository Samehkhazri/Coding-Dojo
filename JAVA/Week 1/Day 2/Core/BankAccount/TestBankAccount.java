public class TestBankAccount {
        public static void main(String[] args) {
        // Create a bank account and perform chained operations
        BankAccount account = new BankAccount()
                .deposit(1000, "checking")
                .deposit(500, "savings")
                .deposit(200, "checking")
                .getBalance()
                .withdraw(200, "checking")
                .withdraw(100, "savings")
                .withdraw(300, "checking")
                .getBalance();

        // Static Test
        System.out.println("\nNumber of Accounts: " + BankAccount.getAccounts());
        System.out.println("Total Money: $" + BankAccount.getTotalMoney());
    }
}
