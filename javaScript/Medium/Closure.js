function outest() {
  let a = 20;
  function outer(str) {
    let b = 10;
    function inner() {
      console.log(a, b, str);
    }
    return inner;
  }
  return outer;
}
let a = 100;
outest()('Hello There')(); // 10 20 "Hello There"