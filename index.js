// Normal function

const getWords = function(words) {
    return words;
}

const runLoop = function() {
    for(let i = 0; i < 10; i++) {
        console.log("function ran");
    }
}

// Arrow function
const getWords1 = words => words;


const runLoop2 = () => {
    for(let i = 0; i < 10; i++) {
       console.log("function ran");
    }
}

() => 1;