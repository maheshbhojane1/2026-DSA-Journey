let filter = function (fn, arr) {
  let filterVal = [];

  for (let i = 0; i <= arr.length; i++) {
    if (fn(arr[i], i)) {
      filterVal.push(arr[i]);
    }
  }

  return filterVal;
};

const arr = [20, 10, 50, 40];

let fn = function (val, index) {
  return val > 10;
};

console.log(filter(fn, arr));
