const obj = {
    a :1,
    b: 2,

    sum(){
        return this.a + this.b
    }
 }


//  const result = obj.sum
const result = obj.sum.bind(obj)

 console.log(result())

// The output will be an error because when we assign obj.sum to the variable result, we are not calling the function, but rather referencing it. Therefore, when we try to call result(), it does not have access to the this keyword that refers to the obj object, and it will throw an error. To fix this, we can either call the function directly as obj.sum() or bind the function to the obj object using result.bind(obj) before calling it.