const str = ["Java", "JavaScript", "Python", "C++"];

const result = str.reduce((longest, current) => {
  return current.length > longest.length ? current : longest;
});

console.log(result);
