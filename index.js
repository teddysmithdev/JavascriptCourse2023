function functionScope() {
    var value = 0;
}

if(true) {
    var value = 0;
}

for(let i = 0; i < 10; i++) {
    console.log(i);
}
console.log("END " + i)

functionScope();
console.log(value);

function outer() {
    let outerValue = 'outer value';

    function inner() {
        let innerValue = 'inner value';
        console.log(outerValue);
    }
    inner();
    console.log(innerValue);
}

outer();