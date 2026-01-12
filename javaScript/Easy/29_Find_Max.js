
function findMax(arr) {
    let max  = arr[0]
    for(let a = 0; a < arr.length; a++) {
        if(arr[a] > max) {
            max = arr[a]
        }
    }

    console.log(max);
    
}



findMax([2, 6, 10, 65, 50])