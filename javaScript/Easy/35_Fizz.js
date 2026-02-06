function fizz(data) {
  for (let i = 1; i <= 10; i++) {
    if (3 % i === 0 && 5 % i === 0) {
      console.log("FizzBuzz");
    } else if (3 % i === 0) {
      console.log("Fizz");
    } else if (5 % i === 0) {
      console.log("Bizz");
    } else console.log(i);
  }
}

fizz(10);
