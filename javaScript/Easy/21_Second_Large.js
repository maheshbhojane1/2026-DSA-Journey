function secondLargest(arr) {
  let first = -Infinity;
  let second = -Infinity;

  for (num of arr) {
    if (num > first) {
      second = first;
      first = num;
    } else if (num < first && num > second) {
      second = num;
    }
  }

  return second === -Infinity ? "No second number" : second;
}

console.log(secondLargest([10, 20, 30, 40, 50]));
