// for


// for(let i = 0;  i < 10; i++) {
//     if(i == 5) {
//         console.log("5 is best number!")
//     }
//     console.log(i)
// }


// let arr = ["Gaurav", "Krishna", "Ritik"]
// console.log(arr.length)
// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

//break and continue

// for(let i = 0; i < 10; i++) {
//     if(i == 7) {
//         console.log("7 caught!")
//         break;
//     }

//     console.log(i)
// }

// continue --> skip
let i =  0
while(i < 10) {
    console.log("Gaurav")
    i++
}

let arr1 = ["Gaurav", "Krishna", "Ritik"]

let arr = 0;
while(arr < arr1.length) {
    console.log(`Value of index ${arr} is ${arr1[arr]}`)
    arr++;
}


//do while --> run atleast one time

let score = 1
do {
    console.log(score)
    score++;
}while(score <= 10)