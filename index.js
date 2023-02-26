let a, b, rest;
[a, b] = [10, 20];

//
[a, b, c, ...rest] = [100, 200, 300, 400, 500];

({ a, b } = { a: 100, b: 200, c: 300, d: 400, e: 500 });
({ a, b, ...rest } = { a: 100, b: 200, c: 300, d: 400, e: 500 });


// Array Destructuring

const snakes = ['garden snake', 'cobra', 'rat snake'];

const [gardenSnake, cobra, ratSnake ] = snakes;


//Object destructuring
const snake = {
    name: "rat snake",
    age: 2,
    state: "ohio"
}


const { name, age, state } = ohio;

console.log(name, age, city);