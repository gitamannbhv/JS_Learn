//comment
console.log('Hello WOrld!');

//VARIABLES
//can't be reserved keyword
//should be meaningful
//can't start with a number
//they are case sensitive

let name = 'Aman';
console.log(name);

var firstName = 'Mosh', lastName;

//let interestRate = 0.3;
//interestRate = 1;
//console.log(interestRate)//

//CONSTANTS

const interestRate = 0.3;
console.log(interestRate)

//DataTypes - Primitive/Value Input

let name1 = 'Aman'; //string literal
let age = 30; //number literal
let isApproved = true; //boolean literal
let firstName1 = undefined; //set value and type to undefined, default setting
let selectedColor = null; //to clear a variable's value

//JS is a dynamic lang, so data type of variable is not static like c etc.

//Data Types - Reference Types (object, arrays and function)
//OOPS

let person = {
    name: 'Aman',
    age: 30
};

//dot notation

person.name = 'John';

//Bracket notation

person['name'] = 'Mary';
console.log(person);

//Array to store list of items

let selectedColors = ['red', 'blue'];
selectedColors[2] = 1;
console.log(selectedColors);

//Function
//performing a task
function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}

greet('Aman', 'Singh');
greet('John', 'Mathew');

//calculating a value
