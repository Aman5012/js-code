// two types 1. primitive and 2. non-primitive
// primitive -> 7 types: String, Number, Boolean, null, undefined, symbol, BigInt

// reference (Non primitive)
// Array, object, Function 


// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 3456543576654356754n


// Reference (Non primitive)

// Array, Objects, Functions


// const heros = ["shaktiman", "naagraj", "doga"];
// let myObj = {
//     name: "hitesh",
//     age: 22,
// }

// const myFunction = function(){
//     console.log("Hello world");
// }

// console.log(typeof anotherId);

// reading docs
// https://262.ecma-international.org/5.1/#sec-11.4.3


//**************************************************** */
///////////  Memory ////////

// Stack (Primitive), Heap( Non primitive)


// for stack
let myName= "baji"
let anothername= myName;  // anothername get a copy of baji

anothername= "Aman"

console.log(myName);// print baji
console.log(anothername);// print Aman

// for heap  it pass as reference
let userOne={
    email: "user@google.com",
    upi: "user@ybl"
}
let userTwo= userOne
userTwo.email="baji@google.com"

// console.log(userOne);
// console.log(userTow.email);

console.log(userOne.email);
console.log(userTwo.email);

