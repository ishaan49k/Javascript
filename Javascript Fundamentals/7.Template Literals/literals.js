//Template Literals


const name = "John"
const age = 31;
const job = "Web Developer";
const city = "Miami";
let html;


// a lot of times, we insert html through js. eg: when we fetch something from ajax and we want to insert it into an unordered list, then we do it using js
// to insert html, we need to create a HTML string

// Without Template Strings (es5 way)
html = '<ui> // html is the name of our html string
<li>Name: ' + name + '</li>
<li>Age: ' + age +' </li>
<li>Job: ' + job + '</li>
<li>City: ' + city + ' </li>
</ul>';

document.body.innerHTML = html;  // insert the html string in the webpage using the dom

function hello() {
    return 'hello';
}

// With Template Strings (es6 way). (use back ticks)
html = ` //(back ticks indicate template string)
    <ul>
        <li>Name : ${name}</li>   // To include the variable name, we dont have to concatenate/ use +. just use $ sign and put name of varibale/expression in {}
        <li>Job: ${job}</li>
        <li>age: ${age}</li>
        <li>City: ${city}</li>
        <li>${2 + 2}</li>
        <li>${hello()}</li>
        <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
`;


document.body.innerHTML = html;











