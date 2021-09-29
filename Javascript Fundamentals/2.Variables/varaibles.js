// Variables

// Var, Let, Const

var name = "John Doe";

console.log(name);

// You can reassaign variables to have a different value. 
name = "Steve Smith"

console.log(name);

// Init variable;
// when we console log, we get undefined
var greeting;

// assign value to undefined var
greeting = "Hey"
console.log(greeting);

// Naming convenstions:
// Variables can have letters, numbers, _, $
// Can't start with a number

// var 1 name = "john";

// // Multiword vars

// var firstName = "John"; // Camel Case
// var first_name = "Sara"; // Underscore
// var FirstName = "Tom"; // Pascal case


// LET
// works the same way as var in global scope. it has advantages in block scope
// let name = "John Doe";
// console.log(name);
// name = "Steve Smith";
// console.log(name);

// CONST
// once assigned it cant be reassigned to a different value
// we have to initialize when we define it
const name = "John";
console.log(name);

// Can't reassign
// name = "sara";
// Have to assign a value
// const greeting;

// object
const person = {
    name: "john",
    age: 30
}
// we can change the values inside const object but cant reassign another object to a const object RRRRRRR
person.name = "Sara"

console.log(person);

// Following is alloed since we are not reassigning a const to something else
const nums = [1,2,3,4,5];  
nums.push(6);  // used to push ele at end of arr
// This is not allowed
nums = [1,2,3,4,5,6];
