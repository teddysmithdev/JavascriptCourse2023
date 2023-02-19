// let redBulls = ["cranberry", "strawberry apricot", "coconut"];

// for(var i = 0; i < redBulls.length; i++) {
//   console.log(redBulls[i]);
// }

// redBulls.forEach(function(redBull){
//   console.log(redBull);
// })


let redBulls = [
  { color: "cranberry", isEmpty: true},
  { color: "coconut", isEmpty: false}
];

let redBullArr = [];

function throwAwayRedBulls(arr) {
  redBulls.forEach(redBull => {
    if(redBull.isEmpty === true)
      arr.push(redBull);
  })
  console.log(arr);
  console.log("These are the read bulls to throw away")
}

throwAwayRedBulls(redBullArr);

