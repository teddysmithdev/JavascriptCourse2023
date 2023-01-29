let rocks = ["obsidian", "gneiss", "granite", "diamond"];

for(let i = 0; i < rocks.length; i++) {
    console.log(rocks[i]);
}

for(let rock in rocks) {
    console.log(rock);
}

for(let rock of rocks) {
    console.log(rock);
}

for(let char of 'rocks') {
    console.log(char);
}

const rockData = {
    name: "Abestos",
    type: "Silicate Minerals",
    color: "green"
}

for(let prop of rockData) {
    console.log(x);
}

for(let prop in rockData) {
    console.log(rockData[prop]);
}