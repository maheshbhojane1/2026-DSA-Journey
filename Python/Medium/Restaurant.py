menu = {
    "Pizza":15,
    "Pasta":14,
    "Coffe":10,
    "Salad":12,
    "Burger":12.5
}

print("Welcome to our Python Restrunt")
print("Here is your menu:")
print("Pizza: $15\nPasta: $14\nCoffe: $10\nSalad: $12\nBurger: $12.5")

order = 0
item1 = input("Enter your order: ")
if item1 in menu:
    order += menu[item1]
    print(f"Here is your order {item1} and total is ${order}")
else:
    print(f"Sorry, we don't have {item1} on the menu.")

item2 = input("If you have second order say (Yes/No)")
if(item2.lower() == 'yes'):
    item2 = input("Please enter your second order: ")
    if item2 in menu:
        order += menu[item2]
        print(f"{item2} added to your order. Current total: ${order:.2f}")
    else:
        print(f"Sorry, we don't have {item2} on the menu.")

print(f"Your total amount to pay ${order}")