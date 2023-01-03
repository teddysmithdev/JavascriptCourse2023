let myFavoriteBirds = ['mockingbird', 'bluejay', 'sea hawk'];
// CRUD
// CREATE
myFavoriteBirds[myFavoriteBirds.length] = 'sea eagle';
myFavoriteBirds.push('test');
myFavoriteBirds.unshift('test')
//READ
console.log(myFavoriteBirds[0])
console.log(myFavoriteBirds[1])
//UPDATE
myFavoriteBirds[0] = "macaw";
//DELETE
myFavoriteBirds.pop();
myFavoriteBirds.shift();

