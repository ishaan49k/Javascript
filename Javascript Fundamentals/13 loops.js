// FOR LOOP. - use when you know how many iterations are going to be there
for (let i = 0; i<=10; i++) {
    if (i === 2) {
        console.log('2 is my favorite number');
        continue;
    }
    if (i === 5) {
        console.log('Stop the loop')
        break;
    }
  
    console.log(`Number is ${i}`);
}



// WHILE LOOP. - use when you dont know how many iterations will be there
let i = 0;
while (i < 10) {
    console.log(`Number ${i}`);
    i++;
}

// DO WHILE LOOP
// do will execute first and then the normal while loop will run
// do while loops runs atleast once
// The difference between WHILE and DO WHILE that DO WHILE is always going to run even if the condition isn't met
let i = 100;
do{
    console.log(`Number ${i}`);
    i++;
}
while (i < 10);


// LOOP THROUGH ARRAY

const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];
for (let i=0; i<cars.length; i++) {
    console.log(cars[i])
}


// FOR EACH
// forEach takes in a call back function (anonymous fxn)
// car is the name of the iterrator:

cars.forEach(function(car){
  console.log(car);
});

// index are the indexes of the iterator ie 0, 1, 2.... array is the entire array
cars.forEach(function(car, index, array) {
    console.log(`${index} : ${car}`);
    console.log(array);
});



// MAP
// create array of objects
const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Sara' },
    { id: 3, name: 'karen' },
    { id: 4, name: 'steve' }
];

// to create an array of id of the users
const ids = users.map(function(user) {
    return user.id;
});


console.log(ids);

//FOR IN
// for is in ofter used for objects
const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 40
}
// x here is the key and users[x] is the value assosiated with that key
for (let x in user) {
    console.log(`${x} : ${user[x]}`);
}














