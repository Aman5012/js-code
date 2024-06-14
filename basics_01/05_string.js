const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length); // give trhe lenght of the string
// console.log(gameName.toUpperCase()); // convert string into upper cases
console.log(gameName.charAt(2)); // give the charecter at the given index
console.log(gameName.indexOf('t'));//give the index position

const newString = gameName.substring(0, 4)
console.log(newString);

// const anotherString = gameName.slice(-8, 4)
// console.log(anotherString);

// const newStringOne = "   hitesh    "
// console.log(newStringOne);// it conseder the space
// console.log(newStringOne.trim());// it does not consider the space

const url = "https://hitesh.com/hitesh%20choudhary" // we take a url

console.log(url.replace('%20', 'BAJI')) // here we repace '%20' to 'BAJI' in given url

console.log(url.includes('sundar')) //check that keyword is present in the URL string  // return false

console.log(gameName.split('h'));