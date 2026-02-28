function longestWord(str) {

    let result = str.split(" ").
    reduce((longest, current)=> {
        return current.length > longest.length ? current : longest
    })


    console.log(result);
    

}


longestWord("Welcome js coding challenge")