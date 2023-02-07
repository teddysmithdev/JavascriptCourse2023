//Callback function

const myFunc1 = (callBackFunc) => {
    let value = 1;
    callBackFunc(value);
}

// myFunc(function(value) {
//     console.log(value);
// });

myFunc1(value => {
    console.log(value);
})


// Return function from function
function returnFunction() {
    return function() { return 1 };
}

// returnFunction()();
const myFunc = returnFunction();
myFunc(); // => 1