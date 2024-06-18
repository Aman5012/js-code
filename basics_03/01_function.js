
function sayMyName(){   // function is created

    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName() // calling of function


// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }
// // addTwoNumbers(4, 6)
function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result:", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Aman")) // it overwrite the sam 
// console.log(loginUserMessage()) // it pic default value sam
// console.log(loginUserMessage("")) // print undefined



function calculateCartPrice( ...num1){  // '... called rest operator here '  or spread operator
    // ...num1 return all values how much U pass  
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)// here calling the function which extract the value from user
handleObject({ // here we passing the object value directly
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray
}

console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 500, 1000])); 