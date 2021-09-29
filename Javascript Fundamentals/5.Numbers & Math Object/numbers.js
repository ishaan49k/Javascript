// NUMBERS

const num1 = 100;
const num2 = 50;
let val;

// Simple Math With Numbers

val = num1 + num2
val = num1 * num2
val = num1 - num2
val = num1 / num2
val = num1 % num2

// Math Object
/*

Math is an object - ie it has attributes and methods

*/

val = Math.PI;   // sets value of val to 3.14...
val = Math.E;   // eulers number
val = Math.round(2.4);  // to round of a number
val = Math.ceil(2.4);  
val = Math.floor(2.8);
val = Math.sqrt(64);
val = Math.abs(-3);
val = Math.pow(8, 2);
val = Math.min(2, 44, 55, 3);
val = Math.max(2, 44, 55, 3);
val = Math.random();  // .random gives us a random number - it can be decimal, integer anything

// sometimes we need a random decimal number. for that do :
val = Math.random() * 20;  // this gives us a number such that maximum number we can get is 20 
// to get an int number below 20 (0,19), wrap in .floor()
val = Math.floor(Math.random() * 20 + 1);


console.log(val)











 
