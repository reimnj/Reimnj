/*
console.log("Hello World!");

for (let i = 1; i <= 5; i++){
    console.log(i);
}

var username = prompt("What is your name?");

greet(username);

function greet(name) {
    console.log("Hi, " + name.toUpperCase());
}
*/

// Numbers

const myNumber = 42;

const myFloat = 42.01;

console.log(myNumber, myFloat);
console.log(myNumber === myFloat);
console.log(Number(myNumber) + 50);

// Number Methods

/* 

The Number.isInteger() method determines whether the passed value
is an integer. 

The Number.parseFloat() method parses an argument and returns a floating point
number. If a number cannot be parsed from the argument, it returns NaN.

The toFixed() method formats a number according to how many decimal points you
provide as the parameter.

*/

console.log(Number.parseFloat(myNumber));

// Math methods

var indexNum = 10;

var indexNum1 = 5;

console.log(Math.PI);
console.log(Math.trunc(Math.PI));
console.log(Math.round(3.5));
console.log(Math.floor(3.5));
console.log(Math.pow(2, 4));

console.log(Math.min(indexNum, indexNum1)); // Math.max

// Generating random numbers from 1-10.

console.log(Math.floor(Math.random() * 7) + 1);
console.log(Math.floor(Math.random() * 7) + 1);
console.log(Math.floor(Math.random() * 7) + 1);

const username = "Aladiah";

console.log(username.charAt(Math.floor(Math.random() * username.length)));

// Conditions (If-Else Statement)

let studentID = "TUPM-20-1824";
let schoolYr = "2122";
let sem = "B";
let branch = "Manila";

/*
if (doneEval === true) {
  openslip(studentID, schoolYr, sem, branch, genToken);
}

function generateToken() {
  return Math.random() * 1000;
}
*/

function openslip(studentID, schoolYr, sem, branch) {
  if (slipAccess(tk) === true) {
    console.log("I'm working ofc.");
  }
}

let tk = true;

function slipAccess(tk)
{
    let doneEval = tk;

    if(doneEval === true){
        return true;
    }
    else
        return false;
}


/*
document.addEventListener(
  "contextmenu",
  (e) => {
    e.preventDefault();
  },
  false
);

document.addEventListener("keydown", (e) => {
    // USE THIS TO DISABLE CONTROL AND ALL FUNCTION KEYS
    // if (e.ctrlKey || (e.keyCode>=112 && e.keyCode<=123)) {
    // THIS WILL ONLY DISABLE CONTROL AND F12
    if (e.ctrlKey || e.keyCode==123) {
      e.stopPropagation();
      e.preventDefault();
    }
  });
*/