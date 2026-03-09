let string = "Hello my name is Mahesh And i live in Nandura";

let frequency = {};

for (let str of string) {
  if (frequency[str]) {
    frequency[str]++;
  } else if (str !== " ") {
    frequency[str] = 1;
  }
}

console.log(frequency);
