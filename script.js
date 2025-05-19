
// declare variable using var keyword
"use strict"
var x = 10;
var firstName = "Channim"; 
var lastName = "Nita";
console.log(firstName);
firstName = "Bunvarn";
console.log("the renew firstName of Channim: ", firstName);

// convertion of string to numbers
var num1 = '1';
var num2 = '2';
var result = parseInt(num1) + parseInt(num2);

console.log(parseInt(result));

// declaration of let keyword 

for(let i = 0; i<3; i++){
    console.log("hello my students!Do you understand?")
}

let myMessage = "hello guys!";
// alert(myMessage);

myMessage = "hello everybody!" //renew value of myMessage




myMessage= prompt("Input new message: ", myMessage); // using prompt for input value as the text
alert(myMessage);

// confirm using for condition decision
let cn = confirm("Are you ready for the next holidays?");

console.log(cn);

if(cn){
    console.log("Yes, I am so happy!")
}
else{
    console.log("No, i am not. I missed my friends, my school, my teacher, my studying.")
}
