const a = {}
const b = {key : "b"}
const c = {key : "c"}

a[b] = 123;
a[c] = 456;

console.log(a[b])

// The output will be 456 because when we use an object as a key in another object, it is converted to a string. In this case, both b and c are converted to the string "[object Object]", so they refer to the same key in the object a. Therefore, when we assign 456 to a[c], it overwrites the previous value of 123 that was assigned to a[b].
