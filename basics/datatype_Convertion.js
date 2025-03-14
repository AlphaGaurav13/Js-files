let num = "33";

// console.log(typeof(num));

//typeconvertion also we called it typecasting.
let numVal = Number(num);


// console.log(typeof numVal);


//if you convert something which is not a actual number then if try to print the value of that number it will give you output = NaN.
// so it is not a strict thats we use typescript.

// "33"  => 33
// "33abc" => NaN
// true => 1 and false => 0

// null => 0
// undefine  => undefine


let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);

// console.log(booleanIsLoggedIn); // true 

// 1 => true : 0 =>  false
// "" => false  : here string is empty
// "Gaurav" => true

let number = 13

let stringNumber = String(number);

// console.log(stringNumber);
// console.log(typeof(stringNumber));

// **************************   Operations  **********************

let value = 3
let negValue = -value 

// console.log(negValue);


let str1 = "hlo"

let str2 = " Gaurav"

let str3 = str1 + str2   // this is we call concatenation
// console.log(str3); 

// console.log("1" + 2); // 12
// console.log(1 + "2");  // 12
// console.log("1" + 2 + 2); // 122
// console.log(1 + 2 + "2"); // 32
// console.log((3+4) * 5 % 3);


// console.log(+true) // 1
// console.log(+"") // 0

let num1, num2, num3;

num1 = num2 = num3 = 2 + 2;


let gameCounter = 100;
++gameCounter;

console.log(gameCounter);