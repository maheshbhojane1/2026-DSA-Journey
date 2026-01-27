function numguss(num) {
  let randomNum = Math.floor(Math.random() * 2) + 4;

  if (num > randomNum) {
    console.log("Too High");
  } else if (num < randomNum) {
    console.log("Too low");
  } else {
    console.log("Match");
  }
}

numguss(6);
