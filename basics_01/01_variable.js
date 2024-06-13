const accountId = 22124010
let accountEmail = "amanrao@gamil.com"
var accountPassword= "1234@"
accountCity= "AMH"

let accountState; // show 'Undefined'
var accountType;  // show 'Undefined'

// accountId = 2 // show error because caonst can't be change
// console.log(accountId);
// console.log(accountEmail);

/*
prefer not to use "var"
because of issue in block scope and functional scope
 */

console.log(accountId, accountEmail, accountPassword, accountCity, accountState, accountType);