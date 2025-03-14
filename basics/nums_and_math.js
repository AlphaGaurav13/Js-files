const score = 13;

// console.log(score);
// const  balance = new Number(13);
// console.log(balance);

// console.log(balance.toString()); // converted to String
// console.log(balance.toString().length); // applying the string function after converting number into string.

// console.log(score.toFixed(2)); // for decimal precision upto 2 places

const othernumber = 123.8966
// console.log(othernumber.toPrecision(4));


const hundred = 1000004

// console.log(hundred.toLocaleString()); // normal american currency amount standard

// console.log(hundred.toLocaleString('en-IN')); //indian curreny amount standard

// ****************************************  maths ***************************************************



// console.log(Math) // it is a object 
// console.log(Math.abs(-1));  // 1
// console.log(Math.round(4.6)); // 5
// console.log(Math.ceil(4.2)); // 5
// console.log(Math.floor(4.9)); // 4

// console.log(Math.random()) // Always give value between 0 and 1

// console.log((Math.random() * 10) + 1);
// console.log(Math.floor(Math.random() * 10) + 1);


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
