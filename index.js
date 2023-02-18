var declaredLater;

console.log(declaredLater);

var declaredLater = "Now it's defined";

console.log(declaredLater);


definitionHoisted();

definitionNotHoisted();

function definitionHoisted() {
    console.log("Definition hoisted!");
}

var definitionNotHoisted = function () {
    console.log("Definition not hoisted!");
};