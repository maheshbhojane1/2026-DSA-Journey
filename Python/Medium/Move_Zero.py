def moveZero(arr):
    
    pos = 0

    for i in range(len(arr)):
        if arr[i] != 0:
            temp = arr[pos]
            arr[pos] = arr[i]
            arr[i] = temp

            pos += 1

    return arr




print(moveZero([0, 1, 5, 0, 2]))