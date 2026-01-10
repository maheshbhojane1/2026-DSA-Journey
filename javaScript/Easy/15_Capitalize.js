function capitalize(s) {
  let result = '';      
    for (let i = 0; i < s.length; i++) {
        if (i % 2 === 0) {
            result += s[i].toUpperCase();

            
        } else {
            result += s[i].toLowerCase();
        }   
    }
    return result
}   
console.log(capitalize("")) 

