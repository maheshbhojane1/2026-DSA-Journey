function firstPeak(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if(arr[i] > arr[i-1] && arr[i] > arr[i+1]){
        return arr[i]
    }
    
  }
}

console.log(firstPeak([1, 3, 2, 4, 5]));
