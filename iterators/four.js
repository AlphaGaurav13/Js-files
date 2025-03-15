const arr = ["js", "python", "cpp", "java", "kotlin"]

// arr.forEach( function (val) {
//     console.log(val)
// })


// function printme(item) {
//     console.log(item)
// }

// arr.forEach(printme)

// arr.forEach( (item, index, arr) =>  {
//     console.log(item, index, arr)
// })


//Now we will access the object inside array using foreach

const myCoding = [
    {
        languagename : "JavaScript",
        lanaguageFileName : "js"
    },
    {
        languagename : "Python",
        lanaguageFileName : "py"
    },
]

myCoding.forEach( (items) => {
    console.log(items.languagename)
})

