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

/*
console.log("Hello World!");

console.log(typeof(a));

document.querySelector('button.addBtn').addEventListener("click", add);

function add() {
  let a = document.querySelector('input.aTextBox').value;
    a = Number(a);
    let b = document.querySelector('input.bTextBox').value;
    b = Number(b);

    let c = a + b;

    document.querySelector('label.cLabel').innerHTML = "The sum of " + a + " and " + b + " is " + c;
}
*/

/*
let count = 0;

document.querySelector('button.addBtn').addEventListener("click", () => counter(1));
document.querySelector('button.decBtn').addEventListener("click", () => counter(2));
document.querySelector('button.saveBtn').addEventListener("click", () => counter(3));
document.querySelector('button.reloadBtn').addEventListener("click", () => counter(4));
document.querySelector('button.resetBtn').addEventListener("click", () => counter(5));


function counter(num) {
  if(num === 1) count++;
  else if(num === 2) count--;
  else if(num === 3) localStorage.setItem("count", JSON.stringify(count));
  else if(num === 4) {
    let b = JSON.parse(localStorage.getItem('count'));
    document.querySelector('label.countLabel').innerHTML = b;
  }
  else if(num === 5) localStorage.setItem("count", 0);
  document.querySelector('label.countLabel').innerHTML = count;
  
}

let b = JSON.parse(localStorage.getItem('count'));
document.querySelector('label.countLabel').innerHTML = b;
*/

// Slice Method

let fullName = "Aladiah Fulminar";
let firstName;
let lastName;

firstName = fullName.slice(0, fullName.indexOf(" "));
lastName = fullName.slice(fullName.indexOf(" ") + 1);

console.log(firstName);
console.log(lastName);

// Method Chaining

let userName = "bro";

let letter = userName.charAt(0).toUpperCase().trim();

console.log(letter);

// If Statements

// (Standard Practice)

let age = 15;

if(age >= 18){
  console.log("You are an adult.");
}
else{
  console.log("You're too young for this shit!");
}

// (Better practice, if your dealing with only an if-else without and else if statement, then this is a better practice.):


age >= 18 ? console.log("You are an adult.") : console.log("You're too young for this shit!");

// (But you can also chain a condition like this ternary condition)

age >= 30 ? console.log("You are a middle aged shit!") : console.log("You're not middle aged but an adult!");

function example() {
  return condition1 ? value1
        : condition2 ? value2
        : condition3 ? value3
        : value4;
}

// Checked Property (HTML JS) 

/*
document.querySelector('button.submit').addEventListener("click", kanaMerge);

function kanaMerge() {
  
  const kanaReveal = document.querySelector('input.kanaChkBox');
  const submitReveal = document.querySelector('button.submit');

  kanaReveal.checked ? //>>
    document.querySelector('label.kanaReveal').innerHTML = "Welcome to the ordeal!"
  : document.querySelector('label.kanaReveal').innerHTML = "You are not welcomed to the ordeal when you haven't abided by our ordeal!";

  submitReveal.click ? alert("HAAAA") : window.alert("HAAAAYAAAAA");

}
*/

// Switch Case

let rating = "Z";

switch(rating){
  case "A":
    console.log("Hi, 'A' class user. ");
    break;
  case "R":
    console.log("Hi, 'B' class user");
    break;
  default:
    console.log("No other classes detected or classes found in the database that matches the set rating.");
}









