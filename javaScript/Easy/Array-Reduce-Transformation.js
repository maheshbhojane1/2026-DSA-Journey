let reduce = function (nums, fn, init) {
  let acc = init;

  for (let i = 0; i < nums.length; i++) {
    acc = fn(acc, nums[i]);
  }

  return acc;
};

reduce([1, 2, 3, 4], (acc, curr) => acc + curr, 0);
