// for of (specefic loops for array!)

// const arr = [1,2,3,4,5]

// for(const i of arr) {
//     console.log(i)
// }

// const hi = "Hello"

// for(const j of hi) {
//     console.log(`Each char is ${j}`)
// }

//Maps --> Always Stores Unique Values.

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")


// console.log(map)


for(const [key, value] of map) {
    console.log(key, ':-', value);
}