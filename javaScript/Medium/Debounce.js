function debounce(fn, dealy) {
    let timerId;

    return function(...args) {
        clearTimeout(timerId) 
        timerId = setTimeout(()=> {
            fn(...args)
        }, dealy)
    }
}

const search = (query) => {
    console.log("Searching ", query);
}


const setDebounce = debounce(search, 1000)

setDebounce("H")
setDebounce("Ha")
setDebounce("Har")
setDebounce("Hard")
setDebounce("Hard ")
setDebounce("Hard J")
setDebounce("Hard JS")
setDebounce("Hard JS ")
setDebounce("Hard JS Questions")