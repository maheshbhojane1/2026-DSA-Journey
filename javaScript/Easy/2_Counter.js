let createCounter = function(n) {
    return function() {
        console.log(n);
        return n++
    }
}

let counter = createCounter(10)

counter()
counter()
counter()