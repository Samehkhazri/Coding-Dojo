class User:
    def __init__(self, first_name, last_name, email, age):
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.age = age
        self.is_rewards_member = False
        self.gold_card_points = 0

    def display_info(self):
        print(f"First Name: {self.first_name}")
        print(f"Last Name: {self.last_name}")
        print(f"Email: {self.email}")
        print(f"Age: {self.age}")
        print(f"Rewards Member: {self.is_rewards_member}")
        print(f"Gold Card Points: {self.gold_card_points}")
        return self

    def enroll(self):
        if self.is_rewards_member:
            print("User already a member.")
        
        else:
            self.is_rewards_member = True
            self.gold_card_points = 200
            
        return self
        

    def spend_points(self, amount):
        if amount > self.gold_card_points:
            print("Not enough points to spend.")
        else:
            self.gold_card_points -= amount
            print(f"{amount} points spent. Remaining points: {self.gold_card_points}")
        return self


# Testing the User class
user1 = User("John", "Doe", "john.doe@email.com", 25)
user2 = User("Jane", "Smith", "jane.smith@email.com", 30)



user1.display_info().enroll().spend_points(50).display_info()


user2.display_info().enroll().spend_points(80).display_info()








