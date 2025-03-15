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
console.log(loginUserMessage())