let arr = [1, 2, 3, 4, 5, 1, 2, 3]

let result = []

for (let i of arr) {
    if (!result.includes(i)) {
        result.push(i)
    }
}


console.log(result);
