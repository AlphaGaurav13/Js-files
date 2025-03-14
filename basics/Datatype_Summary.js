// Primitive 

// 7 data Types : String, Number, Boolean, null, undefined,  Symbol, BigInt.

//JavaScript is a dynamcally typed language which means data type is determined by the value at the runtime and can be changed thoughout the program as different value can assgned to them.


const id = Symbol('123')
const anotherId = Symbol('123');

// console.log(id === anotherId);  // false


// Reference type (Non Primitive)

//Array , objects , Functions

const hero = ["Gaurav", "Krishna", "Saktiman"];  //array representation
// we write object in curly brackets {}

let myObj = {
    name:  "Gaurav",
    age :  20,
};

const myFunction = function() {
    console.log("Hello World");
}
let num = 10;
let str1 = "Gaurav";
let isTrue = true;
let hero1 = null;
// console.log(typeof myFunction); // function
// console.log(typeof myObj);  // object
// console.log(typeof num);  // number
// console.log(typeof str1);  // string
// console.log(typeof isTrue);  // boolean
// console.log(typeof hero1);  //  object

// *************************************************** Stack && Heap ***************************************


let myName = "GauravHain";
let anotherName = myName; 
anotherName = "heroChaudhary";


// console.log(myName);   // this is stored in stack
// console.log(anotherName);


let userOne = {
    email : "User123@google.com",
    upi : "user@ybl",
}

let userTwo = userOne;

userTwo.email = "Gauravkkr345@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);

// inside the non primitive type  we always get the refrence value.


