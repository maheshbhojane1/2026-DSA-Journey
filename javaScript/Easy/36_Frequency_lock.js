function frequencyLock(arr1, arr2, arr3) {
    let set1 = new Set(arr1);
    let set2 = new Set(arr2);
    let result = [];

    for (let num of arr3) {
        if (set1.has(num) && set2.has(num)) {
            result.push(num);
        }
    }

    return [...new Set(result)]; 
}

console.log(frequencyLock(
    [1, 2, 3, 4],
    [2, 3, 5],
    [2, 3, 6]
)); 


