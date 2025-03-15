// const chai = function() {
//     let username = "Gaurav"
//     console.log(this.usename)
// }

// chai()


//ARROW FUNCTION ---> here use can use this keyword

// const chai = () => {
//     let username = "Gaurav"
//     console.log(this)
// }

// chai()


// const addtwo = (num1 , num2) =>  {
//     return num1 + num2;
// }

// console.log(addtwo(3,4))


//INPLICIT RETURN  ----> highlu Used in React!

// const addtwo = (num1, num2) =>  (num1 +  num2)     //here we don't have use the return keyword

//now return the Object here!
const addtwo = (num1, num2) =>  ({name : "Gaurav"}) 
console.log(addtwo(5,5))

