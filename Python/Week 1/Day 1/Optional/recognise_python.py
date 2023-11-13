# Integer
num1 = 42

# Float
num2 = 2.3

# Boolean
boolean = True

# String
string = 'Hello World'

# List of strings
pizza_toppings = ['Pepperoni', 'Sausage', 'Jalapenos', 'Cheese', 'Olives']

# Dictionary
person = {'name': 'John', 'location': 'Salt Lake', 'age': 37, 'is_balding': False}

# Tuple of strings
fruit = ('blueberry', 'strawberry', 'banana')

# Print the type of the variable
print(type(fruit))

# Access an element in the list
print(pizza_toppings[1])

# Append an element to the list
pizza_toppings.append('Mushrooms')

# Access a value in the dictionary
print(person['name'])

# Modify values in the dictionary
person['name'] = 'George'
person['eye_color'] = 'blue'

# Access an element in the tuple
print(fruit[2])

# If statement
if num1 > 45:
    print("It's greater")
else:
    print("It's lower")

# If-elif-else statement
if len(string) < 5:
    print("It's a short word!")
elif len(string) > 15:
    print("It's a long word!")
else:
    print("Just right!")

# For loop
for x in range(5):
    print(x)

# For loop with a specified range
for x in range(2, 5):
    print(x)

# For loop with a specified range and step
for x in range(2, 10, 3):
    print(x)

# While loop
x = 0
while x < 5:
    print(x)
    x += 1

# Pop the last element from the list
pizza_toppings.pop()

# Pop the element at index 1 from the list
pizza_toppings.pop(1)

# Print the dictionary
print(person)

# Remove a key-value pair from the dictionary
person.pop('eye_color')

# Print the modified dictionary
print(person)

# For loop with continue and break statements
for topping in pizza_toppings:
    if topping == 'Pepperoni':
        continue
    print('After 1st if statement')
    if topping == 'Olives':
        break

# Function to print 'Hello' ten times
def print_hello_ten_times():
    for num in range(10):
        print('Hello')

# Call the function
print_hello_ten_times()

# Function to print 'Hello' x times
def print_hello_x_times(x):
    for num in range(x):
        print('Hello')

# Call the function with an argument
print_hello_x_times(4)

# Function with a default value for the parameter
def print_hello_x_or_ten_times(x=10):
    for num in range(x):
        print('Hello')

# Call the function without providing an argument (uses the default)
print_hello_x_or_ten_times()

# Call the function with an argument
print_hello_x_or_ten_times(4)

# Bonus section (commented out to prevent errors)
# num3 is not defined
# num3 = 72
# Lists are mutable, so this line will cause an error
# fruit[0] = 'cranberry'
# 'favorite_team' key does not exist in the dictionary
# print(person['favorite_team'])
# Index 7 is out of range for the list
# print(pizza_toppings[7])
# IndentationError: unexpected indent
#   print(boolean)
# 'append' and 'pop' are not supported for tuples
# fruit.append('raspberry')
# fruit.pop(1)
