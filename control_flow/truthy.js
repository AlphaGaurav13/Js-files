// const hero = "Gaurav"

// if(hero) {
//     console.log("We have hero")
// }else {
//     console.log("We don't have hero!");
// }


//falsy value
/*

1) false
2) 0
3) -0
4) BigInt 0n
5) NaN
6) ""
7) undefined
8) null

*/


//truthy values

/* 

1) "0"
2) 'false'
3) " "
4) []
5) {}
6) function() {}


//Checking if the object is empty or not!!

*/
const emtObj = {}

if(Object.keys(emtObj).length === 0) {
    console.log("Object is Empty!");
}else {
    console.log("Object is not empty")
}

// false == 0  (true)
// 0 == "" (true)
// false == ""  (true)


//Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10  (5)

val1 = null ?? 10

console.log(val1)


//Terniary operator

// condition ? true : false
const IceTeaPrice = 100
IceTeaPrice <= 80 ?  console.log("less than 80") : console.log("More then 80")