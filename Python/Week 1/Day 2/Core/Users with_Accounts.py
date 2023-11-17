class BankAccount:
    # don't forget to add some default values for these parameters!
    def __init__(self, int_rate, balance): 
        self.balance = balance
        self.int_rate = int_rate

    def deposit(self, amount):
        if amount >0:
            self.balance+=amount
            print(f"the balance is{self.balance} the amount is ,{amount}")
        else:
            print("invalid amount")

        return self

    def withdraw(self, amount):
        if amount<=self.balance:
            self.balance-=amount
            print(f"withdrawn {amount} new balance {self.balance}")
        else:
            print("insufficient funds: Charging a 5 dollar fee")
            self.balance-=5
        return self

    def display_account_info(self):
        print(f"Balance:{self.balance}")
        return self

    def yield_interest(self):
        if self.balance>0:
            interest=self.balance* self.int_rate
            self.balance+=interest
            print(f"this is interest {interest} this is new balance {self.balance}")
        return self















class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account = BankAccount(int_rate=0.02, balance=0)
    
    # other methods
    
    def make_deposit(self, amount):
        self.account.deposit(amount)
        print(self.account.balance)
        return self


    def make_withdrawal(self,amount):
        self.account.withdraw(amount)
        print(self.account.balance)
        return self

    def display_user_balance(self):
        self.account.display_account_info()
        return self

account = BankAccount(balance=500, int_rate=0.01)
account2 = BankAccount(balance=600, int_rate=0.01)
account.deposit(100).deposit(100).deposit(100).withdraw(200).yield_interest().display_account_info()
account2.deposit(100).deposit(100).withdraw(200).withdraw(200).withdraw(200).withdraw(200).yield_interest().display_account_info()
User1= User(name="sameh" , email="sameh.khazri@gmail.com")
User1.make_deposit(123).make_withdrawal(25).display_user_balance()




