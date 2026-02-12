// Without using let create a reference error

// function show() {
//     {
//         var a = 5;
//         var b = 5;
//     }

//     console.log(a, b);
    
// }


// show()



function show() {
    (function (){
        var a = 5;
        var b = 5;
    })();

    console.log(a, b);
    
}


// show()



