function vowel(str) {

    let vowels = 'aeiouAEIOU';

    for(let char of str) {
        if(vowels.includes(char)) {
            console.log(char);
        }
    }
    for(let char of str) {
        if(!vowels.includes(char)) {
            console.log(char);
        }
    }


}


vowel("Mahesh")