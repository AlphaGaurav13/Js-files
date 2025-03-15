console.log("Hello Function!")


//use to remove the data redundancy!

function sayMyName() {
    console.log("Gaurav Kumar!")
}

// sayMyName //this is reference
//  sayMyName() //this is execution

//Function to Add Two Number

// function addNumber(num1, num2) {
//     console.log(num1 + num2)
// }

// addNumber(3,4)


// function addNumber(num1, num2) {
//     // console.log(num1 + num2)
//     return num1 + num2
// }

// const result = addNumber(3,4)
// console.log("Addition : ", result)

function loginUserMessage(username) {
    // if(username === undefined) {
    if(!username){
        console.log("Please Enter the name!")
        return
    }
    return `${username} just logged In`
}

// const result = loginUserMessage()
// console.log(loginUserMessage())


//WHEN YOU DON'T KNOW HOW MUCH ARGUMENT WE HAVE TO PASS AND HOW MUCH WE WILL NEED 

// FOR THIS WE USE REST OPERATOR SIMILAR STRUCTURE LIKE SPREAD OPERATOR THAT WE USED IN OBJECTS

// function calculateCartPrice(...num1) {
//     return num1
// }


// console.log(calculateCartPrice(3,4,5)) // it will return the array of argument you passed!


/*
function calculateCartPrice(val1 ,val2, ...num1) {
    return num1
}


console.log(calculateCartPrice(2,3,4,5,5,5))
*/


//passing object as an argument

/*
const user = {
    username : "Gaurav",
    price : "99"
}


function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is $${anyobject.price}.`)
}

handleObject(user)

*/


//Now Passing Array as an Argument!

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))