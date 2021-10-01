// WINDOW METHODS / OBJECTS/ PROPERTIES
the document object is part of the window object. The window is the global object in client side js. 
// Alert
alert('Hello');

// // Prompt == Same as Alert but Takes An input
const input = prompt();  // create a var and set it to prompt. prompt will take in an input from us. we can now do wtever we want with this input using var
alert(input);  


// Comfirm => used when we are deleting something. 
// cornfirm() takes parametre of the msg
// confirm will show 2 options : ok and cancel. is we click ok, then if will run and if cancel is presses, else will run
if (confirm('Are you sure')) {
    console.log('YESS');
} else {
    console.log('NOOOO')
}

// Outter height and width
let val;

val = window.outerHeight;
val = window.outerWidth;


// Inner height and width


val = window.innerHeight;
val = window.innerWidth;


// Scroll Points - tell us where we are on the screen
// used for sites in which as scroll down, animations pop up
val = window.scrollY;
val = window.scrollX;


// Location object - part of window object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;  
val = window.location.search;


//Redirect
window.location.href = "http://google.com"

// RELOAD
window.location.reload();

// HISTORY OBJECT
window.history.go(); // if -1 then it goes to previous page we visited. if -2 then 2 pages back

val = window.history.length;


// Navigator Object 

val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;



console.log(val)
