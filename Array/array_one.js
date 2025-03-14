// Array 

// const myArray = [0,1,2,3,4,5, 'gaurav', true];


const myArray = new Array(1,2,3,4,5);  //similar to php
// console.log(myArray[0]);

myArray.push(13);

// console.log(myArray);

myArray.pop(); // for deleting the element from array from end.

myArray.unshift() // add the number at starting of array.

myArray.shift() // for removing the starting element from the array.

// console.log(myArray);

// console.log(myArray.includes(4)); // return true as 4 is present in array.

// console.log(myArray.indexOf(3)) // return the element present at index 3.


// console.log(myArray);

// const newArr = myArray.join();   // convert array into string
// // console.log(myArray);

// console.log(typeof newArr);


//slice or splice
console.log("A ", myArray);
const myn1 = myArray.slice(1,3);  // slice do not manipute the original array while splice manipulate(i.e it will remove the elements from start, end index that you have provided);

console.log(myn1);

console.log("B ", myArray);

const myn2 = myArray.splice(1,3);
console.log(myn2);
console.log("C ",myn2);