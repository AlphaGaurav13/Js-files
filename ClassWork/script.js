// //3. Promt

// let name1 = prompt("Enter the name", "Gaurav Kumar");
// console.log(`Helo   , ${name1} `);


// // js objects

// let car = {
//     name: "BMW",
//     model: "X5",
//     color: "black",
//     // start:function() {
//     //     console.log("Car is start");
//     // },

// }

// // car.start();


// console.log(Object.keys(car));

// console.log(Object.values(car));


// // iterate over object using for-in loop

// for(let key in car) {
//     console.log(`${key} : `, car[key]);
// }

// //Finding the maximum element inside the array

// console.log(Math.PI.toFixed(2));

// console.log(`Max Value inside the array  is : `,Math.max(12,3,4,5,6));


// function greet(name) {

//     const text = document.querySelector('.ga');
//     text.innerHTML = `Hello ${name} Welcome to Our Website`;
//     text.style.color = "pink";
    
// }


// greet("Rangnarok");


const greet1 = (name) => `Hey , ${name}`;

console.log(greet1("Radhika"))


// IIFE -> Immediately Invoked function Expression.

(function (name)) {
    console.log("Hello" + name);
}("Rashmixrohit");


