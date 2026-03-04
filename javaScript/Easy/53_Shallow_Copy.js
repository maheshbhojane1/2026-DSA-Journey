const user = {
    name: "John",
    age: 30,
    city: "New York"

};

const shallowCopy1 = Object.assign({}, user);   

const shallowCopy2 = { ...user };


console.log(shallowCopy1);
console.log(shallowCopy2);  
