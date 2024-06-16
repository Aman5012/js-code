// array

const myArr = [0, 1, 2, 3, 4, 5] // indexing startt with 0
console.log("Array is",myArr);
const myHeors = ["shaktiman", "naagraj"] // 

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// console.log(myArr);
// console.log("after removing the last element")
// myArr.pop()// remove the last value of the array
// console.log(myArr);



myArr.unshift(9)// insert the vlaue in array at the start
// console.log(myArr);
myArr.shift() // remove the first element of the array
// console.log(myArr);

// console.log(myArr.includes(9)); //check the element is present or not (true / false )
// console.log(myArr.indexOf(3)); // return the index of that element
 
const newArr = myArr.join()  //turn all elenemt into a string

// console.log(myArr);
// console.log( newArr);
// console.log(typeof newArr);


//**************  slice, splice operation********/


const myn1 = myArr.slice(1, 3) // not include the upper boundary

console.log("slice not affect the original array ", myArr);
console.log("slice done then ",myn1);


const myn2 = myArr.splice(1, 3) // it include the range 
console.log("splice done then array ",myn2);
console.log("splice manupulate on original array after splice ", myArr);
