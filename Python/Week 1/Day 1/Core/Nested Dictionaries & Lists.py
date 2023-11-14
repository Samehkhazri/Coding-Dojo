# Update Values in Dictionaries and Lists
x = [[5, 2, 3], [10, 8, 9]]
students = [
    {'first_name': 'Michael', 'last_name': 'Jordan'},
    {'first_name': 'John', 'last_name': 'Rosales'}
]
sports_directory = {
    'basketball': ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer': ['Messi', 'Ronaldo', 'Rooney']
}
z = [{'x': 10, 'y': 20}]

# Change the value 10 in x to 15
x[1][0] = 15

# Change the last_name of the first student from 'Jordan' to 'Bryant'
students[0]['last_name'] = 'Bryant'

# In the sports_directory, change 'Messi' to 'Andres'
sports_directory['soccer'][0] = 'Andres'

# Change the value 20 in z to 30
z[0]['y'] = 30

# Iterate Through a List of Dictionaries
def iterateDictionary(some_list):
    for student in some_list:
        print(f"first_name - {student['first_name']}, last_name - {student['last_name']}")

students = [
    {'first_name': 'Michael', 'last_name': 'Jordan'},
    {'first_name': 'John', 'last_name': 'Rosales'},
    {'first_name': 'Mark', 'last_name': 'Guillen'},
    {'first_name': 'KB', 'last_name': 'Tonel'}
]

iterateDictionary(students)

# Get Values From a List of Dictionaries
def iterateDictionary2(key_name, some_list):
    for student in some_list:
        print(student[key_name])

# Output 'first_name'
iterateDictionary2('first_name', students)

# Output 'last_name'
iterateDictionary2('last_name', students)

# Iterate Through a Dictionary with List Values
def printInfo(some_dict):
    for key, values in some_dict.items():
        print(f"{key} - {len(values)}")
        for value in values:
            print(value)

info_dict = {
    'key1': ['value1', 'value2', 'value3'],
    'key2': ['value4', 'value5'],
    'key3': ['value6']
}

printInfo(info_dict)
