// declaration of function multiply two values 

"use strict"
//== traditional 

// function multiply(x,y){
//     return x*y;
// }

// calling the function
// let result = multiply(12,10);

// console.log(`This is the multiply result: ${result}`);


// convert into arrow function 

// let result_multiply = (a,b) => a*b;
// console.log(`the result of multiply using arrow function ${result_multiply(2,3)}`);



// implementin on spread operator 
let array1 = ["apple", "banana", "pineappple"];
let array2 = ["barcelna", "real-madrid", "prk"];

let array = [...array1, ...array2];

console.log(`The Result:  ${array}`);