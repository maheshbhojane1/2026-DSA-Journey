vowels =[ "a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]

def count_vowels(s):
    count = 0
    for char in s:
        if char in vowels:
            count += 1
    return count
string = "Hello World"
result = count_vowels(string)
print("Number of vowels in the string:", result)



