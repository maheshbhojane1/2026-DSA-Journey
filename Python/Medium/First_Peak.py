
def firstPeak(arr):
    for i in range(len(arr)):
        if arr[i] > arr[i -1] and arr[i] > arr[i + 1]:
            return arr[i]
        

print(firstPeak([1, 3, 2, 5, 8]))