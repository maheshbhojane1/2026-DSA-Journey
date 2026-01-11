
def countEven(list):
    count = 0
    for num in list:
        if num % 2 == 0:
            count += 1
    return count    


numbers = [1, 2, 3, 4, 5, 6]
result = countEven(numbers)
print("Count of even numbers:", result)  