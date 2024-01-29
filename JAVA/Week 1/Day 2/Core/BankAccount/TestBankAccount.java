public class TestBankAccount {
    public static void main(String[] args) {
        // Create 3 bank accounts
        BankAccount account1 = new BankAccount();
        BankAccount account2 = new BankAccount();
        BankAccount account3 = new BankAccount();

        // Deposit Test
        account1.deposit(1000, "checking");
        account2.deposit(1500, "savings");
        account3.deposit(500, "checking");

        System.out.println("Deposit Test:");
        account1.getBalance();
        account2.getBalance();
        account3.getBalance();
        System.out.println("Total Money: $" + BankAccount.getTotalMoney());

        // Withdrawal Test
        account1.withdraw(200, "checking");
        account2.withdraw(300, "savings");
        account3.withdraw(1000, "checking");

        System.out.println("\nWithdrawal Test:");
        account1.getBalance();
        account2.getBalance();
        account3.getBalance();
        System.out.println("Total Money: $" + BankAccount.getTotalMoney());

        // Static Test
        System.out.println("\nStatic Test:");
        System.out.println("Number of Bank Accounts: " + BankAccount.getAccounts());
        System.out.println("Total Money: $" + BankAccount.getTotalMoney());
}
}
