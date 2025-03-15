// singleton
// Object.create

//object literals

const mySym = Symbol("one13");  // declaring sybol first time here!
const jsUser = {           //method to implement object in javascript.
    name: "Gaurav",
    "Full Name": "Gaurav Kumar",
    [mySym] : "wow so eligent",  // using symbol in object with proper implementation.
    age : 20,
    email: "Gaurav@google.com",
    location: "Jalandhar",
    isLoggedIn: false,
    lastLoginDays: ['Monday', 'Saturday']
};  

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["Full Name"]);
// console.log(jsUser[mySym]);
// console.log(typeof mySym);  // symbol

// console.log(typeof jsUser[mySym]); // String


// to override the value 

jsUser.email = "Gaurav@OpenAi.in";

// if you want to make sure no changes should be made inside the object use freeze

// Object.freeze(jsUser); // freeze the object

jsUser.email = "Gaurav@microsoft.com";

console.log(jsUser);

jsUser.greeting = function() {
    // console.log(`hello ${jsUser["name"]}`);  //we have to use this keyword for accessing the content of object
    console.log(`Hello ${this.name}`)
}

// console.log(jsUser.greeting); // return [Function (anonymous)]


console.log(jsUser.greeting());

