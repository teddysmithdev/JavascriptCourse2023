function clownScream() {

    console.log("GYAAAAAAAAAAA!!!!!")

}

function scream(words) {
    console.log(words);
}

function scream1(words) {
    return words;
}

function scream2(words, isLoud) {
    if(isLoud === true) {
        return words.toUpperCase();
    } else if (isLoud === false) {
        return words.toLowerCase();
    } else {
        return words;
    }
}

