// FUNCTION DECLARATIONS

// firstname and lastname are parametres of this fxn with default parametres set
function greet(firstName = 'claudio', lastName = 'bardales') {
    //console.log('Hello')
    return 'hello ' + firstName + ' ' + lastName;
}

console.log(greet());   // we are logging the value returned by the function


// FUNCTION EXPRESSIONS
// this is an anonymous fxn with default parametre = 3
const square = function(x = 3) {
    return x * x
};

console.log(square(8))


// IMMEDIATLY INVOLKABLE FUNCTION EXPRESSION - IIFES
// these are fxns that we declare and run at the same time
// we need the fxn to be an expression. to make it an expression, wrap in ()

(function(name) {
    console.log(`Hello ${name}`)
})('Claudio');

// PROPERTY METHODS
// fxns inside objects
const todo = {
    add: function() {
        console.log('Add todo ...')
    },
    edit: function(id) {
        console.log(`Edit todo ${id}`);
    }
}

todo.delete = function() {
    console.log('Delete todo...')
}

todo.add();
todo.edit(22);
todo.delete();









 
