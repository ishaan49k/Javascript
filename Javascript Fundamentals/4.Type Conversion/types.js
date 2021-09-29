// TYPE CONVERSION

// taking input from a form is a string by default. so we need to convert it to a num

let val = 5;

// Number to String => var_name = String(num);
val = String(53333);
val = String(4 + 4);

// Boolean to String => var_name = String(bool);
val = String(true)  

// Date to String 
val = String(new Date())
  
// Array to String
val = String([1, 2, 4, 5, 5])

// toString()
val = (5).toString();

// You can use either or ^^

// String to Number
val = Number("5");
val = Number(true);
val = Number(false);
val = Number("Hello");  // if we consolelog, we get NaN (not a number)

val = parseInt("100,30");   // converts to nit with no decimals
val = parseFloat("100.30")  // gives one decimal

// You can use either or ^^


// Note:
var_name.toFixed(3);  // .toFixed is a fxn for numbers. it specifies how many decimals we want the number to have


// output

console.log(val);
console.log(typeof val);
// console.log(val.length);
console.log(val.toFixed(2))


// Type Cohercion => javascript does the conversion for us

const val1 = String(5);
const val2 = 6;
const sum = Number(val1 + val2);

console.log(sum);
console.log(typeof sum)












