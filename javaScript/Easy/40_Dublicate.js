function dublicate(arr){
    return arr.filter((item, index) => arr.indexOf(item) !== index);
}

console.log(dublicate([1, 5, 2, 1, 4, 2, 6, 8]));


