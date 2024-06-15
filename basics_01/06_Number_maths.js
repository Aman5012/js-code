const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);// give length
// console.log(balance.toString());
// console.log(typeof balance);
// console.log(balance.toFixed(2)); //precise up to 2 decimal value

const otherNumber = 125.896

// console.log(otherNumber.toPrecision(3)); // this work as round-off of decimal number(precesion value)

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); //number will pront as using comma 

// +++++++++++++ Maths +++++++++++++++++++++++++++++

console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6)); //round_off the decimal value
// console.log(Math.ceil(4.2));  // it take upper integer if number lies in two integer
// console.log(Math.floor(4.9)); //it take lower integer if number lies in two integer
// console.log(Math.min(4, 3, 6, 8)); // get min value in the array
// console.log(Math.max(4, 3, 6, 8));// grt max value in the array

console.log(Math.random()); // give the  number between 0 and 1
console.log((Math.random()*10) + 1); // give number 1 to 9
console.log(Math.floor(Math.random()*10) + 1); // 1 to 9 and only integer

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)