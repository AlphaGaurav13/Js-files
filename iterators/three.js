//Iteration over objects using forin


const myObj = {
    js : "Javascript",
    swift : "Swift by apple",
    rb : "ruby",
    cpp : "c++"
}


//for printing all the keys of object 

// for(const key in myObj) {
//     console.log(key)
// }

//for printing all the key values

// for(const key in myObj) {
//     console.log(myObj[key])
// }


// using forin loop for arrays

const arr = ["js", "python", "cpp", "java", "kotlin"]

for(const key in arr) {  // here key is index of array
    console.log(arr[key])
}

// map is not iteratable so we can't use it as forin