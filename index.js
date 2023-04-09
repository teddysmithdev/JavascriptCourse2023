let myFirstPromise = new Promise((resolve, reject) => {
    console.log("this works!");
    resolve();
    // resolve("hello");
    reject("shits broke");
});

console.log(myFirstPromise);

myFirstPromise.then(() => {
    console.log("Promise finished!");
})

// myFirstPromise.then((data) => {
//     console.log(data);
// });


myFirstPromise.catch((err) => {
    console.log(err);
})

console.log("-------Program finished-------")


const PENDING = 0;
const FULFILLED = 1;
const REJECTED = 2;

function SimplePromise(executor) {
    let state = PENDING;
    let value = null;
    let handlers = [];
    let catches = [];

    function resolve(result) {
        if(state !== PENDING) return;

        state = FULFILLED;
        value = result;

        handlers.forEach((h) => h(value));
    }

    function reject(err) {
        if(state !== PENDING) return;

        state = REJECTED;
        value = err;

        catches.forEach((c) => c(err));
    }

    this.then = function (callback) {
        if (state === FULFILLED) {
            callback(value);
        } else {
            handlers.push(callback);
        }
    }

    executor(resolve, reject);
}


let promise = new SimplePromise((resolve, reject) => {
    resolve("data");
});

promise.then(() => console.log("works"));

promise.then(() => console.log("works 2"));