let numbers = [1, 2, 3];
let doubledNumbers = [];

for(let i = 0; i < numbers.length; i++) {
  doubledNumbers.push(numbers[i]);
}

let doubled = numbers.map(number => {
  return number * 2;
});

doubled;
doubledNumbers;

let redBulls = [
  { flavor: "cranberry", radius: 1, height: 4 },
  { cranberry: "coconut", radius: 2, height: 7 }
];

let redbullVolume = redBulls.map(redBull => {
  return redBull.radius * redBull.height;
})

console.log(redbullVolume)
