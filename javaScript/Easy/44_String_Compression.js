// Input = "aaabbc"
// output = "a3b2c1"

function compressString(str) {
  let compressed = "";
  let count = 1;

  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i - 1]) {
      count++;
    } else {
      compressed += str[i - 1] + count;

      count = 1;
    }
  }
  compressed += str[str.length - 1] + count;

  return compressed;
}



const input = "aaabbc";
const result = compressString(input);
console.log(result);