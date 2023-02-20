let fighters = [
  { name: "george st pierrer", wins:26 },
  { name: "connor mcgregor", wins:22 },
  { name: "jon jones", wins: 34 }
];

let filteredFighters = [];

for(let i = 0; i < fighters.length; i++){
  if(fighters[i].wins > 30) {
    filteredFighters.push(fighters[i]);
  }
}

console.log(filteredFighters);

fighters.filter(function(fighter) {
  return fighter.wins > 30;
})