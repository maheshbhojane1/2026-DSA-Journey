function removeDuplicates(arr) {
  const uniqueElements = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueElements.includes(arr[i])) {
      uniqueElements.push(arr[i]);
    }
  }
  return uniqueElements;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
