const accountId = 132005
let accountEmail = "gaurav@google.com"
var accountPassword = "123456"

accountCity = "Jalandhar"

// acountId = 2  this is not allowed as accountId is fixed and can't be altered or changed

accountEmail = "Gaurav@microsoft.com"
accountPassword = "21331414"
accountCity = "Gudgao"
let accountState; // it give undefine 

// console.log(accountId)


/*
Prefer not to use var 
because of the issue in the block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])