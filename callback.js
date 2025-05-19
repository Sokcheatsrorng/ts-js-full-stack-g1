
// performce callback function 

let value = 1; 

function doSomething(){}; 

let resultOfArrow = ()=>value =2;

console.log(`return value of arrow funion ${parseInt(resultOfArrow)}`);
 
console.log(doSomething(()=> {return value=2;}));

