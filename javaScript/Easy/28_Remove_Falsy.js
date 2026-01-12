
let falsy = [false, 0, "", null, undefined, NaN]

function removeFalsy(arr){
    let result = []

    for(let a = 0; a < arr.length; a++) {
        if(!falsy.includes(arr[a])){
            result.push(arr[a])
        }
    }
    
 console.log(result)
}



removeFalsy([0, 1, false, 2, "", 3])