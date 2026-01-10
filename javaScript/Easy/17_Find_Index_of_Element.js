function findIndex(arr, val) {
    let index = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            index = i;
            break;
        }
    }   
    console.log(index);
}

findIndex([1, 2, 4, 6, 8], 4)