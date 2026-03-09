const obj = {
    a : 1,
    b : 2,

    sum(){
        return this.a + this.b;
    }
}



let res = obj.sum.bind(obj);

console.log(res());

