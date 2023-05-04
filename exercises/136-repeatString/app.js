function repeatString(string, num) {
    // your code here
    let repeatedWords = '';


    for (let i = 0; i < num; i++) {
        repeatedWords += string;
    }
    

    return repeatedWords;
}

let output = repeatString('code', 3);
console.log(output); // --> 'codecodecode'