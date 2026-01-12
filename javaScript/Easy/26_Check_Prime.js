function checkPrime(n) {
    if (n <= 1) return 0;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return "Prime";
}



console.log(checkPrime(0));
console.log(checkPrime(5));
