// WINDOW METHODS / OBJECTS/ PROPERTIES
// doucument object is part of the window object. Window is the global object in client side js. 

// Alert
alert('Hello');


// Prompt is same as alert but Takes An input
const input = prompt();  // now we can do anything we want to do with this input
alert(input);


// Comfirm - used when we user is trying to delete something deleting something

if (confirm('Are you sure')) {
    console.log('YESS');
}else {
    console.log('NOOOO')
}


// Outter height and width
let val;

val = window.outerHeight;
val = window.outerWidth;


// Inner height and width
val = window.innerHeight;
val = window.innerWidth;


// Scroll Points - if we want to know where we are on the page in terms of scrolling
// this is good for those apple side sites where if we scroll down, animations happen. cuz we know at what point we are at and accordingly which animations to show.
val = window.scrollY;
val = window.scrollX;


// Location object
val = window.location;
val = window.location.port;
val = window.location.href;
val = window.location.search;


//Redirect
window.location.href = "http://google.com"


// RELOAD
window.location.reload();


// HISTORY OBJECT
window.history.go(-1);   // is we put -1, it will take us to the previous site

val = window.history.length;  // gives us how many sites are behind current site
 

// Navigator Object
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;



console.log(val)











