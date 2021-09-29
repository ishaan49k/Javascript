// 2 types of data types: primitive and referanced 

// Primitive Data Types - stored directly in the location the variable accesses.
// it is stored in stack memeory

// Primitive Data Types:
// String
// Number (int, bool, double all are numbers in js)
// Boolean
// Null
// undefined
// Symbols(ES6)

// Reference Data Types / Objects - stored in dynamic memory. we acess location using pointer.
// Eg :
// Arrays
// Object Literals
// Functions
// Dates
// Anything Else

// JavaScript is a Dynamically Typed Language. ie data types are assosiated with actual values and not the variables themselves. So the same variable can hold
// multiple types of values.

// In statically typed like C++, we need to define what kind of data we are storeing in a variable

// PRIMITIVE

// // string
const name = "John Doe";
console.log(typeof(name));
   
// Number
const age = 45;

// Boolean
const hasKids = true;

// Null
const car = null;
console.log(typeof(null)); // this will output object => bug in js

// Underfined
let test;

// Symbol
const sym = Symbol();


// // REFERENCE TYPES - OBJECTS

// Array

const hobbies = ['movies', 'music'];
console.log(typeof(hobbies));  // output => object

// Object Literal
const address = {
    city: 'boston',
    state: 'MA'
}

console.log(typeof(address));  // output => object

const today = new Date();

console.log(today);
console.log(typeof sym)















