def secondSmall(arr):
    first = second = float('inf')
    for number in arr:
        if number < first:
            second = first
            first = number
        elif first < number < second:
            second = number
    return second if second != float('inf') else None


arr = [12, 3, 5, 7, 19]
result = secondSmall(arr)

