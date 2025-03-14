//Dates

let date = new Date();

// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toLocaleString());
// console.log(typeof date);

let myCreateDate = new Date(2025, 0, 24);
// console.log(myCreateDate.toLocaleDateString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();

console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());


newDate.toLocalString('default' {
    weekly: "long",
})