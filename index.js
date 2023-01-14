const fishBite = {
    name: "Brown Chub",
    class: "K. Bigibbus",
    nickName: "Topsail Drummer",
    conservationStatus: "Least Concern"
}

//CRUD

//CREATE
fishBite.isCool = false;

//READ
console.log(fishBite.name);
console.log(fishBite["nickName"])

//UPDATE
fishBite.name = "BROWN CHUB"

//DELETE
delete fishBite.conservationStatus;



console.log(fishBite);

//Nested objects + nested arrays within objects
const fishBiteExample2 = {
    name: "Brown Chub",
    class: "K. Bigibbus",
    nickName: ['Grey Chub', 'Topsail Drummer'],
    conservationStatus: "Least Concern",
    metaData: {
        picture: "http://wikipedia.org/brownchub",
        longitude: "34'234'",
        latitude: "23'24235'"
    }
}

console.log(fishBiteExample2.nickName[0])
console.log(fishBiteExample2.metaData.latitude)