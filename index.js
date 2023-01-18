//CRUD
//CREATE
let turtleString = "turtle";
//READ
console.log(turtleString[0]);
console.log(turtleString[1]);
console.log(turtleString[2]);

//FOR LOOP

for(let i = 0; i < 9; i++) {
    console.log(turtleString[i])
}

// //CREATE
let planes = ['apache', 'f22', 'c130', 'sr71'];

//READ
for (let i = 0; i < planes.length; i++) {
    console.log(planes[i]);
}


const bullFrogs = [
    {
        name:"great banjo toad",
        location: "australia",
        isThreatened: false
    },
    {
        name: "american bullfrog",
        location: "american",
        isThreatened: false
    }
]

for(let i = 0; i < bullFrogs.length; i++) {
    console.log(`${bullFrogs[i].name} is located in ${bullFrogs[i].location}`)
}

