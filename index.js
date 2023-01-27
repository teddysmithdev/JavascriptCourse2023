for (let i = 1; i <= 10; i++) {
    console.log('Outer loop:', i);
    for(let j = 1; j <= 3;j++) {
        console.log('    Inner Loop', j);
    }
}

const airplanes = [
    ['777', 'dc-10', 'bombadier'],
    ['learjet', 'g6', 'gulstream']
]

for(let i = 0; i < airplanes.length; i++) {
    let row = airplanes[i];
    console.log(row);
    for(let j = 0; j < row.length; j++) {
        console.log(row[j]);
    }
}