
def palindrome(s):
    s = s.replace(" ", "").lower()
    return s == s[::-1] 

string = "A man a plan a canal Panama"
if palindrome(string):
    print(f'"{string}" is a palindrome')        
else:
    print(f'"{string}" is not a palindrome')




