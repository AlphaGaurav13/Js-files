// function one() {
//     const username = "Gaurav"

//     function two() {
//         const website = "Youtube"
//         console.log(username)
//     }

//     // console.log(website) //this will cause an error because website is declared inside the other function whihc has local scope there!

//     two()
// }

// one()


console.log(addone(5))
function addone(num) {
    return num + 1;
}


addtwo(5)

const addtwo = function(num) {
    return num + 2
}