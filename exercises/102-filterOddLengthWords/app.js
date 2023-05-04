function filterOddLengthWords(words) {
    // your code here
    let newArr = [];

    newArr = words.filter(element => element.length % 2 !== 0);

    return newArr;
}

let output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', "now']