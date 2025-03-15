const arr = ["js", "python", "cpp", "java", "kotlin"]


// for each do not return any value for this we use filter

 const myNums = [1,2,3,4,5,6,7,8,9,10];
// const result = myNums.filter( (num) => num > 4) //here we are not use {} therefore we don't need to use return keyword here!

// const result1 = myNums.filter( (num) => {
//     return num > 4  //here we used  {}  there fore we have to use the return keyword
// })
// console.log(result1)


//But if we Still want to use forEach Method

const newNums = []

myNums.forEach( (num) =>  {
    if(num > 4) {
        newNums.push(num)
    }
})

console.log(newNums)