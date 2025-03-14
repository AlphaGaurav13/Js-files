const name = "Gaurav";
const  repoCount = 30;

// console.log(name + repoCount + " Value");  // not good method follow `` to write these things.
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); 

const gameName = new String('Gaurav');

// console.log(gameName[0]);
// console.log(gameName);

// console.log(gameName.__proto__);  // contain so many pre defined function

// console.log(gameName.length);
// console.log(gameName.toLowerCase());
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(2));

// console.log(gameName.indexOf('u'));

const newString = gameName.substring(0,4);
// console.log(newString);


const wow = "    gaurav    ";

// console.log(wow);
// console.log(wow.trim());

const url =  "https://gaurav.com%20vc";

// console.log(url.replace('%20', '-'));


const bro = "i am good and bla bla bla"

// console.log(wow.includes('gaurav')); // return true because gaurav is present in wow.
console.log(bro.split(" "));
