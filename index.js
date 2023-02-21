//Copy array literal
const rats = ['fancy rat', 'subway rat', 'albino rat', 'common rat'];
const luxuryItems = ["rolex", "tom ford glasses"];
const coolRat = [...rats,...luxuryItems];


//Clone
//Bad
// let arr1 = [ 1, 2, 3 ];
// let arr2 = arr1;

//Good
let arr1 = [ 1, 2, 3 ];
let arr2 = [ ...arr1 ];


//Spread objects
const rat = {
  legs: 4,
  isDangerous: false
}

const luxuryItem = {
  family: "Submariner Rolex",
  isBustDown: false
}

const badassRat = {
  ...rat,
  ...luxuryItem,
  isPet: true,
  adorable: true
}