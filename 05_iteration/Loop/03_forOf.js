// for of

// ["", "", ""] string in side array
// [{}, {}, {}] object inside array

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`)
}

// Maps, it is known for unique values and give same order as U provide
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India") 


// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
//     console.log(key);
//     console.log(value);
}
// note: map is iteratable but object are not iteratable
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}
// we get error
for (const [key, value] of myObject) {
    console.log(key, ':-', value);
}