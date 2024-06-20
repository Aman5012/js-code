var c = 300
let a = 300

/*
note : global variable are accessible inside 
the scope but vice versa is not possible
 */
if (true) {
    let a = 10
    const b = 20
    var c= 30 // this variable also exist outside ig the scope
    // console.log("INNER: ", a);     
}
// console.log(a);
// console.log(b); // we get error because b does not exist out side of the scope
console.log(c);


function one(){
    const username = "Aman"

    function two(){
        const website = "youtube"
        // console.log(username); // is is accessible from parant function
    }
    // console.log(website); // this is not accessible from child functinon

     two()

}

one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website); // will exicute
    }
    // console.log(website); //show error
}

// console.log(username);// show error


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}


// addTwo(5)   //  will shown error

const addTwo = function(num){
    return num + 2
}