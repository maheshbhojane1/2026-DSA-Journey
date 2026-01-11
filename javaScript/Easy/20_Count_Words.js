function countWords(str) {
  let word = str.trim().split(/\s+/);
  word.filter((item) => item !== "");
  return word.length;
}

console.log(countWords("Hello Word"));
