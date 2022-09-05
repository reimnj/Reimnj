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

/*
const myNumber = 42;

const myFloat = 42.01;

console.log(myNumber, myFloat);
console.log(myNumber === myFloat);
console.log(Number(myNumber) + 50);

// Number Methods
*/

/* 

The Number.isInteger() method determines whether the passed value
is an integer. 

The Number.parseFloat() method parses an argument and returns a floating point
number. If a number cannot be parsed from the argument, it returns NaN.

The toFixed() method formats a number according to how many decimal points you
provide as the parameter.

*/

/*
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
*/

// Generating random numbers from 1-10.

/*
console.log(Math.floor(Math.random() * 7) + 1);
console.log(Math.floor(Math.random() * 7) + 1);
console.log(Math.floor(Math.random() * 7) + 1);

const username = "Aladiah";

console.log(username.charAt(Math.floor(Math.random() * username.length)));
*/


// Conditions (If-Else Statement)

/*
let studentID = "TUPM-20-1824";
let schoolYr = "2122";
let sem = "B";
let branch = "Manila";
*/

/*
if (doneEval === true) {
  openslip(studentID, schoolYr, sem, branch, genToken);
}

function generateToken() {
  return Math.random() * 1000;
}
*/

/*
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
*/

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

/*
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
*/

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

/*
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
*/

// AND OR Logical Operators

/*
let temp = 15;

console.log("The temp is " + temp);

if(temp > 0 && temp < 30){
  console.log( temp + " degrees celcius is kinda cold");
}
*/

// NOT Logical Operator

/*
let student = true;

if(!student){
  console.log("You are not a student");
}
else{
  console.log("You are a student");
}
*/

// While Loop

/*
let i = 0;

while(i <= 10){
  console.log(i);
  i++;
}
*/

// Do-While Loop

/*
let userInput = "";

while(userInput == ""){
  userInput = window.prompt("Enter your name: ");
}

console.log("Hello, ", userInput);

*/


// For Loop + Nested For Loop

/*
for(let i = 0; i <= 5; i++){
  for(let j = 5; j <= i; j++){
    console.log("*");
  }
  console.log("\n");
}
*/


// Functions 

/*
let nameUser = "Aladiah";

printOutput(nameUser);

function printOutput(a)
{

  console.log("Happy Birthday! " + a);

}
*/

// Return Statement -- used in functions.

/*
let sumA = 1;
let sumB = 2;

let c = add(sumA, sumB);

console.log(c);

function add(a, b){
  return a + b;
}
*/

// Ternary Operator -- more like of a if-else shortcut and can be chained like if-else-if statements.

/*
let studAge = 15;

studAge >= 18 ? console.log("You are qualified as a college entry student.") : console.log("You are still a highschooler!");
*/

// Var and Let

/*
*     "var" is used if you want to use a variable outside of a block scope (function scope).
*     "let" is used if you want to use a variable inside of a block scope only (block scope).
*
*/

/*
// Example:

// Var scope

for(var o = 1; o <= 3; o++){
  // ----
}

console.log(o); // You can use the variable "o" even if the variable is outside of the block scope of for loop. (function scope wise).


// let scope

for(let p = 1; p <= 3; p++){
  console.log(p) // You can use the variable "o" inside of this for loop block only or as to where the let variable is enclosed to (block scope wise).
}
*/

// Template literals 

/*
let op = "SKILL";

console.log(`What is your ${op}?`); // that's simply it.
*/

// Format Currency

/*
let myNum = 123456.789;

myNum = myNum.toLocaleString("en-US", {style: "currency", currency: "USD"});

console.log(myNum);
*/

 // Temperature Conversion Program

 /*
document.querySelector(".submit").addEventListener("click", conversion);

function conversion(){

  let temp;

  temp = document.querySelector(".tempInput").value;
  temp = Number(temp);

  if(document.querySelector(".cButton").checked){
    temp = toCelcius(temp);
    document.querySelector(".tempInput").value = temp + "°C";
  }
  else if(document.querySelector(".fButton").checked){
    temp = toFahrenheit(temp);
    document.querySelector(".tempInput").value = temp + "°F";
  }
  else{
    window.alert("Select a unit!");
  }

}

function toCelcius(temp){
  return (temp - 32) * (5/9);
}

function toFahrenheit(temp){
  return temp * 9 / 5 + 32;
}
*/

