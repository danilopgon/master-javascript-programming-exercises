function countCharacter(str, char) {
    // your code here
    let counter = 0;
    
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === char) {
            counter += 1;
        }
    }

    return counter;
}

let output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3
