// const tinderUser =  new Object();
const tinderUser = {};
// console.log(tinderUser);

tinderUser.id = "123abc";
tinderUser.name = "Gaurav";
tinderUser.isLoggedIn = false;


// console.log(tinderUser);

const regularUser = {
    email: "Some@google.com",
    fullname : {
        username : {
            firstname : "Gaurav",
            lastname : "Kumar"
        }
    }
}

// console.log(regularUser.fullname.username.firstname); // return firstname

const obj1  = {1: "a", 2: "b"}
const obj2  = {3: "a", 4: "b"}

// const obj3 = { obj1 , obj2 }

// const obj3 = Object.assign({}, obj1, obj2);  //assigning objects 

// const obj3 = {...obj1, ...obj2}  // using spread operator 
// console.log(obj3);


//HOW WE GET THE DATA FROM THE DATABASE! -> We always recieve array of objects  i.e -> [{}]

const User = [
    {
        id : 1,
        email : "Gaurav@google.com"
    },

    {
        id : 2,
        email : "Manjali@google.com"
    },
    {
        id : 3,
        email : "Krishna@google.com"
    }

]


// now we have to print the value from this array of objects!

User[1].email
// console.log(tinderUser)


//best method to obtain all the key and make them inside the array and use it more easly!

console.log(Object.keys(tinderUser))


//Similarly for values also

console.log(Object.values(tinderUser))

console.log(Object.entries(tinderUser)) // it make the array pair of individual key and value 


// To check that if this type of properties is present in Object or not if not we need know true or false!

console.log(tinderUser.hasOwnProperty('isLoggedIn')) // true