// Array + Looping through an array

/*
let fruits = ["Apple", "Orange", "Banana"];
let i = 0;

while(i != 3){
  let addFruit = window.prompt("Enter another fruit: ");
  fruits[fruits.length] = String(addFruit);
  i++;
}
*/

/*
fruits.sort();

console.log("I ate the " + fruits[fruits.length - 1]);

fruits.pop();

console.log("Fruits: ");
*/

/* // Traditional For Loop
for(let i = 0; i < fruits.length; i++){
  console.log(fruits[i]);
}
*/

/*
// New way, either which you want to use will likely depend on the functionality of your loop.
for(let fruit of fruits) {
  console.log(fruit);
}

console.log("Size of 'fruits' array: " + fruits.length);
*/

// 2D Arrays - An array of arrays ofc.

/*
let pop = ["Love Someone", "Blinding Lights", "Shape of You"];
let jb = ["Let me love you", "One Time", "Eenie Meenie"];

let songs = [pop, jb];

console.log(songs[0][1]);
*/

/*
let chunked = [[1,2,3], [4,5,6], [7,8,9]];

for(let i = 0; i < chunked.length; i++) {
  
   for(let j = 0; j < chunked[i].length; j++) {
     
      console.log(chunked[i][j]);

   }
}
*/

// Spread Operator (...) -- unpacks an array.

/*
let numbers = [1,2,3,4,5,6,7,8,9];

console.log(...numbers);
console.log(Math.max(...numbers));
*/

// Rest parameters -- Well, what do you know, it packs arguments into an array;

/*
let student1 = "Aladiah";
let student2 = "Jalie";
let student3 = "BroCode"

studentsList(student1, student2, student3);

function studentsList(...students){
  for(let studentNames = 0; studentNames < students.length; studentNames++){
    console.log(students[studentNames]);
  }
}
*/

// Callback -- a function passed as an argument to another function.

/*
let a = 3;
let b = 9;

sum(a, b, output);

function sum(a, b, outputPass){
  let result = a + b;
  outputPass(result);
}

function output(output){
  console.log(output);
}
*/

// array.forEach(element, index, array) -- executes a provided callback function once for each array element.

/*
let students =  ["aladiah", "jalie", "ria"];
students.forEach(capitalizeString);

function capitalizeString(element, index, array){
  array[index] = element[0].toUpperCase() + element.substring(1); // array[index] containes the index of the array elements, that are the ones that are modified.
}

for(let studentList of students){
  console.log(studentList);
}
*/

// array.map() -- executes a provided callback function once for each array element AND creates a new array.

/*
let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map(square);

squares.forEach(print);

function square(element){
  return Math.pow(element, 2);
}

function print(element){
  console.log(element);
}
*/

// array.filter() -- creates a new array with all elements that pass the test provided by a function.

/*
let ages = [18, 16, 21, 17, 19, 90];
let adult = ages.filter(checkAge);

adult.forEach(print);

function checkAge(element){
  return element >= 18;
}

function print(element){
  console.log(element);
}

console.log("Total # of Adults: " + adult.length);
*/

// array.reduce() -- reduce an array to a single value.

/*
let prices = [5, 10, 15, 20, 25];

console.log( "The total in is " + prices.reduce(function(total, element){return total + element}) + "$");
*/

/*
function checkOut(total, element){
  return total + element;
}
*/

// Sorting Numbers

/*
let numbers = [20, 100, 3, 8, 21, 5, 42, 13];

console.log(numbers.sort(function(a,b){return a - b}));
*/


console.log("Hello World");


let num = 5;
let b = 10;

console.log(letme(b));

function letme(param) {
  return param + num;
} 