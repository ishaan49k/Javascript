// STRINGS METHODS && CONCATENATION

const firstName = "William";
const lastName = "Smith";
const age = 36;
const str = "Hello there my name is brad"
const tags = "web design, web development, programminfg"

let val;


// Concatenation
val = firstName + lastName;
val = firstName + ' ' + lastName;

// Append (Add to a variable)
val = "Brad";
val += "Traversy"

val = "Hello, my name is " + firstName + " and I am " + age;

// Escaping 

val = 'That\'s awesome, I can\'t wait';

// Length

val = firstName.length;

// concat()

val = firstName.concat(' ', lastName)

// Change Case

val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[2];

// indexOf()

val = firstName.indexOf('l');
val = firstName.indexOf('l');
val = firstName.charAt('2');

// Get last character

val = firstName.charAt(firstName.length - 1);

// Substring()

val = firstName.substring(0, 4)

// Slice() - similar to substr
val = firstName.slice(0, 4);  // gives the same thing as substr.
val = firstName.slice(-3);   // we can do -ive indexing using slice

// split()

val = str.split(" ")   // turns into an array based on spaces. ie array where all the words of sentence is split on spaces
val = tags.split(',')

// replace()

val = str.replace("brad", "Jack");

// Includes() - returns true if the argument is part of the string 
val = str.includes('Hello')



console.log(val)
