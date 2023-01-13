let liftWeights = true;
let run = true

if(liftWeights === true || run === true) {
    console.log("you did at least one workout. Son I am proud.");
} else {
    console.log("did not work out at all. FAILURE.")
}

if(liftWeights === true && run === true) {
    console.log("LIGHT WEIGHT BABY!");
} else {
    console.log("did not do BOTH. YOU ARE A FAILURE");
}