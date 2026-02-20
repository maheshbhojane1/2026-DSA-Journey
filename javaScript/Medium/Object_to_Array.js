let obj = {a:22, b:44}

function objToArray(){
    let res = []

   for (let key in obj) {
    res.push([key, obj[key]])
   }

   return res
}


console.log(objToArray());
