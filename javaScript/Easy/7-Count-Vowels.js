
let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];


function countVowels(str) {

    let count = 0;

    for (let char of str) {

        if(vowels.includes(char)){

            count++
        }
    }

    return count
}



console.log(countVowels("Hello"));
