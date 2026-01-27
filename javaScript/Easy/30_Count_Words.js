function countWords(sent) {
  const split = sent.split(" ");
  const logic = split.filter((word) => word != "");
  return logic.length;
}

console.log(countWords("Hello how are you?"));
