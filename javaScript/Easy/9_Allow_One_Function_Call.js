// A closure is when a function remembers variables from its outer function even after the outer function has finished running.

let outer = function (fn) {
  let called = false;

  return function (...args) {
    if (!called) {
      called = true;
      return fn(...args);
    }
    return undefined;
  };
};

const fn = (a, b, c) => a + b + c;

const once = outer(fn);

console.log(once(1, 2, 3));
console.log(once(2, 3, 4));
console.log(once(5, 6, 7));
