function isPal(str) {
    str = str.toLowerCase();

    let left = 0;
    let right = str.length-1;

    console.log(left, right)

    while(left < right) {
        if(str[left] !== str[right]){
            return false
        }
        left ++
        right --
    }

    return true
}



console.log(isPal("Madem"));
